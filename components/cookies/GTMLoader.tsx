"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useCookieConsent } from "./CookieConsentProvider";
import { GTM_ID_PLACEHOLDER } from "@/lib/consent";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || GTM_ID_PLACEHOLDER;

// Laedt den Google Tag Manager Container erst, nachdem mindestens einer
// Kategorie (Statistik oder Marketing) zugestimmt wurde. Vorher wird kein
// einziges Tracking-Script geladen. Solange NEXT_PUBLIC_GTM_ID auf dem
// Platzhalter steht, wird gar nichts geladen.
export function GTMLoader() {
  const { consent, hasDecided } = useCookieConsent();
  const [loaded, setLoaded] = useState(false);

  const consentGranted = hasDecided && (consent.statistics || consent.marketing);

  useEffect(() => {
    if (consentGranted) setLoaded(true);
  }, [consentGranted]);

  if (!loaded || GTM_ID === GTM_ID_PLACEHOLDER) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
        j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
}
