# Auftrag an Claude Cowork — Saalkarte anpassen und als Word-Fassung ausgeben

*24.08.2026 · von Claude Code (Integration eigentuemerstimme.de) an Claude Cowork*

> **Nachtrag vom 24.08.2026, nach Versand.** AP1 ist erledigt — das PDF liegt als
> `documents/260824_Eigentuemerstimme_Saalkarte_v1.pdf` im Projekt. Anschließend wurde entschieden,
> dass die Saalkarte **nur noch als Druckfassung zum Download** angeboten wird; die
> Bildschirmfassung `saalkarte.html` ist aus dem Projekt entfernt worden. Der Auftrag zur
> **Word-Fassung (AP2) gilt unverändert** — die dafür nötige Datei liegt Cowork bereits vor.
> Wo unten „`saalkarte.html` aus dem Projekt" steht, ist jetzt die mitgeschickte Fassung gemeint
> beziehungsweise Commit `4423622` der Versionsgeschichte. Auch Abschnitt 6 ist überholt: es gibt
> künftig zwei Fassungen, das PDF und die Word-Datei, keine drei.

Du hast am 23.08.2026 den Sitzungsbegleiter und die Saalkarte erstellt. Beide sind inzwischen in die
Website integriert. Zwei Dinge sind zu tun: die Saalkarte auf den aktuellen Stand bringen (AP1) und
eine Word-Fassung davon erzeugen (AP2).

**Lies zuerst Abschnitt 5.** Dort steht eine Empfehlung zur Reihenfolge, die dir Doppelarbeit
ersparen kann.

---

## 1 · Was sich seit deiner Lieferung geändert hat

Es wird **keine anwaltliche Prüfung** geben. Die fachliche Durchsicht des WEG-Rechts soll bei dir
liegen, mit den entsprechenden Skills. Der Entwurfsvermerk ist deshalb entfallen — auf die Website
kommt nur die Reinfassung.

Die Datei im Projekt heißt `saalkarte.html` und unterscheidet sich von deiner
`260823_saalkarte_LIEFERDATEI.html` in genau diesen Punkten:

**Inhaltlich, zwei Stellen:**

1. Der Kasten auf Blatt 1 lautet jetzt — Klasse `.rhinweis` statt `.entwurf`, neutrale Farben statt
   Warnrot, gleiche Maße, damit der Umbruch hält:
   > **Allgemeine Information, keine Rechtsberatung.** Rechtsstand August 2026 · Abweichende
   > Regelungen Ihrer Gemeinschaftsordnung gehen dem gesetzlichen Regelfall in vielen Punkten vor.
2. Der Fußverweis auf allen vier Blättern lautet `eigentuemerstimme.de/begleiter.html` statt
   `…/begleiter`. Die Website nutzt durchgehend `.html` und hat keine Rewrite-Konfiguration; ohne
   die Endung liefe die gedruckte Adresse ins Leere.

**Technisch, ohne Auswirkung auf den Inhalt:**

3. Die drei Google-Fonts-Zeilen sind entfernt. Stattdessen ist `styles.css` eingebunden, das die
   selbst gehosteten `@font-face`-Regeln für Inter und Playfair Display trägt. Kein Aufruf an einen
   fremden Host — das ist eine Datenschutzzusage der Website, keine Geschmacksfrage.
4. Die Datei hat jetzt Doctype, `<html lang="de">`, `<head>` mit `noindex`, Titel und Beschreibung,
   sowie `<body>`.
5. Alle Farbtokens der Saalkarte sind auf `--d-…` umbenannt (`--d-stimme`, `--d-signal`, `--d-ink`
   und so weiter). Grund: deine Druckfarben sind bewusst dunkler als die Bildschirmfarben der
   Website (`#b07d20` statt `#c08a2c`, `#c9421c` statt `#e4572e`). Unter den alten Namen hätten sie
   die Bildschirmtokens aus `styles.css` überschrieben. Die **Werte sind unverändert** — nur die
   Namen sind eindeutig gemacht.

> **Arbeite auf `saalkarte.html` aus dem Projekt, nicht auf deiner Lieferdatei.** Am 24.08. lag in
> `Downloads/` eine ältere Fassung des Sitzungsbegleiters mit 14 statt 18 Situationen; die
> Integration darauf aufzubauen war Fehlarbeit. Diesen Fehler bitte nicht wiederholen: eine Quelle,
> und das ist die Projektdatei.

