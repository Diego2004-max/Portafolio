"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";

export default function TestimonialsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <section
      id="testimonials"
      className="
        min-h-screen
        flex items-center justify-center
        bg-[var(--bg-page)]
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
          flex flex-col items-center
          text-center
        "
      >
        <h1 className="text-4xl font-bold mb-10 text-[var(--text-primary)]">
          {t.nav.testimonials}
        </h1>

        <div className="flex flex-wrap justify-center gap-14">
          {t.testimonials.list.map((test: any, i: number) => (
            <div key={i} className="relative flex flex-col items-center group">
              <div
                className="
                  relative
                  w-40 h-40 md:w-48 md:h-48
                  rounded-full
                  overflow-hidden
                  shadow-md
                  border-4 border-[var(--border-color)]
                  bg-[var(--bg-card)]
                  flex items-center justify-center
                  hover:scale-110
                  transition-transform duration-300
                "
              >
                <Image
                  src="/perfil.jpeg"
                  alt={test.nombre}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Globo con el testimonio */}
              <div
                className="
                  absolute bottom-[115%] left-1/2
                  -translate-x-1/2
                  opacity-0
                  group-hover:opacity-100
                  group-hover:-translate-y-2
                  transition-all duration-500
                  z-10
                "
              >
                <div
                  className="
                    bg-[var(--bg-card)]
                    text-[var(--text-primary)]
                    rounded-2xl
                    shadow-lg
                    px-5 py-4
                    w-64
                    border border-[var(--border-color)]
                  "
                >
                  <p className="text-sm italic mb-2">“{test.texto}”</p>
                  <p className="text-xs font-semibold">— {test.nombre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SideSectionMenu />
    </section>
  );
}
