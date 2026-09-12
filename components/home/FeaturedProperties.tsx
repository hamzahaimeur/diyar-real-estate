import propertiesData from "@/data/properties.json";
import { PropertyCard } from "@/components/home/PropertyCard";
import type { Property } from "@/types/property";

const properties = propertiesData as Property[];

export function FeaturedProperties() {
  return (
    <section id="properties" className="scroll-mt-24 py-20">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Handpicked for you
          </p>
          <h2 className="section-heading mt-2">Featured Properties</h2>
          <p className="section-sub">
            A shortlist of verified homes and investment opportunities across
            Dubai, Abu Dhabi, and Ajman.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
