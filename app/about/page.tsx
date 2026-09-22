import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "About the Diyar demo real estate listing platform, built as a portfolio project.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
