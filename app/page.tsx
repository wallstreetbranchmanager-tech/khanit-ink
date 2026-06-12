import Link from 'next/link';
import { Calendar, Users, Image, CreditCard, Package } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <header className="relative h-screen flex items-center justify-center bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl font-bold tracking-tight mb-4">KHANIT INK</h1>
          <p className="text-2xl text-amber-400 mb-8">Luxury Tattoo Studio • Udon Thani</p>
          <Link href="/book" className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-4 rounded-full text-lg transition">
            Book Your Session
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Image className="w-12 h-12 mb-6 text-amber-400" />
            <h3 className="text-2xl font-semibold mb-3">Design Gallery</h3>
            <p className="text-zinc-400">Browse thousands of exclusive designs and artist portfolios.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Users className="w-12 h-12 mb-6 text-amber-400" />
            <h3 className="text-2xl font-semibold mb-3">5 Master Artists</h3>
            <p className="text-zinc-400">Book with Khanit and team. Different specialties & rates.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Package className="w-12 h-12 mb-6 text-amber-400" />
            <h3 className="text-2xl font-semibold mb-3">Premium Supplies</h3>
            <p className="text-zinc-400">Auto-reorder system for top quality inks & needles.</p>
          </div>
        </div>
      </main>
    </div>
  );
}