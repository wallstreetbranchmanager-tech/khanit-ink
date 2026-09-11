"use client";
import Link from "next/link";
import { t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";

export default function HeroCopy() {
  const { lang } = useLang();
  return (
    <>
      <p className="text-[11px] uppercase tracking-[0.45em] text-gold">{t.eyebrow[lang]}</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-[0.12em] text-goldsoft sm:text-7xl">KHANIT<br />INK</h1>
      <p className="mt-6 max-w-lg font-body text-xl leading-relaxed text-white/75 sm:text-2xl">{t.hero[lang]}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/book" className="btn-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em]">{t.book[lang]}</Link>
        <Link href="/#work" className="border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.24em] text-white/80 hover:border-gold hover:text-gold">{t.seeWork[lang]}</Link>
      </div>
    </>
  );
}
