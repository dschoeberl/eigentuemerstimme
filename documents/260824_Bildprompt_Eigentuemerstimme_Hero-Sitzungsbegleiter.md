# Bild-Prompt — Hero „Der Sitzungsbegleiter"

*24.08.2026 · Für ChatGPT / DALL·E · Ergänzt `Bildprompt_Eigentuemerstimme_Hero.md`, ersetzt es nicht*

Zielseite: `begleiter.html` — „Bevor Sie die Hand heben". Zieldatei: `images/hero-begleiter.jpg`.

---

## 0 · Nachtrag 24.08.2026 — die Fassung ohne eingebrannten Verlauf

Die erzeugte Fassung ist inhaltlich richtig und im Einsatz (`images/hero-begleiter.jpg`). Sie hat
aber **den dunklen Petrol-Verlauf links ins Bild gerechnet**. Die Website legt denselben Verlauf
noch einmal per CSS darüber — deshalb musste er dort auf gut die Hälfte reduziert werden, und diese
eine Seite weicht als einzige vom Muster aller anderen Heros ab.

Ziel des Nachtrags: **dieselbe Aufnahme, nur ohne Abdunklung.** Dann greift derselbe Verlauf wie auf
allen anderen Seiten, und die Sonderbehandlung im Quelltext fällt weg.

> **Am besten kein neuer Wurf, sondern eine Änderung am vorhandenen Bild.** Die Komposition sitzt —
> die sprechende Frau, die zugewandten Zuhörer, die erhobene Hand am rechten Rand, der
> Verwaltungstisch unscharf dahinter. Eine Neugenerierung trifft das womöglich nicht wieder.

### 0.1 Erste Wahl — Änderung am vorhandenen Bild

Das erzeugte Bild in ChatGPT erneut aufrufen und anfügen:

> Nimm die dunkle Abdunklung auf der linken Bildseite heraus. Das Bild soll über die gesamte Breite
> gleichmäßig belichtet sein, so wie der rechte Teil — natürliches Raumlicht, keine Vignette, kein
> Farbverlauf, keine abgedunkelte Zone. Motiv, Bildausschnitt, Personen, Farben und Stimmung bleiben
> exakt unverändert. Gib es in 16:9 und in der höchstmöglichen Auflösung aus.

### 0.2 Zweite Wahl — neu erzeugen

Nur falls die Änderung nicht trägt. Der Zusatz gegenüber dem Prompt in Abschnitt 2 und 3 ist der
letzte Absatz — er ist der eigentliche Punkt:

> Dokumentarische Reportage-Fotografie (Anmutung GEO oder ZEIT), 16:9. Eine Eigentümerversammlung in
> einem schlichten Gemeinde- oder Hotelsaal, mitten im Gespräch. Sechs bis neun Erwachsene
> unterschiedlichen Alters sitzen an zusammengestellten Tischen. Eine Frau rechts der Bildmitte
> spricht gerade und untermalt es mit einer ruhigen Handbewegung; zwei Personen wenden sich ihr zu
> und hören konzentriert zu, eine dritte hebt am rechten Bildrand halb die Hand für eine
> Wortmeldung, eine vierte notiert etwas. Im Vordergrund links sitzt eine Person von hinten
> angeschnitten. Auf den Tischen Papiere, Stifte, Wassergläser, eine Brille. Im unscharfen
> Hintergrund ein Vorstandstisch und eine helle Wand, rechts hohe Altbaufenster mit warmem Tageslicht.
> Alltagskleidung, keine Anzüge. Engagierter, sachlicher Austausch — unterschiedliche Meinungen sind
> spürbar, der Ton bleibt respektvoll. Niemand lächelt in die Kamera, keine gestellten Posen. Warmes
> Licht, gedämpfter Farbklang aus Petrol und Bernstein. Realistischer dokumentarischer Fotostil,
> natürliche Hauttöne. Keine lesbare Schrift auf Papieren, Wänden oder Bildschirmen.
>
> **Wichtig zur Belichtung: das Bild muss über die gesamte Breite gleichmäßig ausgeleuchtet sein.
> Keine Vignette, kein Farbverlauf, keine abgedunkelte Zone, kein dunkler Balken — auch nicht am
> linken Rand. Die linke Bildhälfte soll ruhig komponiert sein (Wand, Tischkante, angeschnittene
> Rücken — nichts, was der Betrachter sehen muss), aber genauso hell wie der Rest. Die Abdunklung
> für den Text wird später technisch ergänzt und darf nicht im Bild stecken.**
>
> Seitenverhältnis 16:9, mindestens 2400 Pixel Breite.

