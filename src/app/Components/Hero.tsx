'use client';
import Image from "next/image";
import Navbar from "./Navbar";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import CardsSection from "./CardsSection";

export default function Hero() {
  // ✅ aseguramos compatibilidad entre { lang } y { language }
  const { lang, language } = useLanguage() as any;
  const t = getSiteData(lang || language || "es");

  // ✅ fallback para evitar errores de undefined sin cambiar nada visual
  const hero = t?.hero ?? {
    nameLine1: "",
    nameLine2: "",
    subtitle: "",
    cvLabel: "",
  };

  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center gap-10 animate-fadeIn w-full"
    >
      {/* 🔹 Caja principal más grande */}
      <div className="bg-[var(--bg-card)] shadow-2xl rounded-3xl py-12 px-10 w-full max-w-6xl border border-blue-200 relative">
        
        {/* 🔹 Fila superior: idioma — menú — tema */}
        <div className="flex justify-between items-center mb-6 w-full">
          <div className="flex items-center gap-4">
            <LanguageToggle />
          </div>

          {/* Menú centrado */}
          <Navbar />

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Foto */}
        <motion.div
          className="flex justify-center my-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/me.jpg"
            alt="Foto de perfil"
            width={160}
            height={160}
            className="rounded-full border-4 border-blue-300 shadow-md"
          />
        </motion.div>

        {/* Nombre */}
        <h1 className="text-3xl font-bold text-blue-800 bg-blue-100/70 inline-block px-8 py-3 rounded-lg mb-3 dark:text-blue-200 dark:bg-slate-700/50">
          {hero.nameLine1 || t?.hero?.nameLine1} <br />{" "}
          {hero.nameLine2 || t?.hero?.nameLine2}
        </h1>

        {/* Subtítulo */}
        <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto mb-6 text-sm md:text-base">
          {hero.subtitle || t?.hero?.subtitle}
        </p>

        {/* Redes */}
        <div className="flex justify-center gap-5 mb-8 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
        </div>

        {/* Botón de CV */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-sm font-medium"
        >
          {hero.cvLabel || t?.hero?.cvLabel}
        </motion.button>

        {/* 🔹 Cards (más pequeñas y dentro de la caja principal) */}
        <div className="mt-10 px-4">
          <CardsSection />
        </div>
      </div>
    </section>
  );
}
