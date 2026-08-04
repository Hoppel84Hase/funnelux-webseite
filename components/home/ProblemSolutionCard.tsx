import { Card } from "@/components/ui/Card";
import type { ProblemCard } from "@/content/problems";

// Problem und Loesung stehen direkt untereinander und sind beide sofort
// sichtbar, ohne Scroll-Interaktion. Vorherige Version blendete die Loesung
// erst beim Scrollen ein, das wurde beim echten Testen leicht uebersehen.
export function ProblemSolutionCard({ card }: { card: ProblemCard }) {
  return (
    <Card className="h-full">
      <h3 className="text-lg font-semibold text-text-primary">{card.title}</h3>
      <p className="mt-3 text-sm text-text-secondary">{card.description}</p>
      <div className="mt-4 flex items-start gap-2 border-t border-border pt-4">
        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
        <p className="text-sm font-medium text-accent-light">{card.solution}</p>
      </div>
    </Card>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
