"use client";

import { useEffect, useRef, useState } from "react";
import { useLeadModal } from "./LeadModalProvider";
import { buildWhatsAppLink } from "@/content/company";
import { trackLeadFormSubmit, trackWhatsAppClick } from "@/lib/consent";
import { readStoredUtm } from "@/lib/utm";

type Step = "form" | "success";

export function LeadModal() {
  const { isOpen, section, closeModal } = useLeadModal();
  const [step, setStep] = useState<Step>("form");
  const [vorname, setVorname] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setVorname("");
      setEmail("");
      setTelefon("");
      const timeout = setTimeout(() => firstFieldRef.current?.focus(), 50);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hallo Janic, mein Name ist ${vorname}. Ich interessiere mich für eine Website oder einen Funnel. Meine E-Mail: ${email}, Telefon: ${telefon}.`;
    const link = buildWhatsAppLink(message);
    setWhatsappLink(link);

    window.open(link, "_blank", "noopener,noreferrer");

    const utm = readStoredUtm() || {};
    trackWhatsAppClick(section ?? "unbekannt");
    trackLeadFormSubmit(section ?? "unbekannt", utm);

    setStep("success");
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 px-4 pb-4 sm:items-center sm:pb-0"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={step === "form" ? "Kontaktdaten" : "Danke für deine Anfrage"}
        className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-text-primary">
            {step === "form" ? "Deine Kontaktdaten" : `Danke, ${vorname || "und bis gleich"}.`}
          </h2>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Schliessen"
            className="text-text-secondary hover:text-text-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {step === "form" ? (
          <>
            <p className="mt-2 text-sm text-text-secondary">
              Trag kurz deine Angaben ein. Danach öffnet sich WhatsApp mit einer vorausgefüllten Nachricht an
              mich.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Field
                inputRef={firstFieldRef}
                id="lead-vorname"
                label="Vorname"
                type="text"
                autoComplete="given-name"
                placeholder="Dein Vorname"
                value={vorname}
                onChange={setVorname}
                required
              />
              <Field
                id="lead-email"
                label="E-Mail"
                type="email"
                autoComplete="email"
                placeholder="deine@email.ch"
                value={email}
                onChange={setEmail}
                required
              />
              <Field
                id="lead-telefon"
                label="Telefon"
                type="tel"
                autoComplete="tel"
                placeholder="+41 79 000 00 00"
                value={telefon}
                onChange={setTelefon}
                required
              />

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Weiter zu WhatsApp
              </button>
            </form>
          </>
        ) : (
          <div className="mt-2">
            <p className="text-sm text-text-secondary">
              Deine Anfrage ist bei mir angekommen. Du hörst von mir, meistens innert 24 Stunden.
            </p>
            <p className="mt-4 text-xs text-text-secondary">
              Falls sich WhatsApp nicht automatisch in einem neuen Tab geöffnet hat,{" "}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-accent-light underline underline-offset-2">
                hier klicken
              </a>
              .
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 w-full rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent/10"
            >
              Schliessen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
};

function Field({ id, label, type, value, onChange, placeholder, autoComplete, required, inputRef }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-text-primary">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-background/40 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent"
      />
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.876.52 3.68 1.5 5.253L2 22l4.879-1.474A9.945 9.945 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.062a8.03 8.03 0 0 1-4.375-1.291l-.313-.187-2.895.875.883-2.815-.204-.324A8.043 8.043 0 0 1 3.938 12c0-4.452 3.612-8.062 8.063-8.062S20.062 7.548 20.062 12 16.452 20.062 12.001 20.062z" />
    </svg>
  );
}
