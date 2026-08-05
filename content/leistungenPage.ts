export const leistungenHeader = {
  kicker: "Leistungen",
  title: "Alles für planbare Anfragen",
  subtitle:
    "Ein Ansprechpartner, volle technische Tiefe, faire Preise für Deutschschweizer KMU und Start-ups. Kein Agentur-Overhead, keine Kompromisse bei Tracking, Datenschutz oder Strategie.",
};

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

export const buildPricingSubheadline = [
  "Bei mir bekommst du, was sonst nur Agenturen liefern. Tracking, Datenschutz und Automation von Anfang an mitgedacht, aber ohne Team-Aufpreis.",
  "Einzeln beauftragt, kostet das oft mehr. Aufgeteilt in klare Pakete sieht das so aus.",
];

export const buildPricingFootnote =
  "Die Preise sind Richtwerte und richten sich nach deinem Vorhaben. Abgerechnet wird immer pauschal. Du kennst den Gesamtpreis vor dem Start, und er ändert sich während des Projekts nicht.";

export const capacityNote =
  "Ich betreue pro Monat eine begrenzte Anzahl neuer Projekte, damit Qualität und Tempo stimmen.";

export type CarePlan = {
  slug: string;
  name: string;
  priceLabel: string;
  features: string[];
};

export const carePlans: CarePlan[] = [
  {
    slug: "care-basic",
    name: "Care Basic",
    priceLabel: "ab CHF 390 / Mt.",
    features: ["CMS-Pflege und technische Updates", "Laufendes Monitoring", "Monatlicher Kurzbericht"],
  },
  {
    slug: "care-ads",
    name: "Care Ads",
    priceLabel: "ab CHF 850 / Mt.",
    features: [
      "Alles aus Care Basic",
      "Laufende Meta- und Google-Ads-Optimierung",
      "Monatliches Reporting mit echten Zahlen",
    ],
  },
  {
    slug: "care-growth",
    name: "Care Growth",
    priceLabel: "ab CHF 1'450 / Mt.",
    features: [
      "Alles aus Care Ads",
      "Laufende SEO-Optimierung",
      "Monatliches Content- und Brevo-Update",
      "Prioritärer Support, Antwort innert 24 Stunden",
    ],
  },
];

export const careSectionHeading = {
  title: "Danach, laufend wachsen statt stillstehen",
  subtitle: "Exklusiv für Kunden, mit denen bereits ein Projekt realisiert wurde.",
};

export const leistungenClosingCta = {
  title: "Lass uns kurz schreiben",
  text:
    "Du sprichst mit der Person, die auch tatsächlich umsetzt, nicht mit einem Account Manager, der weiterreicht. Schilder mir kurz dein Vorhaben, ich sage dir ehrlich, ob und wie ich helfen kann.",
};
