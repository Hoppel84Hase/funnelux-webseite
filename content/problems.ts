export type ProblemCard = {
  title: string;
  description: string;
};

export const problemCards: ProblemCard[] = [
  {
    title: "Die Website ist online, bringt aber keine Anfragen",
    description:
      "Besucher landen auf der Seite, wissen aber nicht, was als Nächstes zu tun ist. Am Ende meldet sich niemand.",
  },
  {
    title: "Marketing läuft nebenbei mit",
    description:
      "Zwischen Tagesgeschäft und Kundenarbeit bleibt kaum Zeit für die eigene Sichtbarkeit. Vieles bleibt liegen.",
  },
  {
    title: "Geld für Werbung ausgegeben, ohne den Effekt zu kennen",
    description:
      "Kampagnen laufen, aber niemand kann sagen, welche Anfrage woher kam. Die Wirkung bleibt unklar.",
  },
];
