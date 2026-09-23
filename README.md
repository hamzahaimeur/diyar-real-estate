# Diyar — Real Estate Listing Website Template

A modern, fully responsive real estate listing website built with **Next.js 14**, **TypeScript** and **Tailwind CSS**. It includes property search, advanced filtering, saved properties, detailed listing pages, dark / light mode and built-in SEO (metadata, Open Graph, sitemap, robots).

> **Demo notice:** every property, price, agent, phone number, email and statistic in this project is **sample data** used only to present the interface. None of it refers to real listings, people or companies. Replace it with your own content before going live (see the [Going live checklist](#going-live-checklist)).

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Customization guide](#customization-guide)
- [Going live checklist](#going-live-checklist)
- [Deployment](#deployment)
- [Connecting a backend](#connecting-a-backend)
- [Troubleshooting](#troubleshooting)
- [Credits and third-party licenses](#credits-and-third-party-licenses)
- [License](#license)

---

## Features

**Pages**

- **Home** — hero with quick property search, featured properties, "Why choose us" section and animated statistics
- **Properties** — listing page with filters, sorting, grid / list view toggle and pagination (6 per page)
- **Property details** — image gallery, key facts, description, amenities, contact-agent form, map placeholder and similar properties
- **Saved properties (Favorites)** — stored in the visitor's browser (`localStorage`) with a live counter in the navbar
- **About**, **Contact** (with FAQ), **Login**, **Register**, **Privacy Policy**, **Terms of Service** and a custom **404** page

**Search and filtering**

- Property type (apartment, villa, office, land)
- Price range, bedrooms, bathrooms, city and amenities
- Sorting by newest and by price (ascending / descending)
- The home page search bar opens the listing page with the chosen filters already applied

**User experience**

- Full dark / light mode (follows the system preference and remembers the visitor's choice)
- Smooth scroll-in animations, page transitions, skeleton loaders and a "back to top" button
- Mobile-first responsive layout and a skip-to-content link

**SEO and sharing**

- Title and description for every route
- Open Graph and Twitter Card tags, with an auto-generated social preview image
- `sitemap.xml`, `robots.txt`, canonical URLs and `RealEstateListing` structured data (JSON-LD) on property pages
- Favicon and Apple touch icon

## Tech stack

| Technology | Purpose |
| --- | --- |
| [Next.js 14](https://nextjs.org/) (App Router) | Framework, routing, metadata, image optimization |
| [React 18](https://react.dev/) | UI |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [lucide-react](https://lucide.dev/) | Icons |

## Requirements

- **Node.js 18.17 or newer** (Node 20 LTS recommended)
- **npm** (bundled with Node.js)
- An internet connection during the build — fonts are downloaded from Google Fonts by `next/font`

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. (Optional) create your local environment file
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create and run a production build locally:

```bash
npm run build
npm start
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm start` | Runs the production build (run `npm run build` first) |
| `npm run lint` | Runs ESLint |
| `npm run typecheck` | Runs the TypeScript compiler without emitting files |

## Environment variables

Copy `.env.example` to `.env.local` and edit it.

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Public URL of your site without a trailing slash, for example `https://www.yourdomain.com`. Used for canonical URLs, social previews, `sitemap.xml` and `robots.txt`. On Vercel it is detected automatically if not set; locally it defaults to `http://localhost:3000`. |

## Project structure

```text
app/                    Routes (App Router), metadata, sitemap, robots, social preview image, icons
components/
  home/                 Navbar, Footer, Hero, search bar, featured properties, stats, "Why choose us"
  properties/           Listing page, filters, sorting, pagination, gallery, details, contact-agent card
  about/, contact/      Static page content
  auth/                 Login and register forms
  favorites/            Saved properties page content
  ui/                   Shared UI (breadcrumbs, demo notice, save button, skeletons, back-to-top)
  motion/               Scroll-reveal animation wrapper
  providers/            Dark / light theme provider
data/properties.json    Sample property data
lib/
  site.ts               Site name, URL, title, description and keywords (SEO / branding)
  properties.ts         Data access, agents, property descriptions and gallery images
  property-filters.ts   Filter types, cities, amenity options and filter logic
  amenities.ts          Amenity name to icon mapping
  favorites.ts          Saved-properties logic (localStorage)
  format.ts             Price and phone formatting
types/property.ts       Shared TypeScript types
```

## Customization guide

### Branding and SEO

Edit **`lib/site.ts`** to change the site name, title, title template, description and keywords. Everything that uses them — page metadata, social previews, sitemap and robots — updates automatically.

- **Logo:** the "D" mark and site name are in `components/home/Navbar.tsx` and `components/home/Footer.tsx`. The browser icon is `app/icon.svg`, the iPhone icon is `app/apple-icon.tsx` and the social preview image is `app/opengraph-image.tsx`.
- **Colors:** edit the `forest`, `gold` and `cream` palettes in `tailwind.config.ts`.
- **Fonts:** change `DM_Sans` and `Playfair_Display` in `app/layout.tsx`.
- **Hero image:** change the image URL in `components/home/Hero.tsx`.

### Properties

Properties live in **`data/properties.json`**. Each entry looks like this:

```json
{
  "id": "diyar-001",
  "title": "Palm Residence Penthouse",
  "location": "Palm Jumeirah, Dubai",
  "city": "Dubai",
  "price": 4850000,
  "currency": "AED",
  "type": "Apartment",
  "bedrooms": 4,
  "bathrooms": 5,
  "area": 320,
  "image": "https://images.unsplash.com/...",
  "featured": true,
  "amenities": ["Pool", "Gym", "Parking"]
}
```

- `id` must be unique and is used in the URL (`/properties/<id>`).
- `type` must be one of `Apartment`, `Villa`, `Office` or `Land` (defined in `types/property.ts` and `lib/property-filters.ts`).
- `featured: true` shows the property on the home page.
- `area` is in square meters. `currency` is an ISO currency code such as `AED`, `USD` or `EUR`.
- The long description of each property goes in the `DESCRIPTIONS` object in `lib/properties.ts` (keyed by `id`). If a property has no entry, a short fallback text is shown.
- The extra gallery photos come from `GALLERY_EXTRAS` in `lib/properties.ts`.
- Cities offered in the filter are in `CITIES` and amenities in `AMENITY_OPTIONS`, both in `lib/property-filters.ts`. Amenity icons are mapped in `lib/amenities.ts`.
- Agents are defined in the `AGENTS` array in `lib/properties.ts` and are assigned to properties in rotation.

### Images

Property photos are loaded from external URLs through `next/image`. Allowed hosts are configured in `next.config.mjs` (`images.unsplash.com` and `images.pexels.com` by default). If you use another image host or CDN, add it to `remotePatterns`.

The sample photos come from Unsplash and are linked directly. For a production site, replace them with your own images.

### Contact details

Sample contact details appear in `components/home/Footer.tsx`, `components/contact/ContactContent.tsx` and in the agents list in `lib/properties.ts`. Social media links are in `components/home/Footer.tsx`.

### Content and legal pages

- Home page copy: `components/home/` (`Hero.tsx`, `WhyChooseUs.tsx`, `Stats.tsx`, `FeaturedProperties.tsx`)
- About: `components/about/AboutContent.tsx`
- Contact page and FAQ: `components/contact/ContactContent.tsx`
- Privacy Policy and Terms of Service: `app/privacy/page.tsx` and `app/terms/page.tsx` — these are **placeholders**; replace them with legal text that fits your business and country.

## Going live checklist

Because this is a demo, remove or replace the sample content before publishing a real website:

- [ ] Replace the properties in `data/properties.json`, plus their descriptions and gallery images in `lib/properties.ts`
- [ ] Replace the agents, phone numbers, emails, address and social links (see [Contact details](#contact-details))
- [ ] Update `lib/site.ts` (name, title, description, keywords) and set `NEXT_PUBLIC_SITE_URL`
- [ ] Remove the demo notice: delete the `<DemoNotice />` usages (Hero, About, Contact, Property details, Favorites, Login / Register, Privacy, Terms) and the file `components/ui/DemoNotice.tsx`
- [ ] Remove the demo disclaimer lines in `components/home/Footer.tsx` (copyright line) and `components/home/Stats.tsx`, and update the statistics to real numbers
- [ ] Rewrite the About page, Contact FAQ, Privacy Policy and Terms of Service
- [ ] Replace the logo, favicon, social preview image and hero image
- [ ] Connect the forms to a backend (see below)
- [ ] Replace the map placeholder (`components/properties/PropertyMapPlaceholder.tsx`) with a real map if you need one

## Deployment

### Vercel (recommended)

1. Push the project to a GitHub / GitLab / Bitbucket repository.
2. Import the repository in [Vercel](https://vercel.com/new). The Next.js settings are detected automatically.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` with your final domain (optional on Vercel).
4. Click **Deploy**.

### Any Node.js server

```bash
npm install
npm run build
npm start        # listens on port 3000; use `npm start -- -p 8080` to change it
```

The project uses `next/image` with remote images, so it needs a Node.js runtime (or a platform that supports Next.js image optimization). Set `NEXT_PUBLIC_SITE_URL` **before** running `npm run build`.

## Connecting a backend

This template is **front-end only** — nothing is sent to or stored on a server:

| Feature | Current behavior | Where to connect it |
| --- | --- | --- |
| Contact form | Validates input and shows a success message | `components/contact/ContactContent.tsx` |
| Contact-agent form | Checks required fields and shows a success message | `components/properties/ContactAgentCard.tsx` |
| Newsletter form | Shows a success message | `components/home/Footer.tsx` |
| Login / Register | Validates input and shows a success message | `components/auth/LoginForm.tsx`, `components/auth/RegisterForm.tsx` |
| Saved properties | Stored in the visitor's browser (`localStorage`) | `lib/favorites.ts` |
| Property data | Read from `data/properties.json` | `lib/properties.ts` |

Typical next steps: a Next.js Route Handler or Server Action that sends form data by email or to a CRM, an authentication provider for login / register, and a database or CMS in place of `properties.json`.

## Troubleshooting

- **`Failed to fetch font` during build** — the build machine cannot reach `fonts.googleapis.com`. Check the internet connection / proxy, or switch to local fonts with `next/font/local`.
- **Images do not load or `hostname is not configured`** — add the image host to `images.remotePatterns` in `next.config.mjs` and restart the server.
- **Port 3000 is already in use** — run `npm run dev -- -p 3001`.
- **Errors after installing** — make sure you use Node.js 18.17 or newer (`node -v`), then delete `node_modules` and run `npm install` again.
- **Social preview shows an old image or title** — social networks cache previews; re-scrape the link with the platform's debugger tool after deploying.

## Credits and third-party licenses

- Photos: [Unsplash](https://unsplash.com/) (Unsplash License) — used for demonstration only
- Fonts: DM Sans and Playfair Display via [Google Fonts](https://fonts.google.com/) (SIL Open Font License)
- Icons: [lucide-react](https://lucide.dev/) (ISC License)
- Libraries: Next.js, React, Tailwind CSS and Framer Motion (MIT License)

## License

Usage rights for this template are defined by the license or agreement under which it was purchased. Third-party assets and libraries remain under their own licenses, listed above.
