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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-ink/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:px-5">
        <Link href="/" className="min-w-0 shrink font-display text-[11px] tracking-[0.22em] text-goldsoft sm:text-base sm:tracking-[0.28em]">KHANIT INK</Link>
        <div className="hidden items-center gap-0.5 sm:flex" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <Flag key={l.id} active={lang === l.id} label={l.label} flag={l.flag} onClick={() => setLang(l.id)} />
          ))}
        </div>
        <nav className="hidden items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-white/70 xl:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-gold">{l.label}</Link>
          ))}
          <Link href="/book" className="border border-gold/60 px-3 py-2 text-gold hover:bg-gold hover:text-ink">{t.navBook[lang]}</Link>
        </nav>
        <button type="button" className="inline-flex h-10 min-w-10 items-center justify-center border border-gold/50 text-gold xl:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? "✕" : "☰"}</button>
      </div>
      <div className="flex items-center justify-center gap-1 border-t border-white/5 px-2 py-1 sm:hidden" role="group" aria-label="Language">
        {LANGS.map((l) => (
          <Flag key={l.id} active={lang === l.id} label={l.label} flag={l.flag} onClick={() => setLang(l.id)} />
        ))}
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 xl:hidden">
          <div className="flex flex-col text-sm uppercase tracking-[0.18em] text-white/80">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-3" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/book" className="py-3 text-gold" onClick={() => setOpen(false)}>{t.navBook[lang]}</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Flag({ active, label, flag, onClick }: { active: boolean; label: string; flag: string; onClick: () => void }) {
  return (
    <button type="button" title={label} aria-label={label} aria-pressed={active} onClick={onClick} className={`inline-flex h-10 w-10 items-center justify-center text-xl leading-none ${active ? "ring-1 ring-gold" : "opacity-70"}`}>
      {flag}
    </button>
  );
}
