import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent/10 text-accent-light shadow-glow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
