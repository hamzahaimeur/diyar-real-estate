import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Maximize2 } from "lucide-react";
import type { Property } from "@/types/property";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-forest-800/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:border-white/10 dark:bg-forest-900">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-forest-900/85 px-3 py-1 text-xs font-semibold text-gold-300">
          {property.type}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-lg font-semibold text-gold-600 dark:text-gold-400">
          {formatPrice(property.price, property.currency)}
        </p>
        <h3 className="font-display text-xl text-forest-900 dark:text-cream">
          {property.title}
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-forest-600 dark:text-forest-200">
          <MapPin size={15} />
          {property.location}
        </p>

        <div className="flex flex-wrap gap-4 border-t border-forest-800/10 pt-3 text-sm text-forest-700 dark:border-white/10 dark:text-forest-100">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} />
              {property.bedrooms} Beds
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath size={16} />
              {property.bathrooms} Baths
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize2 size={16} />
            {property.area} m²
          </span>
        </div>

        <Link href={`/#properties`} className="ghost-btn w-full">
          View Details
        </Link>
      </div>
    </article>
  );
}
