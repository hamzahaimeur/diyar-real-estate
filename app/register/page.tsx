import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create account",
  description: "Create a demo account on the Diyar platform.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
