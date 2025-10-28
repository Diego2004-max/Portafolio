'use client';
import Image from "next/image";
import Navbar from "./Navbar";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Hero() {
  const { lang } = useLanguage();
  const t = getSiteData(lang);

  return (
    <section id="hero" className="flex flex-col items-center text-center gap-5 animate-fadeIn">
      <div className="bg-[var(--bg-card)] shadow-xl rounded-3xl py-10 px-8 w-full max-w-3xl border border-blue-100">
        {/* Barra superior */}
        <div className="flex justify-between mb-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <Navbar />

        {/* Foto */}
        <motion.div
          className="flex justify-center my-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/me.jpg"
            alt="Foto de perfil"
            width={140}
            height={140}
            className="rounded-full border-4 border-blue-300 shadow-md"
          />
        </motion.div>

        <h1 className="text-2xl font-bold text-blue-800 bg-blue-100/70 inline-block px-6 py-2 rounded-lg mb-2 dark:text-blue-200 dark:bg-slate-700/50">
          {t.hero.nameLine1} <br /> {t.hero.nameLine2}
        </h1>

        <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto mb-5">{t.hero.subtitle}</p>

        <div className="flex justify-center gap-4 mb-6 text-xl">
          <a href="https://linkedin.com" target="_blank" className="text-blue-600 hover:scale-110"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:scale-110"><FaInstagram /></a>
          <a href="https://github.com" target="_blank" className="text-gray-900 dark:text-white hover:scale-110"><FaGithub /></a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-sm font-medium"
        >
          {t.hero.cvLabel}
        </motion.button>
      </div>
    </section>
  );
}
