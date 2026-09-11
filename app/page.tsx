import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { logo } from "@/lib/logo";

const gallery = [
  { src: "/work/veil-rose-skull.jpg", title: "Veil, Rose & Skull", tag: "Black & grey · forearm" },
  { src: "/work/black-snake.jpg", title: "Scale Snake", tag: "Blackwork · inner arm" },
  { src: "/work/oni-sleeve.jpg", title: "Oni Sleeve (line)", tag: "Japanese · upper arm" },
  { src: "/work/candle.jpg", title: "Melting Candle", tag: "Blackwork · arm" },
  { src: "/work/sun-spiral.jpg", title: "Spiral Sun", tag: "Bold line · elbow" },
  { src: "/work/sakura-leg.jpg", title: "Sakura Current", tag: "Fine line · lower leg" },
  { src: "/work/red-ink-butterflies.jpg", title: "Red Ink Flight", tag: "Red fine-line" },
  { src: "/work/studio-session.jpg", title: "In the chair", tag: "Studio · Udon Thani" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[100svh] grain overflow-hidden bg-black">
          <img
            src={logo}
            alt="KHANIT INK — Udon Thani"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-ink" />
          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-gold">
              Udon Thani · Appointment only · @khanitink
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="bg-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink hover:bg-goldsoft">Book a session</Link>
              <Link href="/#work" className="border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.24em] text-white/80 hover:border-gold hover:text-gold">See the work</Link>
            </div>
          </div>
        </section>
        <div className="gold-line" />
        <section id="work" className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Latest</p>
              <h2 className="mt-2 font-display text-4xl tracking-[0.12em]">The work</h2>
            </div>
            <Link href="/gallery" className="text-xs uppercase tracking-[0.22em] text-gold hover:underline">Full gallery →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((p) => (
              <figure key={p.src} className="group overflow-hidden border border-white/10 bg-black">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.src} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
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
          <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
            <img src="/logo.jpg" alt="KHANIT INK lockup" className="h-full max-h-[720px] w-full object-cover" />
            <div className="px-6 py-16 lg:px-14">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">The studio</p>
              <h2 className="mt-3 font-display text-4xl tracking-[0.1em]">One chair.<br />No noise.</h2>
              <p className="mt-6 font-body text-xl leading-relaxed text-white/70">Private room in Udon Thani. Japanese demons, black snakes, red-ink botanicals.</p>
            </div>
          </div>
        </section>
        <section className="px-5 pb-24 pt-16">
          <div className="mx-auto max-w-6xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent px-8 py-16 text-center">
            <p className="font-display text-3xl tracking-[0.16em] text-goldsoft sm:text-5xl">Skin is the last canvas that does not lie.</p>
            <Link href="/book" className="mt-8 inline-block bg-gold px-10 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink hover:bg-goldsoft">Request a chair</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
