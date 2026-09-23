import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetails } from "@/components/properties/PropertyDetails";
import { formatPrice } from "@/lib/format";
import { getAllProperties, getPropertyDetail, getSimilarProperties } from "@/lib/properties";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllProperties().map((property) => ({ id: property.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const property = getPropertyDetail(params.id);
  if (!property) {
    return { title: "Property not found" };
  }

  const description = `Demo listing: ${property.type.toLowerCase()} in ${property.location} for ${formatPrice(
    property.price,
    property.currency,
  )}. Sample data for demonstration only — not a real property.`;

  return {
    title: property.title,
    description,
    alternates: { canonical: `/properties/${property.id}` },
    openGraph: {
      type: "website",
      title: `${property.title} | ${siteConfig.name} Demo`,
      description,
      url: `/properties/${property.id}`,
      images: [{ url: property.image, alt: property.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.title} | ${siteConfig.name} Demo`,
      description,
      images: [property.image],
    },
  };
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = getPropertyDetail(params.id);
  if (!property) notFound();

  const similar = getSimilarProperties(property, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    image: property.images,
    url: `${siteConfig.url}/properties/${property.id}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressCountry: "AE",
      streetAddress: property.location,
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: property.currency,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertyDetails property={property} similar={similar} />
    </main>
  );
}
