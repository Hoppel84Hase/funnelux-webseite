import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { company } from "@/content/company";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Schreib Janic Maier direkt über WhatsApp, per E-Mail oder telefonisch. Antwort innert 24 Stunden, kostenloses Erstgespräch.",
  path: "/kontakt",
});

const steps = [
  "Du schreibst mir über WhatsApp, E-Mail oder Telefon dein Vorhaben.",
  "Ich antworte innert 24 Stunden und wir vereinbaren ein kostenloses Erstgespräch.",
  "Nach dem Gespräch bekommst du eine Fixofferte, ohne versteckte Kosten.",
];

export default function KontaktPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Kontakt"
        title="Schreib mir, wir klären den Rest gemeinsam"
        subtitle="Trag kurz deine Kontaktdaten ein, danach öffnet sich WhatsApp mit einer vorausgefüllten Nachricht an mich."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <FadeIn className="md:col-span-2">
          <Card className="flex h-full flex-col items-start justify-center bg-gradient-to-br from-surface to-whatsapp/10">
            <p className="text-sm font-semibold text-text-primary">Hauptweg</p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary">Schreib mir auf WhatsApp</h2>
            <p className="mt-3 text-sm text-text-secondary">
              Der schnellste Weg, um mich zu erreichen. Ich antworte innert 24 Stunden.
            </p>
            <div className="mt-6">
              <WhatsAppButton section="kontakt_hauptweg" size="lg" />
            </div>
            <p className="mt-3 text-xs text-text-secondary">
              Zuerst öffnet sich ein kurzes Formular für Vorname, E-Mail und Telefon, danach startet WhatsApp.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={100}>
          <Card className="flex h-full flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-text-primary">E-Mail</p>
              <a href={`mailto:${company.email}`} className="mt-1 block text-sm text-accent-light hover:text-accent">
                {company.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Telefon</p>
              <a href={`tel:${company.phoneE164}`} className="mt-1 block text-sm text-accent-light hover:text-accent">
                {company.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Adresse</p>
              <p className="mt-1 text-sm text-text-secondary">
                {company.name}
                <br />
                {company.owner}
                <br />
                {company.street}
                <br />
                {company.zip} {company.city}
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>

      <div className="mt-14">
        <p className="text-sm font-semibold text-text-primary">Was nach deiner Nachricht passiert</p>
        <ol className="mt-4 space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3 text-sm text-text-secondary">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-accent-light">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
