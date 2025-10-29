'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function AcademicPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const estudios: string[] = t.academic?.studies ?? [];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-page)] p-10 text-[var(--text-primary)]">
      <div className="bg-[var(--bg-card)] rounded-3xl shadow-xl w-full max-w-5xl text-center p-10 border border-[var(--border-color)] space-y-8">
        <h1 className="text-4xl font-bold">{t.nav.academic}</h1>

        <ul className="text-left list-disc list-inside text-lg leading-relaxed max-w-2xl mx-auto space-y-3">
          {estudios.map((texto, i) => (
            <li key={i}>{texto}</li>
          ))}
        </ul>

        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-base shadow-md transition-all">
            Home
          </button>
        </Link>
      </div>
    </main>
  );
}
