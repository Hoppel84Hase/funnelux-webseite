export const company = {
  name: "Funnelux Marketing",
  owner: "Janic Maier",
  legalForm: "Einzelunternehmen",
  street: "Robert-Sulzer-Gasse 4",
  zip: "8400",
  city: "Winterthur",
  country: "Schweiz",
  countryCode: "CH",
  phoneDisplay: "+41 79 191 11 65",
  phoneE164: "+41791911165",
  whatsappNumber: "41791911165",
  email: "info@funnelux.ch",
  domain: "funnelux.ch",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://funnelux.ch",
  claim: "Deine Seite läuft. Dein Business rennt.",
} as const;

export const whatsappDefaultMessage =
  "Hallo Janic, ich interessiere mich für eine Website oder einen Funnel. Können wir kurz schreiben?";

export function buildWhatsAppLink(message: string = whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsappNumber}?text=${encoded}`;
}
