"use client";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="px-4 py-2 rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-900 transition-all"
    >
      {lang === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
    </button>
  );
}
