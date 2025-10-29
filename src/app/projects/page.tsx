'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

type Project = { title: string; desc: string; img: string };

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const projects: Project[] = t.projects?.list ?? [];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-page)] p-10 text-[var(--text-primary)]">
      <section className="bg-[var(--bg-card)] rounded-3xl shadow-xl border border-[var(--border-color)] w-full max-w-6xl p-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-10">{t.nav.projects}</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white/80 dark:bg-slate-700/80 rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform">
              <Image src={p.img} alt={p.title} width={400} height={250} className="object-cover w-full h-48" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm opacity-90">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mt-10 rounded-full font-semibold shadow-md transition-all">
            Home
          </button>
        </Link>
      </section>
    </main>
  );
}
