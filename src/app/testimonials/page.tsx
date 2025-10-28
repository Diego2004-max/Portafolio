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
    imagen: '/perfil.jpeg',
    texto: 'El trabajo en equipo fue excelente y la página quedó muy profesional.',
  },
  {
    nombre: 'Carlos',
    imagen: '/perfil.jpeg',
    texto: 'Aprendí mucho sobre React y Tailwind, un proyecto divertido y útil.',
  },
  {
    nombre: 'Julián',
    imagen: '/perfil.jpeg',
    texto: 'Increíble experiencia, los resultados superaron las expectativas.',
  },
];

export default function Testimonios() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#dfeafc] p-10">
      {/* 🔹 Caja principal */}
      <section className="bg-[#f5f8ff] rounded-3xl shadow-xl border border-blue-200 w-full max-w-6xl p-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-12">
          Testimonios
        </h1>

        {/* 🔹 Contenedor de iconos */}
        <div className="flex flex-wrap justify-center gap-20">
          {testimonios.map((t, index) => (
            <div key={index} className="relative flex flex-col items-center group cursor-pointer">
              
              {/* Imagen circular */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-300 transition-transform duration-500 hover:scale-110 animate-float">
                <Image
                  src={t.imagen}
                  alt={t.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </div>

              {/* 🔹 Nube del texto */}
              <div className="absolute bottom-[115%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 ease-out z-10">
                <div className="relative bg-white/90 backdrop-blur-md border border-blue-200 text-blue-900 rounded-2xl shadow-lg px-5 py-4 w-64">
                  <p className="text-sm leading-relaxed italic mb-2 text-center">
                    “{t.texto}”
                  </p>
                  <p className="text-xs font-semibold text-blue-600 text-center">
                    — {t.nombre}
                  </p>
                  {/* Triángulo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/80"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Botón de regreso */}
        <div className="mt-16">
          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-blue-400/40 transition-all">
              Home
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
