import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { ServiceDetail } from "@/content/services";

export function ServiceLarge({ service }: { service: ServiceDetail }) {
  return (
    <section id={service.slug} className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">{service.name}</h2>
            <p className="mt-4 text-base text-text-secondary">{service.forWhom}</p>

            {service.process ? (
              <div className="mt-6">
                <p className="text-sm font-semibold text-accent-light">Ablauf</p>
                <p className="mt-2 text-sm text-text-secondary">{service.process}</p>
              </div>
            ) : null}

            {service.result ? (
              <div className="mt-5">
                <p className="text-sm font-semibold text-accent-light">Ergebnis</p>
                <p className="mt-2 text-sm text-text-secondary">{service.result}</p>
              </div>
            ) : null}

            <div className="mt-8">
              <WhatsAppButton
                section={`leistungen_${service.slug}`}
                label="Jetzt anfragen"
                interest={`das ${service.name}`}
              />
            </div>
          </FadeIn>

          <FadeIn delay={100} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <p className="text-sm font-semibold text-text-primary">Was du konkret bekommst</p>
              <ul className="mt-4 space-y-3">
                {service.delivered.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-semibold text-text-primary">KI im Prozess</p>
                <p className="mt-2 text-sm text-text-secondary">{service.aiAngle}</p>
              </div>
            </div>
          </FadeIn>
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
