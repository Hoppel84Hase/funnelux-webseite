# Claude Code Prompt: Funnelux Marketing Webseite

Kopiere alles ab der Linie in Claude Code (VS Code Terminal, leerer Projektordner).

---

Baue eine komplette, produktionsreife Webseite für meine Firma Funnelux Marketing. Arbeite eigenständig, frage nur nach, wenn etwas die Umsetzung blockiert.

## 1. Firma und Positionierung

- Firma: Funnelux Marketing, Einzelunternehmen von Janic Maier
- Adresse: Robert-Sulzer-Gasse 4, CH-8400 Winterthur
- Telefon: +41 79 191 11 65, E-Mail: info@funnelux.ch, Domain: funnelux.ch
- Angebot: Websites und Sales Funnels als Kernleistung. Ergänzend Ads, SEO und Copywriting.
- Zielgruppe: Ausschliesslich Schweizer B2B, also KMU und Start-ups in der Schweiz. Nirgends "DACH", "Deutschland" oder "Österreich" erwähnen.
- Positionierung: Ein Ansprechpartner statt Agentur. Der Kunde spricht direkt mit dem Umsetzer. KI-gestützte Prozesse machen mich schneller und günstiger als klassische Agenturen. Transparente Ab-Preise, Antwort innert 24 Stunden, Termine werden eingehalten.
- Claim: "Deine Seite läuft. Dein Business rennt."

## 2. Tech-Stack

- Next.js 14+ mit App Router, TypeScript, Tailwind CSS
- Deployment-Ziel: Vercel, Domain funnelux.ch
- Alle Seiten statisch generiert wo möglich
- next/image für alle Bilder, next/font für die Schrift (Inter, Google Fonts self-hosted via next/font)
- Saubere Komponentenstruktur: eine Komponente pro Sektion, wiederverwendbare UI-Bausteine (Button, Card, SectionHeading, Badge)
- Kein CMS, Inhalte als typisierte Daten in `/content` oder direkt in den Komponenten

## 3. Design-System

Dark Mode, technisch, elegant, minimalistisch. Referenz ist mein bestehendes Firmendesign.

Farben (als Tailwind-Theme-Tokens anlegen):
- Background: `#12141f` (Seiten), `#1c1f2e` (Cards, Header)
- Text primär: `#e2e4f0`, Text sekundär: `#8b90a5`
- Akzent Indigo: `#6366f1` (Links, aktive Nav-Zustände, Icon-Badges, Linien, dezente Glows)
- CTA-Grün: `#25D366` (ausschliesslich für WhatsApp-Buttons, Text darauf weiss oder dunkel je nach Kontrast)
- Indigo-Verlauf für dekorative Linien: `#6366f1` zu transparent

Typografie:
- Inter für alles. Headlines fett und gross (Hero bis ca. 72px Desktop), Body 16 bis 18px, viel Zeilenhöhe
- Keine Serif- oder Dekofonts

Stil-Regeln:
- Subtile Glow-Effekte auf Indigo-Elementen (box-shadow mit geringer Opacity), abgerundete Cards mit feiner Border (`rgba(99,102,241,0.15)`)
- Dezente Animationen: Fade-up beim Scrollen (IntersectionObserver oder framer-motion), Hover-Transitions auf Cards und Buttons. Nicht mehr.
- Feines Netz- oder Linienmuster als Hintergrund-Deko erlaubt, sehr zurückhaltend
- Keine grellen Farben, keine Stock-Fotos, kein überladenes Layout
- WhatsApp-CTAs als grüne Pills mit WhatsApp-Icon, im Header als Outline-Variante ("Schreib mir")

## 4. Seitenstruktur

Header-Navigation: Startseite, Leistungen, Über mich, Kontakt. Rechts der grüne "Schreib mir" Button. Mobile: Burger-Menü.
Footer: Logo, Kurzbeschrieb, Kontaktdaten, Links zu Impressum, Datenschutz, AGB, Link "Cookie-Einstellungen" (öffnet Banner erneut).

