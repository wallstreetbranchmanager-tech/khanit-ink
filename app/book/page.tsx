"use client";

import { FormEvent, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StudioMap from "@/components/StudioMap";

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
    const mailto = `mailto:book@khanitink.com?subject=${encodeURIComponent("Khanit Ink booking")}&body=${encodeURIComponent(body)}`;
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
              Private studio at 66 Moo 11, Ban Muang, Ban Dung, Udon Thani 41190.
              Send placement, size, and references.
            </p>
          </div>
          <form onSubmit={onSubmit} className="border border-white/10 bg-black/50 p-6 sm:p-8">
            {sent ? (
              <p className="font-body text-2xl text-goldsoft">Request packed. Send on LINE if mail did not open.</p>
            ) : (
              <div className="space-y-5">
                <Field name="name" label="Name" required />
                <Field name="contact" label="LINE / WhatsApp / phone" required />
                <Field name="placement" label="Placement on the body" />
                <Field name="size" label="Size (approx cm)" />
                <Field name="when" label="Preferred dates" />
                <button type="submit" className="w-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink hover:bg-goldsoft">Send request</button>
              </div>
            )}
          </form>
        </section>
        <StudioMap />
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
