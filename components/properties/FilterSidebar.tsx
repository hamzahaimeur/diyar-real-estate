"use client";

import type { PropertyFilters } from "@/lib/property-filters";
import {
  AMENITY_OPTIONS,
  CITIES,
  PROPERTY_TYPES,
} from "@/lib/property-filters";
import type { PropertyType } from "@/types/property";

const PRICE_MAX = 12_000_000;
const inputClass =
  "h-11 w-full rounded-xl border border-forest-800/10 bg-cream px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream";

interface FilterSidebarProps {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
  onClear: () => void;
  showTitle?: boolean;
}

export function FilterSidebar({
  filters,
  onChange,
  onClear,
  showTitle = true,
}: FilterSidebarProps) {
  const toggleType = (type: PropertyType) => {
    const types = filters.types.includes(type)
      ? filters.types.filter((item) => item !== type)
      : [...filters.types, type];
    onChange({ ...filters, types });
  };

  const toggleAmenity = (amenity: string) => {
    const amenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((item) => item !== amenity)
      : [...filters.amenities, amenity];
    onChange({ ...filters, amenities });
  };

  const minPrice = Number(filters.minPrice) || 0;
  const maxPrice = Number(filters.maxPrice) || PRICE_MAX;

  return (
    <aside className="space-y-6">
      <div className={`flex items-center ${showTitle ? "justify-between" : "justify-end"}`}>
        {showTitle && (
          <h2 className="font-display text-xl text-forest-900 dark:text-cream">Filters</h2>
        )}
        <button
          type="button"
          onClick={onClear}
          className="text-sm font-semibold text-gold-700 transition duration-300 ease-in-out hover:text-gold-500 dark:text-gold-300"
        >
          Clear Filters
        </button>
      </div>

      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Property Type
        </legend>
        <div className="space-y-2">
          {PROPERTY_TYPES.map((type) => (
            <label key={type} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={() => toggleType(type)}
                className="h-4 w-4 rounded border-forest-300 text-gold-600 accent-gold-500"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Price Range (AED)
        </legend>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            min={0}
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => onChange({ ...filters, minPrice: e.target.value })}
            className={inputClass}
          />
          <input
            type="number"
            min={0}
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
            className={inputClass}
          />
        </div>
        <input
          type="range"
          min={0}
          max={PRICE_MAX}
          step={50000}
          value={maxPrice}
          onChange={(e) =>
            onChange({
              ...filters,
              maxPrice: e.target.value,
              minPrice: String(Math.min(minPrice, Number(e.target.value))),
            })
          }
          className="mt-3 w-full accent-gold-500"
          aria-label="Maximum price"
        />
        <p className="mt-1 text-xs text-forest-600 dark:text-forest-300">
          Up to {maxPrice.toLocaleString()} AED
        </p>
      </fieldset>

      <label className="block">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Bedrooms
        </span>
        <select
          value={filters.bedrooms}
          onChange={(e) => onChange({ ...filters, bedrooms: e.target.value })}
          className={inputClass}
        >
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((count) => (
            <option key={count} value={count}>
              {count}+
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Bathrooms
        </span>
        <select
          value={filters.bathrooms}
          onChange={(e) => onChange({ ...filters, bathrooms: e.target.value })}
          className={inputClass}
        >
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((count) => (
            <option key={count} value={count}>
              {count}+
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Location
        </span>
        <select
          value={filters.city}
          onChange={(e) => onChange({ ...filters, city: e.target.value })}
          className={inputClass}
        >
          <option value="">All cities</option>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Amenities
        </legend>
        <div className="space-y-2">
          {AMENITY_OPTIONS.map((amenity) => (
            <label key={amenity} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
                className="h-4 w-4 rounded border-forest-300 text-gold-600 accent-gold-500"
              />
              {amenity}
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
