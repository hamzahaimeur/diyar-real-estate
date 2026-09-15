import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetails } from "@/components/properties/PropertyDetails";
import { getAllProperties, getPropertyDetail, getSimilarProperties } from "@/lib/properties";

export function generateStaticParams() {
  return getAllProperties().map((property) => ({ id: property.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const property = getPropertyDetail(params.id);
  if (!property) {
    return { title: "Property not found" };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: `${property.title} | Diyar`,
      description: property.description,
      images: [{ url: property.image }],
    },
  };
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = getPropertyDetail(params.id);
  if (!property) notFound();

  const similar = getSimilarProperties(property, 4);

  return (
    <main>
      <PropertyDetails property={property} similar={similar} />
    </main>
  );
}