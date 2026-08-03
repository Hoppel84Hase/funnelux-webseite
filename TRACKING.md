# Tracking-Setup

Diese Seite lädt keinerlei Tracking-Skripte, solange keine Zustimmung im Cookie-Banner vorliegt. Sobald
mindestens eine der Kategorien Statistik oder Marketing zugestimmt wurde, lädt `components/cookies/GTMLoader.tsx`
den Google Tag Manager Container. Alles Weitere (Google Analytics, Meta Pixel) wird über GTM gesteuert, nicht
direkt im Code.

## 1. GTM-Container anlegen

1. Auf [tagmanager.google.com](https://tagmanager.google.com) einen neuen Container für `funnelux.ch` anlegen.
2. Die Container-ID (Format `GTM-XXXXXXX`) kopieren.
3. In `.env.local` (lokal) bzw. in den Vercel-Projekteinstellungen (Produktion) die Variable
   `NEXT_PUBLIC_GTM_ID` auf diese ID setzen. Solange dort der Platzhalter `GTM-XXXXXXX` steht, wird nichts
   geladen.

## 2. Consent-Events, die im dataLayer ankommen

Die Seite pusht bei jeder Entscheidung im Cookie-Banner beziehungsweise Einstellungs-Panel folgende Events in
`window.dataLayer`:

| Event | Bedeutung |
| --- | --- |
| `consent_update` | Enthält `consent_statistics` und `consent_marketing` als Booleans, bei jeder Änderung. |
| `consent_statistics_granted` / `consent_statistics_denied` | Statistik-Kategorie wurde zugestimmt / abgelehnt. |
| `consent_marketing_granted` / `consent_marketing_denied` | Marketing-Kategorie wurde zugestimmt / abgelehnt. |
| `whatsapp_click` | Bei jedem Klick auf einen WhatsApp-Button, mit Feld `whatsapp_section` (z. B. `hero`, `pricing_funnel`, `header`). |
| `utm_params` | Beim ersten Seitenaufruf mit UTM-Parametern in der URL, mit den Feldern `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`. |

## 3. Meta Pixel im GTM-Interface anlegen

Der Meta Pixel läuft ausschliesslich über GTM, nicht direkt im Code:

1. Im GTM-Container einen neuen Tag vom Typ **Meta Pixel** anlegen (oder einen Custom-HTML-Tag mit dem
   Standard-Pixel-Snippet, falls kein vorgefertigter Tag-Typ verwendet wird).
2. Als Pixel-ID den Platzhalter `PIXEL_ID` durch die echte Meta-Pixel-ID ersetzen.
3. Als Trigger einen **Custom Event** Trigger auf das Event `consent_marketing_granted` setzen, damit der Tag
   nur feuert, wenn Marketing-Zustimmung vorliegt.
4. Für den PageView-Trigger zusätzlich einen zweiten Trigger auf **All Pages** setzen, aber mit der Bedingung,
   dass `consent_marketing_granted` bereits vorher gefeuert hat (z. B. über eine GTM-Variable, die den
   aktuellen Consent-Status aus dem dataLayer liest), oder alternativ den Tag ausschliesslich über den
   Custom-Event-Trigger auslösen und dafür sorgen, dass bei jedem Seitenwechsel (Route-Wechsel in Next.js)
   erneut ein `consent_marketing_granted`-Event gepusht wird, falls die Zustimmung bereits vorher erteilt
   wurde.

## 4. Google Analytics / Statistik-Tag anlegen

1. Im GTM-Container einen Tag vom Typ **Google Analytics: GA4-Konfiguration** anlegen.
2. Als Trigger einen **Custom Event** Trigger auf `consent_statistics_granted` setzen.

## 5. UTM-Parameter in GTM nutzen

Die Seite liest beim ersten Aufruf `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` und `utm_term`
aus der URL, hält sie für die Dauer der Session in `sessionStorage` und pusht sie zusätzlich als Event
`utm_params` in den dataLayer. In GTM können daraus **Data Layer Variablen** (z. B. `DLV - utm_source`)
erstellt und an die jeweiligen Tags (Analytics, Meta) weitergegeben werden.

## 6. WhatsApp-Klicks als Conversion

Für jeden WhatsApp-Klick wird das Event `whatsapp_click` mit dem Feld `whatsapp_section` gepusht. In GTM kann
darauf ein Trigger erstellt werden, der z. B. an Google Ads als Conversion oder an Meta als Custom Conversion
gemeldet wird.
