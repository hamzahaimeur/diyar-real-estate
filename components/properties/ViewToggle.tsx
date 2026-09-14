"use client";

import { LayoutGrid, List } from "lucide-react";
import type { ViewMode } from "@/lib/property-filters";

export function ViewToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}) {
  return (
    <div className="flex rounded-full border border-forest-800/10 bg-white p-1 dark:border-white/10 dark:bg-forest-900">
      <button
        type="button"
        aria-label="Grid view"
        aria-pressed={value === "grid"}
        onClick={() => onChange("grid")}
        className={`rounded-full p-2 transition duration-300 ease-in-out ${
          value === "grid"
            ? "bg-forest-800 text-gold-300"
            : "text-forest-700 hover:text-gold-600 dark:text-forest-100"
        }`}
      >
        <LayoutGrid size={16} />
      </button>
      <button
        type="button"
        aria-label="List view"
        aria-pressed={value === "list"}
        onClick={() => onChange("list")}
        className={`rounded-full p-2 transition duration-300 ease-in-out ${
          value === "list"
            ? "bg-forest-800 text-gold-300"
            : "text-forest-700 hover:text-gold-600 dark:text-forest-100"
        }`}
      >
        <List size={16} />
      </button>
    </div>
  );
}
