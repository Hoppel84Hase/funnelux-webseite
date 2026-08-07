export type Project = {
  name: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "DogPro Academy",
    image: "/images/projekt-dogpro.jpg",
    description:
      "Webinar-Funnel für eine Hundetrainerin. Landing Page mit Anmeldung, klarer Storyline von Problem zu Lösung, FAQ-Bereich und Tracking-Setup.",
  },
  {
    name: "Acha Massage Studio",
    image: "/images/projekt-acha.jpg",
    description:
      "Mehrsprachige Business-Website für ein Massagestudio in Winterthur. Angebot, Preise, interaktiver Massage-Finder und Terminanfrage.",
  },
];

export const projectsNote = "Pilotprojekte aus der Zusammenarbeit mit Funnelux Marketing.";
