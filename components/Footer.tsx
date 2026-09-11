import Link from "next/link";
import { ADDRESS_EN, ADDRESS_TH } from "@/lib/work";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-[0.3em] text-gold">KHANIT INK</p>
          <p className="mt-3 font-body text-lg text-white/70">{ADDRESS_TH}</p>
          <p className="mt-1 text-sm text-white/45">{ADDRESS_EN}</p>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-white/50">
          <Link href="/gallery" className="hover:text-gold">Gallery</Link>
          <Link href="/aftercare" className="hover:text-gold">Aftercare</Link>
          <Link href="/book" className="hover:text-gold">Book a session</Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-[11px] uppercase tracking-widest text-white/30">
        © {new Date().getFullYear()} Khanit Ink. Ban Muang · Ban Dung.
      </p>
    </footer>
  );
}
