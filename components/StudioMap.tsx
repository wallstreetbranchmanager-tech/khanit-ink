"use client";
import { ADDRESS_EN, ADDRESS_TH, MAPS_Q } from "@/lib/work";
import { t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";

export default function StudioMap() {
  const { lang } = useLang();
  const src = `https://maps.google.com/maps?q=${MAPS_Q}&hl=${lang === "zh" ? "zh-CN" : lang}&z=16&output=embed`;
  const link = `https://www.google.com/maps/search/?api=1&query=${MAPS_Q}`;
  return (
    <section id="map" className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{t.maps[lang]}</p>
      <h2 className="mt-3 font-display text-4xl tracking-[0.1em] sm:text-5xl">บ้านม่วง บ้านดุง</h2>
      <p className="mt-4 font-body text-xl text-white/70">{ADDRESS_TH}</p>
      <p className="text-sm text-white/45">{ADDRESS_EN}</p>
      <div className="mt-8 overflow-hidden border border-gold/25 bg-black">
        <iframe title="Khanit Ink Ban Dung" className="h-[22rem] w-full sm:h-[28rem]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen src={src} />
      </div>
      <p className="mt-4"><a className="text-sm text-gold hover:underline" href={link} target="_blank" rel="noopener">{t.openMaps[lang]}</a></p>
    </section>
  );
}
