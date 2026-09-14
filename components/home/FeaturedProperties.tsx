import Link from "next/link";
import propertiesData from "@/data/properties.json";
import { PropertyCard } from "@/components/home/PropertyCard";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Property } from "@/types/property";

const properties = (propertiesData as Property[]).filter((item) => item.featured);

export function FeaturedProperties() {
  return (
    <section id="properties" className="scroll-mt-24 py-20">
      <div className="container-page">
        <FadeIn className="mb-10 flex max-w-none flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Handpicked for you
            </p>
            <h2 className="section-heading mt-2">Featured Properties</h2>
            <p className="section-sub">
              A shortlist of verified homes and investment opportunities across
              Dubai, Abu Dhabi, and Ajman.
            </p>
          </div>
          <Link href="/properties" className="gold-btn shrink-0 self-start md:self-auto">
            View all listings
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <FadeIn key={property.id} delayMs={index * 80}>
              <PropertyCard property={property} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
