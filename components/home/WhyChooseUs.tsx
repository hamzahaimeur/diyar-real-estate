import { BadgeCheck, Headphones, ShieldCheck, Tags } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const features = [
  {
    title: "Verified Listings",
    description:
      "Every listing follows the same accuracy checklist, so browsing feels consistent from one property to the next.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Agents",
    description:
      "Each property is paired with a named point of contact who can answer questions about it directly.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Pricing",
    description:
      "Prices are shown upfront with no hidden steps, so comparing listings stays straightforward.",
    icon: Tags,
  },
  {
    title: "Responsive Support",
    description:
      "The contact form and agent messages are designed to route questions quickly to the right person.",
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-20 dark:bg-forest-900/40">
      <div className="container-page">
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Why Diyar
          </p>
          <h2 className="section-heading mt-2">Why Choose Us</h2>
          <p className="section-sub mx-auto">
            A quieter, more trustworthy way to discover property — built around
            verification, people, and clarity.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delayMs={index * 80} className="h-full">
              <div className="h-full rounded-2xl border border-forest-800/10 bg-cream p-6 transition duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-card dark:border-white/10 dark:bg-forest-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800 text-gold-300 transition duration-300 ease-in-out">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-display text-xl text-forest-900 dark:text-cream">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-forest-700 dark:text-forest-200">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
