"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroParticles = dynamic(() => import("./HeroParticles").then((m) => m.HeroParticles), {
  ssr: false,
});

type NavigatorWithHints = Navigator & { deviceMemory?: number };

// Entscheidet, ob das three.js Partikel-Netz ueberhaupt geladen wird. Bei
// prefers-reduced-motion, kleinen Viewports (Mobile) oder leistungsschwachen
// Geraeten wird gar nichts nachgeladen, der statische Indigo-Gradient im
// Hero bleibt als Fallback sichtbar.
export function HeroParticlesLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallViewport = window.matchMedia("(max-width: 768px)").matches;
    const nav = navigator as NavigatorWithHints;
    const weakCores = typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 2;
    const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2;

    if (reducedMotion || isSmallViewport || weakCores || lowMemory) {
      return;
    }

    // Erst nach dem ersten Paint laden, damit der Hero-Text sofort steht.
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 });
    } else {
      timeoutId = setTimeout(() => setShouldLoad(true), 300);
    }

    return () => {
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!shouldLoad) return null;
  return <HeroParticles />;
}
