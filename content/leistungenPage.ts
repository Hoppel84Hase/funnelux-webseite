export const leistungenHeader = {
  kicker: "Leistungen",
  title: "Alles für planbare Anfragen",
  subtitle:
    "Websites für Schweizer KMU und Start-ups. Individuell gebaut statt aus der Vorlage, von einer Person, die plant, baut und danach erreichbar bleibt.",
  priceNote: "Zum Preis: Eine feste Zahl nach dem ersten Gespräch, nicht vorher.",
  priceNoteLink: "Warum",
};

export const leistungenIntro = {
  title: "Drei Wege, je nachdem wo du stehst",
  subtitle: "Immer dabei: schnell, auf dem Handy sauber, rechtlich in Ordnung, und die Seite gehört dir.",
};

export type ServiceTierPoint = {
  klartext: string;
  fachbegriff: string;
};

export type ServiceTier = {
  slug: string;
  stufenname: string;
  zielueberschrift: string;
  punkte: ServiceTierPoint[];
  highlight?: boolean;
};

// Reihenfolge Beginner / Pro / Funnel: aufsteigende Stufen, jede baut explizit
// auf der vorherigen auf ("Alles aus der ... Stufe, und ..."), deshalb hier
// keine Kompromisseffekt-Umsortierung wie frueher bei den Preiskarten.
export const serviceTiers: ServiceTier[] = [
  {
    slug: "beginner-stufe",
    stufenname: "Beginner-Stufe",
    zielueberschrift: "Du bist gefunden und erreichbar",
    punkte: [
      { klartext: "Startseite plus die Unterseiten, die deine Kunden brauchen", fachbegriff: "Mehrseitige Website" },
      { klartext: "Interessenten bekommen automatisch eine E-Mail von dir", fachbegriff: "E-Mail-Automation" },
      {
        klartext: "Du siehst, wie viele Besucher da waren und wie viele sich gemeldet haben",
        fachbegriff: "Conversion-Tracking",
      },
    ],
  },
  {
    slug: "pro-stufe",
    stufenname: "Pro-Stufe",
    zielueberschrift: "Alles aus der Beginner-Stufe, und du wirst bei Google gefunden",
    punkte: [
      { klartext: "Für jede Leistung eine eigene Seite statt eines Sammelpunkts", fachbegriff: "Leistungsseiten" },
      {
        klartext: "Ausgerichtet auf die Wörter, die deine Kunden bei Google eintippen",
        fachbegriff: "Keyword-Recherche und technisches SEO",
      },
    ],
  },
  {
    slug: "funnel-stufe",
    stufenname: "Funnel-Stufe",
    zielueberschrift: "Alles aus der Pro-Stufe, und du holst dir Anfragen aktiv",
    highlight: true,
    punkte: [
      { klartext: "Eine Seite, die vom Problem deines Kunden zu deiner Lösung führt", fachbegriff: "Landing Page" },
      {
        klartext: "Anzeigen bringen Leute darauf, und du siehst, welche sich lohnt",
        fachbegriff: "Google Ads, Meta Ads und Kampagnen-Tracking",
      },
    ],
  },
];

export const leistungenPricingCta = {
  title: "Was kostet das?",
  subtitle: "Jedes Projekt ist anders. Deshalb nenne ich eine Zahl erst, wenn ich weiss, worum es geht.",
  points: [
    "Nach dem ersten Gespräch eine feste Zahl, keine Spanne",
    "Sie gilt bis zum Schluss, ohne Nachforderungen",
    "Passt es nicht, ist es erledigt. Das Gespräch kostet nichts",
  ],
  ctaLabel: "Gespräch vereinbaren",
};

export type CareItem = {
  slug: string;
  heading: string;
  subtext: string;
};

export const careSectionHeading = {
  title: "Und danach?",
  subtitle: "Optional, monatlich, für Kunden mit abgeschlossenem Projekt.",
};

export const careItems: CareItem[] = [
  {
    slug: "wartung",
    heading: "Damit deine Seite nicht langsam kaputtgeht",
    subtext: "Wartung · Monitoring · Kurzbericht",
  },
  {
    slug: "ads",
    heading: "Damit dein Werbegeld nicht ins Leere läuft",
    subtext: "Kampagnen-Optimierung · Reporting",
  },
  {
    slug: "seo",
    heading: "Damit du bei Google nicht stehen bleibst",
    subtext: "Laufende SEO · Inhalte · Support",
  },
];

export const leistungenClosingCta = {
  title: "Lass uns kurz schreiben",
  text:
    "Sag mir in zwei Sätzen, was du vorhast. Ich sage dir ehrlich, ob ich der Richtige dafür bin, und wenn nicht, sage ich dir das auch.",
};

// --- Ab hier: weiterhin von der Startseite verwendet -----------------------
// components/home/Pricing.tsx importiert buildPakete, buildPricingFootnote
// und pricingMicrocopy. Auf der Leistungsseite selbst (dieser Umbau) nicht
// mehr im Einsatz, deshalb hier NICHT entfernen.

export type BuildPaket = {
  slug: string;
  name: string;
  priceLabel: string;
  description: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
};

// Reihenfolge bewusst Launch / Funnel / Pro (Kompromisseffekt): die mittlere,
// hervorgehobene Option wirkt als sichere Wahl zwischen den beiden Extremen.
export const buildPakete: BuildPaket[] = [
  {
    slug: "launch-paket",
    name: "Launch-Paket",
    priceLabel: "ab CHF 4'500",
    description:
      "Schnell online, mit allem, was für echte Anfragen zählt. KI-gestützt umgesetzt, technisch von Anfang an sauber.",
    features: [
      "KI-Website in 5 bis 7 Tagen",
      "Tracking-Setup inklusive",
      "DSG-konformer Datenschutz inklusive",
      "Brevo-Anbindung für Follow-up",
      "Mobiloptimiert und SEO-Basis",
    ],
  },
  {
    slug: "funnel-paket",
    name: "Funnel-Paket",
    priceLabel: "ab CHF 6'800",
    description: "Für Angebote, die aktiv Anfragen generieren sollen, mit klarer Strecke von Klick zu Kontakt.",
    features: [
      "Kundenanalyse und Designkonzept",
      "Landing Page oder One-Pager in Framer mit CMS",
      "Meta- und Google-Ads-Setup",
      "Brevo E-Mail-Automation für Follow-up",
      "Vollständiges Tracking und Datenschutz",
    ],
    badge: "Meistgebucht",
    highlight: true,
  },
  {
    slug: "pro-paket",
    name: "Pro-Paket",
    priceLabel: "ab CHF 6'000",
    description: "Individuelle Framer-Website mit echter Strategie dahinter, und danach zu hundert Prozent deine eigene.",
    features: [
      "Konzept- und Wettbewerbsanalyse",
      "Framer-Website mit CMS",
      "Tracking, Datenschutz und Brevo-Automation inklusive",
      "Volle Übergabe, keine Agentur-Bindung",
      "Mobiloptimiert für alle Bildschirmgrössen",
    ],
  },
];

export const buildPricingFootnote =
  "Die Preise sind Richtwerte und richten sich nach deinem Vorhaben. Abgerechnet wird immer pauschal. Du kennst den Gesamtpreis vor dem Start, und er ändert sich während des Projekts nicht.";

export const pricingMicrocopy = "Pauschalpreis nach Fixofferte";