### 4.1 Startseite `/`

Sektionen in dieser Reihenfolge:

1. **Hero.** H1: "Websites und Funnels, die aus Besuchern Anfragen machen." Subline: "Ich baue Schweizer KMU und Start-ups die komplette Basis für planbare Kundenanfragen. Website, Funnel und Kampagne aus einer Hand, direkt vom Umsetzer, ohne Agentur-Overhead." Primär-CTA: WhatsApp-Button "Jetzt Kontakt aufnehmen". Sekundär: "Leistungen ansehen" (Link zur Leistungsseite). Darunter drei kurze Trust-Punkte: "Direktkontakt: Du sprichst mit mir, nicht mit einem Account Manager", "KI-first: Prozesse statt Bauchgefühl", "Antwort innert 24 Stunden".
2. **Problem.** Drei typische Situationen der Zielgruppe als Cards: Website ist online, bringt aber keine Anfragen. Marketing läuft nebenbei und niemand hat Zeit dafür. Geld für Werbung ausgegeben, ohne zu wissen, was es gebracht hat. Kurz und konkret, keine Dramatisierung.
3. **Lösung / Leistungen im Überblick.** Zwei grosse Cards (Website, Funnel) plus drei kleine (Ads, SEO, Copywriting). Je zwei Sätze, Link zur Leistungsseite.
4. **Prozess.** Drei Schritte mit Icon-Badges: Analyse (Ziele, Zielgruppe und Status quo klären), Umsetzung (Website, Funnel oder Kampagne bauen, mit KI-gestützten Tools statt Team-Overhead), Live (direkter Austausch, laufende Optimierung auf Basis echter Zahlen).
5. **Projekte.** Zwei Referenz-Cards mit Screenshot, Kurzbeschrieb und Link:
   - DogPro Academy (dogproacademy.vercel.app): Webinar-Funnel für eine Hundetrainerin. Landing Page mit Anmeldung, klarer Storyline von Problem zu Lösung, FAQ und Tracking-Setup.
   - Acha Massage Studio (acha-massage-studio.vercel.app): Mehrsprachige Business-Website für ein Massagestudio in Winterthur. Angebot, Preise, interaktiver Massage-Finder und Terminanfrage.
   Beschriftung ehrlich als Pilotprojekte, keine erfundenen Resultate oder Kennzahlen.
6. **Preise.** Drei Pakete als Cards: Website ab CHF 1'900 (Konzept, Design, Umsetzung, SEO-Basis, mobiloptimiert), Funnel ab CHF 2'900 (Landing Page, E-Mail-Automation, Tracking), Care ab CHF 190 pro Monat (Updates, Anpassungen, Auswertung, prioritärer Support). Je 4 bis 6 Leistungspunkte, jeweils WhatsApp-CTA. Hinweis unter den Cards: Fixofferte nach einem kostenlosen Erstgespräch, keine versteckten Kosten.
7. **Über mich Teaser.** Portraitfoto, drei Sätze zu mir, Link zur Über-mich-Seite.
8. **FAQ.** 5 bis 6 Fragen als Accordion: Was kostet eine Website wirklich? Wie lange dauert die Umsetzung? Was heisst KI-gestützt konkret? Für wen passt das Angebot nicht? Wie läuft die Zusammenarbeit ab? Gehört mir die Website am Ende?
9. **Abschluss-CTA.** Kurzer Block: "Lass uns kurz schreiben. Du schilderst mir dein Vorhaben, ich sage dir ehrlich, ob und wie ich helfen kann." WhatsApp-Button.

### 4.2 Leistungen `/leistungen`

Intro, dann pro Leistung eine ausführliche Sektion: Websites, Funnels (beide gross, mit Ablauf und Ergebnis), danach Ads, SEO, Copywriting kompakter. Pro Sektion: für wen, was konkret geliefert wird, wie KI den Prozess schneller macht, WhatsApp-CTA. Am Ende die Preis-Pakete wiederholen.

