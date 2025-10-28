'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  // idiomas disponibles
  const languages: { code: 'es' | 'en'; label: string }[] = [
    { code: "es", label: "Español 🇪🇸" },
    { code: "en", label: "English 🇺🇸" },
  ];

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-200 text-blue-900 font-semibold rounded-lg shadow-sm 
                   hover:bg-blue-300 transition-all duration-200 border border-blue-300"
      >
        {current?.code.toUpperCase()}
      </button>

      {/* Menú desplegable animado */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-36 bg-white border border-blue-200 rounded-xl 
                       shadow-lg z-20 backdrop-blur-sm overflow-hidden"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-blue-800 hover:bg-blue-100 transition-colors ${
                  l.code === lang ? "bg-blue-50 font-semibold" : ""
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
