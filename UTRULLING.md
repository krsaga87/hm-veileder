# Slik setter du opp Garmin-koblingen

Denne guiden tar deg fra ingenting til at Claude kan lese tallene fra Garmin-klokka di.
Du trenger ikke å kunne noe om programmering. Hvert trinn sier hva du gjør, hva du skal se
når det har gått bra, og hva du gjør hvis det ikke går.

Sett av omtrent en time. Du kan ta pause mellom trinnene.

Guiden er skrevet for en PC med Windows. På Mac er trinnene de samme, men programmet du
skriver kommandoer i heter Terminal.

**Ikke prøvd av den som skrev guiden:** trinnene hos Cloudflare (7–10) og Garmin (6) er
skrevet etter dokumentasjonen, ikke etter en gjennomkjøring. Menyene kan hete noe litt annet
hos deg. Selve programmet er testet.

## Hva du setter opp

Det er fire deler, og de henger sammen slik:

1. **En nøkkel fra Garmin.** Den gir lov til å lese tallene dine, og ingenting annet. Den kan
   ikke endre noe på kontoen eller klokka.
2. **Et lite program hos Cloudflare.** Cloudflare er et selskap som kjører programmer på
   internett. Programmet ditt bruker nøkkelen til å hente tallene når Claude spør.
   Det er gratis.
3. **En lås på programmet.** Bare du kan gi andre lov til å bruke det, med en engangskode
   du får på e-post.
4. **En kobling i Claude.** Du forteller Claude hvor programmet ligger, og godkjenner at
   Claude får bruke det.

Når du er ferdig, kan du spørre Claude «Hvordan sov jeg i natt?» og få svar fra klokka.

**Nøkkelen fra Garmin er hemmelig.** Den skal bare limes inn der guiden sier. Lim den aldri
inn i en chat, heller ikke hos Claude, og send den ikke til noen.

## Før du starter

Du trenger:

- en PC med Windows og en nettleser
- brukernavn og passord til Garmin Connect
- en e-postadresse du kan lese mens du holder på
- en Claude-konto

## 1. Bli kjent med Ledetekst

Noen av trinnene gjøres ved å skrive korte kommandoer i et program som heter **Ledetekst**.
Det er et vindu der du skriver en linje tekst og trykker Enter, og så gjør PC-en det du ba om.
I guiden står kommandoene i grå bokser, slik:

```
node --version
```

Slik bruker du det:

- **Kopier** linja fra guiden, **lim inn** i Ledetekst med Ctrl+V (eller høyreklikk), og
  trykk **Enter**.
- Ta **én linje om gangen**, og vent til PC-en er ferdig før du tar neste. Den er ferdig
  når det står en linje som slutter med `>` og en blinkende markør nederst.
- Noen kommandoer skriver mye tekst. Det er normalt. Guiden sier hva du skal se etter.
- Vil du avbryte noe som har hengt seg, trykker du Ctrl+C.

Du kan ikke ødelegge PC-en med kommandoene i denne guiden.

Windows har også et lignende program som heter PowerShell. Linja der begynner med `PS`.
Bruk Ledetekst, slik guiden viser. Noen av kommandoene blir stoppet i PowerShell.

Du åpner Ledetekst i trinn 2. Til å begynne med trenger du bare å vite at det finnes.

## 2. Installer Node.js

Node.js er et program som trengs for å kjøre verktøyene i guiden. Du bruker det ikke selv.

1. Gå til `https://nodejs.org` i nettleseren.
2. Trykk på knappen for å laste ned **LTS**-versjonen for Windows.
3. Åpne fila du lastet ned, og trykk Next til installasjonen er ferdig. Du trenger ikke
   endre noe underveis.

**Sjekk at det gikk bra:** trykk på Start-knappen, skriv `cmd` og trykk Enter. Da åpnes
Ledetekst. Skriv dette og trykk Enter:

```
node --version
```

Du skal se et versjonsnummer, for eksempel `v24.11.0`. Tallet etter `v` skal være 22 eller
høyere.

**Virker det ikke?** Står det at `node` ikke gjenkjennes, lukker du Ledetekst og åpner det
på nytt. Hjelper ikke det, start PC-en på nytt.

## 3. Installer pnpm

pnpm er verktøyet som henter resten av det programmet trenger. Skriv dette i Ledetekst:

```
npm install -g pnpm
```

**Sjekk at det gikk bra:**

```
pnpm --version
```

Du skal se et versjonsnummer.

**Virker det ikke?** Lukk Ledetekst og åpne det på nytt, og prøv den siste kommandoen igjen.

Nå kan du lukke Ledetekst.

## 4. Last ned programmet og åpne Ledetekst i mappa

1. Åpne denne adressen i nettleseren. Da lastes en zip-fil ned:
   `https://github.com/krsaga87/hm-veileder/archive/refs/heads/main.zip`
2. Finn fila `hm-veileder-main.zip` i Nedlastinger. Høyreklikk på den og velg
   **Pakk ut alle**. Velg for eksempel Dokumenter som sted.
