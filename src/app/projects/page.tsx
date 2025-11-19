"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]
                 pt-32 pb-16 px-4"
    >
      <div
        className="max-w-6xl mx-auto
                   bg-[var(--bg-card)]
                   rounded-3xl shadow-xl
                   border border-[var(--border-color)]
                   p-10"
      >
        <h1 className="text-4xl font-bold mb-3">{t.nav.projects}</h1>

        <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
          {language === "es"
            ? "Algunos proyectos que he desarrollado."
            : "Some projects I’ve worked on."}
        </p>

        <div className="space-y-8">
          {t.projects.list.map((p: any, i: number) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center justify-between gap-6
                         bg-[var(--bg-card)] border border-[var(--border-color)]
                         rounded-2xl shadow-md p-6
                         transition-transform hover:-translate-y-1"
            >
              <div className="w-full md:w-2/3 text-left">
                <p className="text-xl font-semibold mb-1 text-[var(--text-primary)]">
                  {p.title}
                </p>
                <p className="text-[var(--text-secondary)]">{p.desc}</p>
              </div>

              <div className="flex justify-center md:justify-end w-full md:w-1/3">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md object-contain
                             bg-[var(--bg-card)] p-2
                             border border-[var(--border-color)]"
                />
              </div>
            </div>
          ))}
        </div>

        <Link href="/" className="inline-block mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md">
            Home
          </button>
        </Link>
      </div>

      <SideSectionMenu current="projects" />
    </section>
  );
}
