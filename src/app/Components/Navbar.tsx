'use client';
import Link from "next/link";
import { motion } from "framer-motion";
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
      className="flex justify-center mb-4"
    >
      <ul
        className="flex flex-wrap justify-center gap-3 md:gap-6 px-5 py-2 
                   bg-blue-100/70 dark:bg-slate-800/50 rounded-2xl 
                   border border-blue-200 dark:border-slate-600 shadow-inner"
      >
        <li>
          <Link href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {t.nav.home}
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {t.nav.about}
          </Link>
        </li>
        <li>
          <Link href="#academic" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {t.nav.academic}
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {t.nav.projects}
          </Link>
        </li>
        <li>
          <Link href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {t.nav.testimonials}
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {t.nav.contact}
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
