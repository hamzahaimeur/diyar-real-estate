import { AMENITY_ICONS } from "@/lib/amenities";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function AmenitiesGrid({ amenities }: { amenities: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {amenities.map((amenity, index) => {
        const Icon = AMENITY_ICONS[amenity] ?? Check;
        return (
          <FadeIn key={amenity} delayMs={index * 40}>
            <div className="flex items-center gap-3 rounded-2xl border border-forest-800/10 bg-white px-4 py-3 transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-gold-400/50 dark:border-white/10 dark:bg-forest-900">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                <Icon size={16} />
              </span>
              <span className="text-sm font-medium text-forest-800 dark:text-cream">{amenity}</span>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}