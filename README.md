# eigentuemerstimme.de

Website der gemeinnützigen Initiative **Eigentümerstimme** (in Gründung), Erfurt.

Statisches HTML/CSS, kein Build, kein Framework. Deployment über Netlify.

## Stand

Vorabauftritt mit der Startseite „in Gründung", Impressum und
Datenschutzerklärung. Läuft als unverlinkte Netlify-Vorschau.

**Vor dem Domain-Launch:** Das `<meta name="robots" content="noindex, nofollow">`
steht in **allen drei** HTML-Dateien und muss überall entfernt werden. Zu finden
über den Marker im Kommentar darüber:

```
git grep -n VORSCHAU-STATUS
```

## Struktur

```
index.html        Startseite (Styles inline, wie bei hausentscheider.de)
impressum.html    Angaben gemäß § 5 DDG
datenschutz.html  Datenschutzerklärung, Stand Juli 2026
images/           hero-eigentuemerstimme.jpg — Hero-Motiv, 1672x941, JPEG q82
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

## Abgrenzung zu hausentscheider.de

Zwei getrennte Körper: hausentscheider.de ist kommerziell, Eigentümerstimme ist
gemeinnützig. Die Trennung lebt auf Domain-Ebene — der Verein wird nie eine
Unterseite. Verweise fließen nur von der kommerziellen zur gemeinnützigen
Seite, nicht umgekehrt.

## Domain (geplant)

`eigentuemerstimme.de` als Primary Domain. `eigentümerstimme.de`
(Punycode `xn--eigentmerstimme-4vb.de`) und `eigentumerstimme.de` werden als
Netlify-Aliase geführt und per 301 auf die Hauptdomain geleitet.

Die DNS-Zone bleibt bei IONOS, damit die MX-Records für
`dialog@eigentuemerstimme.de` unangetastet bleiben: A-Record auf die
Netlify-IP, `www` als CNAME auf die `*.netlify.app`-Adresse.
