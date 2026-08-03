"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

type Status = "idle" | "hidden" | "revealing";

// Startet immer sichtbar (auch ohne JavaScript oder vor Hydration). Erst wenn
// JS laeuft UND das Element beim Laden ausserhalb des Viewports liegt, wird es
// kurz ausgeblendet und beim Reinscrollen animiert eingeblendet. Elemente, die
// schon beim Laden sichtbar sind, bleiben unangetastet, damit es keinen
// Blink-Effekt gibt.
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) return;

    setStatus("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatus("revealing");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: status === "revealing" ? `${delay}ms` : undefined }}
      className={cn(
        status === "hidden" && "opacity-0",
        status === "revealing" && "motion-safe:animate-fade-up motion-reduce:animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
}
