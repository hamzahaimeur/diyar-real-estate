"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CITIES, PROPERTY_TYPES } from "@/lib/property-filters";

export function PropertySearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("city", location);
    if (type) params.set("type", type);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    const query = params.toString();
    router.push(query ? `/properties?${query}` : "/properties");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-forest-900/90 sm:p-5 lg:grid-cols-[1.2fr_1fr_1.3fr_auto]"
    >
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Location
        </span>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="h-11 rounded-xl border border-forest-800/10 bg-cream px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream"
        >
          <option value="">All cities</option>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
          Property Type
        </span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="h-11 rounded-xl border border-forest-800/10 bg-cream px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream"
        >
          <option value="">Any type</option>
          {PROPERTY_TYPES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
            Min Price
          </span>
          <input
            type="number"
            min={0}
            placeholder="500,000"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="h-11 rounded-xl border border-forest-800/10 bg-cream px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
            Max Price
          </span>
          <input
            type="number"
            min={0}
            placeholder="10,000,000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="h-11 rounded-xl border border-forest-800/10 bg-cream px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream"
          />
        </label>
      </div>

      <button type="submit" className="gold-btn h-11 self-end px-7">
        <Search size={16} className="mr-2" />
        Search
      </button>
    </form>
  );
}
