import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page of the Diyar demo real estate website. The form is a demonstration and does not send messages.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  );
}
