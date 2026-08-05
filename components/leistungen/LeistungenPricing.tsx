import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { pricingMicrocopy } from "@/content/pricing";
import {
  buildPakete,
  buildPricingSubheadline,
  buildPricingFootnote,
  capacityNote,
  carePlans,
  careSectionHeading,
} from "@/content/leistungenPage";
import { cn } from "@/lib/cn";

export function LeistungenPricing() {
  return (
    <section id="preise" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Preise" title="Transparente Pakete ohne Kleingedrucktes" />
      <div className="mx-auto mt-4 max-w-2xl text-center">
        {buildPricingSubheadline.map((line) => (
          <p key={line} className="mt-2 text-base text-text-secondary sm:text-lg">
            {line}
          </p>
        ))}
      </div>

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
                  section={`leistungen_${pkg.slug}`}
                  label="Jetzt anfragen"
                  className="w-full"
                />
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-secondary">{buildPricingFootnote}</p>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-text-secondary">{capacityNote}</p>

      <div className="mt-20 border-t border-border pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {careSectionHeading.title}
          </h3>
          <p className="mt-3 text-base text-text-secondary">{careSectionHeading.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {carePlans.map((plan, index) => (
            <FadeIn key={plan.slug} delay={index * 100}>
              <Card glass className="flex h-full flex-col">
                <h3 className="text-lg font-semibold text-text-primary">{plan.name}</h3>
                <p className="mt-2 text-2xl font-bold text-accent-light">{plan.priceLabel}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <WhatsAppButton
                    section={`leistungen_${plan.slug}`}
                    label="Jetzt anfragen"
                    className="w-full"
                  />
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
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
