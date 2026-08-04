"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "fade";
};

type Status = "idle" | "hidden" | "revealing";

// Startet immer sichtbar (auch ohne JavaScript oder vor Hydration). Erst wenn
// JS laeuft UND das Element beim Laden ausserhalb des Viewports liegt, wird es
// kurz ausgeblendet und beim Reinscrollen animiert eingeblendet. Elemente, die
// schon beim Laden sichtbar sind, bleiben unangetastet, damit es keinen
// Blink-Effekt gibt.
//
// variant="fade": reiner Opacity-Fade ohne translateY/transform. Wichtig fuer
// Elemente, deren eigene Position von anderem Code (z. B. GSAP ScrollTrigger)
// vermessen wird, da ein gleichzeitig laufender Transform diese Messung
// verfaelschen wuerde.
export function FadeIn({ children, className, delay = 0, variant = "up" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) return;

    setStatus("hidden");

    // rootMargin erweitert die Ausloese-Zone etwas unter den sichtbaren
    // Viewport, damit die Animation kurz vor dem Sichtbarwerden einsetzt.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatus("revealing");
            observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" }
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
        status === "revealing" &&
          (variant === "fade" ? "animate-fade-in" : "motion-safe:animate-fade-up motion-reduce:animate-fade-in"),
        className
      )}
    >
      {children}
    </div>
  );
}
