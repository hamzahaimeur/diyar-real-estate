import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Placeholder privacy policy for the Diyar demo real estate website.",
};

export default function PrivacyPage() {
  return (
    <main className="pb-20">
      <section className="border-b border-forest-800/10 bg-white py-10 dark:border-white/10 dark:bg-forest-900/40">
        <FadeIn className="container-page">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]} />
          <h1 className="section-heading mt-2">Privacy Policy</h1>
          <div className="mt-5">
            <DemoNotice className="mx-0 justify-start text-left" />
          </div>
        </FadeIn>
      </section>

      <FadeIn className="container-page mt-10 max-w-3xl space-y-6 text-sm leading-7 text-forest-700 dark:text-forest-200">
        <p>
          This page is a placeholder Privacy Policy included so that every link across the site
          leads somewhere real. Diyar is a demo real estate listing platform built as a
          demo project — it does not operate as a real business and does not collect,
          store, or share personal data on any server.
        </p>
        <div>
          <h2 className="font-display text-xl text-forest-900 dark:text-cream">
            What this site does with your information
          </h2>
          <p className="mt-2">
            The contact form, login, and registration forms on this site are demonstration
            components. Submitting them does not send data anywhere — no email is sent, no
            account is created, and no message is stored on a server.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-forest-900 dark:text-cream">
            Local storage
          </h2>
          <p className="mt-2">
            The only data this site keeps is the list of properties you save to your
            Favorites page, which is stored locally in your browser (localStorage) and is
            never transmitted anywhere. Clearing your browser data removes it.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-forest-900 dark:text-cream">Cookies</h2>
          <p className="mt-2">
            This site does not use tracking or advertising cookies.
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
