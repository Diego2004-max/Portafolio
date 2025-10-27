'use client';
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "es", label: "🇪🇸 Español" },
    { code: "en", label: "🇺🇸 English" },
  ];

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-all duration-200 hover-lift"
      >
        {current?.label.split(" ")[0]} {lang.toUpperCase()}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute mt-2 w-32 bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden animate-fadeIn"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as "es" | "en");
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm ${
                lang === l.code
                  ? "bg-blue-100 dark:bg-slate-700 font-semibold"
                  : "hover:bg-blue-50 dark:hover:bg-slate-700"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
