'use client';

import Image from "next/image";
import Navbar from "./Navbar";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function Hero() {
  const { lang } = useLanguage();
  const t = getSiteData(lang);

  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center gap-5 animate-fadeIn min-h-screen pt-6"
    >
      {/* 🔹 Botones globales de idioma y tema (arriba del card) */}
      <div className="flex justify-between items-center w-full max-w-4xl px-6 mb-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* 🔹 Card principal con el Navbar dentro */}
      <motion.div
        className="bg-[var(--bg-card)] shadow-xl rounded-3xl py-10 px-8 mt-4 w-full max-w-3xl border border-[var(--border-color)] transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 🔹 Navbar dentro del card */}
        <Navbar />

        {/* 🔹 Foto de perfil */}
        <motion.div
          className="flex justify-center mt-8 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/me.jpg"
            alt="Foto de perfil"
            width={140}
            height={140}
            className="rounded-full border-4 border-blue-300 shadow-md dark:border-blue-500"
          />
        </motion.div>

        {/* 🔹 Nombre y subtítulo */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] bg-blue-100/60 dark:bg-slate-800/60 inline-block px-6 py-2 rounded-lg mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t.hero.nameLine1}
          <br />
          {t.hero.nameLine2}
        </motion.h1>

        <motion.p
          className="text-[var(--text-secondary)] max-w-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* 🔹 Redes sociales */}
        <motion.div
          className="flex justify-center gap-3 mb-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t.socials.map((s: any) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg shadow text-white text-sm font-semibold transition-transform duration-200 hover:scale-105 ${
                s.label === "Instagram"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : s.label === "LinkedIn"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              {s.label}
            </a>
          ))}
        </motion.div>

        {/* 🔹 Botón de CV */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-sm font-medium transition-all"
        >
          {t.hero.cvLabel}
        </motion.button>
      </motion.div>
    </section>
  );
}
