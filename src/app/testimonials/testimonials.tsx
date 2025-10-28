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
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#e7edf7] text-black p-10 rounded-3xl shadow-md">
      <h1 className="text-4xl font-semibold mb-10">Testimonios</h1>

      {/* Contenedor de tarjetas circulares */}
      <div className="flex flex-wrap justify-center gap-16">
        {testimonios.map((t, index) => (
          <div
            key={index}
            className="relative group w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-xl"
          >
            {/* Imagen de perfil */}
            <Image
              src="/person.jpg"
              alt={t.nombre}
              fill
              className="object-cover transition-all duration-500 group-hover:blur-sm"
            />

            {/* Texto que aparece al hacer hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-3 bg-black/60 text-white rounded-full">
              <p className="text-sm italic">"{t.texto}"</p>
              <p className="text-xs mt-2 font-semibold">— {t.nombre}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de regreso */}
      <div className="mt-12">
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-blue-400/40 transition-all">
            Home
          </button>
        </Link>
      </div>
    </section>
  );
}

