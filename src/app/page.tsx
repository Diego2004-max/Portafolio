'use client';
import { motion } from 'framer-motion';
import Hero from './components/Hero';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-slate-900"
    >
      {/*contenido del Hero*/}
      <Hero />
    </motion.main>
  );
}
