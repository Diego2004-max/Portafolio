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
    <Link href={href} className="no-underline">
      <motion.div
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
        className="
          w-[200px] h-[180px]
          bg-[var(--bg-card)]
          border border-[var(--border-color)]
          rounded-2xl shadow-[var(--shadow-light)]
          hover:shadow-lg cursor-pointer
          flex flex-col justify-center items-center text-center
          p-4 transition-all duration-300
        "
      >
        {/* Ícono */}
        <div className="text-3xl mb-2" style={{ color: "var(--text-primary)" }}>
          {icon}
        </div>

        {/* Título */}
        <h3
          className="font-semibold text-base mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>

        {/* Texto */}
        <p
          className="text-[14px] leading-snug px-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {preview}
        </p>
      </motion.div>
    </Link>
  );
}
