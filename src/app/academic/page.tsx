"use client";

import Image from "next/image";
import Link from "next/link";

const estudios = [
  "Los logros académicos y estudios que estoy cursando:",
  "Primaria",
  "Secundaria",
  "Certificado de inglés",
  "Certificado de lectura rápida (AMI)",
  "Ingeniería de software (5to semestre)",
  "Cursando tecnólogo en sistemas",
  "Cursos de backend y frontend con los siguientes lenguajes y etiquetas:",
];

const lenguajes = [
  { src: "/py.jpg", alt: "Python" },
  { src: "/java.png", alt: "Java" },
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" },
];

export default function ExperienciaAcademica() {
  return (
    <main className="min-h-screen bg-[#dfeafc] flex items-center justify-center p-10">
      {/* Caja principal */}
      <div className="bg-[#f5f8ff] rounded-3xl shadow-xl w-full max-w-6xl flex flex-col items-center text-center p-14 border border-blue-200 space-y-8">
        {/* Título */}
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Experiencia Académica
        </h1>

        {/* Lista de estudios */}
        <ul className="text-blue-900 text-[19px] text-left list-disc list-inside leading-relaxed space-y-3 max-w-2xl mx-auto">
          {estudios.map((texto, i) => (
            <li key={i} className="hover:text-blue-600 transition-colors">
              {texto}
            </li>
          ))}
        </ul>

        {/* Carrusel animado */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="flex w-max animate-marquee gap-16">
            {[...lenguajes, ...lenguajes].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center bg-white/80 rounded-2xl shadow-md p-6 hover:rotate-y-180 transition-transform duration-700 hover:shadow-lg hover:shadow-blue-300/50"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botón volver */}
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-base shadow-md transition-all">
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

        /* Efecto 3D en hover */
        .hover\\:rotate-y-180:hover {
          transform: rotateY(360deg);
        }
      `}</style>
    </main>
  );
}
