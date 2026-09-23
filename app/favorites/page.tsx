import type { Metadata } from "next";
import { FavoritesPageContent } from "@/components/favorites/FavoritesPageContent";

export const metadata: Metadata = {
  title: "Saved Properties",
  description: "Properties you saved while browsing the Diyar demo website, stored only in your browser. Sample data.",
};

export default function FavoritesPage() {
  return (
    <main>
      <FavoritesPageContent />
    </main>
  );
}
