"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";

export default function TestimonialsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <section
      id="testimonials"
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]
                 pt-32 pb-16 px-4"
    >
      <div
        className="max-w-6xl mx-auto
                   bg-[var(--bg-card)]
                   rounded-3xl shadow-xl
                   border border-[var(--border-color)]
                   p-10 flex flex-col items-center text-center"
      >
        <h1 className="text-4xl font-bold mb-10">{t.nav.testimonials}</h1>

        <div className="flex flex-wrap justify-center gap-12">
          {t.testimonials.list.map((test: any, i: number) => (
            <div key={i} className="relative flex flex-col items-center group">
              <div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden
                           shadow-md border-4 border-[var(--border-color)]
                           bg-[var(--bg-card)] flex items-center justify-center
                           transition-transform duration-300 group-hover:scale-110"
              >
                <Image
                  src="/Person1.jpg"
                  alt={test.nombre}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <div
                className="absolute bottom-[115%] left-1/2 -translate-x-1/2 opacity-0
                           group-hover:opacity-100 group-hover:-translate-y-2
                           transition-all duration-500 z-10"
              >
                <div
                  className="bg-[var(--bg-card)] text-[var(--text-primary)]
                             rounded-2xl shadow-lg px-5 py-4 w-64
                             border border-[var(--border-color)]"
                >
                  <p className="text-sm italic mb-2">“{test.texto}”</p>
                  <p className="text-xs font-semibold">— {test.nombre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/" className="mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md">
            Home
          </button>
        </Link>
      </div>

      <SideSectionMenu current="testimonials" />
    </section>
  );
}