### 4.3 Über mich `/ueber-mich`

Portraitfoto prominent. Meine Geschichte in Ich-Form: Janic Maier aus Winterthur, spezialisiert auf Funnel Marketing, Webdesign und Copywriting. Warum Einzelunternehmer: kurze Wege, volle Verantwortung, keine Übergaben zwischen Abteilungen. Meine Arbeitsweise: erst verstehen, dann bauen, dann mit echten Daten optimieren. Meine Grundsätze als eigene Sektion: keine Manipulation, keine Fake-Verknappung, keine unhaltbaren Versprechen, lieber eine ehrliche Einschätzung mehr. Abschluss-CTA.

### 4.4 Kontakt `/kontakt`

WhatsApp als Hauptweg (grosser Button plus QR-Code optional), daneben E-Mail und Telefon. Kurzer Text: was nach der Nachricht passiert (Antwort innert 24 Stunden, kostenloses Erstgespräch, danach Fixofferte). Adresse mit Firmendaten. Kein Kontaktformular nötig.

### 4.5 Rechtsseiten

`/impressum`, `/datenschutz`, `/agb` als eigene Seiten, im Footer verlinkt. Schreibe vollständige Entwürfe mit meinen Firmendaten:
- Impressum: Firma, Inhaber Janic Maier, Adresse, Kontakt, Haftungsausschluss
- Datenschutzerklärung nach revDSG (Schweizer Datenschutzgesetz): Verantwortlicher, welche Daten bearbeitet werden, Zwecke, Cookies und Tracking (Google Tag Manager, Meta Pixel), Datenweitergabe ins Ausland (USA, Google und Meta) inkl. Hinweis auf geeignete Garantien, Aufbewahrung, Rechte der betroffenen Personen (Auskunft, Berichtigung, Löschung), Kontakt für Datenschutzanfragen
- AGB: Geltungsbereich, Leistungen, Offerte und Vertragsschluss, Mitwirkungspflichten des Kunden, Zahlungsbedingungen, Nutzungsrechte nach vollständiger Zahlung, Gewährleistung und Haftung, anwendbares Recht (Schweizer Recht, Gerichtsstand Winterthur)
- Markiere jede Rechtsseite im Code mit einem Kommentar "Entwurf, vor Launch juristisch prüfen"

## 5. Cookie-Banner und Tracking

- Cookie-Banner nach revDSG: beim ersten Besuch sichtbar, mit drei Buttons "Akzeptieren", "Ablehnen" und "Anpassen". Alle drei Buttons müssen farblich, in Grösse und technisch identisch umgesetzt sein (gleiche Komponente, gleiche Styles, gleiche Hierarchie, kein Button hervorgehoben). Dazu ein Link zur Datenschutzerklärung.
- "Anpassen" öffnet ein Einstellungs-Panel mit Kategorien als Toggles: Notwendig (immer aktiv, nicht abwählbar), Statistik (Google Tag Manager / Analytics), Marketing (Meta Pixel). Buttons im Panel: "Auswahl speichern" und "Alle akzeptieren", ebenfalls gleichwertig gestaltet.
- Entscheidung pro Kategorie in localStorage speichern. Über den Footer-Link "Cookie-Einstellungen" ist das Panel jederzeit wieder aufrufbar und die Wahl änderbar.
- Google Tag Manager wird erst geladen, wenn mindestens eine entsprechende Kategorie zugestimmt ist, vorher kein einziges Tracking-Script. Der Kategorie-Status wird als dataLayer-Events übergeben, damit GTM Statistik- und Marketing-Tags getrennt steuern kann. Container-ID als Konstante `NEXT_PUBLIC_GTM_ID` mit Platzhalter `GTM-XXXXXXX`.
- Meta Pixel läuft über GTM, nicht direkt im Code. Dokumentiere in einer `TRACKING.md` kurz, wie ich im GTM-Interface das Pixel-Tag (Platzhalter `PIXEL_ID`) mit PageView-Trigger anlege und wie der Consent-Status pro Kategorie via dataLayer-Events (`consent_statistics_granted`, `consent_marketing_granted` bzw. `_denied`) die Tags steuert.
- UTM-Parameter: beim ersten Seitenaufruf `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` auslesen, in sessionStorage halten und in den dataLayer pushen, damit GTM sie an die Tags weitergeben kann.
- Banner-Design im Seitenstil: dunkle Card, unten fixiert, dezent.

