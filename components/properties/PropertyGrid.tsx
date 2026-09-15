import { PropertyCard } from "@/components/home/PropertyCard";
import { FadeIn } from "@/components/motion/FadeIn";
import type { ViewMode } from "@/lib/property-filters";
import type { Property } from "@/types/property";

export function PropertyGrid({
  properties,
  layout,
}: {
  properties: Property[];
  layout: ViewMode;
}) {
  if (properties.length === 0) {
    return (
      <FadeIn>
        <div className="rounded-2xl border border-dashed border-forest-800/15 bg-white px-6 py-16 text-center dark:border-white/10 dark:bg-forest-900">
          <h3 className="font-display text-2xl text-forest-900 dark:text-cream">
            No properties match these filters
          </h3>
          <p className="mt-2 text-sm text-forest-600 dark:text-forest-200">
            Try widening the price range or clearing a few amenities.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          : "flex flex-col gap-6"
      }
    >
      {properties.map((property, index) => (
        <FadeIn key={property.id} delayMs={index * 60}>
          <PropertyCard property={property} layout={layout} />
        </FadeIn>
      ))}
    </div>
  );
}
