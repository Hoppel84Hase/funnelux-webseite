import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Solutions } from "@/components/home/Solutions";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { Pricing } from "@/components/home/Pricing";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Faq } from "@/components/home/Faq";
import { ClosingCta } from "@/components/home/ClosingCta";

export const metadata = buildMetadata({
  title: "Websites und Funnels für Schweizer KMU",
  description:
    "Websites und Sales Funnels für Schweizer KMU und Start-ups. Ein Ansprechpartner, direkter Kontakt, Antwort innert 24 Stunden.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solutions />
      <Process />
      <Projects />
      <Pricing />
      <AboutTeaser />
      <Faq />
      <ClosingCta />
    </>
  );
}
