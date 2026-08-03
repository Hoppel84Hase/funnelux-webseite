// Entwurf, vor Launch juristisch prüfen
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/content/company";

export const metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von Funnelux Marketing, Einzelunternehmen von Janic Maier, Winterthur.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading as="h1" align="left" title="Impressum" />

      <div className="legal-prose mt-10">
        <h2>Anbieterin</h2>
        <p>
          {company.name}
          <br />
          {company.owner}
          <br />
          {company.legalForm}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
          <br />
          {company.country}
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {company.phoneDisplay}
          <br />
          E-Mail: {company.email}
          <br />
          Website: {company.domain}
        </p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>{company.owner}, in gleicher Funktion und Adresse wie oben angegeben.</p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit der gebotenen Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. {company.name}{" "}
          behält sich vor, Inhalte jederzeit ohne Ankündigung zu ändern oder zu entfernen.
        </p>
        <p>
          Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte {company.name}{" "}
          keinen Einfluss hat. Für diese fremden Inhalte übernimmt {company.name} keine Gewähr. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
        <p>
          Alle Inhalte dieser Website, insbesondere Texte, Bilder und das Logo, sind urheberrechtlich
          geschützt. Jede Verwendung ausserhalb der gesetzlich zugelassenen Fälle bedarf der vorherigen
          schriftlichen Zustimmung von {company.name}.
        </p>
      </div>
    </section>
  );
}
