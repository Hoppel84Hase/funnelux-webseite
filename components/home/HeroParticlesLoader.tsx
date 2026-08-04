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

    // useEffect laeuft ohnehin erst nach dem ersten Paint, der Hero-Text
    // steht also schon. Ein zusaetzliches requestIdleCallback (bis zu 2s
    // Wartezeit) hat das Partikel-Netz nur unnoetig spaet aufploppen lassen,
    // deshalb wird der Import jetzt direkt angestossen.
    setShouldLoad(true);
  }, []);

  if (!shouldLoad) return null;
  return <HeroParticles />;
}
