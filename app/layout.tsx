import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";
import { BackToTop } from "@/components/ui/BackToTop";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diyar.example"),
  title: {
    default: "Diyar | Find Your Dream Property",
    template: "%s | Diyar",
  },
  description:
    "Diyar is a professional real estate listing platform helping you discover verified homes, villas, offices, and land across the region.",
  keywords: ["real estate", "UAE property", "Dubai homes", "villas", "apartments", "Diyar"],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Diyar",
    title: "Diyar | Find Your Dream Property",
    description:
      "Discover verified apartments, villas, offices, and land across the UAE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("diyar-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
