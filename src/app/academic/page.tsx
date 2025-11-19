"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteData } from "@/lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";
import { motion } from "framer-motion";

export default function AcademicPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const estudios = t.academic.studies;

  const lenguajes = [
    { src: "/py.jpg", alt: "Python" },
    { src: "/java.png", alt: "Java" },
    { src: "/html.png", alt: "HTML" },
    { src: "/css.png", alt: "CSS" }
  ];

  return (
    <section
      id="academic"
      className="
        min-h-screen 
        flex items-start justify-center 
        bg-[var(--bg-page)]
        pt-32 px-6 pb-16
        transition-all
        text-[var(--text-primary)]
      "
    >
      {/* CARD PRINCIPAL */}
      <div
        className="
          relative 
          bg-[var(--bg-card)]
          rounded-3xl shadow-xl 
          border border-[var(--border-color)]
          w-full max-w-6xl 
          p-8 md:p-14
        "
      >
        {/* TÍTULO */}
        <h1 className="text-4xl font-bold mb-8 text-[var(--text-primary)]">
          {t.nav.academic}
        </h1>

        {/* LISTA DE ESTUDIOS */}
        <ul
          className="
            text-[var(--text-secondary)] 
            text-lg 
            list-disc list-inside 
            leading-relaxed 
            space-y-2 
            mb-14
          "
        >
          {estudios.map((texto: string, i: number) => (
            <li 
              key={i} 
              className="hover:text-blue-600 transition-colors"
            >
              {texto}
            </li>
          ))}
        </ul>

        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            className="flex w-max gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 22,
            }}
          >
            {[...lenguajes, ...lenguajes].map((l, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.14 }}
                className="
                  flex-shrink-0 
                  bg-[var(--bg-card)] 
                  rounded-2xl 
                  shadow-md 
                  p-6 
                  border border-[var(--border-color)]
                "
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTÓN HOME */}
        <div className="flex justify-center mt-12">
          <Link href="/">
            <button
              className="
                bg-blue-500 hover:bg-blue-600 
                text-white 
                px-8 py-3 
                rounded-md 
                shadow-md 
                transition-all
              "
            >
              Home
            </button>
          </Link>
        </div>
      </div>

      {/* MENÚ LATERAL */}
      <SideSectionMenu current="academic" />
    </section>
  );
}
