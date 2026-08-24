# Sitzungsbegleiter und Saalkarte — Umsetzung und offene Punkte

*24.08.2026 · Integration der Cowork-Lieferdateien in eigentuemerstimme.de*

Grundlage: `260823_Briefing_ClaudeCode_Sitzungsbegleiter.md` sowie die Lieferdateien
`260823_begleiter_LIEFERDATEI.html` und `260823_saalkarte_LIEFERDATEI.html`.

---

## 1 · Was jetzt im Projekt liegt

| Datei | Inhalt |
|---|---|
| `begleiter.html` | Der Sitzungsbegleiter. Achtzehn Situationen, Grundlagenteil, Leitungsmatrix, acht Standardsätze, Protokollteil, Fristen, drei Regeln. `noindex`, nicht in der Navigation. |
| `saalkarte.html` | Die Saalkarte, vier Blätter A4, druck-zuerst. `noindex`, nicht in der Navigation. |
| `documents/260823_…_Saalkarte_ENTWURF_v0.1.pdf` | Saalkarte zum Download, 216 KB. |
| `versammlung.html` | ergänzt um neun Tiefenlinks und einen Übergangsblock (siehe 3). |

Inhalt, Reihenfolge und Wortlaut der Lieferdateien sind unverändert. Geändert wurde nur, was die
Einbindung in den Bestand erforderte — plus vier Korrekturen, die unter 4 einzeln aufgeführt sind.

**Die Vollfassung als PDF entfällt.** Seit der Inhalt vollständig auf `begleiter.html` steht, wäre
sie eine 3-MB-Dublette derselben Sätze — mit dem bekannten Risiko, dass die eine Fassung gepflegt
wird und die andere veraltet im Umlauf bleibt. Wer die Vollfassung auf Papier braucht, druckt die
Seite; das Druck-Stylesheet klappt dafür alle Karten auf. Als Unterlage zum Mitnehmen bleibt die
Saalkarte, ausdrücklich als grobe Orientierung. Die Ursprungsdatei liegt unverändert im
OneDrive-Konzeptordner, falls das PDF später doch gebraucht wird.

## 2 · Technische Angleichung

- **Keine Fremdaufrufe.** Die Google-Fonts-Verweise beider Lieferdateien sind entfernt; beide Seiten
  binden `styles.css` mit den selbst gehosteten `@font-face`-Regeln ein. Nachgewiesen: außer den
  Verweisen auf `gesetze-im-internet.de` — Textlinks, wie im übrigen Bestand — kein Aufruf an einen
  fremden Host.
- **Ein Farbsystem.** Im Begleiter sind `--amber*`, `--ink*`, `--line`, `--ground` auf die
  Bestandstokens gemappt; `--signal` trägt den Bestandswert `#e4572e`. Seitenlokal bleiben nur die,
  die es im Bestand nicht gibt: `--petrol-deep`, `--surface`, `--surface-2`, `--line-strong`,
  `--signal-tint`, `--shadow-s/m`. Das seiteneigene `.wrap` ist entfernt, `styles.css` führt.
- **Saalkarte: eigener Druckfarbsatz, präfixiert.** Sie nutzt bewusst dunklere Farben als der
  Bildschirm (`#b07d20` statt `#c08a2c`, `#c9421c` statt `#e4572e`), weil Farbe auf Papier anders
  deckt. Damit diese Werte die Bildschirmtokens nicht überschreiben, sind sie durchgehend auf
  `--d-…` umbenannt. Zwei Sätze, die sich nicht ins Gehege kommen.
- **Header und Footer** byte-identisch aus `versammlung.html`. Im Browser gegengeprüft: Wortmarke,
  Navigation, Badge und Fußbereich rechnen dieselben Werte wie im übrigen Bestand.
- **Druck:** Kopfzeile, Fußbereich, Sofort-Einstieg und Download-Blöcke sind ausgeblendet. Der
  Rechtshinweis am Seitenende bleibt stehen, alle Karten öffnen sich.

