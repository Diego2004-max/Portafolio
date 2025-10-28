'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  src: string;
  alt: string;
};

const projects: Project[] = [
  { title: 'Cámara de fotomultas', src: '/SpringBoot.png', alt: 'Spring Boot' },
  { title: 'Agendar libros en la biblioteca con BD', src: '/MongoDB.png', alt: 'MongoDB' },
  { title: 'Cards TAILWIND', src: '/TailwindCss.jpg', alt: 'Tailwind' },
  { title: 'Reproductor de música', src: '/py.jpg', alt: 'Python' },
];

export default function Proyecto() {
  return (
    <main className="min-h-screen bg-[#dfeafc] flex items-center justify-center p-10">
      {/* 🔹 Caja principal */}
      <section className="bg-[#f5f8ff] rounded-3xl shadow-xl border border-blue-200 w-full max-w-6xl p-12 text-black">
        {/* Encabezado */}
        <header className="max-w-6xl mx-auto mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">Proyectos</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estos son algunos de mis proyectos en desarrollo web y programación, donde aplico lo aprendido en clase.
          </p>
        </header>

        {/* Lista de proyectos */}
        <div className="max-w-5xl mx-auto space-y-10">
          {projects.map((p, i) => {
            const arrowDelay = `${i * 0.25}s`;
            const imgDelay = `${i * 0.28}s`;

            return (
              <div key={p.title} className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80 rounded-2xl shadow-md p-6 hover:shadow-blue-200 transition-all">
                {/* Texto a la izquierda */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-xl md:text-2xl font-semibold text-blue-900">{p.title}</p>
                </div>

                {/* Flecha animada */}
                <div className="flex justify-center w-10 text-blue-600 animate-float">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-6 h-6"
                    style={{ animationDelay: arrowDelay }}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                  </svg>
                </div>

                {/* Imagen / logo a la derecha */}
                <div className="flex justify-center md:justify-end w-full md:w-1/3">
                  <div
                    className="animate-float-image hover:scale-110 transition-transform duration-500"
                    style={{ animationDelay: imgDelay }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={110}
                      height={110}
                      style={{ objectFit: 'contain', display: 'block' }}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón de navegación */}
        <div className="mt-12 flex justify-center">
          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-base shadow-md transition-all">
              Home
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Animaciones */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        @keyframes floatImage {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float-image {
          animation: floatImage 3.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
