"use client";

import { FormEvent, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BookPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Contact: ${data.get("contact")}`,
      `Placement: ${data.get("placement")}`,
      `Size: ${data.get("size")}`,
      `Style: ${data.get("style")}`,
      `When: ${data.get("when")}`,
      "",
      String(data.get("idea") || ""),
    ].join("\n");
    const mailto = `mailto:book@khanitink.com?subject=${encodeURIComponent(
      "Khanit Ink booking"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Appointments</p>
            <h1 className="mt-2 font-display text-5xl tracking-[0.1em]">Book the chair</h1>
            <p className="mt-5 font-body text-xl leading-relaxed text-white/65">
              Private studio in Udon Thani. Send placement, size, and references.
              You get a quote before anything is drawn on skin. Cash / PromptPay
              on the day. Deposit holds the slot.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-white/50">
              <li>Eat before you sit. Hydrate the day prior.</li>
              <li>Fresh skin only — no sunburn, no drunk walks-ins.</li>
              <li>Large Japanese / sleeve work is multi-session.</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="border border-white/10 bg-black/50 p-6 sm:p-8">
            {sent ? (
              <p className="font-body text-2xl text-goldsoft">
                Request packed. If your mail app did not open, screenshot this form and send it on LINE.
              </p>
            ) : (
              <div className="space-y-5">
                <Field name="name" label="Name" required />
                <Field name="contact" label="LINE / WhatsApp / phone" required />
                <Field name="placement" label="Placement on the body" />
                <Field name="size" label="Size (approx cm)" />
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/45">Style</span>
                  <select name="style" className="w-full border border-white/15 bg-ink px-3 py-3 text-sm outline-none focus:border-gold" defaultValue="black-grey">
                    <option value="black-grey">Black & grey</option>
                    <option value="japanese">Japanese / oni</option>
                    <option value="fineline">Fine line / floral</option>
                    <option value="red">Red ink</option>
                    <option value="custom">Custom / cover-up</option>
                  </select>
                </label>
                <Field name="when" label="Preferred dates" />
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/45">Idea / references</span>
                  <textarea name="idea" rows={5} className="w-full border border-white/15 bg-ink px-3 py-3 text-sm outline-none focus:border-gold" placeholder="What do you want on you and why." />
                </label>
                <button type="submit" className="w-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink hover:bg-goldsoft">
                  Send request
                </button>
              </div>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/45">{label}</span>
      <input name={name} required={required} className="w-full border border-white/15 bg-ink px-3 py-3 text-sm outline-none focus:border-gold" />
    </label>
  );
}
