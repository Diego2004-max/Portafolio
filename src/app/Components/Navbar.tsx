"use client";

import { useTheme } from "../context/ThemeContext";
import { translations } from "../context/Translations";

export default function Navbar() {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  return (
    <nav
      className={`flex items-center justify-between p-4 border-b transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-lg font-semibold">
        {translations[language].homeTitle}
      </h1>

      <div className="flex gap-3">
        {/* Botón de tema */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          {theme === "light" ? "🌙 Modo oscuro" : "☀️ Modo claro"}
        </button>

        {/* Botón de idioma */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          {language === "es"
            ? "🇪🇸 Español"
            : language === "en"
            ? "🇺🇸 English"
            : "🇫🇷 Français"}
        </button>
      </div>
    </nav>
  );
}
