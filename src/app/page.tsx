'use client';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-start py-10 bg-gradient-to-b from-blue-100 to-blue-100 text-slate-900"
    >
      <div className="w-full max-w-6xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-700">
        <Hero />
        <CardsSection />
      </div>
    </motion.main>
  );
}
