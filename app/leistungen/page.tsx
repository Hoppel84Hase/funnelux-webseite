import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceLarge } from "@/components/leistungen/ServiceLarge";
import { ServiceCompact } from "@/components/leistungen/ServiceCompact";
import { Pricing } from "@/components/home/Pricing";
import { serviceDetails } from "@/content/services";

export const metadata = buildMetadata({
  title: "Leistungen",
  description:
    "Websites, Funnels, Ads, SEO und Copywriting für Schweizer KMU. Was du konkret bekommst und wie KI-gestützte Prozesse die Umsetzung beschleunigen.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  const large = serviceDetails.filter((s) => s.size === "large");
  const small = serviceDetails.filter((s) => s.size === "small");

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-20 pb-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow="Leistungen"
          title="Alles für planbare Anfragen"
          subtitle="Website und Funnel als Kernleistung, ergänzt durch Ads, SEO und Copywriting, wo es für dein Vorhaben Sinn ergibt."
        />
      </section>

      {large.map((service) => (
        <ServiceLarge key={service.slug} service={service} />
      ))}

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ergänzend"
            title="Ads, SEO und Copywriting"
            subtitle="Sinnvoll, sobald Website oder Funnel stehen und gezielt Traffic oder bessere Texte dazukommen sollen."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {small.map((service, index) => (
              <ServiceCompact key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Pricing />
    </>
  );
}
