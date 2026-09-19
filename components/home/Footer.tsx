"use client";

import { FormEvent, MouseEvent, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { scrollToHash } from "@/lib/motion";

export function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const onHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1 || pathname !== "/") return;
    event.preventDefault();
    scrollToHash(href.slice(hashIndex));
  };

  return (
    <footer id="contact" className="scroll-mt-24 bg-forest-950 text-forest-100">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <FadeIn>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-500 text-forest-950">
              <span className="font-display text-lg leading-none">D</span>
            </span>
            <span className="font-display text-2xl text-cream">Diyar</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-forest-200">
            A professional listing platform for people who want clarity, verified
            homes, and a more considered property search.
          </p>
        </FadeIn>

        <FadeIn delayMs={80}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="transition duration-300 ease-in-out hover:text-gold-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/properties" className="transition duration-300 ease-in-out hover:text-gold-300">
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="transition duration-300 ease-in-out hover:text-gold-300"
                onClick={(event) => onHashClick(event, "/#about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="transition duration-300 ease-in-out hover:text-gold-300"
                onClick={(event) => onHashClick(event, "/#contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delayMs={160}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold-400" />
              DIFC, Gate Avenue, Dubai, UAE
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold-400" />
              +971 4 555 0190
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold-400" />
              hello@diyar.example
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-2 transition duration-300 ease-in-out hover:scale-105 hover:border-gold-400 hover:text-gold-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-2 transition duration-300 ease-in-out hover:scale-105 hover:border-gold-400 hover:text-gold-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2 transition duration-300 ease-in-out hover:scale-105 hover:border-gold-400 hover:text-gold-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delayMs={240}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
            Newsletter
          </h3>
          <p className="mt-4 text-sm text-forest-200">
            New listings and market notes, once a week.
          </p>
          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="h-11 rounded-xl border border-white/10 bg-forest-900 px-3 text-sm text-cream outline-none transition duration-300 ease-in-out focus:border-gold-400"
            />
            <button type="submit" className="gold-btn">
              Subscribe
            </button>
            {subscribed && (
              <p className="text-xs text-gold-300">Thank you. You are on the list.</p>
            )}
          </form>
        </FadeIn>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 px-2 py-7 text-center text-xs text-forest-300 sm:flex-row sm:px-0 sm:text-left">
        <span>© {new Date().getFullYear()} Diyar. All rights reserved.</span>
        <div className="flex gap-4"><Link href="/privacy" className="hover:text-gold-300">Privacy</Link><Link href="/terms" className="hover:text-gold-300">Terms</Link><Link href="/login" className="hover:text-gold-300">Sign in</Link></div>
      </div>
    </footer>
  );
}
