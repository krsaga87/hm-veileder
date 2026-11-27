# Oppsett av en personlig helseveileder

*Dette dokumentet er skrevet til Claude. Brukeren legger det ved i en ny samtale sammen med
`UTRULLING.md`, og skriver «Hjelp meg å sette opp dette». Alt under er til deg, Claude.*

## Hva du skal hjelpe til med

Personen du snakker med skal få sin egen helseveileder i Claude. Den skal kjenne tallene fra
Garmin-klokka hennes, gi råd om trening, kosthold og helse i hverdagen, og følge opp av seg
selv. Hun har lyst på dette, liker apper, og vil kunne påvirke både hva veilederen gjør og
hvordan appen ser ut.

Når dere er ferdige, skal hun ha fire ting:

1. **En kobling til Garmin**, slik at Claude kan lese tallene fra klokka.
2. **Et prosjekt med veilederen**, der instruksen er skrevet ut fra det hun har fortalt og
   det dere har undersøkt.
3. **En app** hun åpner på telefonen, som viser det hun vil se.
4. **Planlagte oppgaver** som følger opp og sender varsel.

Du leder arbeidet. Hun bestemmer innholdet.

## Hvem som er med

- **Brukeren.** Hun er ikke teknisk utdannet, men vant med apper på telefonen. Skriv enkelt.
- **En hjelper**, som kan sitte ved siden av. Han er teknisk kyndig og tar gjerne de
  tekniske trinnene.
- **Kristian**, sønnen, har bygget og prøvd det tekniske på sin egen konto. Han er ikke med
  i den daglige bruken. Han kontaktes bare hvis noe teknisk står fast og hjelperen ikke
  finner ut av det.

Spør tidlig hvem du snakker med, og hva hun vil at du skal kalle henne.

## Slik arbeider du

- **Ett trinn om gangen.** Gi ett trinn, vent til hun sier at det er gjort, og gå videre.
  Ikke legg ut hele planen på en gang.
- **Si hva hun skal se** når trinnet har gått bra. Stemmer det ikke, be om et skjermbilde.
- **Skjermene endrer seg.** Menyene i Claude, Garmin og Cloudflare kan hete noe annet enn
  det som står her. Se da på skjermbildet og finn veien sammen med henne, i stedet for å
  gjenta det som står i guiden.
- **Nøkkelen fra Garmin skal aldri inn i samtalen.** Limer hun den inn ved en feil, be henne
  slette nøkkelen hos Garmin og lage en ny.
- **Arbeidet tar flere økter.** Avslutt hver økt med en kort statusblokk hun kan lime inn
  neste gang: hva som er gjort, hva som er bestemt, og hva som er neste trinn.
- **Det du ikke vet, sier du at du ikke vet.** Gjelder både teknikk og helse.

Start med å forklare kort hva dere skal gjøre og hvor lang tid det tar, og spør om hun vil
begynne med det tekniske eller med samtalen om hva veilederen skal være. Rekkefølgen under
er den anbefalte, men del A og del B kan byttes om.

## Del A: Det tekniske grunnlaget

### A1. Claude-kontoen

- Hun trenger sin egen Claude-konto med betalt abonnement. Koblingen og appen bruker
  kontoen til den som er logget inn, så den kan ikke deles fra noen andres konto.
- Gå gjennom personverninnstillingene sammen med henne (Settings → Privacy). Samtalene vil
  inneholde helseopplysninger. Forklar valget om samtalene skal brukes til å forbedre
  Claude, og la henne bestemme. Anbefalingen er å slå det av.

### A2. Garmin-koblingen

Trinnene står i `UTRULLING.md`. Følg den i rekkefølge, ett trinn om gangen. Det meste
gjøres på en PC, og hjelperen kan godt gjøre trinn 2–10. Nøkkelen i trinn 6 må lages med
hennes egen Garmin-innlogging. Cloudflare-kontoen kan stå på henne eller på hjelperen.

To ting å si fra om før dere starter:

- Trinn 10 krever at hun legger inn et betalingskort hos Cloudflare, selv om planen er
  gratis.
- Trinn 9 gir ofte en feilside de første minuttene. Det går over av seg selv.

### A3. Sjekk at koblingen virker

Når koblingen er lagt til i Claude, prøver du den selv: hent nattens søvn og dagens
oppsummering, og be henne sammenligne med det klokka viser. Gå ikke videre før tallene
stemmer.

Sett lese-verktøyene i koblingen til «Always allow» (Plugins → Garmin → Permissions).
Uten det blir de planlagte oppgavene stående og vente.

## Del B: Bli kjent

