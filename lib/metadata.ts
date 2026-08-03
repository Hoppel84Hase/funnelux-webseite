import type { Metadata } from "next";
import { company } from "@/content/company";

const siteName = "Funnelux Marketing";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${company.siteUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "de_CH",
      type: "website",
      images: [
        {
          url: `${company.siteUrl}/images/logo-dark-bg.webp`,
          width: 2000,
          height: 1300,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
