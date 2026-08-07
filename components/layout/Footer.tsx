"use client";

import Link from "next/link";
import Image from "next/image";
import { company, socials } from "@/content/company";
import { legalNav, mainNav } from "@/content/nav";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

export function Footer() {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image src="/images/logo-dark.webp" alt="Funnelux Marketing" width={216} height={55} />
            <p className="mt-4 text-sm font-medium text-accent-light">{company.claim}</p>
            <p className="mt-2 max-w-sm text-sm text-text-secondary">
              Websites und Funnels für Schweizer KMU und Start-ups. Ein Ansprechpartner, direkter Kontakt, ein
              Festpreis, der vorher feststeht.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-secondary hover:text-accent-light"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-secondary hover:text-accent-light"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-secondary hover:text-accent-light"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">Navigation</p>
            <ul className="mt-4 space-y-2">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-accent-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">Kontakt</p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li className="text-text-primary">{company.name}</li>
              <li>{company.street}</li>
              <li>
                CH-{company.zip} {company.city}
              </li>
              <li>
                <a href={`tel:${company.phoneE164}`} className="hover:text-accent-light">
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-accent-light">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}, {company.owner}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent-light">
                {link.label}
              </Link>
            ))}
            <button type="button" onClick={openSettings} className="hover:text-accent-light">
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.94c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.66 1.8-2.66 3.66V23h-4V8z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.8c0-1 .28-1.7 1.73-1.7H16.5V3.14C16.2 3.1 15.2 3 14 3c-2.5 0-4.2 1.53-4.2 4.33V10H7v3.5h2.8V22h3.7z" />
    </svg>
  );
}
