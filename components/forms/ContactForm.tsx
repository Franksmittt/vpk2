"use client";

import { useState } from "react";

const initial = { name: "", email: "", phone: "", topic: "hunt", message: "" };

const VALID_TOPICS = new Set([
  "hunt",
  "lodge",
  "group",
  "family",
  "international",
  "media",
  "other",
]);

export default function ContactForm({
  id = "contact-form",
  defaultTopic = "hunt",
}: {
  id?: string;
  defaultTopic?: string;
}) {
  const topic0 = VALID_TOPICS.has(defaultTopic) ? defaultTopic : "hunt";
  const [form, setForm] = useState({ ...initial, topic: topic0 });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Vaalpenskraal enquiry: ${form.topic}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nTopic: ${form.topic}\n\n${form.message}`,
    );
    window.location.href = `mailto:info@vaalpenskraal.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            Name
          </span>
          <input
            required
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="focus-ring w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-white/25 focus:border-burnished-copper/50 focus:bg-white/[0.06]"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            Email
          </span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="focus-ring w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-white/25 focus:border-burnished-copper/50 focus:bg-white/[0.06]"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            Phone (optional)
          </span>
          <input
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="focus-ring w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-white/25 focus:border-burnished-copper/50 focus:bg-white/[0.06]"
            placeholder="+27 …"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            I am interested in
          </span>
          <select
            value={form.topic}
            onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
            className="focus-ring w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white transition-colors focus:border-burnished-copper/50 focus:bg-white/[0.06]"
          >
            <option value="hunt">Booking a hunt</option>
            <option value="lodge">Lodge &amp; accommodation</option>
            <option value="group">Group or corporate trip</option>
            <option value="family">Family visit (non-hunters / children)</option>
            <option value="international">International travel &amp; trophies</option>
            <option value="media">Media, film, or editorial</option>
            <option value="other">Something else</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="focus-ring w-full resize-y rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm leading-relaxed text-white transition-colors placeholder:text-white/25 focus:border-burnished-copper/50 focus:bg-white/[0.06]"
          placeholder="Dates, species, group size, experience level, any questions…"
        />
      </label>
      <p className="font-sans text-xs leading-relaxed text-white/35">
        Submitting opens your email app with this message addressed to info@vaalpenskraal.com. You can send from there, or copy the text if you prefer WhatsApp or phone.
      </p>
      <button
        type="submit"
        className="focus-ring-invert inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90"
      >
        {submitted ? "Open email again" : "Send enquiry"}
      </button>
    </form>
  );
}
