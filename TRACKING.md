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

## 2. Lead-Formular vor WhatsApp

Ein Klick auf einen WhatsApp-Button (`components/ui/WhatsAppButton.tsx`) öffnet nicht mehr direkt WhatsApp,
sondern zuerst ein Modal (`components/leads/LeadModal.tsx`) mit den Feldern Vorname, E-Mail und Telefon. Der
Klick auf den Button selbst löst noch kein Tracking-Event aus. Erst beim Absenden des Formulars passiert
Folgendes, in dieser Reihenfolge:

1. WhatsApp öffnet sich in einem neuen Tab mit einer Nachricht, die Vorname, E-Mail und Telefon enthält.
2. Die Events `whatsapp_click` und `lead_form_submit` werden gepusht (siehe Tabelle unten).
3. Im Modal erscheint eine Bestätigung ("Danke, [Vorname]. Du hörst von mir.").

Welche Sektion das Modal geöffnet hat (`hero`, `pricing_funnel`, `header` und so weiter), wird als `section`
durchgereicht und landet in beiden Events.

## 3. Consent- und Conversion-Events, die im dataLayer ankommen

Die Seite pusht folgende Events in `window.dataLayer`:

| Event | Bedeutung |
| --- | --- |
| `consent_update` | Enthält `consent_statistics` und `consent_marketing` als Booleans, bei jeder Änderung im Cookie-Banner beziehungsweise Einstellungs-Panel. |
| `consent_statistics_granted` / `consent_statistics_denied` | Statistik-Kategorie wurde zugestimmt / abgelehnt. |
| `consent_marketing_granted` / `consent_marketing_denied` | Marketing-Kategorie wurde zugestimmt / abgelehnt. |
| `whatsapp_click` | Beim Absenden des Lead-Formulars (nicht beim Klick auf den WhatsApp-Button selbst), mit Feld `whatsapp_section`. |
| `lead_form_submit` | Ebenfalls beim Absenden des Lead-Formulars, mit Feld `lead_section` sowie den zu dem Zeitpunkt gespeicherten UTM-Feldern (siehe unten), falls vorhanden. |
| `utm_params` | Beim ersten Seitenaufruf mit UTM-Parametern in der URL, mit den Feldern `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`. |

## 4. Meta Pixel im GTM-Interface anlegen

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

## 5. Google Analytics / Statistik-Tag anlegen

1. Im GTM-Container einen Tag vom Typ **Google Analytics: GA4-Konfiguration** anlegen.
2. Als Trigger einen **Custom Event** Trigger auf `consent_statistics_granted` setzen.

## 6. UTM-Parameter in GTM nutzen

Die Seite liest beim ersten Aufruf `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` und `utm_term`
aus der URL, hält sie für die Dauer der Session in `sessionStorage` und pusht sie zusätzlich als Event
`utm_params` in den dataLayer. In GTM können daraus **Data Layer Variablen** (z. B. `DLV - utm_source`)
erstellt und an die jeweiligen Tags (Analytics, Meta) weitergegeben werden.

Beim Absenden des Lead-Formulars werden dieselben, zu dem Zeitpunkt in `sessionStorage` gespeicherten
UTM-Werte zusätzlich direkt als Felder im `lead_form_submit`-Event mitgeschickt. Ein Lead lässt sich damit
auch dann noch der ursprünglichen Kampagne zuordnen, wenn zwischen Landing und Formular mehrere Seiten
dazwischenliegen.

## 7. WhatsApp-Klicks und Lead-Formular als Conversion

Beim Absenden des Lead-Formulars werden `whatsapp_click` (Feld `whatsapp_section`) und `lead_form_submit`
(Feld `lead_section`, plus UTM-Felder) gepusht, siehe Abschnitt 2. In GTM kann auf eines der beiden oder auf
beide Events je ein Trigger erstellt werden, der z. B. an Google Ads als Conversion oder an Meta als Custom
Conversion gemeldet wird. Für Auswertungen, die auch die Herkunft des Leads zeigen sollen, ist
`lead_form_submit` die vollständigere Wahl, weil dort die UTM-Felder schon mitgeliefert werden.
