'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: "system",
  setThemeMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");

  const applyTheme = (mode: ThemeMode) => {
    let finalMode = mode;
    if (mode === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      finalMode = prefersDark ? "dark" : "light";
    }

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(finalMode);
    localStorage.setItem("themeMode", mode);
  };

  useEffect(() => {
    const stored = localStorage.getItem("themeMode") as ThemeMode | null;
    if (stored) {
      setThemeMode(stored);
      applyTheme(stored);
    } else {
      applyTheme("system");
    }
  }, []);

  useEffect(() => {
    applyTheme(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
