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
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: 'spring', stiffness: 250, damping: 15 }}
      className="w-52 h-64 bg-gradient-to-b from-[#dfeaff] to-[#f3f7ff] 
                 dark:from-[#1e293b] dark:to-[#334155]
                 border border-blue-200 dark:border-slate-600 rounded-3xl 
                 p-5 shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 
                 flex flex-col justify-between items-center text-center 
                 transition-all duration-300"
    >
      <motion.div
        className="text-4xl mb-2 text-blue-700 dark:text-blue-300"
        whileHover={{ rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      <h3 className="font-bold text-lg text-blue-900 dark:text-blue-200 mb-1">{title}</h3>

      <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug flex-grow px-1">
        {preview}
      </p>

      <Link
        href={href}
        className="text-blue-700 dark:text-blue-400 font-semibold hover:underline mt-1 transition-all"
      >
        Ir →
      </Link>
    </motion.div>
  );
}
