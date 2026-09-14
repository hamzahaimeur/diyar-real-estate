"use client";

import { SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FilterSidebar } from "@/components/properties/FilterSidebar";
import { Pagination } from "@/components/properties/Pagination";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { SortDropdown } from "@/components/properties/SortDropdown";
import { ViewToggle } from "@/components/properties/ViewToggle";
import { FadeIn } from "@/components/motion/FadeIn";
import propertiesData from "@/data/properties.json";
import {
  DEFAULT_FILTERS,
  filterProperties,
  filtersFromSearchParams,
  hasActiveFilters,
  sortProperties,
  type PropertyFilters,
  type SortOption,
  type ViewMode,
} from "@/lib/property-filters";
import type { Property } from "@/types/property";

const PAGE_SIZE = 6;
const allProperties = propertiesData as Property[];

export function PropertiesListing() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<PropertyFilters>(() =>
    filtersFromSearchParams(searchParams),
  );
  const [sort, setSort] = useState<SortOption>("newest");
  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setFilters(filtersFromSearchParams(searchParams));
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const filtered = useMemo(
    () => sortProperties(filterProperties(allProperties, filters), sort),
    [filters, sort],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const updateFilters = (next: PropertyFilters) => {
    setFilters(next);
    setPage(1);
  };

  const clearFilters = () => {
    updateFilters(DEFAULT_FILTERS);
    setDrawerOpen(false);
  };

  return (
    <div className="pb-20">
      <section className="border-b border-forest-800/10 bg-white py-10 dark:border-white/10 dark:bg-forest-900/40">
        <FadeIn className="container-page">
          <nav className="text-sm text-forest-600 dark:text-forest-200" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition duration-300 ease-in-out hover:text-gold-600">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-medium text-forest-900 dark:text-cream">Properties</li>
            </ol>
          </nav>
          <h1 className="section-heading mt-4">All Properties</h1>
          <p className="section-sub">
            Filter verified homes, offices, and land across the UAE. {filtered.length} listing
            {filtered.length === 1 ? "" : "s"} match your search.
          </p>
        </FadeIn>
      </section>

      <div className="container-page mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        <div className="hidden rounded-2xl border border-forest-800/10 bg-white p-6 shadow-card lg:block dark:border-white/10 dark:bg-forest-900">
          <FilterSidebar
            filters={filters}
            onChange={updateFilters}
            onClear={clearFilters}
          />
        </div>

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              className="ghost-btn lg:hidden"
              onClick={() => setDrawerOpen(true)}
            >
              <SlidersHorizontal size={16} className="mr-2" />
              Filters
              {hasActiveFilters(filters) && (
                <span className="ml-2 rounded-full bg-gold-500 px-2 py-0.5 text-xs text-forest-950">
                  Active
                </span>
              )}
            </button>
            <p className="text-sm text-forest-600 dark:text-forest-200">
              Showing {visible.length} of {filtered.length}
            </p>
            <div className="ml-auto flex items-center gap-3">
              <SortDropdown value={sort} onChange={setSort} />
              <ViewToggle value={view} onChange={setView} />
            </div>
          </div>

          <PropertyGrid properties={visible} layout={view} />
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close filters"
          className={`absolute inset-0 bg-forest-950/50 transition-opacity duration-300 ease-in-out ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 flex w-[min(92vw,22rem)] flex-col bg-cream shadow-card-hover transition-transform duration-300 ease-in-out dark:bg-forest-950 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-forest-800/10 px-5 py-4 dark:border-white/10">
            <p className="font-display text-xl">Filters</p>
            <button
              type="button"
              className="icon-btn"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filter drawer"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <FilterSidebar
              filters={filters}
              onChange={updateFilters}
              onClear={clearFilters}
              showTitle={false}
            />
          </div>
          <div className="border-t border-forest-800/10 p-4 dark:border-white/10">
            <button type="button" className="gold-btn w-full" onClick={() => setDrawerOpen(false)}>
              Show {filtered.length} results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
