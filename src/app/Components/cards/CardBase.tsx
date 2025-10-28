'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export interface CardBaseProps {
  icon: string;
  title: string;
  href: string;
  preview: string;
  accent?: string;
}

export default function CardBase({
  icon,
  title,
  href,
  preview,
  accent = "blue",
}: CardBaseProps) {
  const accentColors: Record<string, string> = {
    blue: "border-blue-400 bg-blue-50 dark:bg-slate-800",
    purple: "border-purple-400 bg-purple-50 dark:bg-slate-800",
    yellow: "border-yellow-400 bg-yellow-50 dark:bg-slate-800",
    pink: "border-pink-400 bg-pink-50 dark:bg-slate-800",
    orange: "border-orange-400 bg-orange-50 dark:bg-slate-800",
    green: "border-green-400 bg-green-50 dark:bg-slate-800",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className={`flex flex-col justify-between items-center text-center p-6 w-[90%] sm:w-60 md:w-64 h-56
                  rounded-2xl shadow-md border-t-4 cursor-pointer transition-all duration-300
                  hover:shadow-xl ${accentColors[accent] || accentColors.blue}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-4xl mb-2"
      >
        {icon}
      </motion.div>

      <h3 className="font-semibold text-lg text-[var(--text-primary)]">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-snug px-1">{preview}</p>

      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
        <Link
          href={href}
          className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          Ir →
        </Link>
      </motion.div>
    </motion.div>
  );
}
