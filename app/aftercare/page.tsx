import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const en = [
  { n: "1", t: "Protection", d: "Remove bandage after 2-4 hours." },
  { n: "2", t: "Cleansing", d: "Wash gently with warm water and mild soap." },
  { n: "3", t: "Drying", d: "Pat dry with a clean paper towel." },
  { n: "4", t: "Hydration", d: "Apply a thin layer of balm 2-3 times daily." },
];

const th = [
  { n: "1", t: "การป้องกัน", d: "ถอดผ้าพันแผลใน 2-4 ชั่วโมง" },
  { n: "2", t: "การทำความสะอาด", d: "ล้างน้ำอุ่นและสบู่อ่อน" },
  { n: "3", t: "การทำให้แห้ง", d: "ซับแห้งด้วยทิชชูสะอาด" },
  { n: "4", t: "การบำรุง", d: "ทาบาล์มบางๆ วันละ 2-3 ครั้ง" },
];

export default function AftercarePage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold font-display text-3xl tracking-[0.08em] text-gold">KI</div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.4em] text-gold">Studio guide</p>
          <h1 className="mt-3 font-display text-5xl tracking-[0.16em] text-goldsoft">KHANIT INK</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.32em] text-white/70">Tattoo aftercare</p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/50" />
        </section>
        <section className="mx-auto grid max-w-5xl gap-10 px-5 pb-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-sm tracking-[0.22em] text-gold">English instructions</h2>
            <ol className="mt-6 space-y-5">
              {en.map((s) => (
                <li key={s.n} className="border-l border-gold/30 pl-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{s.n}. {s.t}</p>
                  <p className="mt-1 font-body text-lg text-white/70">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-sm tracking-[0.22em] text-gold">คำแนะนำภาษาไทย</h2>
            <ol className="mt-6 space-y-5">
              {th.map((s) => (
                <li key={s.n} className="border-l border-gold/30 pl-4">
                  <p className="text-xs tracking-[0.12em] text-gold">{s.n}. {s.t}</p>
                  <p className="mt-1 font-body text-lg text-white/70">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="mx-auto grid max-w-5xl gap-10 border-y border-white/10 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-sm tracking-[0.22em] text-gold">Cautions / ข้อควรระวัง</h2>
            <ul className="mt-6 space-y-3 font-body text-lg text-white/70">
              <li>No swimming — งดว่ายน้ำ</li>
              <li>No sun — งดโดนแดดจัด</li>
              <li>No scratching — ห้ามเกา</li>
              <li>No soaking — ห้ามแช่น้ำ</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-sm tracking-[0.22em] text-gold">When to seek a doctor / เมื่อไหร่ที่ควรพบแพทย์</h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-white/70">Excessive redness, swelling, heat, discharge, foul odor, or fever.</p>
            <p className="mt-3 font-body text-lg leading-relaxed text-white/70">แดงบวมผิดปกติ ร้อน มีหนอง กลิ่นเหม็น หรือมีไข้</p>
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-5 py-16 text-center">
          <p className="font-display text-2xl tracking-[0.18em] text-goldsoft sm:text-3xl">Treat it right. Wear it proud.</p>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-white/55">IG: @khanitink</p>
          <p className="mt-3 font-body text-xl text-white/60">Thank you for trusting Khanit Ink.</p>
          <p className="mt-10 text-[11px] leading-relaxed text-white/35">This guide is for educational purposes only and does not substitute professional medical advice. คำแนะนำนี้เป็นเพียงข้อมูลเบื้องต้น ไม่สามารถทดแทนคำแนะนำทางการแพทย์ได้</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
