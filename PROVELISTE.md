# Prøveliste for teknikken

Lista er for den som skal finne ut om oppsettet holder, etter at `UTRULLING.md` er fulgt og
koblingen virker. Noter hva som virker og ikke. Punkt 5–8 må prøves på en Android-telefon.

1. Spør i en vanlig samtale på nett: «Hvordan sov jeg i natt?» Kommer tallene, og stemmer
   de med klokka?
2. Be om siste 7 dager med dagsoppsummeringer. Finnes søvnscore og intensitetsminutter, og
   stemmer intensitetsminuttene med klokka?
3. Lag et prosjekt med en kort instruks. Virker koblingen i en prosjektsamtale?
4. Åpne adressen til programmet med `/mcp` til slutt i en nettleser. Den skal svare med en
   feil om manglende innlogging (401), ikke med data.
5. Android-appen: er koblingen synlig, og svarer den på samme spørsmål som i punkt 1?
6. Lag en planlagt oppgave fra en samtale: «Hver dag kl. 20: sjekk om jeg har trent i dag,
   og skriv en kort melding.» Bruker den koblingen uten å vente? Kommer varselet på
   telefonen, åpner det kjøringen, og kan du svare i den?
7. Be Claude lage en liten app som viser ukas intensitetsminutter fra koblingen. Får appen
   hentet tallene? Virker den i Android-appen?
8. Be Claude endre appen («legg til søvn», «bytt farge»). Går det uten at den slutter å virke?
9. Hvor lenge holder tilkoblingen: prøv igjen etter 1 time, 1 døgn og 1 uke uten bruk.

## Resultater

**27.11.2026, Kristians konto (Garmin Forerunner 970):**

- **Punkt 1 og 2: virker.** Koblingen svarte fra en Claude Code-sesjon i skyen. Søvnscoren
  ligger i `sleepScores.overall.value`, og dagsoppsummeringene har intensitetsminutter
  (moderat og hard hver for seg), skritt, hvilepuls, stress og Body Battery.
- **Tallene stemmer med en uavhengig kilde.** Natt til 27.11 og dagene 25.–27.11 ble
  sammenlignet med det Kristians egen Garmin-synk hadde lagret: søvnscore, søvnlengde,
  søvnfaser, leggetid, hvilepuls, Body Battery, stress, SpO2, skritt og aktive kalorier var
  like på alle verdiene som ble sammenlignet.
- **Intensitetsminuttene stemmer med Garmin-appen.** 27.11 viste appen 15 moderate og 36
  høye, totalt 87, og koblingen ga 15 og 36. Høy intensitet teller dobbelt i totalen, og
  uka regnes fra mandag: koblingens tall for mandag–fredag ga 263, som er der ukekurven i
  appen endte.
- **Punkt 4 (delvis):** Claude fant innloggingen selv da koblingen ble lagt til («Detected»).
- **Punkt 7: virker på nett.** En app laget i en vanlig chat (Max, Opus 5.5) hentet ukas
  intensitetsminutter gjennom koblingen mens den kjørte. Første gang spurte Claude «This
  artifact uses connectors», med Garmin, «Can only read» og ett verktøy. Appen viste 263 for
  uka, likt med koblingen og Garmin-appen. Appen er privat («Only you»).
- **Følger av punkt 7:** en delt app bruker koblingen til den som ser på den, og folk utenfor
  kontoen får ikke koblingstilgang. Hver bruker må derfor lage appen i sin egen chat, med
  sin egen Garmin-kobling.
- **Punkt 8: virker på nett.** Appen ble bedt om søvnscore per natt og blå farger i samme
  samtale. Den fikk ett Garmin-verktøy til og virket etterpå. Søvnscorene for mandag–fredag
  (91, 83, 93, 72, 84) var like med Kristians egen Garmin-synk. «Hent på nytt» viste
  klokkeslettet for hentingen.
- **Punkt 7 og 8 på iPhone: virker.** Den oppdaterte appen åpnet seg i Claude-appen på
  iPhone og hentet de samme tallene gjennom koblingen.
  Godkjenningen fra PC-en fulgte med; det kom ikke noe nytt spørsmål på telefonen.
- **Punkt 3: virker.** Et prosjekt med instruksen «Du er min helseveileder. Hent alltid
  tallene fra Garmin-koblingen før du svarer.» brukte koblingen på spørsmålet «Hvordan har
  uka vært?» og svarte med trening, restitusjon og søvn fra Garmin.
- **Punkt 6: kjøringen virker.** En planlagt oppgave (Scheduled → New task → Set up
  manually, Permissions «Auto», daglig) kjørte på klokkeslettet og brukte tre
  Garmin-verktøy uten å vente på godkjenning. Meldingen stemte: økta, 87 intensitetsminutter
  for dagen og 263 for uka. Oppgaven har ikke noe eget varselverktøy; varsel velges under
  Advanced settings → Notifications, med push, e-post eller Slack. Oppgaven fikk tilgang til
  alle kontoens koblinger, ikke bare Garmin.
- **Punkt 6, varsel og svar: virker på iPhone.** Push-varselet kom fram, og et vanlig svar
  skrevet under kjøringen ble besvart som i en samtale. E-postvarsel er ikke prøvd.
- **Appen kan lagre egne registreringer.** En blodtrykksapp laget i chat lagret målinger i
  appens egen database. En måling ført på iPhone viste seg med en gang på PC. Bare eieren
  kan lese og skrive målingene.
- **Grunnreglene i `APP_PROMPTER.md` holdt.** Claude sjekket selv at appen kunne bruke
  koblingen før den lovet noe, og sa fra om begrensningene: appen kjører bare inne i
  Claude, gjør ingenting i bakgrunnen, og «sist hentet» er ikke det samme som at klokka
  har synket.
- **Gjenstår:** punkt 9, og punkt 5–8 på en Android-telefon. Appbygging på Pro-abonnement
  er ikke prøvd.
