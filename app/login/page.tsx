"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="container-page flex min-h-[calc(100vh-20rem)] items-center justify-center py-16">
      <section className="w-full max-w-md rounded-2xl border border-forest-800/10 bg-white p-7 shadow-card dark:border-white/10 dark:bg-forest-900 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Welcome back</p>
        <h1 className="section-heading mt-3">Sign in to Diyar</h1>
        <p className="section-sub">Save properties and pick up your search where you left off.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <label className="text-sm font-semibold">Email<input required type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-forest-800/15 bg-transparent px-4 py-3" /></label>
          <label className="text-sm font-semibold">Password<input required minLength={6} type="password" autoComplete="current-password" className="mt-2 w-full rounded-xl border border-forest-800/15 bg-transparent px-4 py-3" /></label>
          <div className="flex items-center justify-between text-sm"><label className="flex items-center gap-2 font-normal"><input type="checkbox" /> Remember me</label><button type="button" className="text-gold-700 hover:underline dark:text-gold-300">Forgot password?</button></div>
          <button className="gold-btn w-full">Sign in</button>
          {submitted && <p role="status" className="text-center text-sm text-gold-700 dark:text-gold-300">Demo sign-in submitted successfully.</p>}
        </form>
        <p className="mt-7 text-center text-sm text-forest-700 dark:text-forest-200">New to Diyar? <Link href="/register" className="font-semibold text-gold-700 hover:underline dark:text-gold-300">Create an account</Link></p>
      </section>
    </main>
  );
}

