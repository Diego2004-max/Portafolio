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
    <section id="hero" className="flex flex-col items-center text-center gap-5 animate-fadeIn">
      
      {/* Barra de idioma y tema fuera del nav */}
      <div className="flex justify-between w-full max-w-4xl px-4 mb-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <Navbar />

      <div className="bg-[var(--bg-card)] shadow-xl rounded-3xl py-10 px-8 mt-10 w-full max-w-3xl border border-blue-100">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/me.jpg"
            alt="Foto"
            width={140}
            height={140}
            className="rounded-full border-4 border-blue-300 shadow-md"
          />
        </motion.div>

        <h1 className="text-2xl font-bold text-blue-800 bg-blue-100/70 inline-block px-6 py-2 rounded-lg mb-2">
          {t.hero.nameLine1} <br /> {t.hero.nameLine2}
        </h1>
        <p className="text-slate-700 max-w-xl mx-auto mb-5">{t.hero.subtitle}</p>

        <div className="flex justify-center gap-3 mb-6">
          {t.socials.map((s: any) => (
            <a
              key={s.label}
              href={s.href}
              className={`px-4 py-2 rounded shadow text-white text-sm font-semibold hover:scale-105 transition-transform ${
                s.label === "Instagram"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : s.label === "LinkedIn"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-900 hover:bg-black"
              }`}
            >
              {s.label}
            </a>
          ))}
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
