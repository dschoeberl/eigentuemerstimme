/* Datenquelle Gesetzes-Zeitstrahl fuer eigentuemerstimme.de
   Neuer Eintrag = ein Objekt ergaenzen; die Seite sortiert nach iso-Datum.
   Perspektiven (Chips): eigentuemer | mieter | verwalter | versorger.
   profitiert / geschwaecht: {rolle, why} oder null. Die Kommune bleibt als
   verantwortliche, steuernde Instanz nur im Fliesstext — kein Chip.
   Neutral halten: „erweitert / verengt den Spielraum", belegt, keine Wertung.
   Wichtig: in den Strings keine geraden Anfuehrungszeichen verwenden — nur
   typografische („ "), sonst bricht der Datenblock. */

const ROLLEN = {
  eigentuemer: { label: "Eigentümer:innen", farbe: "var(--stimme)" },
  mieter:      { label: "Mieter:innen",     farbe: "var(--signal)" },
  verwalter:   { label: "Verwalter",        farbe: "var(--petrol)" },
  versorger:   { label: "Versorger",        farbe: "#5c6b74" }
};

const ZEITSTRAHL = [
  {
    iso: "2020-12-01", datum: "01.12.2020",
    titel: "WEG-Reform (WEMoG)", kategorie: "Gesetz", status: "in-kraft",
    text: "Die Gemeinschaft wird selbst rechtsfähig; bauliche Veränderungen genügen der einfachen Mehrheit, das Anwesenheitsquorum entfällt, der zertifizierte Verwalter wird eingeführt.",
    profitiert: { rolle: "eigentuemer", why: "Bauliche Veränderungen mit einfacher Mehrheit, Anspruch auf einen zertifizierten Verwalter, begrenzte Beiratshaftung." },
    geschwaecht: null
  },
  {
    iso: "2023-12-01", datum: "01.12.2023",
    titel: "Anspruch auf zertifizierten Verwalter (§ 26a)", kategorie: "Gesetz", status: "in-kraft",
    text: "Eigentümer haben grundsätzlich Anspruch auf einen zertifizierten Verwalter — Nachweis der Sachkunde per IHK-Prüfung.",
    profitiert: { rolle: "eigentuemer", why: "Sachkunde wird einforderbar; Qualität der Verwaltung wird zum Anspruch." },
    geschwaecht: { rolle: "verwalter", why: "Die Zertifizierung wird zur Voraussetzung ordnungsmäßiger Verwaltung." }
  },
  {
    iso: "2024-01-01", datum: "01.01.2024",
    titel: "Wärmeplanung: Vorgaben für Neubaugebiete", kategorie: "Wärmeplanung", status: "in-kraft",
    text: "Für Neubaugebiete greifen die Vorgaben zur erneuerbaren Wärme früher als im Bestand.",
    profitiert: { rolle: "versorger", why: "Die EE-Pflicht im Neubau schafft Nachfrage nach Wärmenetzen und erneuerbarer Technik." },
    geschwaecht: { rolle: "eigentuemer", why: "Frühe Bindung an EE-Vorgaben — allerdings nur in Neubaugebieten." }
  },
  {
    iso: "2026-03-26", datum: "26.03.2026",
    titel: "Erfurt: kommunaler Wärmeplan veröffentlicht", kategorie: "Wärmeplanung", status: "in-kraft",
    text: "Die Stadt Erfurt — verantwortlich für die Planung — veröffentlicht ihren kommunalen Wärmeplan samt Online-Verfügbarkeitscheck. Ein Wärmeplan bedeutet noch keinen Anschlusszwang.",
    profitiert: { rolle: "versorger", why: "Der Wärmeplan weist potenzielle Wärmenetz-Gebiete aus — die Grundlage für den Fernwärme-Ausbau." },
    geschwaecht: null
  },
  {
    iso: "2026-03-27", datum: "27.03.2026",
    titel: "BGH V ZR 7/25 — „Drei-Angebote-Regel" gekippt", kategorie: "Urteil", status: "in-kraft",
    text: "Der BGH entscheidet: Bei Erhaltungsmaßnahmen besteht keine generelle Pflicht, mehrere Vergleichsangebote einzuholen.",
    profitiert: { rolle: "verwalter", why: "Keine generelle Pflicht mehr, vor Reparaturen mehrere Angebote einzuholen." },
    geschwaecht: { rolle: "eigentuemer", why: "Die automatische Vergleichs-Absicherung entfällt — per eigenem Beschluss aber wiederherstellbar; das Wirtschaftlichkeitsgebot bleibt." }
  },
  {
    iso: "2026-06-30", datum: "30.06.2026",
    titel: "Frist Wärmeplanung: große Kommunen", kategorie: "Wärmeplanung", status: "in-kraft",
    text: "Stichtag der kommunalen Wärmeplanung für große Kommunen (über 100.000 Einwohner, darunter Erfurt). Verbindliche Gebäude-Pflichten entstehen erst mit späterer Gebietsausweisung.",
    profitiert: { rolle: "versorger", why: "Der verbindliche Planungsstichtag rückt mögliche Ausbaugebiete näher." },
    geschwaecht: null
  },
  {
    iso: "2026-07-15", datum: "2026 · im Umbruch",
    titel: "GEG-65-%-Regel faktisch ausgesetzt", kategorie: "Gesetz", status: "ausgesetzt",
    text: "Die 65-Prozent-Regel des Gebäudeenergiegesetzes ist faktisch ausgesetzt, während der Gesetzgeber sie reformiert.",
    profitiert: { rolle: "eigentuemer", why: "Mehr zeitlicher und technischer Spielraum bei der Heizungswahl." },
    geschwaecht: null
  },
  {
    iso: "2026-11-01", datum: "01.11.2026 · geplant",
    titel: "Gebäudemodernisierungsgesetz", kategorie: "Gesetz", status: "geplant",
    text: "Geplant: ein technologieoffeneres, an CO₂-Kosten orientiertes Gebäudemodernisierungsgesetz. Vermietende Eigentümer sollen stärker an CO₂-Preis und Netzentgelten beteiligt werden. Der Gesetzestext ist noch nicht final.",
    profitiert: { rolle: "mieter", why: "Die geplante stärkere Kostenbeteiligung der Vermieter an den CO₂-Kosten entlastet Mieter." },
    geschwaecht: null
  },
  {
    iso: "2028-06-30", datum: "30.06.2028",
    titel: "Frist Wärmeplanung: kleinere Kommunen", kategorie: "Wärmeplanung", status: "geplant",
    text: "Stichtag der kommunalen Wärmeplanung für kleinere Kommunen.",
    profitiert: { rolle: "versorger", why: "Auch hier schafft der Planungsstichtag die Grundlage für Ausbaugebiete." },
    geschwaecht: null
  }
];