### 0.3 Englisch

> Documentary reportage photograph (GEO / ZEIT feel), 16:9. A German homeowners' association meeting
> in a plain community hall, caught mid-discussion. Six to nine adults of different ages at tables
> pushed together. A woman right of centre is speaking with a calm hand gesture; two people turn
> toward her listening intently, a third at the right edge half-raises a hand to ask for the floor,
> a fourth is writing a note. In the left foreground, a person seen from behind, cropped. Papers,
> pens, water glasses on the tables. Softly out of focus behind, a board table and a pale wall; tall
> old-building windows on the right with warm daylight. Everyday clothing, no suits. Engaged,
> matter-of-fact debate — differing views visible, tone respectful. Nobody smiles at the camera, no
> staged poses. Warm light, muted petrol-teal and amber harmony. Realistic documentary photography,
> natural skin tones. No legible text anywhere.
>
> **Critical lighting note: the image must be evenly lit across its entire width. No vignette, no
> gradient, no darkened zone, no dark bar — especially not on the left edge. Compose the left half
> to be calm (wall, table edge, cropped backs — nothing the viewer needs to see) but keep it exactly
> as bright as the rest. The darkening for the text overlay is added later in code and must not be
> baked into the image.**
>
> 16:9 aspect ratio, at least 2400 pixels wide.

### 0.4 Wenn die neue Fassung da ist

Als JPG unter `images/hero-begleiter.jpg` ablegen, dann sind im Quelltext von `begleiter.html` vier
Zahlen zu ändern — die Zielwerte stehen als Kommentar direkt über der Regel:

```
von  rgba(13,32,31,.62) 0%, .58 34%, .46 64%, .26 100%
auf  rgba(13,32,31,.96) 0%, .90 34%, .64 64%, .40 100%
```

Danach läuft die Seite auf demselben Verlauf wie alle anderen. Ich prüfe die Lesbarkeit erneut nach.

---

## 1 · Was das Bild zeigen soll

**Der Moment mitten in der Eigentümerversammlung.** Nicht die Vorbereitung am Schreibtisch, nicht
der leere Saal vorher — der Austausch selbst, während er läuft. Mehrere Eigentümerinnen und
Eigentümer im Gespräch: eine Person spricht, andere wenden sich ihr zu, jemand hebt die Hand,
jemand macht sich Notizen. Es ist etwas im Gange.

**Abgrenzung nach innen.** `versammlung.html` hat bereits ein Stillleben — Ordner, Brille, Fenster
mit Altstadtblick, niemand im Bild. Das ist die Seite der Vorbereitung. Der Begleiter ist die Seite
des Augenblicks, und das muss man am Bild sofort sehen. Zwei Seiten, zwei Bildsprachen.

**Der schmale Grat.** Gewünscht ist *dynamischer Austausch*, nicht Streit. Die Website macht
wehrhaft, ohne ein Feindbild zu bauen — das gilt auch für das Bild. Man soll sehen: hier wird
engagiert und mit unterschiedlichen Meinungen diskutiert, und trotzdem sachlich. Niemand schreit,
niemand zeigt mit dem Finger auf jemanden, niemand verschränkt demonstrativ die Arme. Der Ton ist
lebendig, aufmerksam, ernsthaft.

---

## 2 · Prompt (Deutsch)

