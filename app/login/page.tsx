import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to the Diyar demo platform.",
};

export default function LoginPage() {
  return <LoginForm />;
}
