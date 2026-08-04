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
    priceLabel: "ab CHF 2'800",
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
    priceLabel: "ab CHF 5'000",
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
    priceLabel: "ab CHF 1'000 pro Monat",
    description:
      "Für Firmen, deren Seite nicht nur laufen, sondern jeden Monat besser werden soll. Ich werte aus, optimiere und du konzentrierst dich auf dein Kerngeschäft.",
    features: [
      "Laufende Auswertung deiner Zahlen mit monatlichem Kurzbericht",
      "Optimierung von Seiten, Texten und Conversion-Strecke auf Basis der Daten",
      "Anpassungen und neue Inhalte nach Absprache",
      "Technische Wartung, Updates und Monitoring",
      "Prioritärer Support mit Antwort innert 24 Stunden",
    ],
  },
];

export const pricingMicrocopy = "Pauschalpreis nach Fixofferte";

export const pricingNote =
  "Die Preise sind Richtwerte und richten sich nach deinem Vorhaben. Abgerechnet wird immer pauschal: Du kennst den Gesamtpreis vor dem Start und er ändert sich während des Projekts nicht.";
