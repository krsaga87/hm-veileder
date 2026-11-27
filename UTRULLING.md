# Utrulling av prototypen

Dette er oppskriften for å rulle ut Garmin-koblingen på din egen Cloudflare-konto med din
egen Garmin-nøkkel, og koble den til Claude. Den følger `README.md` (på engelsk, fra
opphavsprosjektet), som har detaljene og feilsøkingen.

**Ikke prøvd:** trinnene mot Cloudflare og Garmin er ikke kjørt av den som skrev oppskriften.
Typesjekken og testene (`pnpm check`, 36 tester) er kjørt og går grønt.

## Du trenger

- En gratis Cloudflare-konto.
- Node og pnpm på PC-en. Prosjektet ber om Node 26; testene går også på Node 22.
  pnpm installeres med `npm install -g pnpm`.
- En Garmin Personal API-nøkkel på din egen konto (trinn 2).

## 1. Hent koden

```
git clone https://github.com/krsaga87/hm-veileder.git
cd hm-veileder
pnpm install
```

## 2. Lag Garmin-nøkkelen

1. Logg inn på Garmin Connect i nettleseren og åpne
   `https://connect.garmin.com/app/settings/personalApiToken`. Siden finnes ikke i mobilappen.
2. Velg Create Key. **Kopier tilleggsvilkårene før du godtar dem**; de vises bare her, og vi
   trenger ordlyden om deling av nøkkelen og om språkmodeller.
3. Velg 30 dagers utløp for prototypen, og kopier nøkkelen. Den vises bare én gang, og er
   rundt 130 tegn. En avkortet nøkkel gir samme feil som en utløpt.

Bare én nøkkel kan være aktiv per Garmin-konto. Lager du en ny, slutter den gamle å virke.

## 3. Legg nøkkelen i `.env`

```
copy .env.example .env
```

Åpne `.env` og lim nøkkelen inn etter `GARMIN_API_KEY=`. La `ACCESS_AUD=local-dev` stå.
`.env` går aldri til git.

## 4. Første utrulling

```
pnpm wrangler login
pnpm wrangler deploy --secrets-file .env
```

Wrangler skriver adressen til koblingen: `https://hm-veileder.<ditt-underdomene>.workers.dev`.
Åpner du den i nettleseren, skal du få en kort JSON med navn og versjon. Henger innloggingen,
står løsningen under Troubleshooting i `README.md`.

## 5. Sett opp Cloudflare Access

Godkjenningssiden `/authorize` skal bare kunne åpnes av deg. Til dette er gjort, svarer den 403.

1. Åpne **Zero Trust** i Cloudflare-panelet. Første gang ber den om et teamnavn.
2. **Access → Applications → Add an application → Self-hosted**:
   - Domain: `hm-veileder.<ditt-underdomene>.workers.dev`, path `authorize`. Bare den stien.
   - Login method: One-time PIN.
   - Policy: Allow, Emails, e-postadressen din.
   - Session duration: 24 timer.
3. Kopier **Application Audience (AUD) tag** fra oversikten til applikasjonen, og lagre den:

```
pnpm wrangler secret put ACCESS_AUD
```

## 6. Koble til Claude

1. På claude.ai i nettleseren: Customize → Connectors → Add custom connector.
2. Navn: `Garmin`. Adresse: adressen fra trinn 4 med `/mcp` til slutt. Velg «Sign in now».
3. Nettleseren åpner godkjenningssiden. Logg inn med engangskoden du får på e-post, og
   trykk Allow.
4. Sett verktøyene i koblingen til «Always allow», ellers blir en planlagt oppgave stående
   og vente.

## 7. Prøvelista

Noter hva som virker og ikke. Punkt 6–9 må prøves på en Android-telefon.

1. Spør i en vanlig samtale på nett: «Hvordan sov jeg i natt?» Kommer tallene, og stemmer
   de med klokka?
2. Be om siste 7 dager med dagsoppsummeringer. Finnes søvnscore og intensitetsminutter, og
   stemmer intensitetsminuttene med klokka?
3. Lag et prosjekt med en kort instruks. Virker koblingen i en prosjektsamtale?
4. Åpne `https://<adressen>/mcp` uten innlogging. Den skal svare 401.
5. Prøv godkjenningssiden med en e-postadresse som ikke er godkjent. Den skal stoppes.
6. Android-appen: er koblingen synlig, og svarer den på samme spørsmål som i punkt 1?
7. Lag en planlagt oppgave fra en samtale: «Hver dag kl. 20: sjekk om jeg har trent i dag,
   og skriv en kort melding.» Bruker den koblingen uten å vente? Kommer varselet på
   telefonen, åpner det kjøringen, og kan du svare i den?
8. Be Claude lage en liten app som viser ukas intensitetsminutter fra koblingen. Får appen
   hentet tallene? Virker den i Android-appen?
9. Be Claude endre appen («legg til søvn», «bytt farge»). Går det uten at den slutter å virke?
10. Hvor lenge holder tilkoblingen: prøv igjen etter 1 time, 1 døgn og 1 uke uten bruk.

## Når nøkkelen utløper

Garmin sender e-post en uke før. Lag en ny nøkkel (trinn 2) og legg den inn:

```
pnpm wrangler secret put GARMIN_API_KEY
```

## Rydde opp

Skal prototypen bort: slett nøkkelen på Garmin Connect, fjern koblingen i Claude, og slett
Workeren og Access-applikasjonen i Cloudflare-panelet.
