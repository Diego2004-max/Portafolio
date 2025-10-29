'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

type Activity = { titulo: string; descripcion: string; imagen: string };

export default function AboutPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  // ✅ Manejo seguro de datos opcionales
  const actividades: Activity[] = t.about?.activities ?? [];
  const [hovered, setHovered] = useState<string | null>(null);
  const imagenActual = actividades.find((a) => a.titulo === hovered)?.imagen ?? "/me.jpg";

  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-[var(--bg-page)] text-[var(--text-primary)] transition-all">
      <div className="bg-[var(--bg-card)] rounded-3xl shadow-2xl w-full max-w-7xl flex flex-col md:flex-row items-center justify-between p-10 border border-[var(--border-color)] gap-12">

        {/* ✅ Encadenamiento opcional */}
        <div className="max-w-3xl space-y-5 leading-relaxed text-lg">
          <h1 className="text-3xl font-bold mb-4">{t.nav?.about ?? "Acerca de mí"}</h1>
          <p>{t.about?.intro ?? "Tengo 21 años, mi vida es activa y hago muchas actividades."}</p>

          <ul className="space-y-3">
            {actividades.map((item) => (
              <li
                key={item.titulo}
                onMouseEnter={() => setHovered(item.titulo)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer p-2 rounded-md hover:bg-blue-100/40 dark:hover:bg-slate-700 transition-all"
              >
                <strong className="text-blue-700 dark:text-blue-300">{item.titulo}:</strong>{" "}
                {item.descripcion}
              </li>
            ))}
          </ul>

          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md mt-6 shadow-md transition-all">
              Home
            </button>
          </Link>
        </div>

        <div className="relative w-[280px] h-[280px] rounded-3xl shadow-lg overflow-hidden border border-[var(--border-color)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={imagenActual}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image src={imagenActual} alt="Vista previa" fill className="object-cover rounded-3xl" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
