"use client";

import { useEffect } from "react";
import { pushDataLayer } from "@/lib/consent";
import { extractUtmParams, readStoredUtm, writeStoredUtm } from "@/lib/utm";

// Liest UTM-Parameter beim ersten Seitenaufruf aus der URL, haelt sie fuer die
// Session und schiebt sie in den dataLayer, damit GTM sie an Tags weitergeben kann.
export function UtmCapture() {
  useEffect(() => {
    const fromUrl = extractUtmParams(window.location.search);
    const hasNewParams = Object.keys(fromUrl).length > 0;

    const active = hasNewParams ? fromUrl : readStoredUtm();
    if (!active || Object.keys(active).length === 0) return;

    if (hasNewParams) writeStoredUtm(active);

    pushDataLayer({ event: "utm_params", ...active });
  }, []);

  return null;
}
