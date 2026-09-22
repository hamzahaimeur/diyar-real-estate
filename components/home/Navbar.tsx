"use client";

import { Heart, LogIn, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useFavorites } from "@/lib/favorites";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
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
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/favorites"
            aria-label="Saved properties"
            className={`icon-btn relative ${isActive("/favorites") ? "border-gold-500/50 text-gold-600 dark:text-gold-300" : ""}`}
          >
            <Heart size={18} />
            {mounted && count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-bold text-forest-950">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="icon-btn"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            href="/login"
            aria-label="Log in"
            className={`icon-btn ${isActive("/login") ? "border-gold-500/50 text-gold-600 dark:text-gold-300" : ""}`}
          >
            <LogIn size={18} />
          </Link>
          <Link href="/contact" className="gold-btn">
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
          open ? "max-h-[28rem] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4 py-4">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
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
          <Link
            href="/favorites"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-forest-800 transition duration-300 ease-in-out hover:bg-forest-100 hover:text-gold-700 dark:text-cream dark:hover:bg-forest-800 dark:hover:text-gold-300"
          >
            <Heart size={16} /> Saved {mounted && count > 0 ? `(${count})` : ""}
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-forest-800 transition duration-300 ease-in-out hover:bg-forest-100 hover:text-gold-700 dark:text-cream dark:hover:bg-forest-800 dark:hover:text-gold-300"
          >
            <LogIn size={16} /> Log in
          </Link>
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
            <Link href="/contact" className="gold-btn" onClick={() => setOpen(false)}>
              List Your Property
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
