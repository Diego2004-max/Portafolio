'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

type Project = { title: string; img: string; alt: string; desc: string };

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const projects: Project[] = [
    {
      title: "Cámara de fotomultas",
      img: "/SpringBoot.png",
      alt: "Spring Boot",
      desc: "Sistema que detecta infracciones usando cámaras conectadas con base de datos.",
    },
    {
      title: "Agendar libros en la biblioteca con BD",
      img: "/MongoDB.png",
      alt: "MongoDB",
      desc: "CRUD completo para gestionar reservas usando MongoDB.",
    },
    {
      title: "Cards TAILWIND",
      img: "/TailwindCss.jpg",
      alt: "Tailwind",
      desc: "Diseño moderno y responsive con animaciones suaves.",
    },
    {
      title: "Reproductor de música",
      img: "/py.jpg",
      alt: "Python",
      desc: "Aplicación desarrollada en Python para reproducir música local.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-page)] flex items-center justify-center p-10 text-[var(--text-primary)]">
      <section className="bg-[var(--bg-card)] rounded-3xl shadow-xl border border-[var(--border-color)] w-full max-w-6xl p-12 text-center">
        {/* Encabezado */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">
            {t?.nav?.projects ?? "Proyectos"}
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Estos son algunos de mis proyectos en desarrollo web y programación,
            donde aplico lo aprendido en clase.
          </p>
        </header>

        {/* Lista de proyectos */}
        <div className="max-w-5xl mx-auto space-y-10">
          {projects.map((p, i) => {
            const arrowDelay = `${i * 0.25}s`;
            const imgDelay = `${i * 0.28}s`;

            return (
              <div
                key={p.title}
                className={`flex flex-col md:flex-row items-center justify-between gap-6 
                bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-md border border-blue-200 p-6 
                hover:shadow-blue-300/60 hover:-translate-y-1 transition-all duration-500`}
              >
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-xl md:text-2xl font-semibold text-blue-900 mb-1">
                    {p.title}
                  </p>
                  <p className="text-sm text-slate-700">{p.desc}</p>
                </div>

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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                </div>

                <div className="flex justify-center md:justify-end w-full md:w-1/3">
                  <div
                    className="animate-float-image hover:scale-110 transition-transform duration-500"
                    style={{ animationDelay: imgDelay }}
                  >
                    <Image
                      src={p.img}
                      alt={p.alt}
                      width={110}
                      height={110}
                      className="rounded-lg shadow-md object-contain bg-white/80 p-2 border border-blue-100"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón */}
        <div className="mt-12 flex justify-center">
          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-base shadow-md transition-all">
              Home
            </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        @keyframes floatImage {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-image {
          animation: floatImage 3.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
