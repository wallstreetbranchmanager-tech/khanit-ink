import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const gallery = [
  { src: "/work/veil-rose-skull.jpg", title: "Veil, Rose & Skull", tag: "Black & grey" },
  { src: "/work/black-snake.jpg", title: "Scale Snake", tag: "Blackwork" },
  { src: "/work/oni-sleeve.jpg", title: "Oni Sleeve (line)", tag: "Japanese" },
  { src: "/work/candle.jpg", title: "Melting Candle", tag: "Blackwork" },
  { src: "/work/sun-spiral.jpg", title: "Spiral Sun", tag: "Bold line" },
  { src: "/work/sakura-leg.jpg", title: "Sakura Current", tag: "Fine line" },
  { src: "/work/red-ink-butterflies.jpg", title: "Red Ink Flight", tag: "Red fine-line" },
  { src: "/work/studio-session.jpg", title: "Session", tag: "Studio" },
];

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Portfolio</p>
          <h1 className="mt-2 font-display text-5xl tracking-[0.12em]">Gallery</h1>
          <p className="mt-4 max-w-xl font-body text-xl text-white/60">
            Fresh work from the chair. Line passes and finished pieces. More drops as they heal.
          </p>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map((p) => (
              <figure key={p.src} className="mb-5 break-inside-avoid border border-white/10 bg-black">
                <img src={p.src} alt={p.title} className="w-full object-cover" />
                <figcaption className="px-4 py-3">
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
