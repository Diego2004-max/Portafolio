'use client';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function TestimonialsPage() {
  const { themeMode } = useTheme();

  const testimonios = [
    {
      name: "Juan Pérez",
      text: "Trabajar con Diego fue excelente. Su compromiso y creatividad son notables.",
    },
    {
      name: "María Gómez",
      text: "Gran compañero de trabajo, siempre dispuesto a ayudar y aportar ideas.",
    },
    {
      name: "Carlos Ruiz",
      text: "Demuestra pasión por la programación y atención a los detalles.",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`min-h-screen flex flex-col items-center px-8 py-20 ${
        themeMode === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-bold mb-10 text-blue-600 dark:text-blue-300">
        Testimonios
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {testimonios.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl shadow-lg border ${
              themeMode === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-blue-100"
            }`}
          >
            <p className="italic mb-4">“{t.text}”</p>
            <p className="font-semibold text-blue-600 dark:text-blue-300">
              — {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
