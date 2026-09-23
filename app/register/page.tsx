import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create account",
  description: "Demo registration page of the Diyar real estate website. No real account is created.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
