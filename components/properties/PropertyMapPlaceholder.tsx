import { MapPin } from "lucide-react";

export function PropertyMapPlaceholder({ location }: { location: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-forest-800/10 bg-forest-100 dark:border-white/10 dark:bg-forest-900">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#9ab8a3 1px, transparent 1px), linear-gradient(90deg, #9ab8a3 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 px-6 py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-gold-300">
          <MapPin size={22} />
        </span>
        <p className="font-display text-xl text-forest-900 dark:text-cream">{location}</p>
        <p className="max-w-sm text-sm text-forest-600 dark:text-forest-200">
          Map preview coming soon. The listing is in this neighbourhood; request a viewing for
          exact access notes.
        </p>
      </div>
    </div>
  );
}