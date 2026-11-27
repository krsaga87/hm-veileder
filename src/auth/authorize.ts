/**
 * The OAuth authorization page. This server has exactly one user, the owner,
 * and /authorize is where they approve an MCP client. Two ways to prove it is
 * them, chosen by which secret is set:
 *
 * - ACCESS_AUD: Cloudflare Access protects /authorize and signs the owner in
 *   before the page is served. The Worker only serves the page to requests
 *   that carry an Access identity for this application.
 * - OWNER_PASSWORD (used only when ACCESS_AUD is not set): the owner types a
 *   password on the consent page. Attempts are rate limited per IP address.
 *
 * With neither secret the page stays closed. The consent helpers keep the form
 * unforgeable and unframeable; see
 * node_modules/@cloudflare/workers-oauth-provider/docs/consent-page.md.
 */
import { AuthorizationError, CimdFetchError, type ConsentDescription } from "@cloudflare/workers-oauth-provider";

export const SCOPE = "garmin:read";
export const OWNER_ID = "owner";
/** A shorter OWNER_PASSWORD is refused: the page is reachable from the internet. */
export const MIN_PASSWORD_LENGTH = 16;

type Protection = "access" | "password" | "closed";

function protection(env: Env): Protection {
  if (env.ACCESS_AUD) return "access";
  if (env.OWNER_PASSWORD) return "password";
  return "closed";
}

export async function handleAuthorize(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const how = protection(env);
  if (how === "closed") {
    // Neither secret is set, so nobody can prove they are the owner.
    return page("Not set up yet", "Set ACCESS_AUD or OWNER_PASSWORD to open this page.", 403);
  }
  // Only requests that passed this Access application reach the consent page.
  if (how === "access" && ctx.access?.aud !== env.ACCESS_AUD) {
    return page("Access required", "Sign in through Cloudflare Access to authorize clients.", 403);
  }
  if (how === "password" && (env.OWNER_PASSWORD ?? "").length < MIN_PASSWORD_LENGTH) {
    return page("Password too short", `OWNER_PASSWORD must be at least ${MIN_PASSWORD_LENGTH} characters.`, 403);
  }
  try {
    if (request.method === "POST") return await submit(request, env, how);
    return await show(request, env, how === "access" ? ctx.access : undefined);
  } catch (error) {
    if (error instanceof AuthorizationError && error.redirectTo) return Response.redirect(error.redirectTo, 302);
    if (error instanceof AuthorizationError) return page("Cannot authorize", escape(error.description), 400);
    if (error instanceof CimdFetchError) return page("Cannot authorize", "The application could not be verified.", 400);
    throw error;
  }
}

async function show(request: Request, env: Env, access: CloudflareAccessContext | undefined): Promise<Response> {
  const oauth = env.OAUTH_PROVIDER;
  const authRequest = await oauth.parseAuthRequest(request);
  const details = await oauth.describeConsent(authRequest);
  const consent = await oauth.beginConsent(authRequest);
  const identity = await access?.getIdentity();
  const email = typeof identity?.email === "string" ? identity.email : undefined;
  consent.headers.set("Content-Type", "text/html; charset=utf-8");
  return new Response(consentPage(details, consent.handle, email, !access), { headers: consent.headers });
}

async function submit(request: Request, env: Env, how: Protection): Promise<Response> {
  const oauth = env.OAUTH_PROVIDER;
  const form = await request.formData();
  const handle = String(form.get("handle") ?? "");

  if (form.get("decision") !== "approve") {
    const denied = await oauth.denyConsent(request, handle);
    return new Response(null, { status: 302, headers: denied.headers });
  }

  if (how === "password") {
    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    const { success } = await env.LOGIN_LIMITER.limit({ key: ip });
    if (!success) return page("Too many attempts", "Wait a minute and try again.", 429);

    if (!(await isOwnerPassword(String(form.get("password") ?? ""), env.OWNER_PASSWORD))) {
      // The handle is still unused, so going back to the form works.
      return page("Wrong password", '<a href="javascript:history.back()">Go back</a> and try again.', 401);
    }
  }

  const approved = await oauth.approveConsent(request, handle, { scope: [SCOPE] });
  const { redirectTo } = await oauth.completeAuthorization({
    request: approved.request,
    userId: OWNER_ID,
    metadata: {},
    scope: [SCOPE],
    props: {},
  });
  approved.headers.set("Location", redirectTo);
  return new Response(null, { status: 302, headers: approved.headers });
}

/** Constant-time comparison; hashing first makes both inputs the same length. */
async function isOwnerPassword(candidate: string, expected: string | undefined): Promise<boolean> {
  if (!expected || !candidate) return false;
  const encoder = new TextEncoder();
  const [a, b] = await Promise.all(
    [candidate, expected].map((value) => crypto.subtle.digest("SHA-256", encoder.encode(value))),
  );
  return crypto.subtle.timingSafeEqual(a!, b!);
}

function consentPage(
  details: ConsentDescription,
  handle: string,
  email: string | undefined,
  askPassword: boolean,
): string {
  const name = escape(details.clientName);
  const origin = details.clientDomain
    ? `Published by <strong>${escape(details.clientDomain)}</strong>.`
    : "This application registered itself; its name is not verified.";
  const loopback = details.redirectIsLoopback
    ? "<p class=warn>Access will be sent to an application on this computer. Continue only if you just started connecting from it.</p>"
    : "";
  const signedIn = email ? `<p class=muted>Signed in as ${escape(email)}.</p>` : "";
  const password = askPassword
    ? `<label>Owner password
    <input type="password" name="password" autocomplete="current-password" required autofocus>
  </label>`
    : "";
  return html(
    `Authorize ${name}`,
    `<h1>Give ${name} access?</h1>
<p>${origin} Access will be sent to <strong>${escape(details.redirectHost)}</strong>.</p>
${loopback}
<p>It will be able to <strong>read</strong> your Garmin Connect data (activities, sleep, health). It cannot change anything.</p>
<form method="post">
  <input type="hidden" name="handle" value="${escape(handle)}">
  ${password}
  <div class=actions>
    <button name="decision" value="approve">Allow</button>
    <button name="decision" value="deny" formnovalidate class=secondary>Deny</button>
  </div>
</form>
${signedIn}`,
  );
}

function page(title: string, body: string, status: number): Response {
  return new Response(html(escape(title), `<h1>${escape(title)}</h1><p>${body}</p>`), {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "frame-ancestors 'none'",
      "X-Frame-Options": "DENY",
    },
  });
}

function html(title: string, body: string): string {
  return `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>
  :root { color-scheme: light dark; font-family: system-ui, sans-serif; }
  body { max-width: 28rem; margin: 3rem auto; padding: 0 1rem; line-height: 1.5; }
  h1 { font-size: 1.4rem; }
  label { display: block; margin: 1.5rem 0 0; }
  input[type=password] { display: block; width: 100%; box-sizing: border-box; margin-top: .4rem; padding: .6rem; font: inherit; }
  .actions { display: flex; gap: .75rem; margin-top: 1.5rem; }
  button { padding: .6rem 1.2rem; font: inherit; border-radius: .4rem; border: 1px solid; cursor: pointer; }
  .secondary { background: transparent; }
  .warn { padding: .75rem; border-left: 4px solid orange; }
  .muted { opacity: .7; font-size: .9rem; margin-top: 2rem; }
</style>
${body}
</html>`;
}

export function escape(value: string): string {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}
