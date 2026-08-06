import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { leistungenPricingCta } from "@/content/leistungenPage";

export function LeistungenPricing() {
  return (
    <section id="preise" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <FadeIn>
          <Card glass className="text-center">
            <SectionHeading title={leistungenPricingCta.title} subtitle={leistungenPricingCta.subtitle} />

            <ul className="mx-auto mt-8 max-w-sm space-y-2.5 text-left">
              {leistungenPricingCta.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <WhatsAppButton section="leistungen_preise" label={leistungenPricingCta.ctaLabel} size="lg" />
            </div>
          </Card>
        </FadeIn>
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
