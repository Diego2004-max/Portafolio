'use client';
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();
  const [open, setOpen] = useState(false);

  const modes = [
    { id: "light", label: "☀️ Claro" },
    { id: "dark", label: "🌙 Oscuro" },
    { id: "system", label: "🖥️ Sistema" },
  ];

  const current = modes.find((m) => m.id === themeMode);

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold text-sm shadow-md hover-lift transition-all duration-200"
      >
        {current?.label.split(" ")[0]} {current?.label.split(" ")[1]}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden animate-fadeIn"
        >
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setThemeMode(m.id as "light" | "dark" | "system");
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm ${
                themeMode === m.id
                  ? "bg-gray-100 dark:bg-slate-700 font-semibold"
                  : "hover:bg-gray-50 dark:hover:bg-slate-700"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
