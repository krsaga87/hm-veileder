# Prompter for å bygge og forme appen

Dette er en idébank. Promptene er tekster du kan kopiere inn i Claude for å lage appen din,
bygge den ut, og etter hvert gjøre den til din egen. Ingen av dem må brukes ordrett. Bytt ut
det som står i [klammer], stryk det du ikke bryr deg om, og skriv med dine egne ord.

Koblingen til Garmin må være satt opp først (`UTRULLING.md`).

**Hva som er prøvd:** grunnreglene, de to første promptene under «Kom i gang»,
registrering av blodtrykk, ukeplanen, tid over en pulsgrense og en knapp som spør Claude
er prøvd 27.11.2026 og virket. Resten er eksempler på hva som bør være mulig, men er ikke
prøvd.
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
- **Tallene er så ferske som klokka.** Appen henter fra Garmin, ikke fra klokka. Har ikke
  klokka synket med telefonen siden i morges, viser appen morgentallene. Åpne Garmin-appen
  for å synke, og hent på nytt.

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
- Svar fra Garmin-koblingen kan komme i flere tekstdeler, først en merknad og så dataene,
  og kan være en ren melding når data mangler. Les alle delene. Hent et ekte svar og se på
  formen før du skriver koden som leser det.
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
Prøvd. Tallet blir nøyaktig hvis en av pulssonene på klokka starter på akkurat den pulsen;
sonene kan endres i Garmin-appen. Ellers blir det et anslag, og appen merker det «ca.».

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

Garmin vet ikke alt. Appen kan også ta imot det du skriver inn, og huske det. Det er prøvd:
en måling ført på telefonen lå der med en gang på PC-en. Det du fører ligger i appen, ikke
i Garmin, og bare du kan se det.

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

**Ukeplanen.** Prøvd. Haken settes når Garmin har en økt av samme type den dagen, med
omtrent den planlagte lengden. Appen kan ikke se om en tur var «rask»; vil du ha det med,
be om en grense for snittpuls.

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

**En knapp som spør Claude.** Prøvd: appen kan spørre Claude og vise svaret. Men den
Claude som svarer i appen, er ikke veilederen din. Den husker ingenting, kjenner ikke
prosjektet ditt, og vet bare det appen sender med. I prøven ga den forsiktige hvileråd som
veilederen ikke ville gitt. Velg derfor en av disse to.

*Bare status.* Den trygge varianten. Knappen sier hva tallene viser, og rådene får du av
veilederen i prosjektet.

```text
Legg til en knapp «Hvordan ligger jeg an?». Når jeg trykker, skal appen spørre deg og vise
et kort svar: hva jeg har gjort denne uka mot planen, og hva som gjenstår. Bare det tallene
viser. Ingen råd om hvile, trening eller helse; det tar jeg med veilederen min.
```

*Med veilederens regler.* Bruk denne hvis du vil ha råd i appen. Da må reglene til
veilederen følge med, ellers får du to veiledere som sier forskjellige ting.

```text
Legg til en knapp «Hva sier veilederen?». Når jeg trykker, skal appen spørre deg og vise et
kort svar ut fra dagens tall og ukeplanen. Svaret skal følge de samme reglene som
veilederen min. Her er de, og de skal sendes med hver gang:

[lim inn reglene fra instruksen til veilederen: målet, legens råd, tonen, og symptomene
som betyr stopp]

Vis reglene i appen under innstillinger, så jeg kan se og endre dem der.
```

Endrer du instruksen til veilederen senere, må du endre reglene i appen også.

## Bygg ut: til legen og til deg selv

```text
Lag en side jeg kan skrive ut eller vise fram ved neste legetime: de siste [tre månedene]
med aktivitet per uke, hvilepuls, og det jeg selv har ført. Én side, nøkternt, med datoer.
```

```text
Lag en oppsummering av året så langt: antall økter, timer i bevegelse, beste uke og
lengste rekke. Noe jeg blir glad av å se på.
```

## Når appen vokser

