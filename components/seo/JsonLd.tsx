import { company } from "@/content/company";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    image: `${company.siteUrl}/images/logo-dark-bg.webp`,
    url: company.siteUrl,
    telephone: company.phoneE164,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      postalCode: company.zip,
      addressLocality: company.city,
      addressCountry: company.countryCode,
    },
    founder: {
      "@type": "Person",
      name: company.owner,
    },
    areaServed: {
      "@type": "Country",
      name: "Schweiz",
    },
    description:
      "Websites und Sales Funnels für Schweizer KMU und Start-ups, ergänzt durch Ads, SEO und Copywriting.",
  };

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
