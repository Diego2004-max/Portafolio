'use client';
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function Hero() {
  const { lang } = useLanguage();
  const t = getSiteData(lang);

  return (
    <section className="text-center w-full">
      {/* 🌐 Navbar integrado */}
      <motion.div
        className="w-full bg-blue-600/80 dark:bg-slate-800/70 rounded-2xl shadow-lg 
                   px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center 
                   gap-3 sm:gap-0 backdrop-blur-md animate-fadeIn"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
      </motion.div>

      {/* 👤 Imagen - bajada y centrada */}
      <div className="flex justify-center mt-12 sm:mt-14">
        <motion.div
          className="rounded-full overflow-hidden border-4 border-blue-400 w-36 h-36 sm:w-40 sm:h-40 shadow-xl animate-float-image"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/me.jpg"
            alt="Foto de perfil"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* 🧍 Nombre */}
      <div className="mt-6 bg-blue-100/80 rounded-lg py-2 px-6 sm:px-10 inline-block animate-fadeIn">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
          {t.hero.nameLine1} <br /> {t.hero.nameLine2}
        </h2>
      </div>

      {/* 📝 Descripción */}
      <p className="mt-4 text-slate-700 max-w-xl sm:max-w-2xl mx-auto animate-fadeIn delay-1">
        {t.hero.subtitle}
      </p>

      {/* 🔗 Redes sociales */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-6 animate-fadeIn delay-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {t.socials.map((s: any) => (
          <a
            key={s.label}
            href={s.href}
            className={`px-4 py-2 rounded shadow text-white text-sm font-semibold transition-transform hover:scale-105 ${
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
      </motion.div>

      {/* 📄 Botón CV */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-md hover-lift animate-fadeIn delay-3"
      >
        {t.hero.cvLabel}
      </motion.button>
    </section>
  );
}
