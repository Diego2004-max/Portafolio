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
    <nav className="flex flex-wrap justify-between items-center w-full gap-3 sm:gap-6">
      <LanguageToggle />
      <ul className="flex gap-5 text-white text-sm sm:text-base font-medium">
        <li><Link href="#">{t.nav.home}</Link></li>
        <li><Link href="#">{t.nav.about}</Link></li>
        <li><Link href="#">{t.nav.academic}</Link></li>
        <li><Link href="#">{t.nav.projects}</Link></li>
        <li><Link href="#">{t.nav.testimonials}</Link></li>
        <li><Link href="#">{t.nav.contact}</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
