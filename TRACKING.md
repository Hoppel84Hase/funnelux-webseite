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

Der Meta Pixel läuft ausschliesslich über GTM, nicht direkt im Code. Wichtig: **Kein Tag darf den Trigger
"All Pages" verwenden**, das feuert immer, sobald der Container lädt, unabhängig vom Consent-Status, und
hebelt damit die ganze Consent-Sperre aus (das war ein realer Bug in einer früheren Version des Setups).
Seit dem Fix in `CookieConsentProvider.tsx` wird der aktuelle Consent-Status bei jedem Seitenaufruf früh in
den dataLayer gepusht, auch für wiederkehrende Besucher mit bereits gespeicherter Entscheidung. Die
Custom-Event-Trigger unten funktionieren dadurch zuverlässig, ganz ohne Zusatzkonstruktion.

**Schritt 1: Data Layer Variable anlegen** (einmalig, wird für den Lead-Trigger gebraucht)

Variablen → Neu → Variablenkonfiguration → **Data Layer-Variable** → Name der Data Layer-Variable:
`consent_marketing` → Data Layer-Version: Version 2 → Speichern unter dem Namen `DLV - consent_marketing`.

**Schritt 2: Zwei Trigger anlegen**

- **"Marketing Consent Granted"**: Trigger-Typ **Benutzerdefiniertes Ereignis**, Ereignisname
  `consent_marketing_granted`. Kein zusätzliches Filter nötig, dieses Event existiert nur, wenn Marketing
  zugestimmt wurde.
- **"Lead Submit (Marketing Consent)"**: Trigger-Typ **Benutzerdefiniertes Ereignis**, Ereignisname
  `lead_form_submit`, dieser Trigger löst aus bei **einigen benutzerdefinierten Ereignissen**, Bedingung:
  `{{DLV - consent_marketing}}` **entspricht** `true`. Die Zusatzbedingung ist hier nötig, weil das
  Lead-Formular unabhängig vom Consent-Status abgeschickt werden kann.

**Schritt 3: Zwei Tags anlegen**

1. Tag vom Typ **Meta Pixel** (oder Custom-HTML mit dem Standard-Pixel-Snippet) für das PageView-Event,
   Pixel-ID eintragen, Trigger: nur **"Marketing Consent Granted"**.
2. Zweiter Tag vom Typ **Meta Pixel** für das Lead-Event (z. B. `Lead` oder `CompleteRegistration`),
   gleiche Pixel-ID, Trigger: nur **"Lead Submit (Marketing Consent)"**.

**Schritt 4: Vor dem Veröffentlichen testen**

Über **"In Vorschau ansehen"** direkt aus GTM heraus starten (nicht die Vorschau-URL manuell aufrufen).
Prüfen: Ablehnen → kein Pixel-Request. Nur Statistik zustimmen → kein Pixel-Request. Marketing zustimmen →
PageView-Pixel feuert einmalig. Seite neu laden nach Zustimmung → PageView-Pixel feuert erneut. Lead-Formular
nach reiner Statistik-Zustimmung absenden → Lead-Pixel feuert nicht. Erst danach **Senden** (veröffentlichen).

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
