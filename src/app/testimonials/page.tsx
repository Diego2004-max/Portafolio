'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

type Testimonio = { nombre: string; texto: string };

export default function TestimonialsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);
  const testimonios: Testimonio[] =
    t?.testimonials?.list ?? [
      {
        nombre: "Juan Pérez",
        texto: "Trabajar con Diego fue una gran experiencia. Excelente profesional.",
      },
      {
        nombre: "Laura Gómez",
        texto: "Aprendí mucho sobre React y Tailwind. Muy dedicado y detallista.",
      },
      {
        nombre: "Carlos Ruiz",
        texto: "Excelente compañero, siempre dispuesto a ayudar en el equipo.",
      },
    ];

  return (
    <section
        id="testimonials"
         className="min-h-screen flex items-center justify-center bg-[var(--bg-page)] p-10 text-[var(--text-primary)]">
      <section className="bg-[var(--bg-card)] rounded-3xl shadow-xl border border-[var(--border-color)] w-full max-w-6xl p-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-10 text-blue-900">
          {t?.nav?.testimonials ?? "Testimonios"}
        </h1>

        {/* Contenedor de avatares */}
        <div className="flex flex-wrap justify-center gap-14">
          {testimonios.map((test, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              {/* Imagen */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md border-4 border-blue-300 bg-[#f5f8ff] flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float">
                <Image
                  src="/perfil.jpeg"
                  alt={test.nombre}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Tooltip testimonial */}
              <div className="absolute bottom-[115%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 ease-out z-10">
                <div className="bg-white/95 dark:bg-slate-700/95 text-slate-800 dark:text-white rounded-2xl shadow-lg px-5 py-4 w-64 border border-blue-100">
                  <p className="text-sm italic mb-2">“{test.texto}”</p>
                  <p className="text-xs font-semibold">— {test.nombre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-blue-400/40 transition-all">
              Home
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}