## 2a · Aufbau der Seite — zwei Aufklapp-Ebenen

Die Seite zeigte im Auslieferungszustand **41 Handy-Bildschirme** hintereinander, und das schon mit
allen achtzehn Situationskarten zugeklappt. Alles andere — Grundlagenteil, Leitungsmatrix, die acht
Standardsätze, der Protokollteil, die Fristen — stand offen untereinander. Für ein Nachschlagewerk,
das im Saal unter Zeitdruck benutzt wird, ist das die falsche Form.

Übernommen wurde deshalb das Muster, das auf `wegweiser.html` bereits trägt: **Abschnittskopf als
aufklappbare Zeile mit Zählung.** Umgesetzt in der Formensprache dieser Seite, also mit der
vorhandenen Kopfzeile aus Teil-Nummer, Überschrift und Akzentlinie — dazu rechts die Zählung und ein
Pfeil.

Zwei Ebenen, beide ohne JavaScript bedienbar:

1. **Der Teil** — Grundlage und Teil 1 bis 6. Nur Teil 1 ist offen, der Rest zugeklappt.
2. **Die Phase** innerhalb von Teil 1 — „Bevor abgestimmt wird" (8), „Wenn abgestimmt wird" (5),
   „Wenn es kippt" (5). Alle drei zugeklappt.

Ergebnis: **5 Bildschirme statt 41.** Zugeklappt sind die Kopfzeilen zugleich das
Inhaltsverzeichnis — zwischen Bildschirm 3 und 5 sieht man das gesamte Gerüst der Seite auf einmal,
ohne zu scrollen. Der schnelle Weg bleibt unverändert: Suchfeld und Chip-Leiste stehen weiter oben,
ein Tipp führt direkt in die Karte.

Damit das trägt, klappt jeder seiteninterne Sprung sein Ziel **samt aller Ebenen darüber** auf —
Chip-Leiste, die zwölf Verweise aus der Leitungsmatrix, Querverweise im Text, Tiefenlinks von außen.
Ohne das läge das Ziel in einem zugeklappten Teil. Beim Drucken öffnet das Skript alle drei Ebenen;
zwei Druckregeln fangen den Fall ab, dass kein JavaScript läuft.

Nebenbei behoben: das Phasenband sprengte bei 375 px Breite die Zeile, und die Chips waren mit 40 px
knapp unter dem Maß, das als Tippziel trägt. Beides korrigiert, kein horizontaler Überlauf mehr.

## 3 · Querverweise zwischen den Seiten

Rollenteilung: `versammlung.html` sagt, **was möglich ist**, der Begleiter sagt, **welcher Satz
dazugehört**. Kein Inhalt wurde verschoben oder gelöscht.

**Von `versammlung.html` in den Begleiter** — sieben der acht Zeilen der Ziel-Werkzeug-Tabelle
haben jetzt einen Tiefenlink:

| Zeile | Ziel |
|---|---|
| Über mein Anliegen soll entschieden werden | `#s1` (A1) |
| Mehr Zeit, weil Unterlagen fehlen | `#s2` (A2) |
| Reihenfolge benachteiligt mein Thema | `#s4` (A4) |
| Beschluss soll kommen, offene Frage klären | `#s16` (B5) |
| Aussage soll nachweisbar bleiben | `#s11` (B4) |
| Ich brauche Unterlagen | `#s3` (A3) |
| Vergleichsangebote sichern | **kein Gegenstück** |
| Ich bin überstimmt worden | `#s13` (C2) |

Dazu ein Verweis vom Widerspruch-zu-Protokoll-Abschnitt auf `#s13`, einer vom Vollmachten-Abschnitt
auf `#s7` und der Übergangsblock am Ende des Saal-Kapitels.

