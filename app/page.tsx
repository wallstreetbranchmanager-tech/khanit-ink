import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StudioMap from "@/components/StudioMap";
import { works as gallery, LOGO } from "@/lib/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[100svh] grain overflow-hidden bg-black">
          <img src={LOGO} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-ink" />
          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
            <p className="text-[11px] uppercase tracking-[0.45em] text-gold">Ban Dung · Appointment only</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-[0.12em] text-goldsoft sm:text-7xl">KHANIT<br />INK</h1>
            <p className="mt-6 max-w-lg font-body text-xl leading-relaxed text-white/75 sm:text-2xl">One chair. Custom Japanese, blackwork, and fine-line — drawn for the body in front of you.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/book" className="btn-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em]">Book a session</Link>
              <Link href="/#work" className="border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.24em] text-white/80 hover:border-gold hover:text-gold">See the work</Link>
            </div>
          </div>
        </section>
        <div className="gold-line" />
        <section id="work" className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Latest</p>
              <h2 className="mt-2 font-display text-4xl tracking-[0.12em] sm:text-5xl">The work</h2>
            </div>
            <Link href="/gallery" className="text-xs uppercase tracking-[0.22em] text-gold hover:underline">Full gallery →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((p) => (
              <figure key={p.src} className="plate group overflow-hidden">
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
            <img src="/api/asset?p=work/studio-session.jpg" alt="Khanit tattooing in Ban Dung" className="h-full max-h-[760px] w-full object-cover" />
            <div className="px-6 py-16 lg:px-14">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">The studio</p>
              <h2 className="mt-3 font-display text-4xl tracking-[0.1em] sm:text-5xl">One chair.<br />No noise.</h2>
              <p className="mt-6 font-body text-xl leading-relaxed text-white/70">Private room in Ban Muang, Ban Dung — same road as the stall. Quote before the needle. Cash or PromptPay on the day.</p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">How it works</p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.1em]">Three steps</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Send the idea", d: "Placement, size, references. Quote before the needle." },
              { n: "02", t: "Stencil & sit", d: "Eat first. Session length is locked. Deposit holds the chair." },
              { n: "03", t: "Heal it right", d: "Aftercare is not optional. Ask about the touch-up window." },
            ].map((s) => (
              <div key={s.n} className="border border-white/10 p-7">
                <p className="font-display text-gold">{s.n}</p>
                <h3 className="mt-4 font-display text-xl tracking-[0.12em]">{s.t}</h3>
                <p className="mt-3 font-body text-lg text-white/60">{s.d}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="aftercare" className="mx-auto max-w-6xl px-5 pb-8">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Aftercare</p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.1em]">Keep the ink</h2>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <img src="/api/asset?p=aftercare.jpg" alt="Khanit Ink aftercare guide" className="w-full border border-gold/20 object-cover" />
            <div>
              <ol className="space-y-4 font-body text-xl text-white/70">
                <li>1. Remove the bandage after 2–4 hours.</li>
                <li>2. Wash with warm water and mild soap.</li>
                <li>3. Pat dry. Thin balm 2–3 times a day.</li>
                <li>4. No sun, no swim, no soak, no scratch.</li>
              </ol>
              <Link href="/aftercare" className="mt-8 inline-block border border-gold/60 px-8 py-3 text-xs uppercase tracking-[0.24em] text-gold hover:bg-gold hover:text-ink">Full aftercare guide</Link>
            </div>
          </div>
        </section>
        <StudioMap />
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent px-8 py-16 text-center">
            <p className="font-display text-3xl tracking-[0.16em] text-goldsoft sm:text-5xl">Skin is the last canvas that does not lie.</p>
            <Link href="/book" className="btn-gold mt-8 inline-block px-10 py-3 text-xs font-semibold uppercase tracking-[0.24em]">Request a chair</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
