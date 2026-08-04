"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/cn";
import type { ProblemCard } from "@/content/problems";

// GSAP/ScrollTrigger werden erst per dynamischem Import nachgeladen, sobald
// diese Karte gebraucht wird, damit sie nicht das initiale Laden der
// Startseite (LCP) belasten. Bei prefers-reduced-motion wird gar kein GSAP
// geladen, sondern ein reiner CSS-Fade verwendet.
export function ProblemScrollCard({ card }: { card: ProblemCard }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLParagraphElement>(null);
  const solutionRef = useRef<HTMLParagraphElement>(null);
  const reducedMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const cardEl = cardRef.current;
    const problemEl = problemRef.current;
    const solutionEl = solutionRef.current;
    if (!cardEl || !problemEl || !solutionEl) return;

    if (reducedMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setRevealed(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(cardEl);
      return () => observer.disconnect();
    }

    let cancelled = false;
    let trigger: { kill: () => void } | undefined;
    let refresh: (() => void) | undefined;

    function handleWindowLoad() {
      refresh?.();
    }

    import("gsap").then(({ gsap }) =>
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        trigger = ScrollTrigger.create({
          trigger: cardEl,
          start: "top 85%",
          end: "top 15%",
          scrub: 0.6,
          onUpdate: (self) => {
            // Sequenziell statt ueberblendend: Problem-Text blendet zuerst
            // komplett aus (erste Haelfte), erst danach blendet der
            // Loesungs-Text ein (zweite Haelfte). So sind beide Texte nie
            // gleichzeitig sichtbar, kein "Geister"-Overlap mehr.
            const p = self.progress;
            if (p < 0.5) {
              const local = p / 0.5;
              gsap.set(problemEl, { opacity: 1 - local, y: -local * 8 });
              gsap.set(solutionEl, { opacity: 0, y: 8 });
            } else {
              const local = (p - 0.5) / 0.5;
              gsap.set(problemEl, { opacity: 0, y: -8 });
              gsap.set(solutionEl, { opacity: local, y: 8 - local * 8 });
            }
          },
        });
        refresh = () => ScrollTrigger.refresh();

        // FadeIn (jetzt variant="fade", ohne Transform) veraendert die
        // Kartengeometrie nicht mehr, trotzdem sollen Layout-Verschiebungen
        // durch spaet ladende Fonts/Bilder die Trigger-Position nicht
        // verfaelschen, deshalb nach dem finalen Layout neu kalibrieren.
        requestAnimationFrame(() => refresh?.());
        window.addEventListener("load", handleWindowLoad);
      })
    );

    return () => {
      cancelled = true;
      trigger?.kill();
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [reducedMotion]);

  const problemOpacity = reducedMotion ? (revealed ? "opacity-0" : "opacity-100") : "";
  const solutionOpacity = reducedMotion ? (revealed ? "opacity-100" : "opacity-0") : "opacity-0";

  return (
    <Card ref={cardRef} className="h-full">
      <h3 className="text-lg font-semibold text-text-primary">{card.title}</h3>
      <div className="relative mt-3 grid">
        <p
          ref={problemRef}
          className={cn(
            "col-start-1 row-start-1 text-sm text-text-secondary",
            reducedMotion && "transition-opacity duration-500",
            problemOpacity
          )}
        >
          {card.description}
        </p>
        <p
          ref={solutionRef}
          className={cn(
            "col-start-1 row-start-1 text-sm font-medium text-accent-light",
            reducedMotion && "transition-opacity duration-500",
            solutionOpacity
          )}
        >
          {card.solution}
        </p>
      </div>
    </Card>
  );
}