**Vom Begleiter zurück:** von `#s7` auf den ausführlichen Vollmachtenteil, und aus Teil 5 auf den
Zeitstrahl und die Fristendarstellung.

**Dubletten, die bewusst stehen bleiben** (Bestand ist führend, nichts zusammengeführt):
Widerspruch zu Protokoll · Fristen nach § 45 · Vollmachten · die drei Checklisten und die
Fünf-Minuten-Prüfung, die es nur im Bestand gibt.

## 4 · Vier Korrekturen an den Lieferdateien

1. **Tiefenlinks öffneten die Zielkarte nicht.** Das Skript reagierte nur auf Klicks in der
   Chip-Leiste. Ein Aufruf `begleiter.html#s7` — QR-Code, geteilter Link — **und jeder Verweis aus
   der Leitungsmatrix** landete auf einer zugeklappten Zeile. Jetzt über `load` und `hashchange`,
   mit Absicherung gegen ungültige Sprungmarken.
2. **Die Saalkarte verwies auf `eigentuemerstimme.de/begleiter`.** Die Website nutzt durchgehend
   `.html` und hat keine Rewrite-Konfiguration; die Adresse hätte ins Leere geführt — auf einem
   gedruckten Blatt nicht mehr korrigierbar. Auf allen vier Blättern auf `/begleiter.html`
   geändert. Falls später erweiterungslose Adressen eingerichtet werden, kann das zurückgekürzt
   werden.
3. **Kopfzeile und Fußbereich wurden mitgedruckt.** Ausgeblendet.
4. **Im dunklen Farbschema war die Wortmarke unsichtbar.** Header und Footer aus `styles.css`
   rechnen mit hellem Grund; `--petrol-dark` färbte Wortmarke, Burger-Symbol und Badge dunkel auf
   dunkel. Korrekturblock ergänzt, der zusammen mit dem Dark-Theme wegfällt, falls es entfernt wird.

## 5 · Rechtsangaben

Am 24.08.2026 gegen den Wortlaut auf gesetze-im-internet.de gelesen: **§§ 18 Abs. 4, 19 Abs. 1,
23 Abs. 2, 24 Abs. 2/5/6/7, 25 Abs. 1/3/4, 44 Abs. 2, 45 WEG**. Alle Angaben tragen, auch im
Kontext ihrer Verwendung. Der Fristbeginn steht korrekt als „ab der Beschlussfassung", nicht ab
Zugang des Protokolls. Kein Urteil, kein Aktenzeichen. Die Herleitung des
Geschäftsordnungsantrags ist als „nach überwiegender Auffassung" gekennzeichnet.

**Der Entwurfsvermerk ist entfernt** — auf beiden Seiten steht die Reinfassung. Eine anwaltliche
Prüfung ist nicht vorgesehen; die fachliche Durchsicht übernimmt Claude Cowork mit den Skills für
WEG-Recht. Was dabei anzusehen ist:

- die **Musterformulierungen** in allen achtzehn Situationen und in den acht Standardsätzen — der
  Begleiter liefert ausformulierte Sätze zur Selbstverwendung und geht damit bewusst weiter als
  „ein Musteraufbau, keine Vorlage" (Leitplanke 2.13),
- den Abschnitt zur **Versammlungsleitung** (Teil 2),
- die Aussage, ein Geschäftsordnungsantrag sei **jederzeit zulässig, ohne Ankündigung, sofort
  abzustimmen**,
- die Formulierungen zum **Berichtigungs- und Ergänzungsverlangen** (Teil 5).

## 6 · Offene Punkte

**Zuerst: das Saalkarten-PDF ist noch die Entwurfsfassung.** Es wurde am 23.08.2026 um 17:35 aus der
Lieferdatei erzeugt, also bevor der Vermerk entfernt wurde — auf Blatt 1 steht dort weiterhin
„Entwurf, noch nicht freigegeben". Die HTML-Fassung ist sauber, das PDF nicht. Neu erzeugen:

