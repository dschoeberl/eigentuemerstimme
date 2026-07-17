# eigentuemerstimme.de

Website der gemeinnützigen Initiative **Eigentümerstimme** (in Gründung), Erfurt.

Statisches HTML/CSS, kein Build, kein Framework. Deployment über Netlify.

## Stand

Seit 17.07.2026 live unter `eigentuemerstimme.de`: Startseite „in Gründung",
„Warum wir", Impressum und Datenschutzerklärung. Alle vier Seiten sind
indexierbar; das `noindex` der Vorschauphase ist entfernt. hausentscheider.de
verweist im Netzwerk-Block auf diese Seite.

## Struktur

```
index.html        Startseite (Styles inline, wie bei hausentscheider.de)
warum.html        „Warum es Eigentümerstimme gibt" — Herleitung des Vereins;
                  zugleich die Vorlage für weitere Unterseiten
impressum.html    Angaben gemäß § 5 DDG
datenschutz.html  Datenschutzerklärung, Stand Juli 2026
images/           hero-eigentuemerstimme.jpg — Hero Startseite, 1672x941, JPEG q82
                  hero-warum.jpg             — Hero „Warum wir", 1672x941, JPEG q82
                  eco2050-logo-horz-farbe.svg — Partner-Logo (auch auf hausentscheider.de)
fonts/            Inter und Playfair Display, selbst gehostet (kein Dritt-CDN)
```

## Wartungshinweis zur Datenschutzerklärung

Die Datenschutzerklärung sagt aus, dass die Seite **keine Cookies setzt, nicht
trackt und kein JavaScript ausführt**. Das gilt nur für den aktuellen Stand und
ist heute nachweislich zutreffend — die Seite lädt ausschließlich HTML, zwei
Schriften und ein Bild vom eigenen Server.

Sobald ein Kontaktformular, ein Analysewerkzeug, eine Karte, ein eingebettetes
Video oder irgendein Script hinzukommt, werden diese Aussagen **falsch**. Dann
müssen die betroffenen Abschnitte und die Rechtsgrundlagen angepasst werden,
bevor die Änderung live geht.

Der Transfer-Satz zu Netlify stützt sich auf das EU-U.S. Data Privacy Framework.
Netlify, Inc. ist dort als aktiver Teilnehmer gelistet (geprüft Juli 2026,
dataprivacyframework.gov). Fällt die Zertifizierung weg, greift wieder allein
die Standardvertragsklausel-Begründung.

## Schriften

Inter und Playfair Display sind selbst gehostet, damit beim Seitenaufruf keine
Verbindung zu Google-Servern entsteht (DSGVO). Es sind Variable Fonts: eine
Datei deckt alle Schnitte einer Familie ab, `latin-ext` lädt der Browser nur
bei Bedarf.

Beide Familien stehen unter der SIL Open Font License 1.1. Die Lizenztexte
liegen bei (`fonts/OFL-Inter.txt`, `fonts/OFL-PlayfairDisplay.txt`) und müssen
bei Weitergabe erhalten bleiben.

## Partner-Bereich („Im Dialog mit")

Auf der Startseite steht nur, wer **tatsächlich zugesagt hat**. Heute ist das
allein eco2050. Alles andere läuft über den offenen Platz „Weitere Partner ·
in Gespräch".

Das gilt besonders für Hochschulen: Ein Logo liest sich als institutionelle
Zustimmung. Ein Forschungskontakt oder ein Interview im Rahmen einer
Masterarbeit ist keine. Eine Hochschule kommt erst in die Reihe, wenn eine
Zusage vorliegt — bei einer fremden Marke sinnvollerweise schriftlich.

## Abgrenzung zu hausentscheider.de

Zwei getrennte Körper: hausentscheider.de ist kommerziell, Eigentümerstimme ist
gemeinnützig. Die Trennung lebt auf Domain-Ebene — der Verein wird nie eine
Unterseite. Verweise fließen nur von der kommerziellen zur gemeinnützigen
Seite, nicht umgekehrt.

## Domain

`eigentuemerstimme.de` ist Primary Domain; `www.eigentuemerstimme.de` leitet per
301 dorthin. `eigentümerstimme.de` (Punycode `xn--eigentmerstimme-4vb.de`) läuft
als Netlify-Alias. Zertifikat von Let's Encrypt über Netlify.

Die DNS-Zone bleibt bei IONOS, damit die MX-Records für
`dialog@eigentuemerstimme.de` unangetastet bleiben:

```
@     A       75.2.60.5                     (Netlify)
www   CNAME   eigentuemerstimme.netlify.app
```

**Auf dem Apex gehört ein A-Record, niemals ein CNAME.** Ein CNAME auf `@` würde
die MX-Records aushebeln und die Vereins-E-Mail stilllegen. Das IONOS-Formular
zeigt „www" nur als grauen Platzhalter an — die Vorschauzeile unter dem Formular
ist die verlässliche Kontrolle.

**Offen:** Die Umlaut-Domain liefert derzeit direkt aus (HTTP 200) statt per 301
auf die Hauptdomain zu leiten — zwei indexierbare Adressen mit gleichem Inhalt.
