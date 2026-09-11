import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khanit-ink-072926.vercel.app"),
  title: {
    default: "KHANIT INK — Private Tattoo Studio · Ban Dung",
    template: "%s · KHANIT INK",
  },
  description:
    "Private tattoo studio in Ban Muang, Ban Dung, Udon Thani. Black & grey, Japanese, fine-line and red ink. Appointment only.",
  openGraph: {
    title: "KHANIT INK — Ban Dung",
    description: "One chair. Custom ink. Appointment only.",
    type: "website",
    locale: "en_TH",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
