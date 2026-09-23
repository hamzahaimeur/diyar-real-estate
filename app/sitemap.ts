import type { MetadataRoute } from "next";
import { getAllProperties } from "@/lib/properties";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/properties",
    "/about",
    "/contact",
    "/favorites",
    "/login",
    "/register",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const propertyRoutes = getAllProperties().map((property) => ({
    url: `${siteConfig.url}/properties/${property.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...propertyRoutes];
}
