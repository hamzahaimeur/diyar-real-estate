"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { FadeIn } from "@/components/motion/FadeIn";

const faqs = [
  {
    question: "Is this a live real estate company?",
    answer:
      "No — Diyar is a demo project built to showcase a real estate listing interface. This form does not send messages to a real agency.",
  },
  {
    question: "Can I reuse this project?",
    answer:
      "Diyar is a ready-to-customise template. Replace the sample data, branding and content to launch your own listing website.",
  },
  {
    question: "Does the contact form actually send an email?",
    answer:
      "The form validates and shows a success state, but it does not connect to a real inbox in this demo.",
  },
];

export function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  const inputClass =
    "h-11 w-full rounded-xl border border-forest-800/10 bg-cream px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream";

  return (
    <div className="pb-20">
      <section className="border-b border-forest-800/10 bg-white py-10 dark:border-white/10 dark:bg-forest-900/40">
        <FadeIn className="container-page">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
          <h1 className="section-heading mt-2">Let&apos;s talk</h1>
          <p className="section-sub">
            Questions about a listing, the platform, or the project itself — send a message and
            you&apos;ll see a confirmation state below.
          </p>
          <div className="mt-5">
            <DemoNotice className="mx-0 justify-start text-left" />
          </div>
        </FadeIn>
      </section>

      <div className="container-page mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
        <FadeIn>
          <div className="rounded-2xl border border-forest-800/10 bg-white p-6 shadow-card dark:border-white/10 dark:bg-forest-900">
            {sent ? (
              <div className="rounded-xl bg-forest-50 px-5 py-6 text-sm text-forest-800 dark:bg-forest-800 dark:text-cream">
                <p className="font-display text-lg text-forest-900 dark:text-cream">
                  Message sent
                </p>
                <p className="mt-2">
                  This is a demo confirmation — no message was actually delivered. Thanks for
                  trying the form.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
                      Name
                    </span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </label>
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
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
                    Subject
                  </span>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-forest-800/10 bg-cream px-3 py-2 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </label>
                <button type="submit" className="gold-btn w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <FadeIn delayMs={100} className="mt-10">
            <h2 className="font-display text-xl text-forest-900 dark:text-cream">
              Before you reach out
            </h2>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-forest-800/10 bg-white p-4 dark:border-white/10 dark:bg-forest-900"
                >
                  <p className="font-medium text-forest-900 dark:text-cream">{faq.question}</p>
                  <p className="mt-1.5 text-sm text-forest-600 dark:text-forest-200">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </FadeIn>

        <FadeIn delayMs={120}>
          <div className="space-y-4 rounded-2xl border border-forest-800/10 bg-white p-6 shadow-card dark:border-white/10 dark:bg-forest-900">
            <h2 className="font-display text-lg text-forest-900 dark:text-cream">
              Contact details
            </h2>
            <div className="flex items-start gap-3 text-sm text-forest-700 dark:text-forest-200">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-600" />
              DIFC, Gate Avenue, Dubai, UAE
            </div>
            <div className="flex items-center gap-3 text-sm text-forest-700 dark:text-forest-200">
              <Phone size={18} className="shrink-0 text-gold-600" />
              +971 00 000 0000
            </div>
            <div className="flex items-center gap-3 text-sm text-forest-700 dark:text-forest-200">
              <Mail size={18} className="shrink-0 text-gold-600" />
              hello@diyar.example
            </div>
            <div className="flex items-center gap-3 text-sm text-forest-700 dark:text-forest-200">
              <Clock size={18} className="shrink-0 text-gold-600" />
              Sun–Thu, 9am–6pm
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
