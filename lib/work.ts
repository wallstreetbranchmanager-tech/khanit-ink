export const ADDRESS_TH = "66 หมู่ 11 ต.บ้านม่วง อ.บ้านดุง จ.อุดรธานี 41190";
export const ADDRESS_EN = "66 Moo 11, Ban Muang, Ban Dung, Udon Thani 41190";
export const MAPS_Q = "66+Moo+11+Ban+Muang+Ban+Dung+Udon+Thani+41190";

const z = (p: string) => `/api/asset?p=${encodeURIComponent(p)}`;

export const works = [
  { src: z("work/veil-rose-skull.jpg"), title: "Veil, Rose & Skull", tag: "Black & grey · forearm" },
  { src: z("work/black-snake.jpg"), title: "Scale Snake", tag: "Blackwork · inner arm" },
  { src: z("work/oni-sleeve.jpg"), title: "Oni Sleeve (line)", tag: "Japanese · upper arm" },
  { src: z("work/candle.jpg"), title: "Melting Candle", tag: "Blackwork · arm" },
  { src: z("work/sakura-leg.jpg"), title: "Sakura Current", tag: "Fine line · lower leg" },
  { src: z("work/red-ink-butterflies.jpg"), title: "Red Ink Flight", tag: "Red fine-line" },
  { src: z("work/studio-session.jpg"), title: "In the chair", tag: "Studio · Ban Dung" },
] as const;

export const LOGO = z("logo.jpg");
export const AFTERCARE = z("aftercare.jpg");
