'use client';
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = getSiteData(lang);

  return (
    <nav className="bg-blue-100 shadow-md rounded-2xl py-3 px-6 flex justify-center items-center gap-8 animate-fadeIn">
      <ul className="flex flex-wrap justify-center gap-6 text-blue-900 font-semibold text-sm sm:text-base">
        <li><Link href="#hero" className="hover:text-blue-600">{t.nav.home}</Link></li>
        <li><Link href="#about" className="hover:text-blue-600">{t.nav.about}</Link></li>
        <li><Link href="#academic" className="hover:text-blue-600">{t.nav.academic}</Link></li>
        <li><Link href="#projects" className="hover:text-blue-600">{t.nav.projects}</Link></li>
        <li><Link href="#testimonials" className="hover:text-blue-600">{t.nav.testimonials}</Link></li>
        <li><Link href="#contact" className="hover:text-blue-600">{t.nav.contact}</Link></li>
      </ul>
    </nav>
  );
}