---

## 2 · AP1 — Saalkarte anpassen

Wenn du die Punkte aus Abschnitt 1 bereits übernommen bekommst, ist an der HTML-Fassung **nichts
mehr zu tun**. Zu tun bleibt nur:

**Das PDF neu erzeugen.** Das aktuelle `documents/260823_Eigentuemerstimme_Saalkarte_ENTWURF_v0.1.pdf`
stammt vom 23.08.2026, 17:35 Uhr — also aus der Lieferdatei mit dem Entwurfsvermerk. Auf Blatt 1
steht dort weiterhin „Entwurf, noch nicht freigegeben". Die HTML-Fassung ist sauber, das PDF nicht.

- Quelle: `saalkarte.html` in der aktuellen Fassung.
- A4, Ränder „keine" — das Stylesheet setzt `@page{size:A4;margin:0}` selbst.
- Ergebnis müssen **genau vier Seiten** sein. Wenn es fünf werden, stimmt eine Randeinstellung nicht.
- Dateiname: `260824_Eigentuemerstimme_Saalkarte_v1.pdf`. Ohne „ENTWURF", da nicht mehr zutreffend.

Wenn dir beim Durchsehen inhaltlich etwas auffällt, melde es zurück — ändere es nicht still. Der
Wortlaut ist mit `begleiter.html` abgestimmt, und die Situationskennungen tragen Querverweise
(siehe Abschnitt 4).

---

## 3 · AP2 — Die Word-Fassung

**Zweck:** eine bearbeitbare Fassung, die gedruckt genauso aussieht wie das PDF. Sie soll
weitergegeben und angepasst werden können — von der Initiative selbst und von Gemeinschaften, die
sie an ihre Lage anpassen wollen.

Falls du sie stattdessen als **digital ausfüllbares Formular** verstehen sollst, sag Bescheid: dann
brauchen die Mitschrieb-Zeilen mehr Höhe, und die Eintragfelder werden Formularfelder statt
Tabellenzellen. Bis dahin gilt die Auslegung oben.

### 3.1 Was zwingend ist

- **Genau vier Seiten A4** mit harten Seitenumbrüchen, Reihenfolge und Inhalt wie in `saalkarte.html`.
  Seitenränder wie im HTML: oben 13 mm, seitlich 12 mm, unten 11 mm.
- **Echte Word-Objekte, keine Bilder.** Das ist der Punkt, an dem eine Word-Fassung steht oder fällt:
  - Der **Mitschrieb** auf Blatt 3 als echte Word-Tabelle mit festen Zeilenhöhen, damit man
    hineinschreiben kann — auf Papier wie am Bildschirm. Neun Zeilen, sechs Spalten, Spaltenbreiten
    wie im HTML (TOP 12 mm · Antrag 58 mm · Ja/Nein/Enth. 24 mm · Verkündet 20 mm · Widerspruch
    44 mm · Uhrzeit 18 mm).
  - Die Tabelle „meine drei Punkte" ebenso, drei Zeilen, vier Spalten.
  - Die **Kästchen** der Prüflisten auf Blatt 4 als Zeichen `☐` (U+2610), nicht als Grafik und nicht
    als Aufzählungszeichen.
  - Die drei **Fristenfelder** auf Blatt 4 als Tabellenzellen mit unterer Rahmenlinie zum
    Handeintrag.
- **Absatzformatvorlagen statt direkter Formatierung.** Lege benannte Formatvorlagen an —
  Blattüberschrift, Abschnittsüberschrift, Situationsnummer, Situationstitel, Satz, Hinweis, Fußzeile
  — und formatiere ausschließlich darüber. Wer später eine Schriftgröße ändern will, ändert dann eine
  Vorlage und nicht achtzehn Absätze.
- **Kopf- und Fußzeile je Blatt:** oben die Wortmarke und der Blatttitel, unten
  „Die Saalkarte · Blatt X von 4" und `eigentuemerstimme.de/begleiter.html`.
- **Kein Entwurfsvermerk.** Stattdessen der Rechtshinweis aus Abschnitt 1.

### 3.2 Schrift und Farbe

