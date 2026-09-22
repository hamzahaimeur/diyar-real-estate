import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about the Diyar demo listing platform.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  );
}
