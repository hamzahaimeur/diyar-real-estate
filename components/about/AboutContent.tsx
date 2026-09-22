import Link from "next/link";
import { BadgeCheck, Headphones, ShieldCheck, Tags } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { FadeIn } from "@/components/motion/FadeIn";

const values = [
  {
    title: "Verified Listings",
    description: "A consistent accuracy checklist behind every listing shown on the platform.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Agents",
    description: "Each property links to a named point of contact for direct questions.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Pricing",
    description: "Prices are shown upfront, with no hidden steps before you can compare.",
    icon: Tags,
  },
  {
    title: "Responsive Support",
    description: "A contact flow designed to route enquiries to the right place quickly.",
    icon: Headphones,
  },
];

export function AboutContent() {
  return (
    <div className="pb-20">
      <section className="border-b border-forest-800/10 bg-white py-10 dark:border-white/10 dark:bg-forest-900/40">
        <FadeIn className="container-page">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            About Diyar
          </p>
          <h1 className="section-heading mt-2">A calmer way to browse property</h1>
          <p className="section-sub">
            Diyar is a real estate listing interface built to show what a clear, verified,
            trustworthy property search could feel like.
          </p>
          <div className="mt-5">
            <DemoNotice className="mx-0 justify-start text-left" />
          </div>
        </FadeIn>
      </section>

      <section className="container-page mt-14 grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
        <FadeIn>
          <h2 className="font-display text-2xl text-forest-900 dark:text-cream">Our story</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-forest-700 dark:text-forest-200">
            <p>
              Diyar started as a front-end project: a real estate listing platform designed and
              built end to end, from search and filtering to individual property pages, with the
              goal of matching the clarity and polish of established listing sites.
            </p>
            <p>
              Every property, agent, and figure shown across the site is a sample used to
              demonstrate the interface — the search flow, filters, saved properties, and
              contact form all work exactly as they would on a live platform, using
              placeholder content instead of a real property catalogue.
            </p>
            <p>
              The project is part of a small portfolio of web platforms, alongside a
              restaurant site, an admin dashboard, and an e-commerce store, each built to explore
              a different kind of product experience.
            </p>
          </div>
        </FadeIn>

        <FadeIn delayMs={100}>
          <div className="rounded-2xl border border-forest-800/10 bg-white p-6 shadow-card dark:border-white/10 dark:bg-forest-900">
            <h3 className="font-display text-lg text-forest-900 dark:text-cream">
              At a glance
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-forest-800/10 pb-3 dark:border-white/10">
                <dt className="text-forest-600 dark:text-forest-200">Status</dt>
                <dd className="font-medium text-forest-900 dark:text-cream">Demo project</dd>
              </div>
              <div className="flex items-center justify-between border-b border-forest-800/10 pb-3 dark:border-white/10">
                <dt className="text-forest-600 dark:text-forest-200">Stack</dt>
                <dd className="font-medium text-forest-900 dark:text-cream">
                  Next.js, TypeScript, Tailwind CSS
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-forest-600 dark:text-forest-200">Sample listings</dt>
                <dd className="font-medium text-forest-900 dark:text-cream">12</dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </section>

      <section className="container-page mt-16">
        <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="section-heading">What the platform demonstrates</h2>
          <p className="section-sub mx-auto">
            The same principles a real listing platform would be built around.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <FadeIn key={value.title} delayMs={index * 80} className="h-full">
              <div className="h-full rounded-2xl border border-forest-800/10 bg-cream p-6 transition duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-card dark:border-white/10 dark:bg-forest-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                  <value.icon size={22} />
                </div>
                <h3 className="font-display text-xl text-forest-900 dark:text-cream">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-forest-700 dark:text-forest-200">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn className="container-page mt-16">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-forest-800 px-6 py-12 text-center">
          <h2 className="font-display text-2xl text-cream sm:text-3xl">
            Want to see the listings?
          </h2>
          <p className="max-w-xl text-sm text-forest-100">
            Browse the sample catalogue to see the search, filters, and property pages in
            action.
          </p>
          <Link href="/properties" className="gold-btn">
            View Properties
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
