'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function Navbar() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        absolute
        top-4                /* NAV DENTRO DEL HERO */
        left-1/2 -translate-x-1/2
        z-50
        flex items-center justify-between gap-5
        bg-[var(--bg-card)]/90 backdrop-blur-xl
        border border-[var(--border-color)]
        rounded-2xl
        px-6 py-3
        shadow-md
        max-w-5xl w-[90%]
        text-[var(--text-primary)]
      "
    >
      <ul className="flex gap-5 text-sm font-semibold">
        <li><Link href="#hero">{t.nav.home}</Link></li>
        <li><Link href="#about">{t.nav.about}</Link></li>
        <li><Link href="#academic">{t.nav.academic}</Link></li>
        <li><Link href="#projects">{t.nav.projects}</Link></li>
        <li><Link href="#testimonials">{t.nav.testimonials}</Link></li>
        <li><Link href="#contact">{t.nav.contact}</Link></li>
      </ul>

      <div className="flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
