import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "About the Diyar demo real estate listing website. All content and data shown are samples for demonstration only.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
