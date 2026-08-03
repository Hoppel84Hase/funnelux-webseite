export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export const UTM_STORAGE_KEY = "funnelux_utm";

export function extractUtmParams(search: string): UtmParams {
  const params = new URLSearchParams(search);
  const result: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) result[key] = value;
  }
  return result;
}

export function readStoredUtm(): UtmParams | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function writeStoredUtm(params: UtmParams) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
}
