'use client';
import { motion } from 'framer-motion';
import Hero from './components/Hero';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        min-h-screen w-full
        flex flex-col
        bg-[var(--bg-page)]
        text-[var(--text-primary)]
        transition-colors duration-300
      "
    >
      <Hero />
    </motion.main>
  );
}
