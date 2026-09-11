import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { plates } from "@/lib/plates";
const gallery = [
  { src: plates.veil_rose_skull, title: "Veil, Rose & Skull", tag: "Black & grey" },
  { src: plates.black_snake, title: "Scale Snake", tag: "Blackwork" },
  { src: plates.oni_sleeve, title: "Oni Sleeve (line)", tag: "Japanese" },
  { src: plates.candle, title: "Melting Candle", tag: "Blackwork" },
  { src: plates.sun_spiral, title: "Spiral Sun", tag: "Bold line" },
  { src: plates.sakura_leg, title: "Sakura Current", tag: "Fine line" },
  { src: plates.red_ink_butterflies, title: "Red Ink Flight", tag: "Red fine-line" },
  { src: plates.studio_session, title: "Session", tag: "Studio" },
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
              <figure key={p.title} className="mb-5 break-inside-avoid border border-white/10 bg-black">
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
