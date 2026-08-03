export type Principle = {
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    title: "Keine Manipulation",
    description:
      "Texte und Design sollen überzeugen, weil das Angebot passt, nicht weil ein Trick den Klick auslöst.",
  },
  {
    title: "Keine Fake-Verknappung",
    description: "Wenn ich von einem freien Termin oder einer Frist schreibe, dann stimmt das auch.",
  },
  {
    title: "Keine unhaltbaren Versprechen",
    description: "Ich sage dir, was realistisch ist, auch wenn das weniger spektakulär klingt.",
  },
  {
    title: "Lieber eine ehrliche Einschätzung mehr",
    description: "Wenn ein Vorhaben aus meiner Sicht wenig Sinn ergibt, sage ich das offen.",
  },
];
