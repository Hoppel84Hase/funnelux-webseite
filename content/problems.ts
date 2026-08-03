export type ProblemCard = {
  title: string;
  description: string;
  solution: string;
};

export const problemCards: ProblemCard[] = [
  {
    title: "Die Website ist online, bringt aber keine Anfragen",
    description:
      "Besucher landen auf der Seite, wissen aber nicht, was als Nächstes zu tun ist. Am Ende meldet sich niemand.",
    solution: "Klare Struktur und ein Funnel, der Besucher gezielt zur Anfrage führt.",
  },
  {
    title: "Marketing läuft nebenbei mit",
    description:
      "Zwischen Tagesgeschäft und Kundenarbeit bleibt kaum Zeit für die eigene Sichtbarkeit. Vieles bleibt liegen.",
    solution: "Ich übernehme Umsetzung und Betreuung, du kümmerst dich um dein Geschäft.",
  },
  {
    title: "Geld für Werbung ausgegeben, ohne den Effekt zu kennen",
    description:
      "Kampagnen laufen, aber niemand kann sagen, welche Anfrage woher kam. Die Wirkung bleibt unklar.",
    solution: "Ein Tracking-Setup, das dir zeigt, welche Anfrage woher kommt.",
  },
];
