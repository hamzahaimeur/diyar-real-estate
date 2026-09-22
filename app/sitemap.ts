import type { MetadataRoute } from "next";
import { getAllProperties } from "@/lib/properties";

const BASE_URL = "https://diyar-real-estate.vercel.app";

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
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const propertyRoutes = getAllProperties().map((property) => ({
    url: `${BASE_URL}/properties/${property.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...propertyRoutes];
}
