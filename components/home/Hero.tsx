import { PropertySearch } from "@/components/home/PropertySearch";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section id="home" className="relative isolate scroll-mt-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-forest-900/70 to-forest-950/85" />

      <div className="container-page relative z-10 flex min-h-[88vh] flex-col items-center justify-center py-20 text-center">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
            Curated homes across the Gulf
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find the property that feels like home
          </h1>
          <p className="mt-5 max-w-2xl text-base text-forest-100/90 sm:text-lg">
            Browse verified listings from trusted agents. Search apartments, villas,
            offices, and land with Diyar — a calmer way to buy, sell, and invest.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 w-full max-w-5xl" delayMs={120}>
          <PropertySearch />
        </FadeIn>
      </div>
    </section>
  );
}
