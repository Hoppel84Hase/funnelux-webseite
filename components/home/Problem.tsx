import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProblemScrollCard } from "@/components/home/ProblemScrollCard";
import { problemCards } from "@/content/problems";

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Kommt dir bekannt vor?"
        title="Drei Situationen, die ich oft sehe"
        subtitle="Meistens beginnt es mit einem dieser drei Punkte, und so wird daraus eine Lösung."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {problemCards.map((card, index) => (
          <FadeIn key={card.title} delay={index * 100}>
            <ProblemScrollCard card={card} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
