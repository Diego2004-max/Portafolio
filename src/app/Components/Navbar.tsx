'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  const { t } = useLanguage();

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
      {/* Izquierda: brand simple (opcional) */}
      <Link href="/" className="font-semibold hover:opacity-80">
        {t('about') /* usa tu key o reemplaza por tu brand */}
      </Link>

      {/* Centro: ejemplo de items (ajusta a tu menú real) */}
      <ul className="hidden md:flex items-center gap-6 text-sm">
        <li><Link href="/acerca-de-mi" className="hover:underline">Acerca de mí</Link></li>
        <li><Link href="/ex-academica" className="hover:underline">Ex. acadm</Link></li>
        <li><Link href="/proyectos" className="hover:underline">Proyectos</Link></li>
        <li><Link href="/testimonios" className="hover:underline">Testimonios</Link></li>
        <li><Link href="/contactos" className="hover:underline">Contactos</Link></li>
      </ul>

      {/* Derecha: toggles */}
      <div className="flex gap-2">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring"
          title="Cambiar tema"
          aria-label="Cambiar tema"
        >
          {theme === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
        </button>

        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring"
          title="Cambiar idioma"
          aria-label="Cambiar idioma"
        >
          {language === 'es' ? '🇪🇸 Español' : language === 'en' ? '🇺🇸 English' : '🇫🇷 Français'}
        </button>
      </div>
    </nav>
  );
}
