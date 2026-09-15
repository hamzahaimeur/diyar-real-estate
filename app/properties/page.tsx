import { Suspense } from "react";
import { PropertiesListing } from "@/components/properties/PropertiesListing";
import { PropertyGridSkeleton } from "@/components/ui/PropertyCardSkeleton";

export const metadata = {
  title: "Properties",
  description: "Browse verified apartments, villas, offices, and land across the UAE.",
};

export default function PropertiesPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="container-page py-20">
            <PropertyGridSkeleton layout="grid" />
          </div>
        }
      >
        <PropertiesListing />
      </Suspense>
    </main>
  );
}
