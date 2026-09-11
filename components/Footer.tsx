import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-[0.3em] text-gold">KHANIT INK</p>
          <p className="mt-2 font-body text-lg text-white/60">Private studio · Udon Thani, Thailand</p>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-white/50">
          <Link href="/gallery" className="hover:text-gold">Gallery</Link>
          <Link href="/book" className="hover:text-gold">Book a session</Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-[11px] uppercase tracking-widest text-white/30">
        © {new Date().getFullYear()} Khanit Ink. Single-needle to sleeves. No walk-in circus.
      </p>
    </footer>
  );
}
