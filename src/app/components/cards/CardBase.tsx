"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  title: string;
  href: string;
  preview: string;
}

export default function CardBase({ icon, title, href, preview }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="
        w-[190px] h-[180px]
        bg-[var(--bg-card)]
        border border-[var(--border-color)]
        rounded-2xl
        shadow-[var(--shadow-light)]
        hover:shadow-xl
        flex flex-col justify-center items-center text-center
        p-4 transition-all duration-300
      "
    >
      <div className="text-4xl mb-2 text-[var(--text-primary)] dark:text-blue-300">
        {icon}
      </div>

      <h3 className="font-semibold text-base text-[var(--text-primary)] dark:text-white mb-1">
        {title}
      </h3>

      <p className="text-[14px] text-[var(--text-secondary)] dark:text-slate-300 leading-snug mb-2 px-2">
        {preview}
      </p>

      <Link
        href={href}
        className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline"
      >
        Ir →
      </Link>
    </motion.div>
  );
}
