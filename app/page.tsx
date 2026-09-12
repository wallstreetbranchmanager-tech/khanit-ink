"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StudioMap from "@/components/StudioMap";
import { works as gallery, LOGO } from "@/lib/work";
import { t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";

export default function Home() {
  const { lang } = useLang();
  return (
    <>
      <Nav />
      <main>
        <section className="relative bg-black px-6 pt-[6.75rem] sm:px-8 sm:pt-20">
          <h1 className="sr-only">KHANIT INK</h1>
          <img
            src={LOGO}
            alt="Khanit Ink koi logo"
            className="mx-auto h-auto w-full max-w-[18rem] object-contain sm:max-w-[24rem] lg:max-w-[28rem]"
          />
        </section>
        <section className="border-y border-white/10 bg-black px-5 py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{t.eyebrow[lang]}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book" className="btn-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em]">{t.book[lang]}</Link>
              <Link href="/#work" className="border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.24em] text-white/80 hover:border-gold hover:text-gold">{t.seeWork[lang]}</Link>
            </div>
          </div>
        </section>
        <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{t.latest[lang]}</p>
              <h2 className="mt-2 font-display text-3xl tracking-[0.12em] sm:text-5xl">{t.theWork[lang]}</h2>
            </div>
            <Link href="/gallery" className="text-xs uppercase tracking-[0.22em] text-gold hover:underline">{t.fullGallery[lang]}</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((p) => (
              <figure key={p.src} className="plate overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.src} alt={p.title} className="h-full w-full object-cover" />
                </div>
                <figcaption className="px-4 py-4">
                  <p className="font-display text-sm tracking-[0.16em]">{p.title}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">{p.tag}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section id="studio" className="border-y border-white/10 bg-black/40">
          <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
            <img src="/api/asset?p=work/studio-session.jpg" alt="" className="h-full max-h-[760px] w-full object-cover" />
            <div className="px-5 py-12 sm:px-6 lg:px-14 lg:py-16">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{t.studioEyebrow[lang]}</p>
              <h2 className="mt-3 font-display text-3xl tracking-[0.1em] sm:text-5xl">{t.studioH[lang]}</h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-white/70 sm:text-xl">{t.studioP[lang]}</p>
            </div>
          </div>
        </section>
        <section id="aftercare" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{t.navAftercare[lang]}</p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.1em] sm:text-4xl">{t.afterH[lang]}</h2>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <img src="/api/asset?p=aftercare.jpg" alt="" className="w-full border border-gold/20 object-cover" />
            <div>
              <ol className="space-y-4 font-body text-lg text-white/70 sm:text-xl">
                <li>{t.a1[lang]}</li>
                <li>{t.a2[lang]}</li>
                <li>{t.a3[lang]}</li>
                <li>{t.a4[lang]}</li>
              </ol>
              <Link href="/aftercare" className="mt-8 inline-block border border-gold/60 px-8 py-3 text-xs uppercase tracking-[0.24em] text-gold hover:bg-gold hover:text-ink">{t.afterFull[lang]}</Link>
            </div>
          </div>
        </section>
        <StudioMap />
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl border border-gold/30 px-5 py-12 text-center sm:px-8 sm:py-16">
            <p className="font-display text-2xl tracking-[0.12em] text-goldsoft sm:text-5xl sm:tracking-[0.16em]">{t.canvas[lang]}</p>
            <Link href="/book" className="btn-gold mt-8 inline-block px-10 py-3 text-xs font-semibold uppercase tracking-[0.24em]">{t.request[lang]}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
