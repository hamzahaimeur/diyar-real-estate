import { BadgeCheck, Headphones, ShieldCheck, Tags } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const features = [
  {
    title: "Verified Listings",
    description:
      "Every property is reviewed for accuracy so you can browse with confidence, not guesswork.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted Agents",
    description:
      "Work with licensed professionals who know the market and represent your interests clearly.",
    icon: ShieldCheck,
  },
  {
    title: "Best Prices",
    description:
      "Transparent pricing and comparable listings help you negotiate from a stronger position.",
    icon: Tags,
  },
  {
    title: "24/7 Support",
    description:
      "Our team is available around the clock to answer questions and guide your next step.",
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 dark:bg-forest-900/40">
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