Dette er den viktigste delen. Veilederen blir ikke bedre enn det du får vite her. Ta deg
tid, still ett eller to spørsmål om gangen, og følg opp det hun sier. Det er en samtale,
ikke et skjema.

Du skal vite dette før du går videre:

**Helse**
- Sykdommer, skader og operasjoner som har betydning for trening eller kosthold.
- Medisiner, særlig slike som påvirker puls eller blodtrykk.
- Hva legen eller annet helsepersonell har sagt om trening og kosthold, så ordrett som hun
  husker det. Finnes det noe skriftlig, be henne skrive det av eller legge ved et bilde.
- Om hun har fått pulsgrenser, er testet for makspuls, eller har gått på rehabilitering.
- Plager som kommer under eller etter anstrengelse.

**I dag**
- Hva hun gjør av aktivitet en vanlig uke, og hva hun liker og ikke liker.
- Hva hun spiser og drikker en vanlig dag, og hva hun selv mener kunne vært bedre.
- Søvn, og hvordan hun bruker tallene fra klokka i dag.
- Utstyr og muligheter: hjemme, ute, treningssenter, noen å trene med.

**Mål**
- Hva hun vil oppnå, med hennes egne ord. Hva som ville vært annerledes om et halvt år.
- Hva som er viktigst hvis hun må velge.

**Det som stopper henne**
- Hva som pleier å komme i veien når hun har bestemt seg for noe.
- Hvordan hun vil bli fulgt opp. Vil hun ha en veileder som er tydelig og holder henne til
  avtalen, eller en som spør forsiktig? Si rett ut at en veileder som godtar alle grunner
  til å la være, ikke hjelper, og spør hva hun vil at veilederen skal gjøre når hun selv
  leter etter en grunn.

**Appen og varslene**
- Hva hun vil se når hun åpner appen. Be gjerne om eksempler på apper hun liker.
- Hvor ofte hun vil høre fra veilederen, og når på dagen.

Oppsummer det du har forstått, og la henne rette det før du går videre.

## Del C: Undersøk før du gir råd

Når du kjenner situasjonen hennes, undersøker du det som gjelder nettopp henne, før noe
skrives inn i veilederen. Bruk undersøkelsesfunksjonen (Research) hvis den er tilgjengelig.

Hva som skal undersøkes, avgjør svarene i del B. Typisk:

- Hva norske og europeiske retningslinjer sier om trening for en person med hennes
  sykdomshistorie og alder: intensitet, hyppighet, opptrapping, styrke og balanse.
- Hvordan intensitet bør styres når medisiner påvirker pulsen, og hva det betyr for klokkas
  pulssoner og intensitetsminutter.
- Hvilke symptomer som betyr at en økt skal avbrytes og lege kontaktes. Hent ordlyden fra
  norske helsemyndigheter eller pasientorganisasjoner.
- Kostråd som gjelder for situasjonen hennes.
- Hva som virker for å holde på nye vaner, og hva som slår feil.

Regler for undersøkelsen:

- Bruk helsemyndigheter, retningslinjer og oversiktsartikler før enkeltstudier og blogger.
- **Det legen hennes har sagt, går foran alt du finner.** Retningslinjene er rammen. Der de
  spriker fra legens råd, følger veilederen legen, og du noterer spørsmålet hun kan ta opp
  ved neste time.
- Skill mellom det som er godt dokumentert, det som er sannsynlig, og det du ikke fant.
- Legg fram funnene for henne i klart språk, med kildene, og få hennes ja før du bygger dem
  inn. Lag også en kort liste over spørsmål hun bør ta med til legen.

## Del D: Bygg veilederen

### D1. Prosjektet og instruksen

Lag et prosjekt sammen med henne, og skriv instruksen til veilederen. Vis henne utkastet og
rett det til hun kjenner seg igjen. Instruksen skal inneholde:

- **Hvem hun er og hva hun vil**, fra del B.
- **Mandatet.** Legens råd, slik hun har gjengitt dem, og rammen fra del C.
- **Hent tallene først.** Veilederen henter alltid ferske tall fra Garmin-koblingen før den
  svarer, og finner aldri på tall. Mangler noe, sier den det.
- **Tonen hun har valgt.** Har hun bedt om en tydelig veileder, skal det stå slik:
  veilederen kan endre *hvordan* en avtalt økt gjøres, ikke *om* den gjøres. Trøtt, travelt
  og dårlig vær gir en kortere økt eller en annen dag samme uke. Kommer den samme grunnen
  flere ganger, sier veilederen det. Veilederen foreslår ikke hvile på eget initiativ når
  legens råd er å trene.
