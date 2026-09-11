import Link from "next/link";
import { ADDRESS_EN, ADDRESS_TH, MAPS_Q } from "@/lib/work";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-[0.3em] text-gold">KHANIT INK</p>
          <p className="mt-4 font-body text-lg leading-relaxed text-white/70">{ADDRESS_TH}</p>
          <p className="mt-1 text-sm text-white/40">{ADDRESS_EN}</p>
        </div>
        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
          <Link href="/gallery" className="hover:text-gold">Gallery</Link>
          <Link href="/aftercare" className="hover:text-gold">Aftercare</Link>
          <Link href="/book" className="hover:text-gold">Book a session</Link>
          <a href={`https://www.google.com/maps/search/?api=1&query=${MAPS_Q}`} target="_blank" rel="noopener" className="hover:text-gold">Google Maps</a>
        </div>
        <div className="text-sm text-white/45">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Studio</p>
          <p className="mt-3">Appointment only. No walk-in circus.</p>
          <p className="mt-2">IG @khanitink</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-[11px] uppercase tracking-widest text-white/28">
        © {new Date().getFullYear()} Khanit Ink · Ban Muang · Ban Dung
      </p>
    </footer>
  );
}
