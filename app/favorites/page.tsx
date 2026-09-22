import type { Metadata } from "next";
import { FavoritesPageContent } from "@/components/favorites/FavoritesPageContent";

export const metadata: Metadata = {
  title: "Saved Properties",
  description: "Properties you have saved while browsing the Diyar demo listing platform.",
};

export default function FavoritesPage() {
  return (
    <main>
      <FavoritesPageContent />
    </main>
  );
}
