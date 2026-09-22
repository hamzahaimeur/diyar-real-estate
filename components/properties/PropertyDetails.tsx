"use client";

import { Bath, BedDouble, Maximize2, MapPin } from "lucide-react";
import { AmenitiesGrid } from "@/components/properties/AmenitiesGrid";
import { ContactAgentCard } from "@/components/properties/ContactAgentCard";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { PropertyMapPlaceholder } from "@/components/properties/PropertyMapPlaceholder";
import { PropertyCard } from "@/components/home/PropertyCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { SaveButton } from "@/components/ui/SaveButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { formatPrice } from "@/lib/format";
import type { Property, PropertyDetail } from "@/types/property";

export function PropertyDetails({
  property,
  similar,
}: {
  property: PropertyDetail;
  similar: Property[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    image: property.images,
    url: `/properties/${property.id}`,
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
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-forest-800/10 bg-white py-10 dark:border-white/10 dark:bg-forest-900/40">
        <FadeIn className="container-page">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/properties", label: "Properties" },
              { label: property.title },
            ]}
          />
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                {property.type}
              </p>
              <h1 className="section-heading mt-2">{property.title}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-forest-600 dark:text-forest-200">
                <MapPin size={15} />
                {property.location}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-display text-3xl text-gold-600 dark:text-gold-400">
                {formatPrice(property.price, property.currency)}
              </p>
              <SaveButton propertyId={property.id} />
            </div>
          </div>
          <div className="mt-5">
            <DemoNotice className="mx-0 justify-start text-left" />
          </div>
        </FadeIn>
      </section>

      <div className="container-page mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-8">
          <FadeIn>
            <PropertyGallery images={property.images} title={property.title} />
          </FadeIn>

          <FadeIn>
            <div className="flex flex-wrap gap-6 rounded-2xl border border-forest-800/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-forest-900">
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-2 text-sm font-medium text-forest-800 dark:text-cream">
                  <BedDouble size={18} className="text-gold-600" />
                  {property.bedrooms} Bedrooms
                </span>
              )}
              {property.bathrooms > 0 && (
                <span className="flex items-center gap-2 text-sm font-medium text-forest-800 dark:text-cream">
                  <Bath size={18} className="text-gold-600" />
                  {property.bathrooms} Bathrooms
                </span>
              )}
              <span className="flex items-center gap-2 text-sm font-medium text-forest-800 dark:text-cream">
                <Maximize2 size={18} className="text-gold-600" />
                {property.area} m²
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="lg:row-span-2">
          <ContactAgentCard agent={property.agent} property={property} />
        </div>

        <div className="space-y-10">
          <section>
            <FadeIn>
              <h2 className="font-display text-2xl text-forest-900 dark:text-cream">Description</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-forest-700 dark:text-forest-200">
                {property.description}
              </p>
            </FadeIn>
          </section>

          <section>
            <FadeIn>
              <h2 className="mb-4 font-display text-2xl text-forest-900 dark:text-cream">
                Amenities
              </h2>
            </FadeIn>
            <AmenitiesGrid amenities={property.amenities} />
          </section>

          <section>
            <FadeIn>
              <h2 className="mb-4 font-display text-2xl text-forest-900 dark:text-cream">
                Location
              </h2>
            </FadeIn>
            <FadeIn delayMs={80}>
              <PropertyMapPlaceholder location={property.location} />
            </FadeIn>
          </section>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="container-page mt-16">
          <FadeIn>
            <h2 className="section-heading">Similar Properties</h2>
            <p className="section-sub">Other listings with a comparable type or city.</p>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {similar.map((item, index) => (
              <FadeIn key={item.id} delayMs={index * 60}>
                <PropertyCard property={item} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}