import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import type { ServiceDetail } from "@/content/services";

export function ServiceCompact({ service, index = 0 }: { service: ServiceDetail; index?: number }) {
  return (
    <FadeIn delay={index * 100}>
      <Card id={service.slug} className="flex h-full flex-col">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary">{service.name}</h3>
          <p className="mt-3 text-sm text-text-secondary">{service.forWhom}</p>

          <ul className="mt-4 space-y-2">
            {service.delivered.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-light" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 border-t border-border pt-4 text-xs text-text-secondary">{service.aiAngle}</p>
        </div>

        <div className="mt-5">
          <Link
            href="#funnel-paket"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-light hover:text-accent"
          >
            Enthalten im Funnel-Paket
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </FadeIn>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
