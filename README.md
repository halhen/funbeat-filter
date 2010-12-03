*For non-Swedish speakers: this is probably of no use to you. Proceed.*

funbeat-filter är ett [Greasemonkey](https://addons.mozilla.org/firefox/addon/748)-script för att filtrera diskussionsgrupperna på [funbeat.se](http://www.funbeat.se).

funbeat är ett trevligt forum. Några med mig har dock efterfrågat en möjlighet att blockera inlägg från skribenter. Det verkar osannolikt att admin kommer att implementera en sådan funktion, varför jag här presenterar en 80-procentig lösning.

Efter att du har installerat funbeat-filter kommer en liten länk att dyka upp efter skribetens namn på diskussionssidorna i form av ett minustecken. När du klickar på detta kommer inlägg från denna skribent fortsättningsvis att ersättas med en liten text: "Ignorerat inlägg. Klicka för att visa alla". Som texten antyder kan du klicka på densamma för att se inlägg även från de skribenter du har ignorerat i den öppna tråden. Efter ignorerade skribenters namn finns då också ett plustecken som du kan klicka på för att av-ignorera densamme.

![Skärmdump](http://i.imgur.com/skDKa.png)

Lösningen är inte optimal, utan hade bättre implementerats direkt på siten. En script-lösning har följande egenheter:

  * Ignorerade skribenters inlägg syns i "Olästa diskussioner".
  * Inlägg döljs inte förrän hela sidan är laddad, det vills säga med fördröjning.
  * Skribenter ignoreras per dator.

För att installera skriptet behöver du en webbläsare med Greasemonkey installerat. Enklast är sannolikt att använda [Firefox](http://www.mozilla.com/en-US/firefox/firefox.html). Installera därefter [Greasemonkeys plugin](https://addons.mozilla.org/firefox/addon/748). Slutligen installerar du [funbeat-filter](http://www.k2h.se/funbeatfilter.user.js).

# (Inte särskilt) vanligen ställa frågor:

## Fan, vad löjligt. Tål du inte lite skämt?

Jo, det tror jag nog. Jag använder detta skript av samma anledning som jag använder skräppost-filter till min e-post. 

## Men yttrandefriheten då?

Den är obeskrivligt viktig. Men av yttrandefrihet följer inte lyssnandeskyldighet. 

## Men alla har något vettigt att säga ibland!

Använd filtret om och som du vill. Om inte annat kan den som funderar på huruvida idéen är god, testa den.

## Jag har hittat en bugg.

Toppen. Skicka ett [PM på funbeat](http://www.funbeat.se/person/overview.aspx?PersonID=116117) eller kontakta mig via [github](http://www.github.com/halhen/funbeat-filter) så ska jag se vad jag kan göra. Vill du bidra med en patch så tar jag tacksamt emot den, företrädesvis per github. Scriptet är licensierat under FreeBSD.

