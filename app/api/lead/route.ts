import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  email?: string;
  vorname?: string;
  telefon?: string;
  utm?: Partial<Record<"utm_source" | "utm_medium" | "utm_campaign" | "utm_content" | "utm_term", string>>;
};

// Legt bzw. aktualisiert serverseitig einen Kontakt in Brevo an, wenn das
// Lead-Formular abgeschickt wird. Laeuft ausschliesslich hier, der
// Brevo-API-Key darf nie in Browser-Code landen (deshalb keine
// NEXT_PUBLIC_-Variable).
export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY ist nicht gesetzt, Kontakt wurde nicht an Brevo uebertragen.");
    return NextResponse.json({ ok: false, error: "missing_api_key" }, { status: 500 });
  }

  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { email, vorname, telefon, utm } = payload;

  if (!email) {
    return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 });
  }

  const attributes: Record<string, string> = {
    VORNAME: vorname ?? "",
    WHATSAPP: telefon ?? "",
  };
  if (utm?.utm_source) attributes.UTM_SOURCE = utm.utm_source;
  if (utm?.utm_medium) attributes.UTM_MEDIUM = utm.utm_medium;
  if (utm?.utm_campaign) attributes.UTM_CAMPAIGN = utm.utm_campaign;
  if (utm?.utm_content) attributes.UTM_CONTENT = utm.utm_content;
  if (utm?.utm_term) attributes.UTM_TERM = utm.utm_term;

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes,
        listIds: [14],
        updateEnabled: true,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("Brevo-Anfrage fehlgeschlagen", response.status, errorText);
      return NextResponse.json({ ok: false, status: response.status }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Brevo-Anfrage fehlgeschlagen", error);
    return NextResponse.json({ ok: false, error: "request_failed" }, { status: 502 });
  }
}
