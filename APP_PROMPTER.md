# Prompter for å bygge og forme appen

Dette er en idébank. Promptene er tekster du kan kopiere inn i Claude for å lage appen din,
bygge den ut, og etter hvert gjøre den til din egen. Ingen av dem må brukes ordrett. Bytt ut
det som står i [klammer], stryk det du ikke bryr deg om, og skriv med dine egne ord.

Koblingen til Garmin må være satt opp først (`UTRULLING.md`).

**Hva som er prøvd:** de to første promptene under «Kom i gang» er prøvd 27.11.2026 og
virket, også på telefon. Resten er eksempler på hva som bør være mulig, men er ikke prøvd.
Derfor står det i grunnreglene at Claude skal si fra når noe ikke går, i stedet for å late
som.

## Slik jobber du med appen

- **Appen bor i én samtale.** Lag den i en samtale, og fortsett i den samme samtalen hver
  gang du vil endre noe. Da bygger Claude videre på det som finnes.
- **Én endring om gangen.** Be om én ting, se på resultatet, og be om neste. Da er det lett
  å se hva som ble bra og hva som må rettes.
- **Si hva du vil se, ikke hvordan det skal lages.** «Jeg vil se med ett blikk om jeg har
  nådd ukemålet» er bedre enn å beskrive stolper og farger.
- **Bruk skjermbilder.** Ser noe rart ut, ta et bilde og si hva som er galt.
- **Første gang appen åpnes** spør Claude om den får bruke Garmin. Svar ja. Det samme kan
  skje når appen får en ny type tall.
- **Du finner appen igjen** under Artifacts i menyen, både på PC og telefon.

## Grunnregler

Lim inn dette først i samtalen der du skal lage appen. Da slipper du å gjenta det. Du kan
også be Claude legge det inn i instruksen til prosjektet ditt.

```text
Jeg skal lage og etter hvert endre en personlig helseapp sammen med deg. Disse reglene
gjelder for alt du lager i denne samtalen:

- Appen henter tallene selv gjennom Garmin-koblingen hver gang den åpnes. Legg aldri tall
  fast i koden.
- Vis når tallene sist ble hentet, og ha en knapp for å hente på nytt.
- Går noe galt, skal det stå på skjermen hva som feilet, i klart språk.
- Appen skal brukes på telefon. Stor nok tekst, og ingenting som må trykkes med presisjon.
- All tekst på norsk.
- Mangler et tall, vis at det mangler. Ikke vis null, og ikke gjett.
- Når jeg ber om en endring, behold alt annet slik det var.
- Er det noe jeg ber om som ikke lar seg gjøre i en slik app, si det rett ut og foreslå det
  nærmeste som går. Ikke lag noe som bare ser ut som det virker.
- Etter hver endring: si kort hva du endret, og om jeg må godkjenne noe nytt.
```

## Kom i gang

**Den første appen.** Start smått. Denne er prøvd.

```text
Lag en app som viser ukas intensitetsminutter. Uka går fra mandag til søndag, og målet er
[150]. Garmin teller høy intensitet dobbelt. Vis ukas total stort mot målet, og en stolpe
per dag delt i moderat og høy.
```

**Legg til noe, og endre utseendet.** Også prøvd.

```text
Legg til søvnscore for hver natt denne uka under stolpene, og bytt til [blå] farger.
```

**Se hva som er mulig.** Bruk denne når du ikke vet hva du skal be om.

```text
Se på hva Garmin-koblingen kan hente for min klokke, og hent litt av hvert så du ser hva
som faktisk finnes hos meg. Foreslå så fem ting appen kunne vist, med én setning om hva
hver av dem ville gitt meg i hverdagen. Ikke lag noe ennå.
```

**En forside for hverdagen.**

```text
Gjør om forsiden så den viser dagen i dag med ett blikk: skritt, intensitetsminutter i dag,
Body Battery nå, og hvordan jeg sov i natt. Under: hvor langt jeg er kommet mot ukemålet.
```

## Få den til å se ut slik du liker

```text
Jeg liker apper som [Yr og Tesla-appen]: store tall, lite tekst, mye luft. Gjør appen mer
slik. Vis meg resultatet før du gjør flere endringer.
```

```text
Teksten er for liten for meg. Gjør alt større, og sørg for god kontrast. Det er greit at jeg
må bla mer.
```

```text
Lag appen med faner nederst, slik vanlige apper har: [I dag], [Uka], [Økter] og [Meg].
Flytt det som finnes inn i riktig fane.
```

