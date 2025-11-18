'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const actividades = t.about.activities;
  const [hovered, setHovered] = useState<string | null>(null);
  const imagenActual =
    actividades.find((a) => a.titulo === hovered)?.imagen ?? "/me.jpg";

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-8
                 bg-[var(--bg-page)] text-[var(--text-primary)] transition-all"
    >
      <div className="bg-[var(--bg-card)] rounded-3xl shadow-xl
                      w-full max-w-7xl flex flex-col md:flex-row items-center
                      justify-between p-10 border border-[var(--border-color)] gap-12">

        {/* TEXT */}
        <div className="max-w-3xl space-y-5 leading-relaxed text-lg">
          <h1 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
            {t.nav.about}
          </h1>

          <p className="text-[var(--text-secondary)]">
            {t.about.intro}
          </p>

          <ul className="space-y-3">
            {actividades.map((item) => (
              <li
                key={item.titulo}
                onMouseEnter={() => setHovered(item.titulo)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer p-2 rounded-md
                           hover:bg-[var(--bg-hover)] transition-all"
              >
                <strong className="text-[var(--text-primary)]">
                  {item.titulo}:
                </strong>{" "}
                {item.descripcion}
              </li>
            ))}
          </ul>

          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md mt-6 shadow-md transition-all">
              Home
            </button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="relative w-[280px] h-[280px] rounded-3xl shadow-lg
                        overflow-hidden border border-[var(--border-color)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={imagenActual}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.6 }}
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
    </section>
  );
}
