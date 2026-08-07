import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { serviceSummaries } from "@/content/services";
import { cn } from "@/lib/cn";

const smallTileHeight: Record<string, string> = {
  ads: "lg:min-h-[200px]",
  seo: "lg:min-h-[248px]",
  copywriting: "lg:min-h-[176px]",
};

export function Solutions() {
  const large = serviceSummaries.filter((s) => s.size === "large");
  const small = serviceSummaries.filter((s) => s.size === "small");

  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leistungen im Überblick"
          title="Die Basis für planbare Anfragen"
          subtitle="Zwei Kernleistungen, ergänzt durch drei Bausteine, die gezielt darauf einzahlen."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:items-start">
          {large.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 100} className="lg:col-span-3">
              <Card className="flex h-full min-h-[220px] flex-col justify-between lg:min-h-[260px]">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{service.name}</h3>
                  <p className="mt-3 text-sm text-text-secondary sm:text-base">{service.short}</p>
                </div>
                <Link
                  href="/leistungen"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-light hover:text-accent"
                >
                  Mehr zu {service.name}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Card>
            </FadeIn>
          ))}

          {small.map((service, index) => (
            <FadeIn key={service.slug} delay={200 + index * 80} className="lg:col-span-2">
              <Card
                className={cn(
                  "flex h-full min-h-[160px] flex-col justify-between",
                  smallTileHeight[service.slug]
                )}
              >
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{service.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{service.short}</p>
                </div>
                <Link
                  href="/leistungen"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-light hover:text-accent"
                >
                  Mehr zu {service.name}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
