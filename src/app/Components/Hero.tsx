'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import CardsSection from "./CardsSection";

export default function Hero() {
  const { language } = useLanguage();
  const t = getSiteData(language);
  const hero = t.hero;

  return (
    <section
      id="hero"
      className="
        flex flex-col items-center
        min-h-screen
        pt-40 p-8
        bg-transparent
        text-[var(--text-primary)]
        transition-all
      "
    >
      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          text-4xl md:text-5xl font-bold text-center
          text-[var(--text-primary)]
          drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]
        "
      >
        {hero.nameLine1} <br />
        {hero.nameLine2}
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="
          text-[var(--text-secondary)]
          text-center max-w-xl mt-4 mb-8
        "
      >
        {hero.subtitle}
      </motion.p>

      {/* FOTO */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-40 h-40 mb-6"
      >
        <Image
          src="/Me.jpg"
          alt="Foto de perfil"
          fill
          className="
            rounded-full border-4 border-[var(--border-color)]
            shadow-md object-cover
          "
        />
      </motion.div>

      {/* ICONOS */}
      <div className="flex gap-6 text-2xl text-blue-700 dark:text-blue-300 mb-6">
        <a href="https://linkedin.com" target="_blank"><FaLinkedin className="hover:scale-110 transition" /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram className="hover:scale-110 transition" /></a>
        <a href="https://github.com" target="_blank"><FaGithub className="hover:scale-110 transition" /></a>
      </div>

      {/* BOTÓN CV */}
      <Link href="/cv.pdf" target="_blank">
        <button className="
          bg-blue-500 hover:bg-blue-600 text-white
          px-6 py-2 rounded-md shadow-md font-medium
          transition-all mb-12
        ">
          {hero.cvLabel}
        </button>
      </Link>

      {/* CARDS */}
      <CardsSection t={t} />
    </section>
  );
}
