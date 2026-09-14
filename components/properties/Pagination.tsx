"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        className="icon-btn disabled:cursor-not-allowed disabled:opacity-40"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onPageChange(item)}
          className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition duration-300 ease-in-out ${
            item === page
              ? "bg-forest-800 text-gold-300"
              : "border border-forest-800/10 bg-white text-forest-800 hover:border-gold-500/50 hover:text-gold-700 dark:border-white/10 dark:bg-forest-900 dark:text-cream"
          }`}
        >
          {item}
        </button>
      ))}
      <button
        type="button"
        className="icon-btn disabled:cursor-not-allowed disabled:opacity-40"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
