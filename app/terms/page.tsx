import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the Diyar demo listing platform.",
};

export default function TermsPage() {
  return (
    <main className="pb-20">
      <section className="border-b border-forest-800/10 bg-white py-10 dark:border-white/10 dark:bg-forest-900/40">
        <FadeIn className="container-page">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Terms of Service" }]} />
          <h1 className="section-heading mt-2">Terms of Service</h1>
          <div className="mt-5">
            <DemoNotice className="mx-0 justify-start text-left" />
          </div>
        </FadeIn>
      </section>

      <FadeIn className="container-page mt-10 max-w-3xl space-y-6 text-sm leading-7 text-forest-700 dark:text-forest-200">
        <p>
          These terms are placeholder content so that every link on the site leads somewhere
          real. Diyar is a portfolio demo, not a live marketplace, so no purchase, rental, or
          agency agreement can be made through this site.
        </p>
        <div>
          <h2 className="font-display text-xl text-forest-900 dark:text-cream">
            Demo content
          </h2>
          <p className="mt-2">
            All property listings, prices, agents, and figures shown on this site are examples
            created to demonstrate the interface. They do not represent real properties,
            people, or offers for sale or rent.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-forest-900 dark:text-cream">No liability</h2>
          <p className="mt-2">
            Because this site is a demonstration project, no warranty is made about the
            accuracy of any listing, and no transaction can be entered into through it.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-forest-900 dark:text-cream">Contact</h2>
          <p className="mt-2">
            Questions about this project can be sent through the{" "}
            <a href="/contact" className="font-medium text-gold-600 hover:text-gold-700 dark:text-gold-300">
              Contact page
            </a>
            .
          </p>
        </div>
      </FadeIn>
    </main>
  );
}
