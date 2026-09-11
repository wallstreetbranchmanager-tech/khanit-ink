import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-lg tracking-[0.28em] text-goldsoft">
          KHANIT INK
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-white/70 sm:flex">
          <Link href="/#work" className="hover:text-gold">Work</Link>
          <Link href="/gallery" className="hover:text-gold">Gallery</Link>
          <Link href="/#studio" className="hover:text-gold">Studio</Link>
          <Link href="/book" className="border border-gold/60 px-4 py-2 text-gold hover:bg-gold hover:text-ink">Book</Link>
        </nav>
        <Link href="/book" className="border border-gold/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold sm:hidden">Book</Link>
      </div>
    </header>
  );
}
