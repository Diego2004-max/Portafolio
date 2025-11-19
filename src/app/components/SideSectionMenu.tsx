"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Phone,
  Menu,
  X,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Inicio", icon: <Home size={18} /> },
  { href: "/about", label: "Acerca de mí", icon: <User size={18} /> },
  { href: "/academic", label: "Formación", icon: <GraduationCap size={18} /> },
  { href: "/projects", label: "Proyectos", icon: <Lightbulb size={18} /> },
  { href: "/testimonials", label: "Testimonios", icon: <MessageCircle size={18} /> },
  { href: "/contact", label: "Contacto", icon: <Phone size={18} /> },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SideSectionMenu() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);

  // animación básica para los ítems
  const itemVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* DESKTOP / TABLET: menú lateral fijo */}
      <motion.aside
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="
          hidden md:flex
          fixed right-6 top-1/2 -translate-y-1/2
          z-40
        "
      >
        <div
          className="
            bg-[var(--bg-card)]
            border border-[var(--border-color)]
            shadow-xl
            rounded-3xl
            w-64
            py-4
            flex flex-col gap-1
          "
        >
          {NAV_ITEMS.map((item, index) => {
            const active = isActive(pathname, item.href);
            return (
              <motion.div
                key={item.href}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 text-sm
                    transition-colors rounded-2xl
                    ${
                      active
                        ? "bg-blue-500 text-white"
                        : "text-[var(--text-secondary)] hover:bg-[var(--border-color)]/50"
                    }
                  `}
                >
                  <span className="flex items-center justify-center rounded-xl bg-[var(--bg-card)]/80 p-2">
                    {item.icon}
                  </span>
                  <span className="font-medium truncate">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.aside>

      {/* MOBILE: FAB + menú flotante */}
      <div className="fixed bottom-6 right-5 z-50 md:hidden">
        {/* Botón flotante */}
        <button
          onClick={() => setOpenMobile((prev) => !prev)}
          className="
            w-12 h-12 rounded-full
            flex items-center justify-center
            bg-blue-500 text-white
            shadow-xl
            border border-[var(--border-color)]
            active:scale-95
            transition-transform
          "
          aria-label="Abrir menú de secciones"
        >
          {openMobile ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Panel flotante de opciones */}
        <AnimatePresence>
          {openMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="
                absolute bottom-16 right-0
                bg-[var(--bg-card)]
                border border-[var(--border-color)]
                shadow-2xl
                rounded-3xl
                w-64
                py-3
              "
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenMobile(false)}
                    className={`
                      flex items-center gap-3 px-4 py-2 text-sm
                      transition-colors
                      ${
                        active
                          ? "bg-blue-500 text-white"
                          : "text-[var(--text-secondary)] hover:bg-[var(--border-color)]/40"
                      }
                    `}
                  >
                    <span className="flex items-center justify-center rounded-lg bg-[var(--bg-card)]/80 p-1.5">
                      {item.icon}
                    </span>
                    <span className="font-medium truncate">{item.label}</span>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
