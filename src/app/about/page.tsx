"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const actividades = t.about.activities;
  const [hovered, setHovered] = useState<string | null>(null);

  const imagenActual =
    actividades.find((a: any) => a.titulo === hovered)?.imagen ?? "/me.jpg";

  return (
    <section
      id="about"
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]
                 pt-32 pb-16 px-4"
    >
      <div
        className="
          max-w-6xl mx-auto
          grid gap-10
          md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]
          items-center
          bg-[var(--bg-card)]
          rounded-3xl shadow-xl
          border border-[var(--border-color)]
          p-10
        "
      >
        {/* TEXTO */}
        <div className="space-y-5 leading-relaxed text-lg">
          <h1 className="text-3xl font-bold mb-2">{t.nav.about}</h1>

          <p className="text-[var(--text-secondary)]">{t.about.intro}</p>

          <ul className="space-y-3">
            {actividades.map((item: any) => (
              <li
                key={item.titulo}
                onMouseEnter={() => setHovered(item.titulo)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer p-2 rounded-md
                           hover:bg-[var(--border-color)]/40 transition-colors"
              >
                <strong className="text-[var(--text-primary)]">
                  {item.titulo}:
                </strong>{" "}
                <span className="text-[var(--text-secondary)]">
                  {item.descripcion}
                </span>
              </li>
            ))}
          </ul>

          <Link href="/" className="inline-block pt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow-md transition-all">
              Home
            </button>
          </Link>
        </div>

        {/* IMAGEN ANIMADA */}
        <div
          className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
                     mx-auto rounded-3xl shadow-lg overflow-hidden
                     border border-[var(--border-color)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={imagenActual}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={imagenActual}
                alt="Preview"
                fill
                className="object-cover rounded-3xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* MENÚ LATERAL / FAB */}
      <SideSectionMenu current="about" />
    </section>
  );
}
