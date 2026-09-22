"use client";

import { FormEvent, useState } from "react";
import { AuthCard } from "@/components/auth/AuthCard";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "h-11 w-full rounded-xl border border-forest-800/10 bg-cream px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!password) next.password = "Enter your password.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to manage your saved properties and enquiries."
      footer={{ text: "Don't have an account?", linkLabel: "Create one", href: "/register" }}
    >
      {submitted ? (
        <p className="rounded-xl bg-forest-50 px-4 py-3 text-sm text-forest-800 dark:bg-forest-800 dark:text-cream">
          This is a demo form — there is no real account system behind it yet.
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.password)}
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </label>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-forest-700 dark:text-forest-200">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-forest-800/30 accent-gold-500"
              />
              Remember me
            </label>
            <button
              type="button"
              className="font-medium text-gold-600 transition duration-300 ease-in-out hover:text-gold-700 dark:text-gold-300 dark:hover:text-gold-200"
            >
              Forgot password?
            </button>
          </div>
          <button type="submit" className="gold-btn w-full">
            Log in
          </button>
        </form>
      )}
    </AuthCard>
  );
}
