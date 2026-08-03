// Entwurf, vor Launch juristisch prüfen
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/content/company";

export const metadata = buildMetadata({
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von Funnelux Marketing.",
  path: "/agb",
});

export default function AgbPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading as="h1" align="left" title="Allgemeine Geschäftsbedingungen" />

      <div className="legal-prose mt-10">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen {company.name}
          , {company.owner} ({company.street}, {company.zip} {company.city}), und ihren Auftraggebern über
          die Erstellung von Websites, Funnels sowie ergänzende Leistungen wie Ads, SEO und Copywriting.
        </p>

        <h2>2. Leistungen</h2>
        <p>
          Art und Umfang der Leistung ergeben sich aus der jeweiligen Offerte. Änderungen oder Ergänzungen
          des Leistungsumfangs während der Umsetzung werden gesondert vereinbart und, sofern sie den Aufwand
          erhöhen, zusätzlich verrechnet.
        </p>

        <h2>3. Offerte und Vertragsschluss</h2>
        <p>
          Nach einem kostenlosen Erstgespräch erhält der Auftraggeber eine schriftliche Offerte. Der Vertrag
          kommt mit der schriftlichen oder per E-Mail erklärten Annahme dieser Offerte durch den Auftraggeber
          zustande.
        </p>

        <h2>4. Mitwirkungspflichten des Auftraggebers</h2>
        <p>
          Der Auftraggeber stellt die für die Umsetzung nötigen Unterlagen, Texte, Bilder und Zugänge
          rechtzeitig zur Verfügung und gibt Feedback innert der vereinbarten Fristen. Verzögerungen, die
          durch verspätete Mitwirkung des Auftraggebers entstehen, verschieben den vereinbarten Zeitplan
          entsprechend.
        </p>

        <h2>5. Zahlungsbedingungen</h2>
        <p>
          Sofern nichts anderes vereinbart ist, wird die Hälfte des Rechnungsbetrags bei Auftragserteilung
          und die restliche Hälfte bei Fertigstellung fällig. Rechnungen sind innert 30 Tagen ab
          Rechnungsdatum zahlbar. Bei laufenden Leistungen wie dem Care-Paket erfolgt die Rechnungsstellung
          monatlich im Voraus.
        </p>

        <h2>6. Nutzungsrechte</h2>
        <p>
          Mit vollständiger Bezahlung erhält der Auftraggeber die Nutzungsrechte an der für ihn erstellten
          Website beziehungsweise dem Funnel. Für den Aufbau verwendete, allgemeine Vorlagen, Werkzeuge und
          Komponenten von {company.name} bleiben davon unberührt und dürfen weiterhin für andere Projekte
          verwendet werden.
        </p>

        <h2>7. Gewährleistung und Haftung</h2>
        <p>
          {company.name} erbringt ihre Leistungen nach bestem Wissen und aktuellem Stand der Technik. Für
          leichte Fahrlässigkeit wird die Haftung, soweit gesetzlich zulässig, ausgeschlossen. Für Schäden,
          die auf fehlerhaften oder verspäteten Angaben des Auftraggebers beruhen, übernimmt {company.name}{" "}
          keine Haftung.
        </p>

        <h2>8. Anwendbares Recht und Gerichtsstand</h2>
        <p>
          Es gilt ausschliesslich Schweizer Recht. Gerichtsstand für allfällige Streitigkeiten aus oder im
          Zusammenhang mit diesen AGB ist Winterthur.
        </p>
      </div>
    </section>
  );
}
