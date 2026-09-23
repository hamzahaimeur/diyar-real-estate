import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log in",
  description: "Demo login page of the Diyar real estate website. No real accounts are used.",
};

export default function LoginPage() {
  return <LoginForm />;
}
