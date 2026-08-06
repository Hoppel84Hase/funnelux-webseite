import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { TierCard } from "@/components/leistungen/TierCard";
import { LeistungenPricing } from "@/components/leistungen/LeistungenPricing";
import { CareSection } from "@/components/leistungen/CareSection";
import { ClosingCta } from "@/components/home/ClosingCta";
import { leistungenHeader, leistungenIntro, serviceTiers, leistungenClosingCta } from "@/content/leistungenPage";

export const metadata = buildMetadata({
  title: "Leistungen",
  description:
    "Launch-Paket, Pro-Paket und Funnel-Paket sowie Ads, SEO und Copywriting für Schweizer KMU. Was du konkret bekommst und wie KI-gestützte Prozesse die Umsetzung beschleunigen.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-20 pb-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow={leistungenHeader.kicker}
          title={leistungenHeader.title}
          subtitle={leistungenHeader.subtitle}
        />
        <p className="mt-2 text-sm text-text-secondary">
          {leistungenHeader.priceNote}{" "}
          <Link href="#preise" className="text-accent-light underline underline-offset-2 hover:text-accent">
            {leistungenHeader.priceNoteLink}
          </Link>
        </p>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading title={leistungenIntro.title} subtitle={leistungenIntro.subtitle} />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceTiers.map((tier, index) => (
              <FadeIn key={tier.slug} delay={index * 100}>
                <TierCard tier={tier} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LeistungenPricing />

      <CareSection />

      <ClosingCta
        title={leistungenClosingCta.title}
        text={leistungenClosingCta.text}
        section="leistungen_closing_cta"
      />
    </>
  );
}
