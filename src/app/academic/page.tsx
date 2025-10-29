'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function AcademicPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  // ✅ Datos de texto y fallback si no vienen desde getSiteData
  const estudios: string[] =
    t?.academic?.studies ?? [
      "Primaria",
      "Secundaria",
      "Certificado de inglés",
      "Certificado de lectura rápida (AMI)",
      "Ingeniería de software (5to semestre)",
      "Cursando tecnólogo en sistemas",
      "Cursos de backend y frontend",
    ];

  // ✅ Logos de lenguajes
  const lenguajes = [
    { src: "/py.jpg", alt: "Python" },
    { src: "/java.png", alt: "Java" },
    { src: "/html.png", alt: "HTML" },
    { src: "/css.png", alt: "CSS" },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-page)] flex items-center justify-center p-10">
      {/* Caja principal */}
      <div className="bg-[var(--bg-card)] rounded-3xl shadow-xl w-full max-w-6xl flex flex-col items-center text-center p-14 border border-[var(--border-color)] space-y-10">
        {/* Título */}
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          {t?.nav?.academic ?? "Formación"}
        </h1>

        {/* Lista de estudios */}
        <ul className="text-blue-900 text-[18px] text-left list-disc list-inside leading-relaxed space-y-2 max-w-2xl mx-auto">
          {estudios.map((texto, i) => (
            <li key={i} className="hover:text-blue-600 transition-colors">
              {texto}
            </li>
          ))}
        </ul>

        {/* Carrusel animado de logos */}
        <div className="relative w-full overflow-hidden py-10">
          <div className="flex w-max animate-marquee gap-16">
            {[...lenguajes, ...lenguajes].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center bg-white/80 rounded-2xl shadow-md p-6 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botón Home */}
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm shadow-md transition-all">
            Home
          </button>
        </Link>
      </div>

      {/* Animaciones */}
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
    </main>
  );
}
