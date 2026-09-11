"use client";

import Link from "next/link";
import { useState } from "react";
import { LANGS, t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const links = [
    { href: "/#work", label: t.navWork[lang] },
    { href: "/gallery", label: t.navGallery[lang] },
    { href: "/#studio", label: t.navStudio[lang] },
    { href: "/#aftercare", label: t.navAftercare[lang] },
    { href: "/#map", label: t.navMap[lang] },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:px-5">
        <Link href="/" className="shrink-0 font-display text-sm tracking-[0.28em] text-goldsoft sm:text-lg">KHANIT INK</Link>
        <div className="flex items-center gap-0.5 sm:gap-1" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button key={l.id} type="button" title={l.label} aria-label={l.label} aria-pressed={lang === l.id} onClick={() => setLang(l.id)} className={`px-1.5 py-1 text-lg leading-none sm:px-2 ${lang === l.id ? "ring-1 ring-gold" : "opacity-70 hover:opacity-100"}`}>
              {l.flag}
            </button>
          ))}
        </div>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] text-white/70 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold">{l.label}</Link>
          ))}
          <Link href="/book" className="border border-gold/60 px-4 py-2 text-gold hover:bg-gold hover:text-ink">{t.navBook[lang]}</Link>
        </nav>
        <button type="button" className="border border-gold/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>{open ? "✕" : "☰"}</button>
      </div>
    </header>
  );
}
