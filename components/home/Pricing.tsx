import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { pricingPackages, pricingNote } from "@/content/pricing";
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
        {pricingPackages.map((pkg, index) => (
          <FadeIn key={pkg.name} delay={index * 100}>
            <Card
              glass
              className={cn("flex h-full flex-col", pkg.highlight && "border-border-strong shadow-glow-sm")}
            >
              <h3 className="text-lg font-semibold text-text-primary">{pkg.name}</h3>
              <p className="mt-2 text-2xl font-bold text-accent-light">{pkg.priceLabel}</p>
              <p className="mt-3 text-sm text-text-secondary">{pkg.description}</p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <WhatsAppButton
                  section={`pricing_${pkg.name.toLowerCase()}`}
                  label="Jetzt anfragen"
                  className="w-full"
                />
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-secondary">{pricingNote}</p>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
