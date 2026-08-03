import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ClosingCta() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Lass uns kurz schreiben
        </h2>
        <p className="mt-4 text-base text-text-secondary sm:text-lg">
          Du schilderst mir dein Vorhaben, ich sage dir ehrlich, ob und wie ich helfen kann.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton section="closing_cta" size="lg" />
        </div>
      </div>
    </section>
  );
}
