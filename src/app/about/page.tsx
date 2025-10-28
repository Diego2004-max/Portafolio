'use client';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function AboutPage() {
  const { themeMode } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen flex flex-col items-center justify-center px-8 py-20 ${
        themeMode === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
          : "bg-[#f8faff] text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Acerca de mí</h1>
      <p className="max-w-2xl text-center leading-relaxed text-lg">
        Soy un desarrollador apasionado por la tecnología, el diseño y la innovación. 
        Me encanta crear experiencias digitales funcionales y atractivas.
      </p>
    </motion.section>
  );
}
