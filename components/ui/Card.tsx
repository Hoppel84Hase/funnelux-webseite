import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
};

export function Card({ children, className, hover = true, id }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 md:p-8",
        hover && "transition-all duration-300 hover:border-border-strong hover:shadow-glow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