## 6. WhatsApp-Integration

- Alle Primär-CTAs verlinken auf `https://wa.me/41791911165?text=` mit URL-codierter Vorbefüllung: "Hallo Janic, ich interessiere mich für eine Website oder einen Funnel. Können wir kurz schreiben?"
- Öffnen in neuem Tab. Klicks als Event in den dataLayer pushen (`whatsapp_click` mit Angabe der Sektion), damit GTM daraus eine Conversion machen kann.

## 7. Texte: Regeln (streng einhalten)

- Du-Form, freundlich und sachlich. Kein Kumpel-Slang, kein Hype, keine Druck-Taktiken, keine Fake-Verknappung, keine unhaltbaren Versprechen.
- Schweizer Schreibweise: ss statt ß, Preisformat CHF 1'900.
- Keine Gedankenstriche im gesamten Text. Sätze mit Komma oder Punkt gliedern.
- Konkret statt generisch: jede Aussage muss für ein Schweizer KMU nachvollziehbar sein. Nach 10 Sekunden auf der Seite muss klar sein, was ich anbiete und für wen.
- Verbotene KI-Muster: Wörter wie "darüber hinaus", "entscheidend", "ganzheitlich", "massgeschneidert", "innovativ", "Landschaft" (abstrakt), "unterstreicht", "facettenreich". Keine Dreier-Aufzählungen als Stilmittel, keine "Nicht nur X, sondern auch Y"-Konstruktionen, kein "Trotz der Herausforderungen"-Fazit, keine übertriebene Fettschrift, kein Title Case in Überschriften, keine Emojis.
- Zahlen und Fakten nur, wenn sie stimmen. Keine erfundenen Kundenzahlen, Bewertungen oder Testimonials.

## 8. Assets

Lege `/public/images/` an und binde folgende Dateien ein (ich lege sie selbst ab, baue graceful Fallbacks falls sie fehlen):
- `logo.svg` (Funnelux Tornado-Logo, liegt vor)
- `janic.jpg` (Portraitfoto, liegt vor)
- `projekt-dogpro.jpg` und `projekt-acha.jpg` (Screenshots der beiden Referenzen)

## 9. SEO und Qualität

- Metadata pro Seite (Title, Description, Open Graph), Fokus-Keywords: Webdesign Winterthur, Website erstellen lassen Schweiz, Funnel Agentur Schweiz
- `sitemap.xml` und `robots.txt` generieren, sprechende URLs, ein H1 pro Seite, saubere Heading-Hierarchie
- Schema.org LocalBusiness/ProfessionalService als JSON-LD mit den Firmendaten
- Lighthouse-Ziel: Performance, SEO und Accessibility je über 90. Alle Bilder mit alt-Text, Kontraste prüfen, Tastatur-Navigation funktioniert
- Responsive ab 360px, Burger-Menü mobil, CTAs mobil als Sticky-Button unten erlaubt

## 10. Abnahme

Starte am Ende den Dev-Server und prüfe selbst: alle internen Links und Anker funktionieren, die drei Rechtsseiten sind erreichbar, der Cookie-Banner blockiert GTM bis zur Zustimmung, das Anpassen-Panel speichert die Kategorien korrekt und lädt nur die erlaubten Tags, WhatsApp-Links öffnen korrekt mit Vorbefüllung, keine Konsolen-Fehler, Build läuft fehlerfrei durch (`next build`). Liste mir danach auf, was ich noch manuell erledigen muss (GTM-Container anlegen, IDs eintragen, Bilder ablegen, Rechtstexte prüfen, Domain verbinden).
