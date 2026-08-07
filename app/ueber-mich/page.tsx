import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FallbackImage } from "@/components/ui/FallbackImage";
import { Card } from "@/components/ui/Card";
import { ClosingCta } from "@/components/home/ClosingCta";
import { principles } from "@/content/principles";
import { socials } from "@/content/company";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

export const metadata = buildMetadata({
  title: "Über mich",
  description:
    "Janic Maier, Funnelux Marketing aus Winterthur. Spezialisiert auf Funnel Marketing, Webdesign und Copywriting für Schweizer KMU.",
  path: "/ueber-mich",
});

export default function UeberMichPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <FallbackImage
              src="/images/janic.jpg"
              alt="Janic Maier, Funnelux Marketing"
              placeholderLabel="Portraitfoto folgt"
              className="aspect-[4/5] w-full max-w-md"
              sizes="(max-width: 768px) 100vw, 480px"
              priority
            />
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-sm font-medium uppercase tracking-wider text-accent-light">Über mich</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">Ich bin Janic</h1>
            <div className="mt-6 space-y-4 text-base text-text-secondary sm:text-lg">
              <p>
                Ich lebe und arbeite in Winterthur und habe mich auf Funnel Marketing, Webdesign und
                Copywriting spezialisiert. Funnelux Marketing ist mein Einzelunternehmen, mit dem ich
                Schweizer KMU und Start-ups bei ihrem Online-Auftritt unterstütze.
              </p>
              <p>
                Angefangen hat es mit der Frage, warum viele gute Firmen online kaum sichtbar sind. Heute baue
                ich Websites und Funnels, die dieses Problem konkret lösen, mit klarer Struktur statt
                Bauchgefühl.
              </p>
            </div>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Janic Maier auf LinkedIn"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              Mein LinkedIn-Profil ansehen
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Warum Einzelunternehmer" title="Kurze Wege, volle Verantwortung" align="left" />
          <div className="mt-6 space-y-4 text-base text-text-secondary">
            <p>
              Bei mir gibt es keine Übergabe zwischen Beratung, Konzept und Umsetzung. Ich kenne dein Projekt
              von Anfang an und bleibe während der ganzen Zusammenarbeit dein Ansprechpartner.
            </p>
            <p>
              Das bedeutet kurze Wege für dich und volle Verantwortung für mich. Wenn etwas nicht funktioniert,
              gibt es niemanden, an den ich verweisen könnte, also löse ich es.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Arbeitsweise" title="Erst verstehen, dann bauen, dann optimieren" align="left" />
        <div className="mt-6 space-y-4 text-base text-text-secondary">
          <p>
            Am Anfang steht immer ein Gespräch. Ich will verstehen, wie dein Angebot funktioniert, wer deine
            Kunden sind und was bei dir bisher gefehlt hat.
          </p>
          <p>
            Erst danach beginnt die Umsetzung, mit klarer Struktur statt vorschnellem Design. Sobald deine
            Seite oder dein Funnel live ist, schauen wir gemeinsam auf die echten Zahlen und passen an, was
            sich in der Praxis zeigt.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Grundsätze" title="Worauf du dich verlassen kannst" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <FadeIn key={principle.title} delay={index * 80}>
                <Card>
                  <h3 className="text-base font-semibold text-text-primary">{principle.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{principle.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
