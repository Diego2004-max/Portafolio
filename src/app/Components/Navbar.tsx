'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteData } from '../../lib/getSiteData';

export default function Navbar() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex flex-wrap justify-between items-center gap-5
        bg-[var(--bg-card)]/95 backdrop-blur-md
        border border-[var(--border-color)]
        rounded-2xl px-6 py-3 shadow-md max-w-5xl w-[90%]
        text-[var(--text-primary)]
      "
    >
      <ul className="flex flex-wrap gap-5 text-sm font-semibold">
        <li><Link href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.home}</Link></li>
        <li><Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.about}</Link></li>
        <li><Link href="#academic" className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.academic}</Link></li>
        <li><Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.projects}</Link></li>
        <li><Link href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.testimonials}</Link></li>
        <li><Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.contact}</Link></li>
      </ul>

      <div className="flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