3. Åpne den utpakkede mappa `hm-veileder-main` i Filutforsker. Du er i riktig mappe når du
   ser en fil som heter `package.json`. Ser du bare én mappe, åpner du den også.
4. Klikk i **adressefeltet** øverst i Filutforsker (der mappenavnet står), skriv `cmd` og
   trykk Enter.

Nå åpnes Ledetekst, og den står allerede i riktig mappe. Linja nederst slutter med
`hm-veileder-main>`.

**Alle kommandoene i resten av guiden skal skrives i et Ledetekst-vindu som er åpnet på
denne måten.** Lukker du vinduet, gjør du punkt 4 på nytt.

Hent så det programmet trenger:

```
pnpm install
```

Dette tar et minutt eller to og skriver mye tekst.

**Sjekk at det gikk bra:** siste linje begynner med `Done in`.

**Virker det ikke?**

- Står det at `pnpm` ikke gjenkjennes, er trinn 3 ikke gjort. Gjør det, og åpne Ledetekst
  på nytt etterpå.
- Står det at den ikke finner `package.json`, står Ledetekst i feil mappe. Gjør punkt 3 og
  4 på nytt.

## 5. Lag fila der nøkkelen skal ligge

Nøkkelen fra Garmin vises bare én gang, så du lager stedet den skal ligge før du henter den.

```
copy .env.example .env
```

Du skal se `1 fil(er) kopiert` eller `1 file(s) copied`. Kommer det ingen melding, er du i
PowerShell, og da har det også gått bra. Åpne så fila i Notisblokk:

```
notepad .env
```

Det åpnes et vindu med litt forklarende tekst og to linjer som begynner med
`GARMIN_API_KEY=` og `ACCESS_AUD=local-dev`. **La vinduet stå åpent** og gå videre.

## 6. Hent nøkkelen fra Garmin

1. Gå til `https://connect.garmin.com/app/settings/personalApiToken` i nettleseren og logg
   inn. Siden finnes bare på nett, ikke i Garmin-appen på telefonen.
2. Trykk **Create Key** og godta vilkårene.
3. Velg at nøkkelen skal vare i **1 år**, og trykk Create.
4. Nå vises nøkkelen, en lang rekke bokstaver og tall. Trykk på kopier-knappen.
5. Gå til Notisblokk-vinduet. Klikk rett etter `GARMIN_API_KEY=` og lim inn med Ctrl+V.
6. Lagre med Ctrl+S og lukk Notisblokk.
7. Trykk Done hos Garmin.

**Sjekk at det gikk bra:** linja skal se slik ut, uten mellomrom og uten anførselstegn:

```
GARMIN_API_KEY=eyJhbGciOi...resten av nøkkelen
```

Nøkkelen er rundt 130 tegn lang. Linja under, `ACCESS_AUD=local-dev`, skal stå urørt.

**Virker det ikke?** Fikk du ikke kopiert nøkkelen før du lukket siden, sletter du nøkkelen
hos Garmin og lager en ny. Bare én nøkkel kan finnes om gangen.

## 7. Lag en konto hos Cloudflare

1. Gå til `https://dash.cloudflare.com/sign-up`.
2. Skriv e-postadressen din og velg et passord. Skriv ned passordet.
3. Cloudflare sender en e-post. Åpne den og trykk på lenka for å bekrefte adressen.

Cloudflare kan foreslå at du legger til et domene eller velger en betalt plan. Du trenger
ingen av delene. Hopp over, eller lukk forslaget.

## 8. Logg inn hos Cloudflare fra Ledetekst

Gå tilbake til Ledetekst-vinduet fra trinn 4 og skriv:

```
pnpm wrangler login
```

Nettleseren åpner en side hos Cloudflare som spør om du vil gi tilgang. Trykk **Allow**.

**Sjekk at det gikk bra:** i Ledetekst står det `Successfully logged in.`

**Virker det ikke?** Blir Ledetekst stående og vente uten at noe skjer, trykker du Ctrl+C
og bruker denne i stedet. Den gir deg en kode du skriver inn på en nettside:

```
pnpm wrangler login --device --scopes account:read user:read workers:write workers_kv:write workers_scripts:write workers_tail:read
```

## 9. Legg programmet ut hos Cloudflare

```
pnpm wrangler deploy --secrets-file .env
```

Første gang får du et spørsmål på engelsk om du vil registrere et **workers.dev subdomain**.
Svar ja (skriv `y` og trykk Enter). Så velger du et navn. Bruk små bokstaver og tall, for
eksempel fornavnet ditt og noen tall. Navnet blir en del av adressen til programmet.

**Sjekk at det gikk bra:** mot slutten står det en adresse som ligner på denne:

```
https://hm-veileder.navnet-du-valgte.workers.dev
```

**Skriv ned adressen.** Du trenger den i trinn 10 og 11.

Åpne adressen i nettleseren. Du skal se en kort tekst som begynner med `{"name":`. Da ligger
programmet ute. Første gang kan det ta noen minutter før adressen virker.

## 10. Sett lås på godkjenningssiden

Programmet har en side der du godkjenner hvem som får lese tallene. Nå sørger du for at bare
du kommer inn på den siden. Til dette er gjort, er siden stengt for alle.

