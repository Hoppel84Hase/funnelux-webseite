// Entwurf, vor Launch juristisch prüfen
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/content/company";

export const metadata = buildMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von Funnelux Marketing nach dem revidierten Schweizer Datenschutzgesetz.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading as="h1" align="left" title="Datenschutzerklärung" />

      <div className="legal-prose mt-10">
        <h2>Verantwortlicher</h2>
        <p>
          Verantwortlich für die Bearbeitung deiner Daten im Sinne des Schweizer Datenschutzgesetzes (DSG)
          ist {company.owner}, {company.name}, {company.street}, {company.zip} {company.city}, E-Mail:{" "}
          {company.email}.
        </p>

        <h2>Welche Daten wir bearbeiten</h2>
        <p>Beim Besuch dieser Website bearbeiten wir folgende Kategorien von Daten:</p>
        <ul>
          <li>Technische Daten beim Seitenaufruf, zum Beispiel IP-Adresse, Browsertyp und Zugriffszeit</li>
          <li>Angaben, die du uns über WhatsApp, E-Mail oder Telefon selbst mitteilst</li>
          <li>
            Nutzungsdaten aus Statistik-Tools sowie Kampagnendaten aus Marketing-Tools, sofern du der
            jeweiligen Kategorie zugestimmt hast
          </li>
          <li>UTM-Parameter aus dem Link, über den du auf die Seite gelangt bist</li>
        </ul>

        <h2>Zwecke der Bearbeitung</h2>
        <p>Wir bearbeiten diese Daten, um:</p>
        <ul>
          <li>die Website zuverlässig und sicher bereitzustellen</li>
          <li>auf deine Kontaktaufnahme antworten zu können</li>
          <li>die Nutzung der Website statistisch auszuwerten und zu verbessern</li>
          <li>die Wirkung von Werbekampagnen zu beurteilen, sofern du dem zugestimmt hast</li>
        </ul>

        <h2>Cookies und Tracking</h2>
        <p>
          Diese Website verwendet ein Cookie-Banner mit den Kategorien Notwendig, Statistik und Marketing.
          Notwendige Cookies sind für den Betrieb der Seite erforderlich und benötigen keine Zustimmung.
          Statistik- und Marketing-Cookies werden erst gesetzt, wenn du der jeweiligen Kategorie
          ausdrücklich zugestimmt hast. Deine Auswahl kannst du jederzeit über den Link
          «Cookie-Einstellungen» im Footer anpassen.
        </p>
        <p>
          Bei Zustimmung zur Kategorie Statistik nutzen wir Google Tag Manager, um Analyse-Werkzeuge auf
          der Seite einzubinden. Bei Zustimmung zur Kategorie Marketing binden wir über Google Tag Manager
          zusätzlich den Meta Pixel ein, um die Wirkung von Werbekampagnen auf Meta-Plattformen (Facebook,
          Instagram) auszuwerten.
        </p>

        <h2>Datenweitergabe ins Ausland</h2>
        <p>
          Die von uns eingesetzten Dienste Google Tag Manager und Meta Pixel werden von Google LLC
          beziehungsweise Meta Platforms Ireland Limited betrieben, wobei eine Bearbeitung von Daten auch
          in den USA nicht ausgeschlossen werden kann. Für solche Datenübermittlungen stützen wir uns auf
          die Standardvertragsklauseln der Europäischen Kommission beziehungsweise vergleichbare, vom
          Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten anerkannte Garantien, welche ein
          angemessenes Schutzniveau sicherstellen sollen.
        </p>

        <h2>Aufbewahrung</h2>
        <p>
          Wir bewahren deine Daten nur so lange auf, wie es für die genannten Zwecke oder aufgrund
          gesetzlicher Aufbewahrungspflichten erforderlich ist. Nachrichten über WhatsApp, E-Mail oder
          Telefon bewahren wir auf, solange dies für die Bearbeitung deiner Anfrage und eine allfällige
          Zusammenarbeit sinnvoll ist.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du hast das Recht, Auskunft über die von uns bearbeiteten Daten zu verlangen sowie deren
          Berichtigung oder Löschung zu beantragen, soweit keine gesetzliche Aufbewahrungspflicht
          entgegensteht. Zudem kannst du eine erteilte Einwilligung, zum Beispiel zu Statistik- oder
          Marketing-Cookies, jederzeit für die Zukunft widerrufen.
        </p>

        <h2>Kontakt für Datenschutzanfragen</h2>
        <p>
          Für Fragen oder Anliegen zum Datenschutz erreichst du uns unter {company.email} oder{" "}
          {company.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
