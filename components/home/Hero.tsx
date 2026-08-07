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

      {/* Hintergrundfoto rechte Haelfte. Reine Dekoration (aria-hidden,
          leerer alt-Text, pointer-events-none), liegt ueber Glow/Grid/
          Partikeln, aber unter dem Text-Layer (naechstes Geschwister-Div
          unten) -- gleiche Stapel-Logik wie die drei Ebenen darueber, ohne
          eigenes z-index. Unter dem md-Breakpoint kein <img>-Request: die
          <source> matcht dort nicht, der Browser laedt gar nichts, das
          Fallback-<img> ist ein eingebettetes 1x1-Pixel.
          Verlauf/Toenung als ein einzelner mehrstufiger Gradient statt
          Volltoenung + 2-Stopp-Verlauf uebereinander: ein linearer
          2-Stopp-Verlauf wirkt am Rand wie eine harte Kante, weil das Auge
          Helligkeit nicht linear wahrnimmt. Die Zwischenstufen gleichen das
          aus. Alle Werte sind rgba-Ableitungen von #12141f (background). */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block" aria-hidden="true">
        <picture>
          <source
            media="(min-width: 768px)"
            sizes="50vw"
            srcSet="
              /images/hero-janic-desk-384w.webp 384w,
              /images/hero-janic-desk-512w.webp 512w,
              /images/hero-janic-desk-720w.webp 720w,
              /images/hero-janic-desk-960w.webp 960w,
              /images/hero-janic-desk-1280w.webp 1280w,
              /images/hero-janic-desk-1600w.webp 1600w
            "
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            alt=""
            className="h-full w-full object-cover object-[55%_22%]"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#12141f_0%,_rgba(18,20,31,0.97)_10%,_rgba(18,20,31,0.92)_25%,_rgba(18,20,31,0.8)_40%,_rgba(18,20,31,0.6)_55%,_rgba(18,20,31,0.35)_70%,_rgba(18,20,31,0.15)_85%,_transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(18,20,31,0.15)_20%,_rgba(18,20,31,0.3)_40%,_rgba(18,20,31,0.55)_60%,_rgba(18,20,31,0.8)_80%,_#12141f_100%)]" />
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
