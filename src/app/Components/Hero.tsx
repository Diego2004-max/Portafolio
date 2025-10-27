'use client'
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { getSiteData } from '@/lib/getSiteData';

export default function Hero() {
  const { language } = useTheme();
  const { hero, socials } = getSiteData(language);

  return (
    <section className="flex flex-col items-center text-center pt-12 pb-10 px-4">
      <Image src="/me.jpg" alt="Foto de perfil" width={128} height={128} className="rounded-full shadow-md" priority />
      <div className="flex flex-col items-center bg-blue-200 dark:bg-blue-300/20 rounded-lg py-1 px-6 mt-3">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-300 leading-tight">
          {hero.nameLine1}<br/>{hero.nameLine2}
        </h1>
      </div>
      <p className="mt-3 max-w-lg text-slate-700 dark:text-slate-300">{hero.subtitle}</p>

      <div className="flex gap-3 mt-6">
        {socials.map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow focus-visible:ring">
            {s.label}
          </a>
        ))}
      </div>

      <a href="/cv.pdf" download className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow focus-visible:ring">
        {hero.cvLabel}
      </a>
    </section>
  );
}
