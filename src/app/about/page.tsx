"use client";

import { useState } from "react";
import Image from "next/image";
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
      className="
        min-h-screen
        flex items-center justify-center
        p-8
        bg-[var(--bg-page)]
        text-[var(--text-primary)]
        transition-all
      "
    >
      <div
        className="
          bg-[var(--bg-card)]
          rounded-3xl
          shadow-xl
          w-full max-w-7xl
          flex flex-col md:flex-row
          items-center justify-between
          p-10
          border border-[var(--border-color)]
          gap-12
        "
      >
        {/* TEXTO */}
        <div className="max-w-3xl space-y-5 leading-relaxed text-lg">
          <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">
            {t.nav.about}
          </h1>

          <p className="text-[var(--text-secondary)]">{t.about.intro}</p>

          <ul className="space-y-3">
            {actividades.map((item: any) => (
              <li
                key={item.titulo}
                onMouseEnter={() => setHovered(item.titulo)}
                onMouseLeave={() => setHovered(null)}
                className="
                  cursor-pointer p-2 rounded-md
                  hover:bg-[var(--border-color)]/40
                  transition-all
                "
              >
                <strong className="text-[var(--text-primary)]">
                  {item.titulo}:
                </strong>{" "}
                {item.descripcion}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGEN */}
        <div
          className="
            relative
            w-[260px] h-[260px]
            md:w-[300px] md:h-[300px]
            rounded-3xl
            shadow-lg
            overflow-hidden
            border border-[var(--border-color)]
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={imagenActual}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
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
      <SideSectionMenu />
    </section>
  );
}
