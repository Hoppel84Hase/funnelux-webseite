import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { processSteps } from "@/content/process";

const icons = [SearchIcon, BuildIcon, RocketIcon];

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="So läuft es ab"
        title="Drei Schritte bis zur laufenden Seite"
        subtitle="Kein aufwendiger Prozess mit vielen Beteiligten, sondern ein klarer Ablauf."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {processSteps.map((step, index) => {
          const Icon = icons[index];
          return (
            <FadeIn key={step.number} delay={index * 100}>
              <div className="relative text-center md:text-left">
                <Badge>
                  <Icon className="h-5 w-5" />
                </Badge>
                <p className="mt-4 text-sm font-semibold text-accent-light">{step.number}</p>
                <h3 className="mt-1 text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function BuildIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l-2 6 6-2 9-9a4 4 0 0 0-4-4l-9 9z" />
      <circle cx="15" cy="9" r="1.4" />
    </svg>
  );
}
