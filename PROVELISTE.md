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
- **Gjenstår:** punkt 3, 5, 6, 8 og 9, og punkt 7 på telefon. Punkt 5–8 må prøves på en
  Android-telefon. Appbygging på Pro-abonnement er ikke prøvd.

