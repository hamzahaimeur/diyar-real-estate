"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("password") !== form.get("confirmPassword")) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="container-page flex min-h-[calc(100vh-20rem)] items-center justify-center py-16">
      <section className="w-full max-w-md rounded-2xl border border-forest-800/10 bg-white p-7 shadow-card dark:border-white/10 dark:bg-forest-900 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Join Diyar</p>
        <h1 className="section-heading mt-3">Create your account</h1>
        <p className="section-sub">Keep your shortlist close and discover your next address.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <label className="text-sm font-semibold">Full name<input required name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-forest-800/15 bg-transparent px-4 py-3" /></label>
          <label className="text-sm font-semibold">Email<input required name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-forest-800/15 bg-transparent px-4 py-3" /></label>
          <label className="text-sm font-semibold">Password<input required name="password" minLength={6} type="password" autoComplete="new-password" className="mt-2 w-full rounded-xl border border-forest-800/15 bg-transparent px-4 py-3" /></label>
          <label className="text-sm font-semibold">Confirm password<input required name="confirmPassword" minLength={6} type="password" autoComplete="new-password" className="mt-2 w-full rounded-xl border border-forest-800/15 bg-transparent px-4 py-3" /></label>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          <button className="gold-btn w-full">Create account</button>
          {submitted && <p role="status" className="text-center text-sm text-gold-700 dark:text-gold-300">Demo account created successfully.</p>}
        </form>
        <p className="mt-7 text-center text-sm text-forest-700 dark:text-forest-200">Already have an account? <Link href="/login" className="font-semibold text-gold-700 hover:underline dark:text-gold-300">Sign in</Link></p>
      </section>
    </main>
  );
}