1. Gå til `https://dash.cloudflare.com` og velg **Zero Trust** i menyen. Første gang må du
   velge et teamnavn (hva som helst) og gratisplanen. Cloudflare kan be om et betalingskort
   selv om planen koster 0 kr.
2. Velg **Access → Applications → Add an application → Self-hosted**.
3. Fyll ut:
   - **Application name:** `hm-veileder`
   - **Domain:** adressen fra trinn 9 uten `https://`, altså
     `hm-veileder.navnet-du-valgte.workers.dev`
   - **Path:** `authorize`
   - **Session duration:** 24 hours
4. Under innloggingsmåter (Login methods) skal bare **One-time PIN** være valgt.
5. Lag en regel (Policy): **Allow**, velg **Emails**, og skriv e-postadressen din. Skal en
   til kunne godkjenne, legger du til den adressen også.
6. Lagre.
7. Åpne applikasjonen du nettopp laget. På oversikten står en lang kode som heter
   **Application Audience (AUD) Tag**. Kopier den.

Gå til Ledetekst og skriv:

```
pnpm wrangler secret put ACCESS_AUD
```

Det står `Enter a secret value:`. Lim inn koden med Ctrl+V og trykk Enter. **Du ser ikke
det du limer inn.** Det er meningen.

**Sjekk at det gikk bra:** Ledetekst svarer med en linje som inneholder `Success`.

## 11. Koble Claude til programmet

Gjør dette i nettleseren på PC-en, ikke på telefonen.

1. Gå til `https://claude.ai` og logg inn.
2. Åpne **Customize → Connectors**, trykk **+ Add** og velg **Add custom connector**.
3. Fyll ut:
   - **Navn:** `Garmin`
   - **Adresse:** adressen fra trinn 9 med `/mcp` til slutt, altså
     `https://hm-veileder.navnet-du-valgte.workers.dev/mcp`
   - **Authentication:** Sign in now
4. Nå åpnes en side fra Cloudflare som ber om e-postadressen din. Skriv den, hent
   engangskoden fra e-posten og skriv den inn.
5. Du får et spørsmål om Claude skal få lese Garmin-tallene dine. Trykk **Allow**.
6. Tilbake i Claude: åpne koblingen Garmin og sett verktøyene til **Always allow**. Da
   slipper du å godkjenne hver gang.

Koblingen er nå tilgjengelig i Claude-appen på telefonen også.

## 12. Prøv at det virker

Start en ny samtale i Claude og skriv:

> Hvordan sov jeg i natt?

Claude skal hente tallene fra Garmin og svare med dem. Sammenlign med det klokka viser.

## Hvis noe går galt

| Det du ser | Hva det betyr | Hva du gjør |
|---|---|---|
| `node` eller `npm` gjenkjennes ikke | Node.js er ikke installert, eller Ledetekst ble åpnet før installasjonen var ferdig | Gjør trinn 2, og åpne Ledetekst på nytt |
| `pnpm` gjenkjennes ikke | pnpm er ikke installert | Gjør trinn 3, og åpne Ledetekst på nytt |
| Rød tekst om «running scripts is disabled» | Du er i PowerShell (linja begynner med `PS`) | Åpne Ledetekst slik trinn 4 viser |
| Finner ikke `package.json` | Ledetekst står i feil mappe | Åpne Ledetekst fra riktig mappe (trinn 4) |
| `pnpm wrangler login` blir stående | Nettleseren fikk ikke svart | Ctrl+C, og bruk den lange kommandoen i trinn 8 |
| Siden sier «Access required» (403) | Låsen i trinn 10 er ikke ferdig, eller koden er feil | Sjekk domene og path i trinn 10, og legg inn AUD-koden på nytt |
| Claude sier «Garmin rejected the Personal API key» | Nøkkelen er utløpt, slettet eller ble avkortet da du limte inn | Lag ny nøkkel, se «Én gang i året» |
| Claude ber deg koble til på nytt | Koblingen har ikke vært brukt på over en måned | Åpne Connectors i Claude og koble til igjen (trinn 11, punkt 4–5) |

Står du fast, kan du kopiere feilmeldingen og lime den inn hos Claude sammen med trinnet du
er på. Lim aldri inn nøkkelen fra Garmin.

## Én gang i året

Nøkkelen fra Garmin varer i ett år. Garmin sender deg en e-post en uke før den går ut.

1. Gå til nøkkelsiden hos Garmin (trinn 6, punkt 1), slett den gamle nøkkelen og lag en ny.
   Kopier den.
2. Åpne Ledetekst i mappa (trinn 4, punkt 4) og skriv:

```
pnpm wrangler secret put GARMIN_API_KEY
```

3. Lim inn den nye nøkkelen og trykk Enter. Du ser ikke det du limer inn.

Prøv så spørsmålet fra trinn 12.

## Hvis du vil fjerne alt

Slett nøkkelen hos Garmin, fjern koblingen Garmin i Claude, og slett programmet
`hm-veileder` og applikasjonen under Access hos Cloudflare.
