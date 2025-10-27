'use client';
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "es", label: "Español 🇪🇸" },
    { code: "en", label: "English 🇺🇸" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
      >
        {lang === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 right-0 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-md z-50 w-36"
          >
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => {
                    if (l.code !== lang) toggleLang();
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-slate-700 ${
                    lang === l.code
                      ? "font-semibold text-blue-600 dark:text-blue-300"
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
