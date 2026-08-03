import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { serviceSummaries } from "@/content/services";

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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {large.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 100}>
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-text-primary">{service.name}</h3>
                <p className="mt-3 text-sm text-text-secondary sm:text-base">{service.short}</p>
                <Link
                  href="/leistungen"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-light hover:text-accent"
                >
                  Mehr erfahren
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {small.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 80}>
              <Card className="h-full" hover>
                <h3 className="text-base font-semibold text-text-primary">{service.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{service.short}</p>
                <Link
                  href="/leistungen"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-light hover:text-accent"
                >
                  Mehr erfahren
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
