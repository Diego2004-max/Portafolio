'use client';
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { Sun, Moon, Laptop, Globe } from "lucide-react";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const modes = [
    { id: "light", label: language === "es" ? "Claro" : "Light", icon: <Sun className="w-4 h-4" /> },
    { id: "dark", label: language === "es" ? "Oscuro" : "Dark", icon: <Moon className="w-4 h-4" /> },
    { id: "system", label: language === "es" ? "Sistema" : "System", icon: <Laptop className="w-4 h-4" /> },
  ];

  const current = modes.find((m) => m.id === themeMode) ?? modes[2];

  useEffect(() => {
    const handleClickOutside = () => setOpen(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-3 items-center select-none relative">
      {/* 🌐 Idioma */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-200 dark:bg-slate-700 
                   text-blue-900 dark:text-slate-100 font-semibold hover:bg-blue-300 
                   dark:hover:bg-slate-600 border border-blue-300 dark:border-slate-600 
                   transition-all text-sm"
      >
        <Globe className="w-4 h-4" />
        {language === "es" ? "ES" : "EN"}
      </button>

      {/* ☀️🌙 Tema */}
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-200 dark:bg-slate-700 
                     text-blue-900 dark:text-slate-100 font-semibold shadow-sm 
                     hover:bg-blue-300 dark:hover:bg-slate-600 border border-blue-300 
                     dark:border-slate-600 transition-all text-sm"
        >
          {current.icon}
          <span>{current.label}</span>
        </button>

        {open && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 border 
                       border-blue-200 dark:border-slate-700 rounded-xl shadow-lg 
                       z-50 overflow-hidden"
          >
            {modes.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setThemeMode(m.id as "light" | "dark" | "system");
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 flex items-center gap-2 text-sm 
                            hover:bg-blue-100 dark:hover:bg-slate-700 transition-all
                            ${themeMode === m.id ? "bg-blue-50 font-semibold dark:bg-slate-700" : ""}`}
              >
                {m.icon} {m.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
