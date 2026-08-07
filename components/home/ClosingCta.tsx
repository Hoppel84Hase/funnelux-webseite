import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type ClosingCtaProps = {
  title?: string;
  text?: string;
  section?: string;
  label?: string;
};

export function ClosingCta({
  title = "Lass uns kurz schreiben",
  text = "Du schilderst mir dein Vorhaben, ich sage dir ehrlich, ob und wie ich helfen kann.",
  section = "closing_cta",
  label = "Schreib Janic auf WhatsApp",
}: ClosingCtaProps) {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base text-text-secondary sm:text-lg">{text}</p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton section={section} label={label} size="lg" />
        </div>
      </div>
    </section>
  );
}
