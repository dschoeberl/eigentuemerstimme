/* Datenquelle Gesetzes-Zeitstrahl fuer eigentuemerstimme.de
   Neuer Eintrag = ein Objekt ergaenzen; die Seite sortiert nach iso-Datum.
   Perspektiven (Chips): eigentuemer | gemeinschaft | mieter | verwalter | versorger.
   profitiert / geschwaecht: {rolle, why} oder null. null = niemand wird
   nennenswert geschwaecht („keine"). Die Kommune bleibt als verantwortliche,
   steuernde Instanz nur im Fliesstext — kein Chip.
   Neutral halten: „erweitert / verengt den Spielraum", belegt, keine Wertung.
   Signal-Koralle wird NICHT als Bewertungsfarbe verwendet (Guardrail).
   quelle: zitierfaehige, unabhaengige Fundstelle. stand: iso-Datum der letzten
   redaktionellen Pruefung (YYYY-MM-DD).
   Wichtig: in den Strings keine geraden Anfuehrungszeichen verwenden — nur
   typografische („ "), sonst bricht der Datenblock. */

const ROLLEN = {
  eigentuemer:  { label: "Eigentümer:innen",    farbe: "var(--stimme)" },
  gemeinschaft: { label: "Gemeinschaft (GdWE)", farbe: "var(--taupe)" },
  mieter:       { label: "Mieter:innen",        farbe: "var(--terrakotta)" },
  verwalter:    { label: "Verwalter",           farbe: "var(--petrol)" },
  versorger:    { label: "Versorger",           farbe: "var(--schiefer)" }
};

