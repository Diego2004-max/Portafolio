"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const estudios = [
  "Los logros académicos y estudios que estoy cursando",
  "Primaria",
  "Secundaria",
  "Curso de lectura rápida (AMI)",
  "Certificado de inglés",
  "Ingeniería de software 5to semestre",
  "Cursando tecnólogo en sistemas",
  "Cursos de backend y frontend con los siguientes lenguajes y etiquetas",
];

const lenguajes = [
  { src: "/py.png", alt: "Python" },
  { src: "/java.png", alt: "Java" },
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" },
];

export default function ExperienciaAcademica() {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-between p-10 transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100"
          : "bg-[#F9FAFB] text-gray-900"
      }`}
    >
      {/* Título y descripción */}
      <div className="max-w-3xl text-center">
        <h1
          className={`text-4xl font-extrabold mb-6 ${
            theme === "dark"
              ? "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
              : "text-gray-800"
          }`}
        >
          Experiencia académica
        </h1>

        <ul className="space-y-2 text-lg">
          {estudios.map((texto, i) => (
            <li key={i}>{texto}</li>
          ))}
        </ul>
      </div>

      {/* Carrusel infinito con rotación */}
      <div className="relative w-full overflow-hidden mt-12">
        <div className="flex w-max animate-marquee gap-12">
          {[...lenguajes, ...lenguajes, ...lenguajes].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/70 rounded-2xl shadow-md p-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={90}
                height={90}
                className="object-contain animate-rotate"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botón para volver */}
      <div className="mt-10">
        <Link href="/" passHref>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-400/40"
                : "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
            }`}
          >
            Ir a la página principal
          </button>
        </Link>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-rotate {
          animation: rotate 6s linear infinite;
        }
      `}</style>
    </main>
  );
}
