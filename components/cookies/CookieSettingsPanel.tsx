"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import { cn } from "@/lib/cn";

const actionButtonClasses =
  "w-full rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent/10 sm:w-auto";

export function CookieSettingsPanel() {
  const { consent, panelOpen, closeSettings, saveSelection, acceptAll } = useCookieConsent();
  const [statistics, setStatistics] = useState(consent.statistics);
  const [marketing, setMarketing] = useState(consent.marketing);

  useEffect(() => {
    if (panelOpen) {
      setStatistics(consent.statistics);
      setMarketing(consent.marketing);
    }
  }, [panelOpen, consent]);

  if (!panelOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 px-4 pb-4 sm:items-center sm:pb-0">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie-Einstellungen anpassen"
        className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-text-primary">Cookie-Einstellungen</h2>
          <button
            type="button"
            onClick={closeSettings}
            aria-label="Schliessen"
            className="text-text-secondary hover:text-text-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-sm text-text-secondary">
          Wähle aus, welche Kategorien du zulassen möchtest. Details dazu findest du in der{" "}
          <Link href="/datenschutz" className="text-accent-light underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>

        <div className="mt-6 space-y-4">
          <ConsentRow
            title="Notwendig"
            description="Für den Betrieb der Seite erforderlich, zum Beispiel für gespeicherte Cookie-Einstellungen."
            checked
            disabled
          />
          <ConsentRow
            title="Statistik"
            description="Google Tag Manager / Analytics, hilft zu verstehen, wie die Seite genutzt wird."
            checked={statistics}
            onChange={setStatistics}
          />
          <ConsentRow
            title="Marketing"
            description="Meta Pixel, für die Auswertung und Optimierung von Werbekampagnen."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => saveSelection({ statistics, marketing })}
            className={actionButtonClasses}
          >
            Auswahl speichern
          </button>
          <button type="button" onClick={acceptAll} className={actionButtonClasses}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

type ConsentRowProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
};

function ConsentRow({ title, description, checked, disabled, onChange }: ConsentRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-background/40 p-4">
      <div>
        <p className="text-sm font-medium text-text-primary">{title}</p>
        <p className="mt-1 text-xs text-text-secondary">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          checked ? "bg-accent" : "bg-white/10",
          disabled && "cursor-not-allowed opacity-60"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  );
}
