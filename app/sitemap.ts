import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/properties", "/about", "/contact", "/privacy", "/terms"].map((url) => ({ url: `https://diyar.example${url}`, lastModified: new Date() })); }
