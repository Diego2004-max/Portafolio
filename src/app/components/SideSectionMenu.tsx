"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  FolderGit2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

type SectionKey =
  | "home"
  | "about"
  | "academic"
  | "projects"
  | "testimonials"
  | "skills"
  | "contact";

interface SideSectionMenuProps {
  current: SectionKey;
}

export default function SideSectionMenu({ current }: SideSectionMenuProps) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = getSiteData(language);
  const [open, setOpen] = useState(false);

  const sections = [
    { key: "home" as SectionKey, href: "/", icon: Home, label: t.nav.home },
    { key: "about" as SectionKey, href: "/about", icon: User, label: t.nav.about },
    {
      key: "academic" as SectionKey,
      href: "/academic",
      icon: GraduationCap,
      label: t.nav.academic,
    },
    {
      key: "projects" as SectionKey,
      href: "/projects",
      icon: FolderGit2,
      label: t.nav.projects,
    },
    {
      key: "testimonials" as SectionKey,
      href: "/testimonials",
      icon: MessageCircle,
      label: t.nav.testimonials,
    },
    {
      key: "contact" as SectionKey,
      href: "/contact",
      icon: Phone,
      label: t.nav.contact,
    },
  ];

  // Si se entra directo por URL, marcamos activo por pathname
  const activeKey =
    sections.find((s) => s.href === pathname)?.key ?? current;

  const renderItem = (s: (typeof sections)[number]) => {
    const Icon = s.icon;
    const isActive = s.key === activeKey;

    return (
      <Link key={s.key} href={s.href} className="block">
        <button
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all
          ${
            isActive
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--border-color)]/40"
          }`}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-xl border
            ${
              isActive
                ? "border-white/70 bg-white/10"
                : "border-[var(--border-color)] bg-[var(--bg-card)]"
            }`}
          >
            <Icon size={18} />
          </span>
          <span className="font-medium">{s.label}</span>
        </button>
      </Link>
    );
  };

  return (
    <>
      {/* DESKTOP: menú fijo a la derecha */}
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 z-40">
        <div
          className="bg-[var(--bg-card)]
          border border-[var(--border-color)]
          rounded-3xl shadow-xl w-64 py-5 px-4 space-y-2"
        >
          {sections.map(renderItem)}
        </div>
      </div>

      {/* MOBILE: FAB + menú hacia arriba */}
      <div className="lg:hidden fixed right-5 bottom-5 z-40">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-3 bg-[var(--bg-card)]
                         border border-[var(--border-color)]
                         rounded-3xl shadow-xl w-60 py-4 px-4 space-y-2"
            >
              {sections.map(renderItem)}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="h-12 w-12 rounded-full bg-blue-500 text-white shadow-xl
                     flex items-center justify-center"
          aria-label="Abrir menú de secciones"
        >
          <div className="space-y-1.5">
            <span className="block h-[2px] w-5 bg-white rounded-full" />
            <span className="block h-[2px] w-5 bg-white rounded-full" />
            <span className="block h-[2px] w-5 bg-white rounded-full" />
          </div>
        </button>
      </div>
    </>
  );
}
