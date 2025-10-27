'use client';
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  icon: string;
  title: string;
  href: string;
  preview: string;
  accent?: 'blue' | 'purple' | 'green' | 'orange';
};

export default function CardBase({ icon, title, href, preview, accent = 'blue' }: Props) {
  const [open, setOpen] = useState(false);

  const colors = {
    blue: "border-blue-300 bg-[var(--blue-soft)] hover:bg-[var(--blue-light)]",
    purple: "border-purple-300 bg-purple-100 hover:bg-purple-200",
    green: "border-green-300 bg-green-100 hover:bg-green-200",
    orange: "border-orange-300 bg-orange-100 hover:bg-orange-200",
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`${colors[accent]} border rounded-xl shadow-lg p-6 text-center cursor-pointer transition-all duration-300`}
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="font-semibold text-[var(--blue-text)]">{title}</h3>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 bg-white border border-[var(--blue-border)] p-6 rounded-2xl w-80 shadow-xl z-20 animate-fadeIn"
            style={{ boxShadow: "var(--card-shadow)" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <h4 className="text-lg font-bold text-[var(--blue-text)] mb-2">{title}</h4>
            <p className="text-sm text-slate-700 mb-4">{preview}</p>
            <Link
              href={href}
              className="block bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 text-sm transition-transform hover:scale-105"
            >
              Ir →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