Appen trenger ikke forbli én skjerm. Den kan bli en ordentlig app med faner, egne sider og
innstillinger, og du bygger den dit trinn for trinn. En vanlig vei:

1. **Én skjerm** med det viktigste. Der starter du.
2. **Forside med kort**, der hvert kort åpner en egen side.
3. **Faner** nederst, når det er blitt for mye å bla i.
4. **Innstillinger**, så du selv kan endre mål og utseende uten å spørre Claude.
5. **Dybde**: velg tidsrom, sammenlign perioder, trykk deg inn i en økt.
6. **Samspill**: plan, Garmin-tall, det du fører selv og veilederen i samme app.

Du trenger ikke gå hele veien. Stopp der appen gjør jobben.

**Forside med kort.**

```text
Gjør forsiden om til store kort, ett for hver ting: [ukemålet], [dagens plan], [søvn] og
[blodtrykk]. Hvert kort viser det viktigste tallet. Når jeg trykker på et kort, åpnes en
egen side med detaljene og en tilbakeknapp.
```

**Faner.**

```text
Appen har blitt lang å bla i. Del den i faner nederst på skjermen, slik vanlige apper har:
[I dag], [Uka], [Økter], [Kosthold] og [Meg]. Flytt det som finnes inn i riktig fane, og la
appen huske hvilken fane jeg sist var på. Hent bare tallene til den fanen jeg åpner, så
appen ikke blir treg.
```

**Innstillinger.**

```text
Lag en fane «Innstillinger» der jeg selv kan endre ukemålet, pulsgrensen, hvilke kort som
vises på forsiden og i hvilken rekkefølge, farger og tekststørrelse. Valgene mine skal
huskes, også på en annen enhet.
```

**Velg tidsrom.**

```text
Legg til et valg øverst i [Uka] for dag, uke, måned og år, slik Garmin-appen har. Tallene
og kurvene skal følge valget.
```

**Sammenlign.**

```text
La meg sammenligne to perioder side om side, for eksempel denne måneden mot forrige:
økter, intensitetsminutter, hvilepuls og søvn. Vis tydelig hva som har gått opp og ned.
```

**Finn fram i øktene.**

```text
I [Økter]: la meg velge type økt og vise bare økter over [30] minutter. Vis hvor mange
som passer, og summen av tiden.
```

**Hva er nytt siden sist.**

```text
Når jeg åpner appen: vis øverst hva som har skjedd siden sist jeg var inne, for eksempel
nye økter, mål som er nådd og nye rekorder. Ett trykk skal fjerne meldingen.
```

**En fane som foreslår neste skritt.**

```text
Legg til en fane «Ideer» med fem forslag til hva appen kunne gjort mer, ut fra det som
finnes i Garmin og det jeg bruker i appen i dag. Skriv hvert forslag som en setning jeg kan
sende deg for å få det laget.
```

**Ta kopi av det du har ført.**

```text
Legg til en knapp som laster ned alt jeg selv har ført i appen som en fil: blodtrykk, plan
og notater. Jeg vil ha en kopi.
```

**Rydd under panseret.** Bruk denne når appen har fått mange deler og endringer begynner å
gå tregt eller gi feil.

```text
Appen har vokst mye. Gå gjennom den og rydd, uten å endre noe av det jeg ser eller noe
som er lagret. Si etterpå hva du ryddet, og hvordan du har sjekket at alt virker som før.
```

**Få oversikt.**

```text
Lag en kort oversikt over appen slik den er nå: hver fane, hva den viser, hvilke tall som
kommer fra Garmin, og hva jeg fører selv.
```

**Når samtalen blir lang.** Etter mange endringer kan samtalen bli så lang at Claude
begynner å miste tråden. Det er ikke prøvd hvordan man best flytter appen til en ny samtale,
så be Claude om råd først:

```text
Denne samtalen er blitt lang. Hvordan fortsetter vi best på samme app i en ny samtale,
uten at det jeg har lagret forsvinner? Skriv det jeg må lime inn der for at du skal kjenne
appen og reglene våre.
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
