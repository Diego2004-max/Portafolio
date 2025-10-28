'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = getSiteData(lang);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center"
    >
      <ul
        className="flex flex-wrap justify-center gap-4 md:gap-6 px-6 py-2 
                   bg-blue-100 text-blue-900 font-medium rounded-2xl 
                   shadow-[inset_2px_2px_6px_#c7d2fe,_inset_-2px_-2px_6px_#ffffff]
                   border border-blue-200"
      >
        <li><Link href="#hero" className="hover:text-blue-600 transition">{t.nav.home}</Link></li>
        <li><Link href="#about" className="hover:text-blue-600 transition">{t.nav.about}</Link></li>
        <li><Link href="#academic" className="hover:text-blue-600 transition">{t.nav.academic}</Link></li>
        <li><Link href="#projects" className="hover:text-blue-600 transition">{t.nav.projects}</Link></li>
        <li><Link href="#testimonials" className="hover:text-blue-600 transition">{t.nav.testimonials}</Link></li>
        <li><Link href="#contact" className="hover:text-blue-600 transition">{t.nav.contact}</Link></li>
      </ul>
    </motion.nav>
  );
}
