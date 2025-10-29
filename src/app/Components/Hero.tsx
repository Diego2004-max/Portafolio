'use client';
import Image from "next/image";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import CardsSection from "./CardsSection";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Hero() {
  const { language } = useLanguage(); // ✅ idioma global
  const t = getSiteData(language); // ✅ datos desde JSON correcto

  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center gap-6 animate-fadeIn transition-colors duration-500"
    >
      <div
        className="bg-[var(--bg-card)] shadow-xl rounded-3xl py-10 px-8 w-full max-w-3xl
                   border border-blue-100 dark:border-slate-700 transition-all duration-500"
      >
        {/* Barra superior */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Foto de perfil */}
        <motion.div
          className="flex justify-center my-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/me.jpg"
            alt="Foto de perfil"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-300 dark:border-blue-500 shadow-md"
          />
        </motion.div>

        {/* Nombre */}
        <h1
          className="text-3xl md:text-4xl font-bold text-blue-800 bg-blue-100/70 inline-block 
                     px-6 py-2 rounded-lg mb-3 dark:text-blue-200 dark:bg-slate-700/50"
        >
          {t.hero.nameLine1}
          <br />
          {t.hero.nameLine2}
        </h1>

        {/* Subtítulo */}
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-xl mx-auto mb-5">
          {t.hero.subtitle}
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mb-6 text-2xl">
          <a
            href={t.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href={t.socials[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href={t.socials[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
        </div>

        {/* Botón CV */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full 
                     shadow-sm font-semibold transition-all"
        >
          {t.hero.cvLabel}
        </motion.button>

        {/* Sección de tarjetas */}
        <div className="w-full mt-8">
          <CardsSection />
        </div>
      </div>
    </section>
  );
}
