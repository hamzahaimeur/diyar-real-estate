import type { Property, PropertyType } from "@/types/property";

export type SortOption = "newest" | "price-asc" | "price-desc";
export type ViewMode = "grid" | "list";

export interface PropertyFilters {
  types: PropertyType[];
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  city: string;
  amenities: string[];
}

export const DEFAULT_FILTERS: PropertyFilters = {
  types: [],
  minPrice: "",
  maxPrice: "",
  bedrooms: "",
  bathrooms: "",
  city: "",
  amenities: [],
};

export const PROPERTY_TYPES: PropertyType[] = [
  "Apartment",
  "Villa",
  "Office",
  "Land",
];

export const AMENITY_OPTIONS = [
  "Pool",
  "Gym",
  "Parking",
  "Garden",
  "Sea View",
  "Concierge",
  "Smart Home",
  "Maid Room",
] as const;

export const CITIES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
] as const;

export function filtersFromSearchParams(
  params: URLSearchParams,
): PropertyFilters {
  const type = params.get("type");
  return {
    types: PROPERTY_TYPES.includes(type as PropertyType)
      ? [type as PropertyType]
      : [],
    minPrice: params.get("minPrice") ?? "",
    maxPrice: params.get("maxPrice") ?? "",
    bedrooms: params.get("bedrooms") ?? "",
    bathrooms: params.get("bathrooms") ?? "",
    city: params.get("city") ?? params.get("location") ?? "",
    amenities: params.get("amenities")?.split(",").filter(Boolean) ?? [],
  };
}

export function hasActiveFilters(filters: PropertyFilters) {
  return (
    filters.types.length > 0 ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice) ||
    Boolean(filters.bedrooms) ||
    Boolean(filters.bathrooms) ||
    Boolean(filters.city) ||
    filters.amenities.length > 0
  );
}

export function filterProperties(
  properties: Property[],
  filters: PropertyFilters,
) {
  return properties.filter((property) => {
    if (filters.types.length > 0 && !filters.types.includes(property.type)) {
      return false;
    }

    const minPrice = Number(filters.minPrice);
    if (filters.minPrice && !Number.isNaN(minPrice) && property.price < minPrice) {
      return false;
    }

    const maxPrice = Number(filters.maxPrice);
    if (filters.maxPrice && !Number.isNaN(maxPrice) && property.price > maxPrice) {
      return false;
    }

    const minBeds = Number(filters.bedrooms);
    if (filters.bedrooms && property.bedrooms < minBeds) {
      return false;
    }

    const minBaths = Number(filters.bathrooms);
    if (filters.bathrooms && property.bathrooms < minBaths) {
      return false;
    }

    if (filters.city && property.city !== filters.city) {
      return false;
    }

    if (
      filters.amenities.length > 0 &&
      !filters.amenities.every((amenity) => property.amenities.includes(amenity))
    ) {
      return false;
    }

    return true;
  });
}

export function sortProperties(properties: Property[], sort: SortOption) {
  const next = [...properties];
  if (sort === "price-asc") {
    next.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    next.sort((a, b) => b.price - a.price);
  } else {
    next.sort((a, b) => Number(b.featured) - Number(a.featured) || a.id.localeCompare(b.id));
  }
  return next;
}
