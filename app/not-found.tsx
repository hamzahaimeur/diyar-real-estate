import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This Diyar page could not be found. Return home or browse current listings.",
};

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">404</p>
      <h1 className="section-heading mt-3">This page is not listed</h1>
      <p className="section-sub mx-auto">
        The address may be outdated, or the property has been withdrawn. Return home
        or browse current listings.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="gold-btn">
          Back to home
        </Link>
        <Link href="/properties" className="ghost-btn">
          View properties
        </Link>
      </div>
      </FadeIn>
    </main>
  );
}
