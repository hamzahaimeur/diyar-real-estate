"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
import type { Agent, Property } from "@/types/property";
import { formatPhone } from "@/lib/format";

export function ContactAgentCard({
  agent,
  property,
}: {
  agent: Agent;
  property: Property;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    `I am interested in ${property.title} (${property.id}). Please contact me with viewing times.`,
  );
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
  };

  const inputClass =
    "h-11 w-full rounded-xl border border-forest-800/20 bg-cream shadow-sm px-3 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream";

  return (
    <aside className="rounded-2xl border border-forest-800/10 bg-white p-6 shadow-card lg:sticky lg:top-24 dark:border-white/10 dark:bg-forest-900">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
        Contact agent
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-500 font-display text-xl text-forest-950"
        >
          {agent.name.charAt(0)}
        </div>
        <div>
          <p className="font-display text-lg text-forest-900 dark:text-cream">{agent.name}</p>
          <p className="text-sm text-forest-600 dark:text-forest-200">{agent.role}</p>
        </div>
      </div>

      <p className="mt-4 rounded-lg border border-gold-500/30 bg-gold-50 px-3 py-2 text-xs leading-5 text-forest-700 dark:border-gold-300/30 dark:bg-forest-800 dark:text-gold-100">
        Dummy number for demonstration purposes only.
      </p>
      <a
        href={`tel:+${agent.phone.replace(/\D/g, "")}`}
        className="mt-4 flex items-center gap-2 text-sm font-medium text-forest-800 transition duration-300 ease-in-out hover:text-gold-600 dark:text-cream dark:hover:text-gold-300"
      >
        <Phone size={15} />
        {formatPhone(agent.phone)}
      </a>
      <a
        href={`mailto:${agent.email}`}
        className="mt-2 flex items-center gap-2 text-sm font-medium text-forest-800 transition duration-300 ease-in-out hover:text-gold-600 dark:text-cream dark:hover:text-gold-300"
      >
        <Mail size={15} />
        {agent.email}
      </a>

      {sent ? (
        <p className="mt-6 rounded-xl bg-forest-50 px-4 py-3 text-sm text-forest-800 dark:bg-forest-800 dark:text-cream">
          Thank you. {agent.name.split(" ")[0]} will reply shortly.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
              Name
            </span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-600 dark:text-gold-300">
              Message
            </span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-forest-800/20 bg-cream shadow-sm px-3 py-2 text-sm text-forest-900 outline-none transition duration-300 ease-in-out focus:border-gold-500 dark:border-white/10 dark:bg-forest-800 dark:text-cream"
            />
          </label>
          <button type="submit" className="gold-btn w-full">
            Send Message
          </button>
        </form>
      )}
    </aside>
  );
}
