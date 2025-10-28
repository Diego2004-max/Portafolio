'use client';
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const langs = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
  ];
  const current = langs.find((l) => l.code === lang);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-200 text-blue-900 font-semibold rounded-lg 
                   shadow-sm hover:bg-blue-300 transition-all border border-blue-300"
      >
        {current?.code.toUpperCase()}
      </button>

      {open && (
        <div
          className="absolute mt-2 w-32 bg-white border border-blue-200 rounded-xl shadow-md z-20 overflow-hidden"
          onMouseLeave={() => setOpen(false)}
        >
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as "es" | "en");
                setOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 hover:bg-blue-100 text-blue-800 ${
                l.code === lang ? "bg-blue-50 font-semibold" : ""
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
