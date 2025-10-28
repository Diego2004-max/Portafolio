'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "../../../context/ThemeContext";

interface CardBaseProps {
  icon: string;
  title: string;
  href: string;
  preview: string;
  accent?: string;
}

export default function CardBase({ icon, title, href, preview, accent }: CardBaseProps) {
  const { themeMode } = useTheme();

  const borderColor =
    accent === "purple"
      ? "border-purple-400"
      : accent === "blue"
      ? "border-blue-400"
      : accent === "yellow"
      ? "border-yellow-400"
      : accent === "pink"
      ? "border-pink-400"
      : "border-orange-400";

  const bg =
    themeMode === "dark"
      ? "bg-slate-800 text-slate-100 hover:bg-slate-700"
      : "bg-white text-slate-800 hover:bg-blue-50";

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`flex flex-col justify-between items-center text-center p-6 h-48 w-full sm:w-60 
                    cursor-pointer shadow-md rounded-2xl border-t-4 ${borderColor} ${bg}
                    transition-all duration-300`}
      >
        <div className="text-4xl">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm opacity-80">{preview}</p>
        <span className="text-blue-600 font-medium mt-1">Ir →</span>
      </motion.div>
    </Link>
  );
}
