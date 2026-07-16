# eigentuemerstimme.de

Website der gemeinnützigen Initiative **Eigentümerstimme** (in Gründung), Erfurt.

Statisches HTML/CSS, kein Build, kein Framework. Deployment über Netlify.

## Stand

Vorabauftritt mit der Startseite „in Gründung". Die Seite trägt derzeit
`noindex` und läuft als unverlinkte Netlify-Vorschau.

**Vor dem Domain-Launch sind zwei Dinge zwingend:**

1. Impressum (§ 5 DDG, mit ladungsfähiger Anschrift) und Datenschutzerklärung
   müssen stehen.
2. Das `<meta name="robots" content="noindex, nofollow">` in `index.html`
   muss entfernt werden.

## Struktur

```
index.html   Startseite (Styles inline, wie bei hausentscheider.de)
images/      hero-eigentuemerstimme.jpg — Hero-Motiv, 1672x941, JPEG q82
fonts/       Inter und Playfair Display, selbst gehostet (kein Dritt-CDN)
```

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
