"use client";

import { Heart, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useFavorites } from "@/components/providers/FavoritesProvider";
import { scrollToHash } from "@/lib/motion";

type SectionId = "home" | "properties" | "about" | "contact";

const navLinks: { href: string; label: string; section: SectionId }[] = [
  { href: "/", label: "Home", section: "home" },
  { href: "/properties", label: "Properties", section: "properties" },
  { href: "/about", label: "About", section: "about" },
  { href: "/contact", label: "Contact", section: "contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timeout = window.setTimeout(() => scrollToHash(hash), 80);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith("/properties")) {
      setActiveSection("properties");
      return;
    }

    if (pathname !== "/") return;

    const ids: SectionId[] = ["home", "properties", "about", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (nearBottom) setActiveSection("contact");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) {
      if (href === "/" && pathname === "/") {
        event.preventDefault();
        scrollToHash("#home");
      }
      setOpen(false);
      return;
    }

    const hash = href.slice(hashIndex);
    if (pathname === "/" || href.startsWith("/#")) {
      if (pathname === "/") {
        event.preventDefault();
        scrollToHash(hash);
        setOpen(false);
      }
    }
  };

  const isActive = (section: SectionId) => {
    if (pathname.startsWith("/properties")) return section === "properties";
    if (pathname !== "/") return false;
    return activeSection === section;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-cream/85 backdrop-blur-xl dark:border-white/10 dark:bg-forest-950/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-forest-800 text-gold-300 shadow-sm transition duration-300 ease-in-out group-hover:scale-105 group-hover:bg-forest-700">
            <span className="font-display text-lg leading-none">D</span>
          </span>
          <span className="font-display text-2xl tracking-tight text-forest-900 dark:text-cream">
            Diyar
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(link.section);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(event) => onNavClick(event, link.href)}
                className={`nav-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/favorites" className="icon-btn relative" aria-label={`Saved properties${favorites.length ? `, ${favorites.length} saved` : ""}`}>
            <Heart size={18} fill={favorites.length ? "currentColor" : "none"} />
            {favorites.length > 0 && <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-forest-950">{favorites.length}</span>}
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="icon-btn"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/#contact" className="gold-btn" onClick={(event) => onNavClick(event, "/#contact")}>
            List Your Property
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-forest-800 transition duration-300 ease-in-out hover:bg-forest-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 lg:hidden dark:text-cream dark:hover:bg-forest-800"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-forest-900/10 bg-cream transition-all duration-300 ease-in-out lg:hidden dark:border-white/10 dark:bg-forest-950 ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4 py-4">
          {navLinks.map((link) => {
            const active = isActive(link.section);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(event) => onNavClick(event, link.href)}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-2 py-2 text-sm font-medium transition duration-300 ease-in-out ${
                  active
                    ? "bg-forest-100 text-gold-700 dark:bg-forest-800 dark:text-gold-300"
                    : "text-forest-800 hover:bg-forest-100 hover:text-gold-700 dark:text-cream dark:hover:bg-forest-800 dark:hover:text-gold-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="ghost-btn"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              <span className="ml-2">{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
            <Link
              href="/#contact"
              className="gold-btn"
              onClick={(event) => onNavClick(event, "/#contact")}
            >
              List Your Property
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
