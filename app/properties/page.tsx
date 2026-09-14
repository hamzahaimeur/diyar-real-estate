import { Suspense } from "react";
import { PropertiesListing } from "@/components/properties/PropertiesListing";

export const metadata = {
  title: "Properties | Diyar",
  description: "Browse verified apartments, villas, offices, and land across the UAE.",
};

export default function PropertiesPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="container-page py-20 text-sm text-forest-600">Loading listings…</div>
        }
      >
        <PropertiesListing />
      </Suspense>
    </main>
  );
}