const ZEITSTRAHL = [
  {
    iso: "2020-12-01", datum: "01.12.2020",
    titel: "WEG-Reform (WEMoG)", kategorie: "Gesetz", status: "in-kraft",
    text: "Die Gemeinschaft wird selbst rechtsfähig; bauliche Veränderungen genügen der einfachen Mehrheit, das Anwesenheitsquorum entfällt, der zertifizierte Verwalter wird eingeführt.",
    profitiert: { rolle: "eigentuemer", why: "Bauliche Veränderungen mit einfacher Mehrheit, Anspruch auf einen zertifizierten Verwalter, begrenzte Beiratshaftung." },
    geschwaecht: null,
    quelle: "WEG-Reform (WEMoG), in Kraft seit 01.12.2020",
    stand: "2026-07-31"
  },
  {
    iso: "2023-01-01", datum: "01.01.2023",
    titel: "CO₂-Kostenaufteilungsgesetz in Kraft", kategorie: "Gesetz", status: "in-kraft",
    text: "Ein Stufenmodell verteilt die CO₂-Kosten des Heizens zwischen Vermieter und Mieter nach dem CO₂-Ausstoß je Quadratmeter: Je schlechter der energetische Zustand des Gebäudes, desto größer der Anteil des Vermieters.",
    profitiert: { rolle: "mieter", why: "Bei energetisch schlechten Gebäuden trägt der Vermieter einen wachsenden Teil der CO₂-Kosten — die Last verschiebt sich weg vom Mieter." },
    geschwaecht: { rolle: "eigentuemer", why: "Vermietende Eigentümer tragen anteilig die CO₂-Kosten — zugleich ein Anreiz zur energetischen Sanierung." },
    quelle: "Kohlendioxidkostenaufteilungsgesetz (CO₂KostAufG), in Kraft seit 01.01.2023",
    stand: "2026-08-01"
  },
  {
    iso: "2023-12-01", datum: "01.12.2023",
    titel: "Anspruch auf zertifizierten Verwalter (§ 26a)", kategorie: "Gesetz", status: "in-kraft",
    text: "Eigentümer haben grundsätzlich Anspruch auf einen zertifizierten Verwalter — Nachweis der Sachkunde per IHK-Prüfung.",
    profitiert: { rolle: "eigentuemer", why: "Sachkunde wird einforderbar; Qualität der Verwaltung wird zum Anspruch." },
    geschwaecht: { rolle: "verwalter", why: "Die Zertifizierung wird zur Voraussetzung ordnungsmäßiger Verwaltung." },
    quelle: "§ 26a WEG (zertifizierter Verwalter)",
    stand: "2026-07-31"
  },
  {
    iso: "2024-01-01", datum: "01.01.2024",
    titel: "Wärmeplanung: Vorgaben für Neubaugebiete", kategorie: "Wärmeplanung", status: "in-kraft",
    text: "Für Neubaugebiete greifen die Vorgaben zur erneuerbaren Wärme früher als im Bestand.",
    profitiert: { rolle: "versorger", why: "Die EE-Pflicht im Neubau schafft Nachfrage nach Wärmenetzen und erneuerbarer Technik." },
    geschwaecht: { rolle: "eigentuemer", why: "Frühe Bindung an EE-Vorgaben — allerdings nur in Neubaugebieten." },
    quelle: "Wärmeplanungsgesetz (WPG), in Kraft seit 01.01.2024",
    stand: "2026-07-31"
  },
  {
    iso: "2024-01-01", datum: "01.01.2024",
    titel: "Gebäudeenergiegesetz („Heizungsgesetz") in Kraft", kategorie: "Gesetz", status: "in-kraft",
    text: "Die GEG-Novelle führt die 65-Prozent-Pflicht für erneuerbare Energien bei neuen Heizungen ein und schreibt eine Beratung vor dem Einbau einer fossilen Heizung vor. Im Bestand greift die Pflicht gestuft mit der kommunalen Wärmeplanung, im Neubaugebiet sofort.",
    profitiert: { rolle: "versorger", why: "Die EE-Pflicht schafft Nachfrage nach Wärmenetzen, Wärmepumpen und erneuerbarer Technik." },
    geschwaecht: { rolle: "eigentuemer", why: "Die technologische Wahl wird eingeengt, und vor einer fossilen Heizung steht eine verpflichtende Beratung — beides hebt das GModG 2026 wieder auf." },
    quelle: "Gebäudeenergiegesetz (GEG-Novelle), in Kraft seit 01.01.2024",
    stand: "2026-08-01"
  },
  {
    iso: "2026-03-26", datum: "26.03.2026",
    titel: "Erfurt: kommunaler Wärmeplan veröffentlicht", kategorie: "Wärmeplanung", status: "in-kraft",
    text: "Die Stadt Erfurt — verantwortlich für die Planung — veröffentlicht ihren kommunalen Wärmeplan samt Online-Verfügbarkeitscheck. Ein Wärmeplan bedeutet noch keinen Anschlusszwang.",
    profitiert: { rolle: "versorger", why: "Der Wärmeplan weist potenzielle Wärmenetz-Gebiete aus — die Grundlage für den Fernwärme-Ausbau." },
    geschwaecht: null,
    quelle: "Stadt Erfurt, kommunaler Wärmeplan (veröffentlicht 26.03.2026)",
    stand: "2026-07-31"
  },
  {
    iso: "2026-03-27", datum: "27.03.2026",
    titel: "BGH V ZR 7/25 — Drei-Angebote-Regel gekippt", kategorie: "Urteil", status: "in-kraft",
    text: "Der BGH entscheidet: Bei Erhaltungsmaßnahmen besteht keine generelle Pflicht, mehrere Vergleichsangebote einzuholen.",
    profitiert: { rolle: "verwalter", why: "Keine generelle Pflicht mehr, vor Reparaturen mehrere Angebote einzuholen." },
    geschwaecht: { rolle: "eigentuemer", why: "Die automatische Vergleichs-Absicherung entfällt — per eigenem Beschluss aber wiederherstellbar; das Wirtschaftlichkeitsgebot bleibt." },
    quelle: "BGH, Urteil vom 27.03.2026, V ZR 7/25",
    stand: "2026-07-31"
  },
  {
    iso: "2026-06-30", datum: "30.06.2026",
    titel: "Frist Wärmeplanung: große Kommunen", kategorie: "Wärmeplanung", status: "in-kraft",
    text: "Stichtag der kommunalen Wärmeplanung für große Kommunen (über 100.000 Einwohner, darunter Erfurt). Verbindliche Gebäude-Pflichten entstehen erst mit späterer Gebietsausweisung.",
    profitiert: { rolle: "versorger", why: "Der verbindliche Planungsstichtag rückt mögliche Ausbaugebiete näher." },
    geschwaecht: null,
    quelle: "Wärmeplanungsgesetz (WPG), Frist für Kommunen über 100.000 Einwohner",
    stand: "2026-07-31"
  },
  {
    iso: "2026-07-17", datum: "17.07.2026",
    titel: "BGH V ZR 162/25 — Gestattungsanspruch bauliche Veränderung", kategorie: "Urteil", status: "in-kraft",
    text: "Der BGH konkretisiert den Anspruch auf Gestattung baulicher Veränderungen: Ein Wohnungseigentümer kann ein Klima-Splitgerät auf dem eigenen Balkon verlangen, solange kein anderer über das bei geordnetem Zusammenleben unvermeidliche Maß hinaus beeinträchtigt wird (§ 20 Abs. 3 WEG); übliche Betriebsgeräusche genügen dafür regelmäßig nicht.",
    profitiert: { rolle: "eigentuemer", why: "Der Weg zur eigenen baulichen Maßnahme wird berechenbarer; eine Ablehnung braucht eine konkrete, benennbare Beeinträchtigung statt eines allgemeinen Unbehagens." },
    geschwaecht: { rolle: "gemeinschaft", why: "Der Spielraum der Gemeinschaft, solche Maßnahmen mit dem Hinweis auf eine allgemeine Beeinträchtigung abzulehnen, verengt sich — sie braucht künftig eine konkret benennbare Beeinträchtigung." },
    quelle: "BGH, Pressemitteilung Nr. 130/2026 vom 17.07.2026, V ZR 162/25",
    stand: "2026-07-31"
  },
  {
    iso: "2026-07-29", datum: "29.07.2026",
    titel: "Gebäudemodernisierungsgesetz in Kraft", kategorie: "Gesetz", status: "in-kraft",
    text: "Das Gebäudemodernisierungsgesetz (GModG) ist in Kraft — verkündet am 28.07.2026 im Bundesgesetzblatt, in Kraft seit 29.07.2026. Es lässt die 65-Prozent-Pflicht und die Beratungspflicht vor dem Einbau einer fossilen Heizung entfallen; auch ein fertiger kommunaler Wärmeplan verpflichtet nicht mehr zu einem bestimmten Heizsystem. Die Steuerungswirkung verschiebt sich in die Betriebsphase: Die CO₂-Kosten steigen ab 2029.",
    profitiert: { rolle: "gemeinschaft", why: "Die Gemeinschaft kann die Heizungslösung wieder frei wählen — ohne 65-Prozent-Vorgabe und ohne verpflichtende Vorab-Beratung." },
    geschwaecht: { rolle: "eigentuemer", why: "Mit der Beratungspflicht entfällt eine Absicherung vor dem Heizungstausch; wer jetzt fossil wählt, trägt ab 2029 steigende CO₂-Kosten — deren Folgen erst spät sichtbar werden." },
    quelle: "Gebäudemodernisierungsgesetz (GModG), verkündet 28.07.2026 im Bundesgesetzblatt, in Kraft seit 29.07.2026",
    stand: "2026-07-31"
  },
  {
    iso: "2028-06-30", datum: "30.06.2028",
    titel: "Frist Wärmeplanung: kleinere Kommunen", kategorie: "Wärmeplanung", status: "geplant",
    text: "Stichtag der kommunalen Wärmeplanung für kleinere Kommunen.",
    profitiert: { rolle: "versorger", why: "Auch hier schafft der Planungsstichtag die Grundlage für Ausbaugebiete." },
    geschwaecht: null,
    quelle: "Wärmeplanungsgesetz (WPG), Frist für kleinere Kommunen",
    stand: "2026-07-31"
  }
];
