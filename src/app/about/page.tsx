'use client';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function AboutPage() {
  const { themeMode } = useTheme();

  return (
      <motion.section
        id="about"
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
          Acerca de mí
        </h1>

        <p className="max-w-2xl text-center text-lg leading-relaxed mb-10">
          Soy <b>Diego Alejandro Mallama Yandún</b>, un desarrollador en formación
          apasionado por la tecnología, el diseño y la innovación.  
          Me encanta aprender y crear experiencias digitales que conecten a las
          personas mediante la creatividad y la funcionalidad.
        </p>

        <p className="max-w-2xl text-center text-base opacity-80">
          Estoy enfocado en seguir creciendo como profesional, buscando oportunidades
          que me permitan combinar el arte del diseño con la precisión de la programación.
        </p>
      </motion.section>
  );
}
