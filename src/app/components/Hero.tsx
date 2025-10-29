'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteData } from '../../lib/getSiteData';
import CardsSection from './CardsSection';

export default function Hero() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const hero = t.hero ?? {
    nameLine1: '',
    nameLine2: '',
    subtitle: '',
    cvLabel: '',
  };

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen p-8 
                 bg-[var(--bg-page)] text-[var(--text-primary)] transition-all"
    >
      {/* 🔹 Nombre */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-blue-300 text-center"
      >
        {hero.nameLine1} <br />
        {hero.nameLine2}
      </motion.h1>

      {/* 🔹 Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-slate-700 dark:text-slate-300 text-center max-w-xl mt-4 mb-8"
      >
        {hero.subtitle}
      </motion.p>

      {/* 🔹 Imagen */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-40 h-40 mb-6"
      >
        <Image
          src="/me.jpg"
          alt="Foto de perfil"
          fill
          className="rounded-full border-4 border-blue-300 shadow-md object-cover"
        />
      </motion.div>

      {/* 🔹 Redes sociales */}
      <div className="flex gap-6 text-2xl text-blue-700 dark:text-blue-300 mb-6">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:scale-110 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:scale-110 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:scale-110 transition" />
        </a>
      </div>

      {/* 🔹 Botón de CV */}
      <Link href="/cv.pdf" target="_blank">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md font-medium transition-all mb-12">
          {hero.cvLabel}
        </button>
      </Link>

      {/* 🔹 Cards traducibles */}
      <CardsSection t={t} />
    </section>
  );
}
