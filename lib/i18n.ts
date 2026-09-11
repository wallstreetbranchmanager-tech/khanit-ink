export const LANGS = [
  { id: "th", flag: "🇹🇭", label: "ไทย" },
  { id: "en", flag: "🇬🇧", label: "English" },
  { id: "fr", flag: "🇫🇷", label: "Français" },
  { id: "de", flag: "🇩🇪", label: "Deutsch" },
  { id: "zh", flag: "🇨🇳", label: "中文" },
] as const;

export type Lang = (typeof LANGS)[number]["id"];

export const t = {
  navWork: { th: "ผลงาน", en: "Work", fr: "Œuvres", de: "Arbeiten", zh: "作品" },
  navGallery: { th: "แกลเลอรี", en: "Gallery", fr: "Galerie", de: "Galerie", zh: "图库" },
  navStudio: { th: "สตูดิโอ", en: "Studio", fr: "Studio", de: "Studio", zh: "工作室" },
  navAftercare: { th: "ดูแลแผล", en: "Aftercare", fr: "Soins", de: "Nachsorge", zh: "护理" },
  navMap: { th: "แผนที่", en: "Map", fr: "Carte", de: "Karte", zh: "地图" },
  navBook: { th: "จองคิว", en: "Book", fr: "Réserver", de: "Buchen", zh: "预约" },
  eyebrow: {
    th: "บ้านดุง · นัดหมายเท่านั้น",
    en: "Ban Dung · Appointment only",
    fr: "Ban Dung · Sur rendez-vous",
    de: "Ban Dung · Nur mit Termin",
    zh: "班敦 · 仅限预约",
  },
  hero: {
    th: "เก้าอี้เดียว งานญี่ปุ่น แบล็กเวิร์ก และเส้นบาง",
    en: "One chair. Custom Japanese, blackwork, and fine-line — drawn for the body in front of you.",
    fr: "Une chaise. Japonais, blackwork et trait fin — dessinés pour le corps devant vous.",
    de: "Ein Stuhl. Japanisch, Blackwork und Fine-Line — für den Körper vor dir.",
    zh: "一把椅子。日式、黑灰与细线 — 为眼前这具身体而画。",
  },
  book: { th: "จองคิว", en: "Book a session", fr: "Réserver", de: "Termin buchen", zh: "预约" },
  seeWork: { th: "ดูผลงาน", en: "See the work", fr: "Voir les œuvres", de: "Arbeiten ansehen", zh: "看作品" },
} as const;
