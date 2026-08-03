# Claude Code Folge-Prompt: Animationen und Feinschliff

Im bestehenden Projektordner der Funnelux-Webseite in Claude Code einfügen, alles ab der Linie.

---

Werte die bestehende Webseite mit Animationen auf und setze danach vier Feinschliff-Punkte um. Inhalte, Sektionen und Struktur bleiben unverändert. Nutze GSAP mit ScrollTrigger und punktuell three.js. Die Seite verkauft schnelle, klare Websites, also gelten harte Regeln.

## Teil 1: Animationen

1. Three.js ausschliesslich im Hero: ein dezentes, langsam bewegtes Partikel-Netz in Indigo (#6366f1, niedrige Opacity) als Hintergrund hinter dem Hero-Text. Lazy-loaded nach dem First Paint, pausiert wenn nicht sichtbar, statischer Indigo-Gradient als Fallback auf schwachen Geräten und bei prefers-reduced-motion. Nirgendwo sonst three.js einsetzen.
2. Scrollytelling nur in der Problem-Sektion der Startseite: Die drei Karten wechseln beim Scrollen sanft von Problem zu Lösung (Fade und leichte Bewegung, kein Pinning über mehr als eine Viewport-Höhe). In allen übrigen Sektionen nur dezente Fade-ups beim Einscrollen.
3. Glasmorphism dezent: backdrop-blur nur auf dem Header und den Preiskarten, feine halbtransparente Borders (rgba(99,102,241,0.15)). Textkontrast bleibt überall bei mindestens 4.5:1.
4. Leistungssektion auf der Startseite als Bento Grid: Websites und Funnels als grosse Kacheln, Ads, SEO und Copywriting als kleine, unterschiedliche Kachelhöhen, einheitliche Abstände. Auf Mobile stapeln sich alle Kacheln einspaltig.
5. Alle Animationen respektieren prefers-reduced-motion (dann keine Bewegung, nur Fades). Auf Mobile keine Scroll-Pinnings und reduzierte Effekte.
6. Nicht verhandelbar: Lighthouse Performance, SEO und Accessibility bleiben über 90, next build läuft fehlerfrei, keine Konsolen-Fehler. Wenn ein Effekt das gefährdet oder die Seite überladen wirkt, lass ihn weg und dokumentiere die Entscheidung in einem kurzen Kommentar am Ende.

## Teil 2: Feinschliff

7. Kontrast-Pass: Prüfe alle sekundären Grautexte (aktuell im Bereich #8b90a5) auf dunklem Grund gegen WCAG AA (4.5:1 für Fliesstext, 3:1 für grosse Headlines). Helle zu dunkle Töne punktuell auf, ohne das Farbsystem zu verändern.
8. H1 der Leistungsseite kürzen auf "Alles für planbare Anfragen", damit die Zeile nicht mehr unschön umbricht.
9. Kontakt-CTA präzisieren: Beim Haupt-Button auf der Kontaktseite einen kurzen Hinweis ergänzen, dass sich ein kurzes Formular öffnet, bevor WhatsApp startet. So weiss der Besucher, was ihn nach dem Klick erwartet.
10. Cookie-Banner-Regression: Stelle sicher, dass der Banner nach allen Änderungen weiterhin vor jedem Tracking-Script erscheint, die drei gleichwertigen Buttons (Akzeptieren, Ablehnen, Anpassen) zeigt und das Anpassen-Panel die Kategorien korrekt speichert. Die neuen Animations-Libraries dürfen kein Tracking auslösen.

## Abnahme

Prüfe am Ende selbst im Dev-Server: Scroll-Verhalten auf Desktop- und Mobile-Viewport, Ladezeit des Heros mit und ohne three.js-Fallback, prefers-reduced-motion-Verhalten (im DevTools-Rendering-Tab emulieren), Cookie-Banner im frischen Browser-Profil, next build ohne Fehler. Liste mir danach auf, welche Effekte du bewusst weggelassen hast und warum.
