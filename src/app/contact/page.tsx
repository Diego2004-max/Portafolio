'use client';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function ContactPage() {
  const { themeMode } = useTheme();

  const contactos = [
    {
      label: "Email",
      value: "diegoalejandromallama@gmail.com",
      icon: "📧",
    },
    {
      label: "Teléfono",
      value: "+57 123 456 7890",
      icon: "📱",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/diegomallama",
      icon: "💼",
    },
    {
      label: "GitHub",
      value: "github.com/Diego2004mx",
      icon: "💻",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`min-h-screen flex flex-col items-center px-8 py-20 ${
        themeMode === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-300">
        Contacto
      </h1>

      <div className="max-w-lg w-full space-y-5">
        {contactos.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`flex items-center justify-between p-4 rounded-xl shadow-md border ${
              themeMode === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-blue-100"
            }`}
          >
            <span className="text-2xl">{c.icon}</span>
            <div className="text-right">
              <p className="font-semibold">{c.label}</p>
              <p className="text-sm opacity-80">{c.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
