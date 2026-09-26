/**
 * Central site configuration.
 * Edit the values here (or set NEXT_PUBLIC_SITE_URL) to rebrand the whole site:
 * metadata, Open Graph / social previews, sitemap and robots all read from this file.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  // Set automatically by Vercel on every deployment (preview and production),
  // without needing any extra project setting enabled.
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  // Only present when "Automatically expose System Environment Variables" is
  // turned on for the project — kept as a secondary check just in case.
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProductionUrl) return `https://${vercelProductionUrl}`;

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Diyar",
  url: resolveSiteUrl(),
  title: "Diyar | Real Estate Listing Website — Demo with Sample Data",
  titleTemplate: "%s | Diyar Demo",
  description:
    "Demo real estate listing website. All properties, prices, agents and contact details are sample data for demonstration only — not real listings.",
  shortDescription:
    "Demo website — every listing, agent and figure is sample data, not real.",
  keywords: [
    "real estate website demo",
    "property listing template",
    "Next.js real estate",
    "Tailwind CSS",
    "Diyar",
  ],
  locale: "en_US",
} as const;
