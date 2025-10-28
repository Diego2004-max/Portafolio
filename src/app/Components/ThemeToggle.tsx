'use client';
import { useTheme } from "../../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-900 rounded-lg
                 shadow-sm hover:bg-blue-300 transition-all border border-blue-300"
    >
      {themeMode === "light" ? (
        <>
          <MoonIcon className="w-4 h-4" /> Oscuro
        </>
      ) : (
        <>
          <SunIcon className="w-4 h-4" /> Claro
        </>
      )}
    </button>
  );
}
