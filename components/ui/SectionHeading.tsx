import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent-light">{eyebrow}</p>
      ) : null}
      <Heading className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">{title}</Heading>
      {subtitle ? <p className="mt-4 text-base text-text-secondary sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