1. `saalkarte.html` im Browser öffnen und drucken, Ziel „Als PDF speichern".
2. Papierformat A4, Ränder „keine" — das Stylesheet setzt `@page{size:A4;margin:0}` selbst.
   Ergebnis müssen genau vier Seiten sein.
3. Unter `documents/260824_Eigentuemerstimme_Saalkarte_v1.pdf` ablegen (ohne „ENTWURF" im Namen)
   und die alte Datei löschen. Die beiden Verweise in `begleiter.html` sind dann anzupassen.

Bis dahin führt der Knopf „Saalkarte im Browser drucken" auf die saubere Fassung, der PDF-Knopf auf
die alte. Die Seite ist `noindex` und nicht verlinkt, öffentlich ist also noch nichts.

**Entscheidungen, die beim Vorstand liegen:**

1. **Dark-Theme** behalten, entfernen oder website-weit? Der Begleiter bringt eines mit, keine
   andere Seite hat eines. Entfernen heißt: drei Blöcke löschen, dazu der Korrekturblock aus 4.4.
2. **Navigationsplatz.** Bis zur Freigabe nicht eingehängt, `aria-current` deshalb nicht gesetzt.
   Vorschlag: nach „Versammlung" als deren Werkzeugseite — die Navigation hat sechs Punkte und
   trägt einen siebten noch.
3. **Strukturiertes Markup** für Suchmaschinen: nicht eingebaut, offen.
5. **`noindex` stehen lassen oder aufheben?** Beide Seiten tragen es weiterhin. Es hing bisher an
   der anwaltlichen Prüfung; jetzt hängt es an der WEG-Durchsicht durch Cowork. Aufheben ist eine
   Zeile je Datei — aber erst, wenn die Durchsicht durch ist und das saubere PDF liegt.
4. **Die Zeile „Vergleichsangebote sichern"** hat kein Gegenstück im Begleiter. Entweder sie bleibt
   ohne Tiefenlink, oder es kommt eine Situation dazu.

**Drei Kontrastwerte unter dem Schwellenwert 4,5:1** — jeweils kleine Schrift, keine Fließtexte.
Ich habe sie nicht eigenmächtig geändert, weil sie Marken- und Bestandsfarben betreffen:

| Stelle | Farben | Wert |
|---|---|---|
| Spaltenkopf „Sachantrag" im Grundlagenteil | Weiß auf `--stimme` `#c08a2c` | 3,0 |
| Warn-Label in der Leitungsmatrix | `--signal` `#e4572e` auf `--signal-tint` | 3,3 |
| Rechtshinweis am Seitenende | `--text-mute` auf `--bg-light` | 3,2 |

Der zweite Wert ist eine Folge des Tokenmappings: Cowork hatte `#d64a22` gewählt, der Bestandswert
`#e4572e` ist heller. Das Briefing gibt dem Bestandswert den Vorrang, das steht so. Wer die drei
Werte heben will, braucht eine Entscheidung über die Farben selbst — sie wirkt dann website-weit.

**Zur Doppelpflege:** Saalkarte und Begleiter enthalten dieselben Sätze in zwei Fassungen, lang und
verdichtet. Aus Druckregeln allein war das nicht zu lösen — die Saalkarte wählt anders aus,
formuliert kürzer und hat eigene Bestandteile. Die zweite Datei ist damit begründet, bleibt aber
Doppelpflege: **wer einen Satz ändert, muss ihn an zwei Stellen ändern** — in `begleiter.html` und
in `saalkarte.html`, und danach das Saalkarten-PDF neu erzeugen. Mit dem Wegfall der PDF-Vollfassung
ist immerhin die dritte Stelle weg.

## 7 · Nicht gebaut, bewusst

Installierbarkeit (`manifest.json`, Service Worker, Offline-Nutzung im Versammlungsraum) steht laut
Briefing im Backlog und wartet auf die inhaltliche Freigabe.
