'use client';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function AcademicPage() {
  const { themeMode } = useTheme();

  const estudios = [
    "Los logros académicos y estudios que estoy cursando",
    "📘 Secundaria",
    "📗 Primer año de pregrado (Ingeniería de sistemas)",
    "📙 Curso de lectura rápida (AMI)",
    "📕 Certificado de inglés (B1)",
    "📓 Cursos de backend y frontend con diferentes lenguajes y frameworks"
  ];

  return (
    <motion.section
      id="academic"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`min-h-screen flex flex-col items-center justify-center px-8 py-20 ${
        themeMode === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">
        Experiencia Académica
      </h1>

      <ul className="max-w-2xl text-lg leading-relaxed list-disc list-inside space-y-2">
        {estudios.map((item, i) => (
          <li key={i} className="opacity-90">
            {item}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