> Dokumentarische Reportage-Fotografie (Anmutung GEO oder ZEIT), 16:9. Eine
> Eigentümerversammlung in einem schlichten Gemeinde- oder Hotelsaal, mitten im Gespräch. Sechs bis
> neun Erwachsene unterschiedlichen Alters sitzen an zusammengestellten Tischen, einige leicht
> vorgebeugt. Eine Frau in der Bildmitte rechts spricht gerade und untermalt es mit einer ruhigen
> Handbewegung; zwei Personen wenden sich ihr zu und hören konzentriert zu, eine dritte hebt am
> Bildrand halb die Hand für eine Wortmeldung, eine vierte notiert etwas auf einem Blatt. Auf den
> Tischen liegen Papiere, Stifte, Wassergläser, eine Brille. Im unscharfen Hintergrund ein
> Vorstands- oder Verwaltungstisch und eine helle Wand. Alltagskleidung, keine Anzüge. Engagierter,
> sachlicher Austausch — unterschiedliche Meinungen sind spürbar, der Ton bleibt respektvoll.
> Niemand lächelt in die Kamera, keine gestellten Posen, kein Blickkontakt zum Betrachter. Warmes
> Abendlicht aus hohen Fenstern, gemischt mit ruhigem Raumlicht; gedämpfter Farbklang aus Petrol und
> Bernstein. Die Personen und die Bewegung liegen in der **rechten Bildhälfte**; die linke Hälfte
> ist ruhig, dunkler und weitgehend leer für eine Textüberschrift. Realistischer dokumentarischer
> Fotostil, natürliche Hauttöne, mittlere Tiefenschärfe. Keine lesbare Schrift auf Papieren,
> Wänden oder Bildschirmen.

## 3 · Prompt (English) — bei DALL·E meist das bessere Ergebnis

> Documentary reportage photograph (GEO / ZEIT feel), 16:9. A German homeowners' association meeting
> in a plain community or hotel function room, caught mid-discussion. Six to nine adults of
> different ages sit at tables pushed together, some leaning slightly forward. A woman in the
> right-hand centre is speaking, underlining her point with a calm hand gesture; two people turn
> toward her listening intently, a third at the edge of frame half-raises a hand to ask for the
> floor, a fourth is writing a note on a sheet of paper. Papers, pens, water glasses and a pair of
> glasses on the tables. Softly out of focus in the background, a board or management table and a
> pale wall. Everyday clothing, no business suits. Engaged, matter-of-fact debate — differing views
> are visible, the tone stays respectful. Nobody smiles at the camera, no staged poses, no eye
> contact with the viewer. Warm evening light from tall windows mixed with quiet interior lighting;
> muted petrol-teal and amber colour harmony. People and movement sit in the **right half** of the
> frame; the left half is calm, darker and largely empty for a text overlay. Realistic documentary
> photography, natural skin tones, medium depth of field. No legible text on papers, walls or
> screens.

---

## 4 · Zwei Varianten, falls die erste nicht trägt

**Variante B — näher dran, weniger Übersicht.** Ausschnitt aus zwei bis drei Personen an einem
Tisch, eine spricht mit ruhiger Geste, eine hört mit aufgestütztem Kinn zu, eine dritte nur
angeschnitten. Der Rest des Saals löst sich in Unschärfe auf. Wirkt intimer und ist für das
Handy-Format robuster, weil weniger Bildinformation verlorengeht.

**Variante C — aus der zweiten Reihe.** Über die Schulter einer sitzenden Person hinweg fotografiert,
im Vordergrund unscharf ihr Blatt mit Notizen und ihre Hand mit dem Stift; scharf dahinter die
Gruppe im Gespräch. Erzählt am direktesten die Rolle des Lesers: Sie sitzen mittendrin und haben
etwas vor sich liegen. Achtung — das Blatt im Vordergrund darf keine lesbare Schrift zeigen.

---

## 5 · Unbedingt vermeiden

Zusätzlich zu den Punkten aus dem Grundlagendokument (kein In-die-Kamera-Lächeln, kein
Handschlag-Stockfoto, keine Demonstration, kein Megafon, keine Business-Kleidung, keine gestellten
Posen):

- **Keine Konfrontation.** Niemand steht drohend, zeigt mit dem Finger, beugt sich über andere,
  verschränkt vorwurfsvoll die Arme. Kein sichtbarer Ärger in den Gesichtern.
