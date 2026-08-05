import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceLarge } from "@/components/leistungen/ServiceLarge";
import { ServiceCompact } from "@/components/leistungen/ServiceCompact";
import { LeistungenPricing } from "@/components/leistungen/LeistungenPricing";
import { ClosingCta } from "@/components/home/ClosingCta";
import { serviceDetails } from "@/content/services";
import { leistungenHeader, leistungenClosingCta } from "@/content/leistungenPage";

export const metadata = buildMetadata({
  title: "Leistungen",
  description:
    "Launch-Paket, Pro-Paket und Funnel-Paket sowie Ads, SEO und Copywriting für Schweizer KMU. Was du konkret bekommst und wie KI-gestützte Prozesse die Umsetzung beschleunigen.",
  path: "/leistungen",
});

// Reihenfolge der Leistungsbeschreibungen: Launch vor Pro vor Funnel, ein
// Neukunde muss zuerst verstehen, was eine Website bedeutet, bevor die
// komplexere Funnel-Logik folgt. Abweichend von der Reihenfolge der
// Preiskarten weiter unten (dort Launch / Funnel / Pro wegen des
// Kompromisseffekts).
const largeOrder = ["launch-paket", "pro-paket", "funnel-paket"];

export default function LeistungenPage() {
  const large = largeOrder
    .map((slug) => serviceDetails.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const small = serviceDetails.filter((s) => s.size === "small");

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-20 pb-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow={leistungenHeader.kicker}
          title={leistungenHeader.title}
          subtitle={leistungenHeader.subtitle}
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

      <LeistungenPricing />

      <ClosingCta
        title={leistungenClosingCta.title}
        text={leistungenClosingCta.text}
        section="leistungen_closing_cta"
      />
    </>
  );
}
