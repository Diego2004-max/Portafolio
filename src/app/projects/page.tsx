"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <section
      id="projects"
      className="
        min-h-screen
        bg-[var(--bg-page)]
        flex items-center justify-center
        p-8 md:p-10
        text-[var(--text-primary)]
      "
    >
      <div
        className="
          bg-[var(--bg-card)]
          rounded-3xl
          shadow-xl
          border border-[var(--border-color)]
          w-full max-w-6xl
          p-10 md:p-12
          text-center
        "
      >
        <h1 className="text-4xl font-bold mb-3 text-[var(--text-primary)]">
          {t.nav.projects}
        </h1>

        <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
          Algunos proyectos que he desarrollado.
        </p>

        <div className="max-w-5xl mx-auto space-y-10">
          {t.projects.list.map((p: any, i: number) => (
            <div
              key={i}
              className="
                flex flex-col md:flex-row
                items-center justify-between gap-6
                bg-[var(--bg-card)]
                border border-[var(--border-color)]
                rounded-2xl
                shadow-md
                p-6
                hover:-translate-y-1
                hover:shadow-lg
                transition-all
              "
            >
              <div className="w-full md:w-1/2 text-left space-y-1">
                <p className="text-xl font-semibold text-[var(--text-primary)]">
                  {p.title}
                </p>
                <p className="text-[var(--text-secondary)]">{p.desc}</p>
              </div>

              <div className="flex justify-center md:justify-end w-full md:w-1/3">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={120}
                  height={120}
                  className="
                    rounded-lg
                    shadow-md
                    object-contain
                    bg-[var(--bg-card)]
                    p-2
                    border border-[var(--border-color)]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <SideSectionMenu />
    </section>
  );
}
