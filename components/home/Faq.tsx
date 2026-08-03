import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/content/faq";

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Fragen und Antworten" title="Häufige Fragen" />

      <div className="mt-12 space-y-3">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border bg-surface p-5 open:border-border-strong sm:p-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-text-primary marker:content-none">
              {item.question}
              <ChevronIcon className="h-5 w-5 shrink-0 text-accent-light transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-text-secondary sm:text-base">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}
