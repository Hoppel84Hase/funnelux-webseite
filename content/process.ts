export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Analyse",
    description:
      "Wir klären deine Ziele, deine Zielgruppe und den aktuellen Stand deines Auftritts. Basis dafür ist ein kurzes, kostenloses Gespräch.",
  },
  {
    number: "02",
    title: "Umsetzung",
    description:
      "Ich baue deine Website, deinen Funnel oder deine Kampagne. KI-gestützte Tools übernehmen Recherche und Routinearbeit, damit die Umsetzung schnell geht.",
  },
  {
    number: "03",
    title: "Live",
    description:
      "Deine Seite geht live, wir bleiben direkt in Kontakt und optimieren laufend auf Basis echter Zahlen statt Vermutungen.",
  },
];
