import type { ViewMode } from "@/lib/property-filters";

export function PropertyCardSkeleton({ layout = "grid" }: { layout?: ViewMode }) {
  const isList = layout === "list";

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-forest-800/10 bg-white dark:border-white/10 dark:bg-forest-900 ${
        isList ? "md:flex" : ""
      }`}
    >
      <div
        className={`animate-pulse bg-forest-100 dark:bg-forest-800 ${
          isList ? "h-56 md:h-auto md:w-72 md:shrink-0 lg:w-80" : "h-56"
        }`}
      />
      <div className="flex flex-1 flex-col space-y-3 p-5">
        <div className="h-5 w-32 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
        <div className="h-6 w-3/4 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
        <div className="flex gap-3 pt-2">
          <div className="h-4 w-16 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
          <div className="h-4 w-16 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
          <div className="h-4 w-16 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
        </div>
        <div className="mt-auto h-10 w-full animate-pulse rounded-full bg-forest-100 dark:bg-forest-800" />
      </div>
    </div>
  );
}

export function PropertyGridSkeleton({
  layout,
  count = 6,
}: {
  layout: ViewMode;
  count?: number;
}) {
  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          : "flex flex-col gap-6"
      }
    >
      {Array.from({ length: count }, (_, index) => (
        <PropertyCardSkeleton key={index} layout={layout} />
      ))}
    </div>
  );
}
