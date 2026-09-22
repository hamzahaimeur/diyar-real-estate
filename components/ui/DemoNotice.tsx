import { Info } from "lucide-react";

export function DemoNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-center text-xs font-medium text-forest-700 dark:border-gold-300/20 dark:bg-gold-300/10 dark:text-forest-100 ${className}`}
    >
      <Info size={14} className="shrink-0 text-gold-600 dark:text-gold-300" />
      <span>
        Demo project — all listings, agents, and figures on this site are examples used to
        showcase the design, not real data.
      </span>
    </div>
  );
}
