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
      className="
        w-[200px] h-[180px]
        bg-[var(--bg-card)]
        border border-[var(--border-color)]
        rounded-2xl
        shadow-md hover:shadow-lg
        flex flex-col justify-center items-center text-center
        p-4 transition-all duration-300
      "
    >
      <motion.div
        className="text-3xl mb-1 text-[var(--text-primary)] dark:text-blue-300"
        whileHover={{ rotate: 8 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      <h3 className="font-semibold text-base text-[var(--text-primary)] dark:text-slate-100 mb-1">
        {title}
      </h3>

      <p className="text-[13px] text-[var(--text-secondary)] dark:text-slate-300 leading-snug mb-2 px-1">
        {preview}
      </p>

      <Link
        href={href}
        className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline transition-all"
      >
        Ir →
      </Link>
    </motion.div>
  );
}
