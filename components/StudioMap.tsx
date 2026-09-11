import { ADDRESS_EN, ADDRESS_TH, MAPS_Q } from "@/lib/work";

export default function StudioMap() {
  const src = `https://maps.google.com/maps?q=${MAPS_Q}&hl=th&z=16&output=embed`;
  const link = `https://www.google.com/maps/search/?api=1&query=${MAPS_Q}`;
  return (
    <section id="map" className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Google Maps</p>
      <h2 className="mt-3 font-display text-4xl tracking-[0.1em] sm:text-5xl">บ้านม่วง บ้านดุง</h2>
      <p className="mt-4 font-body text-xl text-white/70">{ADDRESS_TH}</p>
      <p className="text-sm text-white/45">{ADDRESS_EN}</p>
      <div className="mt-8 overflow-hidden border border-gold/25 bg-black">
        <iframe title="Khanit Ink — 66 Moo 11 Ban Muang Ban Dung" className="h-[22rem] w-full sm:h-[28rem]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen src={src} />
      </div>
      <p className="mt-4">
        <a className="text-sm text-gold hover:underline" href={link} target="_blank" rel="noopener">Open in Google Maps →</a>
      </p>
    </section>
  );
}
