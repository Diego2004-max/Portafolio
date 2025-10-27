'use client';
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "es", label: "Español 🇪🇸" },
    { code: "en", label: "English 🇺🇸" },
  ];

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-2 bg-blue-200 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-blue-300 transition-all duration-200"
      >
        {current?.code.toUpperCase()}
      </button>

      {/* Menú desplegable */}
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 mt-2 w-32 bg-white border border-blue-200 rounded-lg shadow-lg z-10"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as 'es' | 'en');
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-blue-100 text-blue-800"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
