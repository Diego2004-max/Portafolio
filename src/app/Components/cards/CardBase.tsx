"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="
        w-[200px] h-[180px]
        bg-[var(--bg-card)]
        border border-[var(--border-color)]
        rounded-2xl shadow-[var(--shadow-light)]
        hover:shadow-lg
        flex flex-col justify-center items-center
        text-center p-4
        transition-all duration-300
      "
    >
      {/* Ícono */}
      <div className="text-3xl mb-2 text-[var(--text-primary)]">
        {icon}
      </div>

      {/* Título */}
      <h3 className="font-semibold text-base text-[var(--text-primary)] mb-1">
        {title}
      </h3>

      {/* Texto */}
      <p className="text-[14px] leading-snug text-[var(--text-secondary)] px-2">
        {preview}
      </p>

      {/* Enlace */}
      <Link
        href={href}
        className="
          font-medium text-sm mt-2
          text-blue-600
          dark:text-blue-400
          hover:underline
        "
      >
        Ir →
      </Link>
    </motion.div>
  );
}
