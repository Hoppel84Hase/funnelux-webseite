import type { MetadataRoute } from "next";
import { company } from "@/content/company";

const routes = ["", "/leistungen", "/ueber-mich", "/kontakt", "/impressum", "/datenschutz", "/agb"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${company.siteUrl}${route}`,
    lastModified,
  }));
}
