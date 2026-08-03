export type ServiceSummary = {
  slug: string;
  name: string;
  short: string;
  size: "large" | "small";
};

export const serviceSummaries: ServiceSummary[] = [
  {
    slug: "websites",
    name: "Websites",
    short:
      "Eine Website, die deine Firma professionell zeigt und bei Google gefunden wird. Klar aufgebaut, schnell geladen, mobil einsatzbereit.",
    size: "large",
  },
  {
    slug: "funnels",
    name: "Funnels",
    short:
      "Eine Landing Page mit Anmeldung oder Terminanfrage, die Besucher gezielt zu einer Anfrage führt und automatisch nachfasst.",
    size: "large",
  },
  {
    slug: "ads",
    name: "Ads",
    short: "Kampagnen auf Google und Meta, die auf deinen Funnel einzahlen und laufend ausgewertet werden.",
    size: "small",
  },
  {
    slug: "seo",
    name: "SEO",
    short: "Technische und inhaltliche Grundlagen, damit deine Seite bei relevanten Suchanfragen gefunden wird.",
    size: "small",
  },
  {
    slug: "copywriting",
    name: "Copywriting",
    short: "Texte für Website, Funnel und Kampagne, die deine Leistung verständlich und konkret erklären.",
    size: "small",
  },
];

export type ServiceDetail = {
  slug: string;
  name: string;
  size: "large" | "small";
  forWhom: string;
  process?: string;
  result?: string;
  delivered: string[];
  aiAngle: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "websites",
    name: "Websites",
    size: "large",
    forWhom:
      "Für Schweizer KMU und Start-ups, die online professionell auftreten wollen und eine Seite brauchen, die Anfragen bringt statt nur zu existieren.",
    process:
      "Wir starten mit einem kurzen Gespräch zu deinem Angebot, deiner Zielgruppe und deinen Zielen. Danach baue ich Struktur und Design, du gibst Feedback in ein bis zwei Runden, dann gehen wir live.",
    result:
      "Eine schnelle, mobiloptimierte Website, die dein Angebot klar zeigt und Besucher zu einer Anfrage führt.",
    delivered: [
      "Analyse deines Angebots, deiner Zielgruppe und deiner Konkurrenz",
      "Struktur und Text pro Seite, abgestimmt auf das, was deine Kunden wissen müssen",
      "Individuelles Design im Stil deiner Firma, kein Templatelook",
      "Technische Umsetzung mit Next.js, schnelle Ladezeiten und sauberer Code",
      "SEO-Basis: sprechende URLs, Meta-Angaben, Struktur für Suchmaschinen",
      "Mobiloptimierte Darstellung auf allen Geräten",
    ],
    aiAngle:
      "Ich nutze KI-gestützte Tools für Recherche, Textentwürfe und Code-Umsetzung. Das beschleunigt die Produktion, die inhaltliche Kontrolle und die letzte Textfassung bleiben bei mir.",
  },
  {
    slug: "funnels",
    name: "Funnels",
    size: "large",
    forWhom:
      "Für Anbieter mit einem konkreten Angebot, zum Beispiel einem Kurs, Webinar oder einer Terminbuchung, die gezielt Anfragen oder Anmeldungen sammeln wollen.",
    process:
      "Nach der Klärung von Angebot und Zielgruppe baue ich die Landing Page und die E-Mail-Automation, richte das Tracking ein und wir testen den Ablauf gemeinsam, bevor die Kampagne startet.",
    result:
      "Eine Landing Page, die Besucher Schritt für Schritt zur Anmeldung oder Anfrage führt, inklusive automatischem Follow-up.",
    delivered: [
      "Klärung von Angebot, Zielgruppe und dem gewünschten nächsten Schritt des Besuchers",
      "Landing Page mit klarer Storyline von Problem zu Lösung",
      "Anmelde- oder Kontaktformular, angebunden an E-Mail-Automation",
      "Automatische Follow-up-E-Mails nach Anmeldung",
      "Tracking-Setup, damit du siehst, woher Anmeldungen kommen",
      "FAQ-Bereich für die häufigsten Einwände deiner Zielgruppe",
    ],
    aiAngle:
      "KI-gestützte Tools helfen bei Struktur, Textvarianten und technischer Umsetzung. Dadurch steht ein Funnel in Tagen statt Wochen, ohne dass an der Qualität gespart wird.",
  },
  {
    slug: "ads",
    name: "Ads",
    size: "small",
    forWhom: "Für Firmen mit einer bestehenden Website oder einem Funnel, die gezielt Traffic dafür aufbauen wollen.",
    delivered: [
      "Kampagnenaufbau auf Google Ads oder Meta Ads",
      "Zielgruppen- und Budgetplanung",
      "Laufende Auswertung und Anpassung anhand echter Zahlen",
      "Monatlicher Kurzbericht zu Resultaten",
    ],
    aiAngle: "KI-gestützte Auswertung erkennt Muster in den Daten schneller, die Budgetentscheide bleiben bei mir.",
  },
  {
    slug: "seo",
    name: "SEO",
    size: "small",
    forWhom: "Für Firmen, die dauerhaft und ohne Werbebudget bei Google gefunden werden wollen.",
    delivered: [
      "Technische Prüfung deiner Seite (Ladezeit, Struktur, mobile Darstellung)",
      "Keyword-Recherche für deine Region und Branche",
      "Optimierung von Inhalten und Meta-Angaben",
      "Laufende Kontrolle der Sichtbarkeit",
    ],
    aiAngle: "KI-gestützte Recherche-Tools zeigen relevante Suchbegriffe schneller, die Umsetzung prüfe ich manuell.",
  },
  {
    slug: "copywriting",
    name: "Copywriting",
    size: "small",
    forWhom: "Für alle, die klare, verständliche Texte für Website, Funnel oder Kampagne brauchen.",
    delivered: [
      "Texte in deiner Sprache, für deine Zielgruppe",
      "Struktur, die Besucher zum nächsten Schritt führt",
      "Anpassung an Swiss-Style-Rechtschreibung und -Ton",
      "Überarbeitung bestehender Texte auf Wunsch",
    ],
    aiAngle: "KI-gestützte Tools liefern erste Entwürfe, die finale Formulierung und Kontrolle mache ich selbst.",
  },
];
