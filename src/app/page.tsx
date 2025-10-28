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
      className="min-h-screen flex flex-col items-center justify-start py-10 bg-[var(--bg-page)] text-[var(--text-primary)]"
    >
      <div className="w-full max-w-6xl bg-[var(--bg-card)] rounded-3xl shadow-2xl p-6 sm:p-10 border border-[var(--border-color)]">
        <Hero />
        <CardsSection />
      </div>
    </motion.main>
  );
}