- **Det faste unntaket.** Symptomene fra del C som betyr stopp og lege, ordrett. Lista skal
  være kort og konkret. Ved slike symptomer skal veilederen aldri presse.
- **Grensen mot det medisinske.** Veilederen gir råd om livsstil. Spørsmål om medisiner,
  dosering og nye symptomer går til legen.
- **Søvn omtales rolig.** Søvntallene fra klokka er upresise, og de skal ikke gjøres til et
  mål eller en karakter.

En språkmodell gir lett etter for den som maser. Det er grunnen til at tonen og unntaket
står skrevet i instruksen og ikke overlates til skjønn.

### D2. Appen

Bygg appen i en samtale på hennes konto, ut fra det hun sa hun ville se. Kravene som må
være med, uansett utseende:

- Appen henter tallene selv gjennom Garmin-koblingen hver gang den åpnes. Tall skal ikke
  ligge fast i koden.
- Den viser når tallene sist ble hentet, og har en knapp for å hente på nytt.
- Går hentingen ikke, står årsaken på skjermen.
- Den er laget for mobilskjerm, og teksten er på norsk.

La henne se den, og endre til hun er fornøyd. Vis henne at hun selv kan be om endringer
senere, i samme samtale: «legg til …», «bytt farge til …». Første gang appen åpnes, spør
Claude om den får bruke Garmin-koblingen. Det skal hun si ja til.

### D3. Oppfølgingen

Lag planlagte oppgaver sammen med henne (Scheduled → New task → Set up manually). Hva de
skal gjøre og når, følger av det hun svarte i del B. Vanlige eksempler er en kveldssjekk av
om dagens avtalte økt ble gjort, og en ukentlig oppsummering med mål for neste uke.

- Skriv instruksen til oppgaven slik at den står på egne ben. Hver kjøring starter uten å
  huske tidligere kjøringer.
- La Permissions stå på «Auto».
- Under Advanced settings → Notifications: slå på både push og e-post.
- Oppgaven sender ikke varselet selv. Det gjør Claude etter kjøringen.
- Kjør oppgaven én gang mens dere sitter sammen, og se at varselet kommer fram på telefonen
  hennes og at hun kan svare i kjøringen.

### D4. Overlevering

Avslutt med en kort side til henne, i hennes eget språk:

- hvor hun finner veilederen, appen og de planlagte oppgavene
- hvordan hun ber om endringer
- hva som skjer én gang i året (ny nøkkel fra Garmin, se `UTRULLING.md`)
- hvem hun spør når noe ikke virker

## Det som er prøvd, og det som ikke er det

Prøvd 27.11.2026 på Kristians konto (Max-abonnement, PC og iPhone):

- Koblingen gir riktige tall. Søvn, søvnscore, intensitetsminutter, skritt, hvilepuls,
  stress og Body Battery er sammenlignet med Garmin-appen og en uavhengig kilde.
- Intensitetsminutter: `garmin_get_daily_summaries` gir `moderateIntensityMinutes` og
  `vigorousIntensityMinutes` per dag. Garmin teller høy intensitet dobbelt, og uka går fra
  mandag til søndag.
- Søvn hører til datoen hun våknet. `garmin_get_sleep` gir én natt,
  `garmin_get_sleep_history` flere.
- Koblingen virker i vanlig samtale, i prosjekt, i en app laget i chat og i en planlagt
  oppgave. Godkjenningen som gis på PC, følger med til telefonen.
- En app laget i chat tålte å bli endret og fikk et nytt Garmin-verktøy uten å slutte å
  virke.
- Push-varsel fra en planlagt oppgave kom fram på iPhone.

Ikke prøvd:

- **Android.** Hun bruker Android. Verken koblingen, appen eller push-varsel er prøvd der,
  og det finnes rapporter om at push fra planlagte oppgaver ikke alltid kommer fram på
  Android. Prøv det tidlig. Kommer ikke push fram, er e-postvarselet reserven.
- **Pro-abonnement.** Alt er prøvd på et større abonnement. Si fra til henne hvis dere
  møter grenser.
- **E-postvarsel** fra planlagte oppgaver.
- **Tale på norsk** er etter dokumentasjonen ikke støttet. Regn med at hun skriver.
- **Hvor lenge koblingen holder.** Etter dokumentasjonen varer den så lenge den brukes
  minst én gang i måneden, i opptil ett år. Da må hun koble til på nytt.

Det Garmin-koblingen ikke har: VO2-maks, treningsberedskap, løpsprognoser og mulighet til
å sende økter til klokka. Den kan bare lese.
