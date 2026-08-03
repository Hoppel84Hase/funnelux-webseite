import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
  glass?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, className, hover = true, id, glass = false },
  ref
) {
  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "rounded-2xl border border-border p-6 md:p-8",
        glass ? "bg-surface/70 backdrop-blur-md" : "bg-surface",
        hover && "transition-all duration-300 hover:border-border-strong hover:shadow-glow-sm",
        className
      )}
    >
      {children}
    </div>
  );
});
