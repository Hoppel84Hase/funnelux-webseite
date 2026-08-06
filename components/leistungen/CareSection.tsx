import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { careSectionHeading, careItems } from "@/content/leistungenPage";

export function CareSection() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={careSectionHeading.title} subtitle={careSectionHeading.subtitle} />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {careItems.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 100}>
              <Card glass className="h-full">
                <h3 className="text-lg font-semibold text-text-primary">{item.heading}</h3>
                <p className="mt-2 text-xs italic text-text-secondary">{item.subtext}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
