'use client';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-6xl bg-gray-100 dark:bg-slate-900/40 rounded-2xl shadow-lg overflow-visible relative">
        <Navbar />
        <Hero />
        <CardsSection />
      </div>
    </main>
  );
}
