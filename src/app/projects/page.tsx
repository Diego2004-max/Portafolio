'use client';

import Image from 'next/image';
import Link from 'next/link';

type Testimonio = {
  nombre: string;
  imagen: string;
  texto: string;
};

const testimonios: Testimonio[] = [
  {
    nombre: 'Andrés',
    imagen: '/andres.jpg',
    texto: 'El trabajo en equipo fue excelente y la página quedó muy profesional.',
  },
  {
    nombre: 'Carlos',
    imagen: '/carlos.jpg',
    texto: 'Aprendí mucho sobre React y Tailwind, un proyecto divertido y útil.',
  },
  {
    nombre: 'Julián',
    imagen: '/julian.jpg',
    texto: 'Increíble experiencia, los resultados superaron las expectativas.',
  },
];

export default function Testimonios() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#dfeafc] p-10">
      {/* 🔹 Caja principal */}
      <section className="bg-[#f5f8ff] rounded-3xl shadow-xl border border-blue-200 w-full max-w-6xl p-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-10">Testimonios</h1>

        {/* 🔹 Contenedor de tarjetas */}
        <div className="flex flex-wrap justify-center gap-14">
          {testimonios.map((t, index) => (
            <div
              key={index}
              className="relative group w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-blue-300 animate-float"
            >
              {/* Imagen de perfil */}
              <Image
                src={t.imagen}
                alt={t.nombre}
                fill
                className="object-cover transition-all duration-500 group-hover:opacity-40"
              />

              {/* Texto visible al hacer hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-4 bg-black/60 text-white rounded-full">
                <p className="text-sm italic leading-snug">"{t.texto}"</p>
                <p className="text-xs mt-2 font-semibold">— {t.nombre}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Botón de regreso */}
        <div className="mt-12">
          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-base font-medium shadow-md hover:shadow-blue-400/40 transition-all">
              Home
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Animaciones CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3.8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
