"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";

export default function AcademicPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const estudios: string[] = t.academic.studies;

  const lenguajes = [
    { src: "/py.jpg", alt: "Python" },
    { src: "/java.png", alt: "Java" },
    { src: "/html.png", alt: "HTML" },
    { src: "/css.png", alt: "CSS" },
  ];

  return (
    <section
      id="academic"
      className="
        min-h-screen
        bg-[var(--bg-page)]
        flex items-center justify-center
        p-8 md:p-10
        text-[var(--text-primary)]
      "
    >
      <div
        className="
          bg-[var(--bg-card)]
          rounded-3xl
          shadow-xl
          border border-[var(--border-color)]
          w-full max-w-6xl
          flex flex-col items-center
          text-center
          p-10 md:p-14
          space-y-10
        "
      >
        <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">
          {t.nav.academic}
        </h1>

        <ul
          className="
            text-[var(--text-secondary)]
            text-[17px]
            text-left
            list-disc list-inside
            leading-relaxed
            space-y-2
            max-w-2xl mx-auto
          "
        >
          {estudios.map((texto, i) => (
            <li
              key={i}
              className="hover:text-blue-600 transition-colors cursor-default"
            >
              {texto}
            </li>
          ))}
        </ul>

        {/* CARRUSEL HORIZONTAL DE LENGUAJES */}
        <div className="relative w-full overflow-hidden py-10">
          <div className="flex w-max animate-marquee gap-10 md:gap-16">
            {[...lenguajes, ...lenguajes].map((l, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  bg-[var(--bg-card)]
                  rounded-2xl
                  shadow-md
                  p-5
                  hover:scale-110
                  transition-transform duration-300
                  border border-[var(--border-color)]
                "
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Animación marquee */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </div>

      <SideSectionMenu />
    </section>
  );
}
