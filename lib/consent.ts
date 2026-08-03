export type ConsentCategory = "necessary" | "statistics" | "marketing";

export type ConsentState = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

export const CONSENT_STORAGE_KEY = "funnelux_consent";
export const GTM_ID_PLACEHOLDER = "GTM-XXXXXXX";

export const defaultConsentState: ConsentState = {
  necessary: true,
  statistics: false,
  marketing: false,
};

export function readStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.statistics === "boolean" && typeof parsed?.marketing === "boolean") {
      return { necessary: true, statistics: parsed.statistics, marketing: parsed.marketing };
    }
    return null;
  } catch {
    return null;
  }
}

export function writeStoredConsent(consent: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function pushDataLayer(data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

export function pushConsentUpdate(consent: ConsentState) {
  pushDataLayer({
    event: "consent_update",
    consent_statistics: consent.statistics,
    consent_marketing: consent.marketing,
  });
  pushDataLayer({ event: consent.statistics ? "consent_statistics_granted" : "consent_statistics_denied" });
  pushDataLayer({ event: consent.marketing ? "consent_marketing_granted" : "consent_marketing_denied" });
}

export function trackWhatsAppClick(section: string) {
  pushDataLayer({ event: "whatsapp_click", whatsapp_section: section });
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
