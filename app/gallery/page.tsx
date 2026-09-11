"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { works as gallery } from "@/lib/work";
import { t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";

export default function GalleryPage() {
  const { lang } = useLang();
  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{t.portfolio[lang]}</p>
          <h1 className="mt-2 font-display text-5xl tracking-[0.12em]">{t.navGallery[lang]}</h1>
          <p className="mt-4 max-w-xl font-body text-xl text-white/60">{t.galleryLead[lang]}</p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((p) => (
              <figure key={p.src} className="plate overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.src} alt={p.title} className="h-full w-full object-cover" />
                </div>
                <figcaption className="px-4 py-4">
                  <p className="font-display text-sm tracking-[0.14em]">{p.title}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">{p.tag}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