```text
Gi meg tre forslag til fargevalg som passer en rolig helseapp. Vis dem som små prøver ved
siden av hverandre, så velger jeg.
```

## Bygg ut: trening

**Øktene dine.**

```text
Legg til en liste over de siste [ti] øktene mine: dato, hva slags økt, hvor lenge, og
snittpuls. Når jeg trykker på en økt, vis mer om den.
```

**Tid over en pulsgrense.** Nyttig hvis legen har sagt noe om hvor høyt pulsen bør opp.

```text
For hver økt: vis hvor mange minutter pulsen lå over [___] slag i minuttet. Vis også summen
for uka. Si fra hvis dette ikke kan regnes ut nøyaktig fra det Garmin gir, og forklar hva
tallet da bygger på.
```

**Pulssonene.**

```text
Vis for hver økt hvor lang tid jeg var i hver pulssone, som en liggende stolpe. Bruk sonene
som er satt på klokka mi.
```

**Uke for uke.**

```text
Lag en visning med de siste [tolv] ukene: intensitetsminutter per uke som stolper, med
målet som en strek. Marker ukene der jeg nådde målet.
```

**Rekker og rekorder.**

```text
Vis hvor mange uker på rad jeg har nådd ukemålet, og den lengste rekka jeg har hatt. Vis
også mine tre beste uker.
```

## Bygg ut: form og hvile

```text
Lag en visning som svarer på spørsmålet «blir jeg i bedre form?». Bruk hvilepuls,
fitnessalder og intensitetsminutter over de siste [tre månedene], og skriv én setning under
hver kurve om hvilken vei det går. Vær forsiktig med å trekke slutninger av få uker.
```

```text
Vis Body Battery for de siste sju dagene: høyeste og laveste verdi per dag. Marker dagene
jeg trente.
```

```text
Vis søvnen min den siste uka: når jeg la meg, når jeg sto opp, og hvor lenge jeg sov. Jeg
vil se om jeg legger meg til omtrent samme tid. Hold det nøkternt, uten karakterer og røde
farger.
```

## Bygg ut: ting du fører selv

Garmin vet ikke alt. Appen kan også ta imot det du skriver inn. Det er ikke prøvd om appen
kan huske det du fører fra gang til gang, så be Claude si fra.

**Vekt, blodtrykk eller midjemål.**

```text
Jeg vil kunne føre [blodtrykk] i appen: to tall og dato, med dagens dato som forslag. Vis
det jeg har ført som en kurve. Det jeg fører må ligge der neste gang jeg åpner appen, også
på en annen enhet. Si fra hvis appen ikke kan lagre på den måten, og hva som er alternativet.
```

**Hvordan dagen kjentes.**

```text
Legg til en rask registrering etter en økt: hvor tungt det var på en skala fra 1 til 10, og
et felt for noen ord. Vis det sammen med økta i lista.
```

**Symptomer å ta med til legen.**

```text
Lag et sted der jeg kan notere plager når de kommer: hva, når, og hva jeg holdt på med.
Jeg vil kunne vise lista til legen. Dette er bare notater; appen skal ikke vurdere dem.
```

## Bygg ut: kosthold

Start enkelt. En kostholdsdel som er tung å bruke, blir ikke brukt.

**Den enkleste varianten.**

```text
Legg til en kostholdsdel som tar ti sekunder om dagen: fire knapper jeg kan trykke på
for [frukt og grønt], [fisk], [vann] og [noe søtt]. Vis uka som et rutenett, så jeg ser
mønsteret.
```

**Mål du har avtalt med veilederen.**

```text
Jeg har avtalt med veilederen at jeg skal [spise fisk to ganger i uka og ha grønnsaker til
middag hver dag]. Lag en ukevisning der jeg krysser av, og vis hvor mange uker jeg har
klart det.
```

**Bilde av måltidet.**

```text
Kan appen ta imot et bilde av et måltid og la deg beskrive hva som er på tallerkenen, med
et grovt anslag? Hvis det går: lag det, lagre beskrivelsen på dagen, og skriv tydelig at
anslaget er grovt. Hvis det ikke går i appen, si det, så sender jeg bildene i samtalen.
```

**Det Garmin har.**

```text
Sjekk om det ligger noe i Garmin om væske eller mat for meg. Finnes det, vis det i appen.
Finnes det ikke, si det, og ikke lag en tom visning.
```

## Bygg ut: plan og oppfølging

Dette er delen som holder deg til det du har bestemt.

**Ukeplanen.**

