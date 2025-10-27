'use client';
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = [
    { code: "light", label: "☀️ Claro" },
    { code: "dark", label: "🌙 Oscuro" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 right-0 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-md z-50 w-36"
          >
            {themes.map((t) => (
              <li key={t.code}>
                <button
                  onClick={() => {
                    if (t.code !== theme) toggleTheme();
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 ${
                    theme === t.code
                      ? "font-semibold text-blue-600 dark:text-blue-300"
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
