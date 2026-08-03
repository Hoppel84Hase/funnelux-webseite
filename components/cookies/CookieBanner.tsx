"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

const actionButtonClasses =
  "w-full rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent/10 sm:w-auto";

export function CookieBanner() {
  const { bannerVisible, panelOpen, acceptAll, rejectAll, openSettings } = useCookieConsent();

  if (!bannerVisible || panelOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6">
        <p className="text-sm text-text-secondary">
          Diese Seite verwendet Cookies. Notwendige Cookies sind für den Betrieb der Seite erforderlich.
          Statistik- und Marketing-Cookies setzen wir nur mit deiner Zustimmung ein. Mehr dazu in der{" "}
          <Link href="/datenschutz" className="text-accent-light underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={acceptAll} className={actionButtonClasses}>
            Akzeptieren
          </button>
          <button type="button" onClick={rejectAll} className={actionButtonClasses}>
            Ablehnen
          </button>
          <button type="button" onClick={openSettings} className={actionButtonClasses}>
            Anpassen
          </button>
        </div>
      </div>
    </div>
  );
}
