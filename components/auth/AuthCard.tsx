"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { DemoNotice } from "@/components/ui/DemoNotice";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: { text: string; linkLabel: string; href: string };
}) {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-16">
      <FadeIn className="w-full max-w-md">
        <div className="rounded-2xl border border-forest-800/10 bg-white p-8 shadow-card dark:border-white/10 dark:bg-forest-900">
          <div className="mb-6 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-forest-800 text-gold-300">
                <span className="font-display text-lg leading-none">D</span>
              </span>
              <span className="font-display text-xl text-forest-900 dark:text-cream">Diyar</span>
            </Link>
          </div>
          <h1 className="font-display text-2xl text-forest-900 dark:text-cream">{title}</h1>
          <p className="mt-1 text-sm text-forest-600 dark:text-forest-200">{subtitle}</p>
          <div className="mt-5">
            <DemoNotice className="mx-0 justify-start text-left text-[11px]" />
          </div>

          <div className="mt-6">{children}</div>

          <p className="mt-6 text-center text-sm text-forest-600 dark:text-forest-200">
            {footer.text}{" "}
            <Link
              href={footer.href}
              className="font-semibold text-gold-600 transition duration-300 ease-in-out hover:text-gold-700 dark:text-gold-300 dark:hover:text-gold-200"
            >
              {footer.linkLabel}
            </Link>
          </p>
        </div>
      </FadeIn>
    </main>
  );
}
