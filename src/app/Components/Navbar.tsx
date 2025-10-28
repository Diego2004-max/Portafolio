'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center mt-4"
    >
      <ul className="flex flex-wrap justify-center gap-4 md:gap-6 px-6 py-3 bg-[var(--bg-card)] 
                     rounded-2xl shadow-sm border border-[var(--border-color)] backdrop-blur-sm
                     text-[var(--text-primary)] transition-all duration-300">
        <li><Link href="#">{t.nav.home}</Link></li>
        <li><Link href="#about">{t.nav.about}</Link></li>
        <li><Link href="#academic">{t.nav.academic}</Link></li>
        <li><Link href="#projects">{t.nav.projects}</Link></li>
        <li><Link href="#testimonials">{t.nav.testimonials}</Link></li>
        <li><Link href="#contact">{t.nav.contact}</Link></li>
      </ul>
    </motion.nav>
  );
}