Playfair Display für Überschriften, Inter für den Fließtext — wie im HTML. **Beide sind auf den
wenigsten Windows-Rechnern installiert**, und Word ersetzt fehlende Schriften ohne Rückfrage. Bitte
deshalb:

- die Schriften in die Datei einbetten, wenn das Format es zulässt, **oder**
- auf ein Paar ausweichen, das überall vorhanden ist — Georgia für Überschriften, Calibri für den
  Text — und im Rückmeldetext festhalten, dass du das getan hast und warum.

Was nicht passieren darf: eine Datei, die bei dir richtig aussieht und beim Empfänger in Times New
Roman umbricht.

Farben sind die Druckfarben, unverändert:

| | |
|---|---|
| Petrol dunkel | `#14302f` |
| Amber | `#b07d20` |
| Koralle | `#c9421c` |
| Erkenntnisblau | `#2f6e8c` |
| Linien | `#d8d4cd` |
| Text | `#14201f`, weicher `#4f5a58` |

### 3.3 Ablage

`260824_Eigentuemerstimme_Saalkarte_v1.docx`, nach der bestehenden Namenskonvention.

---

## 4 · Was unverändert bleiben muss

- **Der Wortlaut.** Alle Sätze sind mit `begleiter.html` abgestimmt. Keine Umformulierung, keine
  Kürzung, keine Ergänzung ohne Rückmeldung.
- **Die Situationskennungen A1–A8, B1–B5, C1–C5.** Sie sind keine Beschriftung, sondern Adressen:
  `begleiter.html` führt sie als Sprungziele `#s1` bis `#s18`, und die Leitungsmatrix dort verweist
  mit zwölf Links darauf. Eine Umnummerierung bricht diese Verweise — und später jeden gedruckten
  QR-Code. Die Zuordnung ist A1–A7 = `s1`–`s7`, A8 = `s15`, B1–B4 = `s8`–`s11`, B5 = `s16`,
  C1–C3 = `s12`–`s14`, C4 = `s17`, C5 = `s18`.
- **Die Aufteilung auf vier Blätter** und die Reihenfolge darin.
- **Der Rechtshinweis auf Blatt 1** und der Fußtext auf Blatt 4. Beide tragen die Aussagen, die nach
  dem Wegfall des Entwurfsvermerks die einzigen rechtlichen Einordnungen sind.

---

## 5 · Zur Reihenfolge — eine Empfehlung

Die **WEG-fachliche Durchsicht steht noch aus**. Sie betrifft vor allem die Musterformulierungen in
den achtzehn Situationen und in den acht Standardsätzen, den Abschnitt zur Versammlungsleitung, die
Aussage zum jederzeit zulässigen Geschäftsordnungsantrag und die Formulierungen zum
Berichtigungsverlangen.

Wenn diese Durchsicht Sätze ändert — und danach sieht es aus, dafür macht man sie —, dann ändern
sich dieselben Sätze in der Saalkarte, im PDF **und in der Word-Fassung**. Eine jetzt gebaute
Word-Datei wäre danach noch einmal zu bauen.

**Vorschlag:** die WEG-Durchsicht zuerst, dann in einem Zug PDF und Word-Fassung. Falls die
Word-Datei aus anderen Gründen jetzt gebraucht wird, ist das in Ordnung — dann bitte damit rechnen,
dass eine zweite Runde folgt, und den Aufbau entsprechend änderungsfreundlich anlegen (das ist der
eigentliche Grund für die Formatvorlagen in 3.1).

Das ist eine Empfehlung, keine Bedingung. Die Entscheidung liegt beim Vorstand.

---

## 6 · Ein Hinweis zur Pflege

Nach diesem Auftrag gibt es die Saalkarte in drei Fassungen: `saalkarte.html`, das PDF und die
Word-Datei. Dazu kommen dieselben Sätze in `begleiter.html` in ausführlicher Form.

Damit das nicht auseinanderläuft, schlage ich eine Regel vor: **`saalkarte.html` ist die
Quelle.** PDF und Word werden daraus abgeleitet, nie umgekehrt. Wer einen Satz ändert, ändert ihn
dort — und erzeugt beide Ableitungen neu. Eine Änderung, die zuerst in der Word-Datei passiert, ist
nach der nächsten Ableitung weg.

Wenn du beim Bauen merkst, dass sich das anders besser lösen lässt: Vorschlag ja, stiller Umbau
nein.
