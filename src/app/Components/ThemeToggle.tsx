'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();
  const [open, setOpen] = useState(false);

  const modes = [
    { id: "light", label: "☀️ Claro", icon: <SunIcon className="w-4 h-4 inline" /> },
    { id: "dark", label: "🌙 Oscuro", icon: <MoonIcon className="w-4 h-4 inline" /> },
    { id: "system", label: "💻 Sistema", icon: <ComputerDesktopIcon className="w-4 h-4 inline" /> },
  ];

  const current = modes.find((m) => m.id === themeMode) ?? modes[2];

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-900 
                   font-semibold rounded-lg shadow-sm hover:bg-blue-300 
                   transition-all duration-200 border border-blue-300"
      >
        {current.icon}
        <span className="text-sm">{current.label}</span>
      </button>

      {/* Menú desplegable */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 mt-2 w-36 bg-white border border-blue-200 rounded-xl 
                     shadow-lg z-20 overflow-hidden backdrop-blur-sm"
          onMouseLeave={() => setOpen(false)}
        >
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setThemeMode(m.id as "light" | "dark" | "system");
                setOpen(false);
              }}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 text-blue-800 hover:bg-blue-100 ${
                m.id === themeMode ? "bg-blue-50 font-semibold" : ""
              }`}
            >
              {m.icon}
              {m.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
