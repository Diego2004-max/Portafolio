'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Accent = "blue" | "purple" | "green" | "orange";

interface CardBaseProps {
  icon: string;
  title: string;
  href: string;
  preview: string;
  accent?: Accent;
}

export default function CardBase({
  icon,
  title,
  href,
  preview,
  accent = "blue",
}: CardBaseProps) {
  const [open, setOpen] = useState(false);

  const borderAccent: Record<Accent, string> = {
    blue: "border-blue-200",
    purple: "border-purple-200",
    green: "border-green-200",
    orange: "border-orange-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-lg text-center cursor-pointer transition-all"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="text-4xl mb-3">{icon}</div>
        <Link
          href={href}
          className="font-semibold text-blue-800 dark:text-blue-300"
        >
          {title}
        </Link>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute top-0 left-0 bg-white dark:bg-slate-900 shadow-2xl p-6 rounded-lg w-80 z-20 border ${borderAccent[accent]}`}
        >
          <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
            {title}
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            {preview}
          </p>
          <Link
            href={href}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm block text-center"
          >
            Ir
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