```text
Jeg vil ha en ukeplan i appen. La meg legge inn hva jeg skal gjøre hvilke dager, for
eksempel «tirsdag: rask gåtur 40 minutter». Sett selv hake når Garmin viser en økt den
dagen som passer med planen, og vis tydelig de dagene der økta mangler. Planen må ligge der
neste gang jeg åpner appen.
```

**Har jeg gjort det jeg skulle?**

```text
Gjør forsiden om så den svarer på ett spørsmål: har jeg gjort det jeg skulle denne uka?
Vis planlagte økter som gjort, gjenstår eller glippet, og hva som må til resten av uka for
å nå målet.
```

**Reserveøkta.**

```text
For hver planlagt økt: la meg legge inn en kort variant jeg kan ta i stedet på en dårlig
dag. Vis den som et valg når dagen kommer, så alternativet til full økt er en kort økt og
ikke ingenting.
```

**En beskjed fra veilederen i appen.**

```text
Legg til en knapp «Hva sier veilederen?». Når jeg trykker, skal appen spørre deg og vise et
kort svar ut fra dagens tall og ukeplanen: tre setninger, direkte, uten utenomsnakk. Si fra
hvis appen ikke kan spørre deg på den måten.
```

## Bygg ut: til legen og til deg selv

```text
Lag en side jeg kan skrive ut eller vise fram ved neste legetime: de siste [tre månedene]
med aktivitet per uke, hvilepuls, og det jeg selv har ført. Én side, nøkternt, med datoer.
```

```text
Lag en oppsummering av året så langt: antall økter, timer i bevegelse, beste uke og
lengste rekke. Noe jeg blir glad av å se på.
```

## Gjør den til din egen

Disse promptene ber Claude tenke sammen med deg. Bruk dem når appen virker, og du vil at
den skal passe akkurat deg.

**La tallene dine styre.**

```text
Hent de siste [åtte] ukene fra Garmin og se etter mønstre som er mine: hvilke dager jeg
pleier å trene, når det glipper, hva som skjer uka etter en god uke. Foreslå tre ting appen
burde vise eller minne meg på, som bygger på det du fant. Vis hva du fant først.
```

**Bygg rundt dagen din.**

```text
Jeg åpner appen [om morgenen før frokost] og [om kvelden]. Hva bør stå øverst hver av
gangene? Lag forsiden slik at den viser det som er nyttig akkurat da.
```

**Bygg rundt det som stopper deg.**

```text
Det som oftest stopper meg er [at jeg utsetter til ettermiddagen, og så blir det ikke noe].
Hvordan kan appen hjelpe med akkurat det? Gi meg to forslag før du lager noe.
```

**Bygg rundt målet ditt.**

```text
Målet mitt er [å kunne gå en bestemt tur uten pause innen juni]. Lag en visning som viser
hvor jeg står mot det målet, med delmål underveis. Foreslå hva delmålene bør være, ut fra
tallene mine.
```

**Rydd.**

```text
Appen har blitt for full. Se på hva som finnes, og foreslå hva som kan bort eller flyttes
bak et trykk. Jeg vil at forsiden skal vise høyst [fire] ting.
```

**Tonen.**

```text
Jeg vil at tekstene i appen skal være [korte og direkte, uten ros for småting]. Gå gjennom
alt som står av tekst og skriv det om slik.
```

**Spør meg.**

```text
Still meg fem spørsmål om hvordan jeg bruker appen og hva jeg savner, ett om gangen.
Foreslå så de tre endringene du tror vil bety mest.
```

## Når noe ikke virker

```text
[Legg ved skjermbilde.] Dette ser feil ut: [hva]. Finn ut hvorfor og rett det. Si hva som
var galt.
```

```text
Appen viser [263] intensitetsminutter denne uka, men Garmin-appen viser [271]. Finn ut
hvorfor tallene er ulike, og si hvilket som er riktig.
```

```text
Den siste endringen ble ikke bra. Gå tilbake til slik appen var før den, og behold alt
annet.
```

```text
Før du gjør større endringer framover: si hva du har tenkt å gjøre, og vent på ja fra meg.
```

```text
Forklar meg med vanlige ord hva appen gjør når jeg åpner den, og hva den har lov til å
hente fra Garmin.
```

## Hva appen ikke kan

- Den kan ikke sende økter til klokka eller endre noe i Garmin. Koblingen kan bare lese.
- Garmin gir ikke VO2-maks, treningsberedskap eller løpsprognoser gjennom koblingen.
- Den kan ikke varsle deg. Varsler kommer fra de planlagte oppgavene i Claude.
- Den virker bare for deg. Deler du appen med andre, ser de ikke tallene dine, fordi
  koblingen følger kontoen.
