'use client';
import CardBase from "./CardBase";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // ✅ import para el botón de navegación

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
    <section className="min-h-screen bg-[#e7edf7] p-10 rounded-3xl shadow-md text-black">
      {/* Encabezado */}
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-6xl leading-tight font-bold mb-2">Proyectos</h1>
        <p className="text-base text-gray-700 max-w-2xl">
          Estos son algunos de mis proyectos en desarrollo web y programación, donde aplico lo aprendido en clase.
        </p>
      </header>

      {/* Lista de proyectos */}
      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((p, i) => {
          const arrowDelay = `${i * 0.25}s`;
          const imgDelay = `${i * 0.28}s`;

          return (
            <div key={p.title} className="flex items-center w-full">
              {/* Texto a la izquierda */}
              <div className="w-1/2 pl-6">
                <p className="text-xl md:text-2xl">{p.title}</p>
              </div>

              {/* Flecha animada en el centro */}
              <div className="w-14 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-6 h-6 text-black animate-float"
                  style={{ animationDelay: arrowDelay }}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                </svg>
              </div>

              {/* Imagen / logo a la derecha */}
              <div className="w-1/3 flex justify-end pr-6">
                <div
                  className="logo-box animate-float-image animate-fadeIn hover-glow hover-lift"
                  style={{ animationDelay: imgDelay }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={110}
                    height={110}
                    style={{ objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón de navegación */}
      <div className="mt-14 flex justify-center">
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-blue-400/40 transition-all">
            Ir a la página principal
          </button>
        </Link>
      </div>
    </section>
  );
}

