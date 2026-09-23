import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertiesListing } from "@/components/properties/PropertiesListing";
import { PropertyGridSkeleton } from "@/components/ui/PropertyCardSkeleton";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse the demo catalogue of apartments, villas, offices and land. All listings, prices and agents are sample data for demonstration only.",
  alternates: { canonical: "/properties" },
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
