"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { PropertyCard } from "@/components/home/PropertyCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { FadeIn } from "@/components/motion/FadeIn";
import { useFavorites } from "@/lib/favorites";
import { getAllProperties } from "@/lib/properties";

export function FavoritesPageContent() {
  const { ids } = useFavorites();
  const allProperties = getAllProperties();
  const saved = allProperties.filter((property) => ids.includes(property.id));

  return (
    <div className="pb-20">
      <section className="border-b border-forest-800/10 bg-white py-10 dark:border-white/10 dark:bg-forest-900/40">
        <FadeIn className="container-page">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Saved Properties" }]} />
          <h1 className="section-heading mt-2">Saved Properties</h1>
          <p className="section-sub">
            Properties you have saved on this device, using your browser's local storage.
          </p>
          <div className="mt-5">
            <DemoNotice className="mx-0 justify-start text-left" />
          </div>
        </FadeIn>
      </section>

      <div className="container-page mt-10">
        {saved.length === 0 ? (
          <FadeIn className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-forest-800/20 bg-white py-20 text-center dark:border-white/15 dark:bg-forest-900/40">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-100 text-gold-600 dark:bg-forest-800 dark:text-gold-300">
              <Heart size={26} />
            </span>
            <div>
              <p className="font-display text-xl text-forest-900 dark:text-cream">
                No saved properties yet
              </p>
              <p className="mt-1 max-w-sm text-sm text-forest-600 dark:text-forest-200">
                Tap the heart icon on any listing to save it here for later.
              </p>
            </div>
            <Link href="/properties" className="gold-btn">
              Browse Properties
            </Link>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {saved.map((property, index) => (
              <FadeIn key={property.id} delayMs={index * 60}>
                <PropertyCard property={property} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
