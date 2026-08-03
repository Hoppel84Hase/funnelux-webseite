export type PricingPackage = {
  name: string;
  priceLabel: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Website",
    priceLabel: "ab CHF 1'900",
    description: "Die Basis für deinen Auftritt. Klar strukturiert, schnell und für Google gebaut.",
    features: [
      "Konzept und Struktur für deine Seite",
      "Individuelles Design nach deinem Firmenauftritt",
      "Umsetzung mit modernem, schnellem Tech-Stack",
      "SEO-Basis für lokale Sichtbarkeit",
      "Mobiloptimiert für alle Bildschirmgrössen",
    ],
  },
  {
    name: "Funnel",
    priceLabel: "ab CHF 2'900",
    description: "Für Angebote, die aktiv Anfragen generieren sollen, mit klarer Strecke von Klick zu Kontakt.",
    features: [
      "Landing Page mit klarer Storyline",
      "E-Mail-Automation für Follow-up",
      "Tracking-Setup für Auswertung",
      "Anbindung an dein Angebot oder Webinar",
      "Abstimmung auf deine Zielgruppe",
    ],
    highlight: true,
  },
  {
    name: "Care",
    priceLabel: "CHF 190 pro Monat",
    description: "Laufende Betreuung, damit deine Seite aktuell bleibt und du dich um dein Kerngeschäft kümmern kannst.",
    features: [
      "Updates und technische Wartung",
      "Inhaltliche Anpassungen nach Absprache",
      "Monatliche Auswertung der Zahlen",
      "Prioritärer Support bei Fragen",
    ],
  },
];

export const pricingNote =
  "Die genannten Preise sind Richtwerte. Die Fixofferte erhältst du nach einem kostenlosen Erstgespräch, ohne versteckte Kosten.";
