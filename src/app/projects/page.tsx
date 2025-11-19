"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteData } from "@/lib/getSiteData";
import SideSectionMenu from "@/app/components/SideSectionMenu";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]
                 pt-32 pb-20 px-4 sm:px-6 lg:px-10 transition-all flex justify-center"
    >
      <div
        className="max-w-6xl w-full bg-[var(--bg-card)] rounded-3xl shadow-xl
                   border border-[var(--border-color)] p-6 sm:p-10 lg:p-14"
      >
        {/* TÍTULO */}
        <h1 className="text-4xl font-bold mb-4">{t.nav.projects}</h1>
        <p className="text-[var(--text-secondary)] mb-10">
          Algunos proyectos que he desarrollado.
        </p>

        {/* LISTA DE PROYECTOS */}
        <div className="flex flex-col gap-8">
          {t.projects.list.map((project: any, index: number) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between
                         bg-[var(--bg-card)] border border-[var(--border-color)]
                         rounded-2xl shadow-md p-5 sm:p-6 lg:p-8
                         hover:shadow-xl transition-all"
            >

              {/* INFO */}
              <div className="w-full lg:w-2/3 mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-[var(--text-secondary)]">{project.desc}</p>
              </div>

              {/* IMAGEN RESPONSIVA */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[260px]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={230}
                    className="rounded-xl border border-[var(--border-color)]
                               shadow-md object-cover w-full h-auto"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTÓN HOME */}
        <div className="flex justify-center mt-12">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 
                               rounded-xl shadow-md transition">
              Home
            </button>
          </Link>
        </div>

      </div>

      <SideSectionMenu current="projects" />
    </section>
  );
}
