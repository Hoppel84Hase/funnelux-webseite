import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroParticlesLoader } from "@/components/home/HeroParticlesLoader";
import { company } from "@/content/company";

const trustPoints = [
  "Direktkontakt: Du sprichst mit mir, nicht mit einem Account Manager",
  "KI-first: Prozesse statt Bauchgefühl",
  "Antwort innert 24 Stunden",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <HeroParticlesLoader />

      {/* Hintergrundfoto rechtes Drittel. Reine Dekoration (aria-hidden,
          leerer alt-Text, pointer-events-none), liegt ueber Glow/Grid/
          Partikeln, aber unter dem Text-Layer (naechstes Geschwister-Div
          unten) -- gleiche Stapel-Logik wie die drei Ebenen darueber, ohne
          eigenes z-index. Unter dem md-Breakpoint kein <img>-Request: die
          <source> matcht dort nicht, der Browser laedt gar nichts, das
          Fallback-<img> ist ein eingebettetes 1x1-Pixel. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 md:block" aria-hidden="true">
        <picture>
          <source
            media="(min-width: 768px)"
            sizes="33vw"
            srcSet="
              /images/hero-janic-desk-480w.webp 480w,
              /images/hero-janic-desk-640w.webp 640w,
              /images/hero-janic-desk-800w.webp 800w,
              /images/hero-janic-desk-1080w.webp 1080w,
              /images/hero-janic-desk-1440w.webp 1440w
            "
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            alt=""
            className="h-full w-full object-cover object-[55%_22%]"
          />
        </picture>
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <p className="mx-auto mb-6 inline-block rounded-full border border-border-strong bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light">
          {company.claim}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
          Websites und Funnels, die aus Besuchern Anfragen machen.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
          Für Schweizer KMU und Start-ups baue ich die komplette Basis für planbare Kundenanfragen. Website,
          Funnel und Kampagne aus einer Hand, direkt vom Umsetzer, ohne Agentur-Overhead.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton section="hero" label="Schreib Janic auf WhatsApp" size="lg" />
          <Button href="/leistungen" variant="outline" size="lg">
            Leistungen ansehen
          </Button>
        </div>

        <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 text-sm text-text-secondary sm:grid-cols-3">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 rounded-xl border border-border bg-surface/60 p-4 text-left">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
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
