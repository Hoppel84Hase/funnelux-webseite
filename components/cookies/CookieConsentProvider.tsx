"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  ConsentState,
  defaultConsentState,
  pushConsentUpdate,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/consent";

type CookieConsentContextValue = {
  consent: ConsentState;
  hasDecided: boolean;
  bannerVisible: boolean;
  panelOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSelection: (selection: { statistics: boolean; marketing: boolean }) => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(defaultConsentState);
  const [hasDecided, setHasDecided] = useState(false);
  // Startet sichtbar (statt erst nach einem Client-Check), damit der Banner
  // ohne Verzoegerung mitgerendert wird und nicht nachtraeglich als spaetes,
  // grosses Element den Largest Contentful Paint verzoegert. Fuer
  // wiederkehrende Besucher mit bereits gespeicherter Entscheidung wird er
  // im Effekt unten sofort wieder ausgeblendet.
  const [bannerVisible, setBannerVisible] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
      setHasDecided(true);
      setBannerVisible(false);
      // Auch fuer wiederkehrende Besucher mit bereits gespeicherter
      // Entscheidung den aktuellen Consent-Status pushen, nicht nur beim
      // ersten Entscheid. Sonst kann GTM bei diesen Seitenaufrufen den
      // Consent-Status nicht auswerten, weil im dataLayer dieser Session nie
      // ein entsprechendes Event ankommt.
      pushConsentUpdate(stored);
    }
  }, []);

  function decide(next: ConsentState) {
    setConsent(next);
    setHasDecided(true);
    writeStoredConsent(next);
    pushConsentUpdate(next);
    setBannerVisible(false);
    setPanelOpen(false);
  }

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasDecided,
      bannerVisible,
      panelOpen,
      acceptAll: () => decide({ necessary: true, statistics: true, marketing: true }),
      rejectAll: () => decide({ necessary: true, statistics: false, marketing: false }),
      saveSelection: (selection) => decide({ necessary: true, ...selection }),
      openSettings: () => setPanelOpen(true),
      closeSettings: () => setPanelOpen(false),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [consent, hasDecided, bannerVisible, panelOpen]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent muss innerhalb von CookieConsentProvider verwendet werden");
  }
  return ctx;
}
