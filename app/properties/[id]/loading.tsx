import { PropertyCardSkeleton } from "@/components/ui/PropertyCardSkeleton";

export default function PropertyDetailsLoading() {
  return (
    <div className="container-page py-10">
      <div className="h-4 w-64 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
      <div className="mt-6 h-10 w-2/3 animate-pulse rounded bg-forest-100 dark:bg-forest-800" />
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="h-80 animate-pulse rounded-2xl bg-forest-100 dark:bg-forest-800" />
        <PropertyCardSkeleton />
      </div>
    </div>
  );
}