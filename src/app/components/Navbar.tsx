"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteData } from "@/lib/getSiteData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-3 left-1/2 -translate-x-1/2 z-50
        bg-[var(--bg-card)]/90 backdrop-blur-xl
        border border-[var(--border-color)]
        rounded-2xl shadow-lg
        w-[94%] max-w-5xl 
        px-4 py-3
        flex items-center justify-between
      "
    >
      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-5 text-sm font-semibold">
        <li><Link href="/">{t.nav.home}</Link></li>
        <li><Link href="/about">{t.nav.about}</Link></li>
        <li><Link href="/academic">{t.nav.academic}</Link></li>
        <li><Link href="/projects">{t.nav.projects}</Link></li>
        <li><Link href="/testimonials">{t.nav.testimonials}</Link></li>
        <li><Link href="/skills">{t.nav.skills}</Link></li>
        <li><Link href="/contact">{t.nav.contact}</Link></li>
      </ul>

      <div className="hidden md:flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden p-2 rounded-lg border border-[var(--border-color)]"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-16 left-0 w-full
              bg-[var(--bg-card)] rounded-2xl shadow-xl
              border border-[var(--border-color)]
              md:hidden p-5 flex flex-col gap-4
            "
          >
            <Link href="/" onClick={() => setOpen(false)}>{t.nav.home}</Link>
            <Link href="/about" onClick={() => setOpen(false)}>{t.nav.about}</Link>
            <Link href="/academic" onClick={() => setOpen(false)}>{t.nav.academic}</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>{t.nav.projects}</Link>
            <Link href="/testimonials" onClick={() => setOpen(false)}>{t.nav.testimonials}</Link>
            <Link href="/skills" onClick={() => setOpen(false)}>{t.nav.skills}</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>{t.nav.contact}</Link>

            <div className="flex gap-3 mt-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
