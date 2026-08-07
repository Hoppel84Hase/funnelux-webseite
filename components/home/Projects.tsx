import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { FallbackImage } from "@/components/ui/FallbackImage";
import { projects, projectsNote } from "@/content/projects";

export function Projects() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Referenzen" title="Pilotprojekte" subtitle={projectsNote} />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 100}>
              <Card className="flex h-full flex-col overflow-hidden p-0">
                <FallbackImage
                  src={project.image}
                  alt={`Screenshot von ${project.name}`}
                  placeholderLabel={`Screenshot von ${project.name} folgt`}
                  className="aspect-video w-full rounded-none border-0 border-b border-border"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                  <p className="mt-3 text-sm text-text-secondary">{project.description}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
