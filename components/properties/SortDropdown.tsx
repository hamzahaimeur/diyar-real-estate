"use client";

import type { SortOption } from "@/lib/property-filters";

const options: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price Low-High" },
  { value: "price-desc", label: "Price High-Low" },
];

export function SortDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="hidden text-forest-600 sm:inline dark:text-forest-200">Sort</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="h-10 rounded-full border border-forest-800/10 bg-white px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-900 dark:text-cream"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
