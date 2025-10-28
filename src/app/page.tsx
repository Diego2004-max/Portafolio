'use client';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-start py-16 bg-blue-100 text-slate-900"
    >
      {/* ✅ Solo UNA caja principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/90 rounded-3xl shadow-2xl p-10 md:p-12 backdrop-blur-md flex flex-col items-center gap-10"
      >
        {/* Hero principal */}
        <Hero />

        {/* ✅ Sección de las 5 mini-cards justo debajo del CV */}
        <CardsSection />
      </motion.div>
    </motion.main>
  );
}
