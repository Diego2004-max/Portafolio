'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardBaseProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  preview: string;
}

export default function CardBase({ icon, title, href, preview }: CardBaseProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 16 }}
      className="w-[200px] h-[180px]
                 bg-gradient-to-b from-[#f7f9fc] to-[#e7edf7]
                 dark:from-[#1e2533] dark:to-[#2a3245]
                 border border-slate-200 dark:border-slate-700
                 rounded-2xl shadow-md hover:shadow-blue-300/30
                 flex flex-col justify-center items-center text-center
                 p-4 transition-all duration-300"
    >
      {/* Ícono */}
      <motion.div
        className="text-3xl mb-1 text-blue-700 dark:text-blue-300"
        whileHover={{ rotate: 8 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      {/* Título */}
      <h3 className="font-semibold text-base text-slate-800 dark:text-slate-100 mb-1">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-snug mb-2 px-1">
        {preview}
      </p>

      {/* Enlace */}
      <Link
        href={href}
        className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline transition-all"
      >
        Ir →
      </Link>
    </motion.div>
  );
}