- **Kein Rednerpult, kein Mikrofon, keine Bühne.** Eine ETV ist keine Konferenz. Zusammengestellte
  Tische, normale Stühle.
- **Keine lesbare Schrift.** Bildgeneratoren erzeugen darauf verlässlich Buchstabensalat. Papiere
  angeschnitten, angewinkelt oder leicht unscharf halten. Das gilt auch für Flipcharts, Beamerbilder
  und Namensschilder.
- **Kein Klassenzimmer-Eindruck.** Nicht alle in Reihen frontal nach vorn — die Sitzordnung soll
  Gespräch zeigen, nicht Unterricht.
- **Keine Hochglanz-Anmutung.** Kein Konferenzhotel mit Glaswand, keine Designerlampen. Der Raum ist
  schlicht und ein bisschen unperfekt.
- **Keine Altersschieflage.** Nicht nur Senioren, nicht nur Mittvierziger. Gemischt, wie eine echte
  Gemeinschaft.
- **Keine Hände mit sechs Fingern.** Bei erhobenen Händen und Gesten genau hinsehen — das ist bei
  diesem Motiv die häufigste Bildfehlerquelle. Lieber ein Durchlauf mehr.

---

## 6 · Technische Vorgaben

- **Format:** 16:9, mindestens 2400 px breit. Ablage als `images/hero-begleiter.jpg`.
- **Textzone links.** Über dem Bild liegt ein Petrol-Verlauf, der links mit **96 % Deckung** anfängt
  und nach rechts auf **40 %** ausläuft. Was links im Bild steht, ist praktisch unsichtbar. **Alles
  Wesentliche gehört in die rechte Bildhälfte.**
- **Das Motiv muss unter dem Schleier lesbar bleiben.** Es wird deutlich abgedunkelt und
  petrolstichig. Deshalb: kräftige Helligkeitsunterschiede, klare Silhouetten, Gesichter und Gesten
  im helleren Bereich. Feine Details und zarte Farbnuancen gehen verloren.
- **Handy-Ansicht.** Unter 760 px Breite wird das Bild rechts angeschnitten und mit 78–93 % Deckung
  überlagert. Wenn das Motiv nur als Ganzes funktioniert, bleibt auf dem Telefon nichts übrig —
  deshalb sollte die Kernszene auch in einem rechten Ausschnitt noch tragen. Das ist das stärkste
  Argument für Variante B.
- **Farbklang:** Petrol `#1a5c5a` und Bernstein `#c08a2c`, gedämpft, nicht knallig.

---

## 7 · Einbau, wenn das Bild da ist

Der Seitenkopf `.top` in `begleiter.html` ist heute eine einfarbige Petrolfläche. Er bekommt das
Bild nach demselben Muster wie `.ghead` in `versammlung.html` — Inhalt und Aufbau bleiben
unverändert:

```css
.top{
  background-color:var(--petrol-deep);
  background-image:linear-gradient(90deg, rgba(13,32,31,.97) 0%, rgba(13,32,31,.92) 34%,
    rgba(13,32,31,.68) 64%, rgba(13,32,31,.44) 100%), url('images/hero-begleiter.jpg');
  background-size:cover;background-position:center right;background-repeat:no-repeat;
  color:#e6efee;padding:26px 0 34px;position:relative;overflow:hidden;
}
@media(max-width:760px){
  .top{background-position:right center;
    background-image:linear-gradient(180deg, rgba(13,32,31,.94) 0%, rgba(13,32,31,.88) 55%,
      rgba(13,32,31,.80) 100%), url('images/hero-begleiter.jpg')}
}
```

Dazu gehört der Kennzeichnungs-Chip nach Art. 50 KI-VO, wie auf allen anderen Heros:

```html
<span class="ki-hinweis">Bild: KI-generiert</span>
```

Der Druck bleibt unberührt: die Druckregel setzt `.top{background:#fff;color:#000}` als Kurzschrift,
und die setzt das Hintergrundbild mit zurück.

**Nachzutragen:** eine Zeile in `images/BILDNACHWEIS.md` — Datei, Herkunft „KI-erzeugt",
Werkzeug, Datum, Kennzeichnung „ja", Verwendung „begleiter.html — Hero".
