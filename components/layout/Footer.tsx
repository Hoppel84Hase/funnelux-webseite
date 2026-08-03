"use client";

import Link from "next/link";
import Image from "next/image";
import { company } from "@/content/company";
import { legalNav, mainNav } from "@/content/nav";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

export function Footer() {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image src="/images/logo-dark.webp" alt="Funnelux Marketing" width={156} height={40} />
            <p className="mt-4 text-sm font-medium text-accent-light">{company.claim}</p>
            <p className="mt-2 max-w-sm text-sm text-text-secondary">
              Websites und Funnels für Schweizer KMU und Start-ups. Ein Ansprechpartner, direkter Kontakt,
              transparente Preise.
            </p>
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
                {company.zip} {company.city}
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
