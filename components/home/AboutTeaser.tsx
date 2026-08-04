import Link from "next/link";
import { FallbackImage } from "@/components/ui/FallbackImage";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutTeaser() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        <FadeIn>
          <FallbackImage
            src="/images/janic.jpg"
            alt="Janic Maier, Funnelux Marketing"
            placeholderLabel="Portraitfoto folgt"
            className="aspect-[4/5] w-full max-w-sm"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-sm font-medium uppercase tracking-wider text-accent-light">Über mich</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Janic</h2>
          <p className="mt-5 text-base text-text-secondary sm:text-lg">
            Ich baue Websites und Funnels für Schweizer KMU und Start-ups, direkt aus Winterthur. Als
            Einzelunternehmer sprichst du bei jedem Schritt mit mir persönlich, ohne Übergaben zwischen
            verschiedenen Ansprechpersonen. KI-gestützte Tools halten meine Prozesse schnell und meine Preise
            fair.
          </p>
          <Link
            href="/ueber-mich"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-light hover:text-accent"
          >
            Mehr über mich
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </FadeIn>
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
