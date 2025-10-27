'use client';
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = getSiteData(lang);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[75%] bg-blue-600/90 backdrop-blur-lg text-white rounded-3xl shadow-xl px-6 py-3 flex items-center justify-between animate-fadeIn z-50">
      {/* 🌐 Selector de idioma */}
      <div className="animate-float">
        <LanguageToggle />
      </div>

      {/* 🧭 Navegación */}
      <ul className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
        <li><Link href="/" className="hover:text-blue-200 transition-colors">{t.nav.home}</Link></li>
        <li><Link href="/acerca_de_mi" className="hover:text-blue-200 transition-colors">{t.nav.about}</Link></li>
        <li><Link href="/ex_academica" className="hover:text-blue-200 transition-colors">{t.nav.academic}</Link></li>
        <li><Link href="/projects" className="hover:text-blue-200 transition-colors">{t.nav.projects}</Link></li>
        <li><Link href="/testimonial" className="hover:text-blue-200 transition-colors">{t.nav.testimonials}</Link></li>
        <li><Link href="/contactos" className="hover:text-blue-200 transition-colors">{t.nav.contact}</Link></li>
      </ul>

      {/* ☀️ Modo claro/oscuro */}
      <div className="animate-float">
        <ThemeToggle />
      </div>
    </nav>
  );
}
