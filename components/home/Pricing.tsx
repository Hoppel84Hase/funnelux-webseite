import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { buildPakete, buildPricingFootnote, pricingMicrocopy } from "@/content/leistungenPage";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <section id="preise" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Preise"
        title="Transparente Pakete ohne Kleingedrucktes"
        subtitle="Die folgenden Preise sind Ab-Preise. Die genaue Offerte richtet sich nach deinem Vorhaben."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {buildPakete.map((pkg, index) => (
          <FadeIn key={pkg.slug} delay={index * 100}>
            <Card
              glass
              className={cn("relative flex h-full flex-col", pkg.highlight && "border-border-strong shadow-glow-sm")}
            >
              {pkg.badge ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-glow-sm">
                  {pkg.badge}
                </span>
              ) : null}

              <h3 className="text-lg font-semibold text-text-primary">{pkg.name}</h3>
              <p className="mt-2 text-2xl font-bold text-accent-light">{pkg.priceLabel}</p>
              <p className="mt-1 text-xs text-text-secondary">{pricingMicrocopy}</p>
              <p className="mt-3 flex-1 text-sm text-text-secondary">{pkg.description}</p>

              <div className="mt-6">
                <WhatsAppButton
                  section={`home_pricing_${pkg.slug}`}
                  label="Jetzt anfragen"
                  className="w-full"
                  interest={`das ${pkg.name}`}
                />
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-secondary">{buildPricingFootnote}</p>

      <div className="mt-6 text-center">
        <Link
          href="/leistungen#preise"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent-light hover:text-accent"
        >
          Alle Preise und Betreuungspakete ansehen
          <ArrowIcon className="h-4 w-4" />
        </Link>
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
