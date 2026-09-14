"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) {
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

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => onNavClick(event, link.href)}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
          className="rounded-md p-2 text-forest-800 transition duration-300 ease-in-out hover:bg-forest-100 lg:hidden dark:text-cream dark:hover:bg-forest-800"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => onNavClick(event, link.href)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-forest-800 transition duration-300 ease-in-out hover:bg-forest-100 hover:text-gold-700 dark:text-cream dark:hover:bg-forest-800 dark:hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
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
