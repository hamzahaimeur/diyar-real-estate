# Diyar — Real Estate Listing Platform (Demo)

Diyar is a front-end real estate listing platform built as a portfolio project. It
showcases a full property search and browsing experience — search, filtering, saved
properties, and detailed listing pages — using sample data.

> **Note:** This is a demo project. All properties, agents, and figures shown are
> examples used to present the interface, not real listings.

## Features

- Home page with hero search, featured properties, and a "why choose us" section
- Properties listing page with filters (type, price, bedrooms, bathrooms, location,
  amenities), sorting, grid/list view toggle, and pagination
- Individual property detail pages with an image gallery, amenities, a contact-agent
  form, and similar-properties suggestions
- Saved properties (Favorites) using browser local storage, with a live counter in
  the navbar
- About, Contact, Login, and Register pages
- Full dark/light mode
- Smooth scroll-in animations, custom scrollbar and text-selection styling, active
  navigation links, and a "back to top" button
- Fully responsive, mobile-first layout

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                 Next.js App Router pages
components/
  home/               Homepage sections (Hero, FeaturedProperties, Navbar, Footer, ...)
  properties/         Listing + property detail components
  about/, contact/    Static page content
  auth/               Login / Register forms
  favorites/          Saved properties page content
  ui/                 Shared UI (Breadcrumbs, DemoNotice, SaveButton, skeletons)
  motion/             Scroll-reveal animation wrapper
  providers/          Theme (dark/light) provider
data/properties.json  Sample property data
lib/                  Data access, formatting, filters, favorites helpers
types/                Shared TypeScript types
```

## Notes

- No backend is connected — forms (contact, login, register) validate input and show
  a success state, but do not send data anywhere.
- Saved properties are stored only in the visitor's browser (`localStorage`).
