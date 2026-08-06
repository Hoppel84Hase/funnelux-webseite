import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { ServiceTier } from "@/content/leistungenPage";

export function TierCard({ tier }: { tier: ServiceTier }) {
  return (
    <Card glass className={cn("flex h-full flex-col", tier.highlight && "border-border-strong shadow-glow-sm")}>
      <p className="text-sm font-medium uppercase tracking-wider text-accent-light">{tier.stufenname}</p>
      <h3 className="mt-3 text-lg font-semibold text-text-primary">{tier.zielueberschrift}</h3>

      <ul className="mt-4 space-y-4 border-t border-border pt-4">
        {tier.punkte.map((punkt) => (
          <li key={punkt.klartext}>
            <p className="text-sm text-text-secondary">{punkt.klartext}</p>
            <p className="text-xs italic text-text-secondary">{punkt.fachbegriff}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
