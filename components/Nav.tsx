"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#studio", label: "Studio" },
  { href: "/#aftercare", label: "Aftercare" },
  { href: "/#map", label: "Map" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-lg tracking-[0.28em] text-goldsoft">KHANIT INK</Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-white/70 sm:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold">{l.label}</Link>
          ))}
          <Link href="/book" className="border border-gold/60 px-4 py-2 text-gold hover:bg-gold hover:text-ink">Book</Link>
        </nav>
        <button type="button" className="border border-gold/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold sm:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 sm:hidden">
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.22em] text-white/75">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/book" className="text-gold" onClick={() => setOpen(false)}>Book the chair</Link>
          </div>
        </div>
      )}
    </header>
  );
}
