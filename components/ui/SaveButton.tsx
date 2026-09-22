"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/favorites";

export function SaveButton({ propertyId }: { propertyId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(propertyId);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(propertyId)}
      aria-pressed={saved}
      aria-label={saved ? "Remove from saved properties" : "Save this property"}
      className={`flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition duration-300 ease-in-out hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 active:scale-[0.98] ${
        saved
          ? "border-gold-500 bg-gold-500 text-forest-950"
          : "border-forest-700/15 bg-white/70 text-forest-800 hover:border-gold-500/60 hover:text-gold-700 dark:border-white/10 dark:bg-white/5 dark:text-cream dark:hover:border-gold-400/60 dark:hover:text-gold-300"
      }`}
    >
      <Heart size={16} fill={saved ? "currentColor" : "none"} />
      {saved ? "Saved" : "Save"}
    </button>
  );
}
