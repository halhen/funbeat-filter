*For non-Swedish speakers: this is probably of no use to you. Proceed.*

funbeat-filter �r ett [Greasemonkey](https://addons.mozilla.org/firefox/addon/748)-script f�r att filtrera diskussionsgrupperna p� [funbeat.se](http://www.funbeat.se).

funbeat �r ett trevligt forum. N�gra med mig har dock efterfr�gat en m�jlighet att blockera inl�gg fr�n valfria skribenter, detta f�r att minska m�ngden trams- och off-topic-inl�gg. Det verkar osannolikt att admin kommer att implementera en s�dan funktion, varf�r jag h�r presenterar en 80-procentig l�sning.

Efter att du har installerat funbeat-filter kommer en liten l�nk att dyka upp efter skribetens namn p� diskussionssidorna i form av ett minustecken. N�r du klickar p� detta kommer inl�gg fr�n denna skribent forts�ttningsvis att ers�ttas med en liten text: "Ignorerat inl�gg. Klicka f�r att visa alla". Som texten antyder kan du klicka p� densamma f�r att se inl�gg �ven fr�n de skribenter du har ignorerat i den �ppna tr�den. Efter ignorerade skribenters namn finns d� ocks� ett plustecken som du kan klicka p� f�r att av-ignorera denne.

![Sk�rmdump](http://i.imgur.com/skDKa.png)

L�sningen �r inte optimal, utan hade b�ttre implementerats direkt p� siten. F�ljande egenheter kvarst�r:

  * Ignorerade skribenters inl�gg syns i "Ol�sta diskussioner".
  * Inl�gg d�ljs inte f�rr�n hela sidan �r laddad, det vills s�ga med f�rdr�jning.
  * Skribenter ignoreras per dator.

F�r att installera skriptet beh�ver du en webbl�sare med Greasemonkey installerat. Enklast �r att installera [Firefox](http://www.mozilla.com/en-US/firefox/firefox.html). Installera d�refter [Greasemonkeys plugin](https://addons.mozilla.org/firefox/addon/748). Slutligen installerar du [funbeat-filter](http://www.k2h.se/funbeatfilter.user.js).

# (Inte s�rskilt) vanligen st�lla fr�gor:

## Fan, vad l�jligt. T�l du inte lite sk�mt?

Jo, det tror jag nog. Jag anv�nder detta skript av samma anledning som jag anv�nder skr�ppost-filter till min e-post. Jag har b�ttre saker f�r mig �n att �ver�sas med irriterande �verfl�digheter.

## Men yttrandefriheten d�?

Den �r obeskrivligt viktig. Men av yttrandefrihet f�ljer inte lyssnandeskyldighet. Se det s� h�r: p� detta s�tt kvarst�r din frihet att s�ga vad du vill medan min frihet att slippa lyssna blir st�rre.

## Jag har hittat en bugg!

Toppen. Skicka ett [PM p� funbeat](http://www.funbeat.se/person/overview.aspx?PersonID=116117) eller kontakta mig via [github](http://www.github.com/halhen/funbeat-filter) s� ska jag se vad jag kan g�ra. Vill du bidra med en patch s� tar jag tacksamt emot den, f�retr�desvis per github. Scriptet �r licensierat under FreeBSD.

