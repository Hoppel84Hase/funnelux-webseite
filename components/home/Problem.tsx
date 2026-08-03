import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { problemCards } from "@/content/problems";

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Kommt dir bekannt vor?"
        title="Drei Situationen, die ich oft sehe"
        subtitle="Meistens beginnt es mit einem dieser drei Punkte."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {problemCards.map((card, index) => (
          <FadeIn key={card.title} delay={index * 100}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-text-primary">{card.title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{card.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
