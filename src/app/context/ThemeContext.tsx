"use client";

import React,{ createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
    language: "es" | "en" | "fr";
    toggleLanguage: () => void;
  }
  

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
          const savedTheme = localStorage.getItem("theme");
          if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
          }
      
          // Si el usuario nunca ha elegido, usamos el del sistema (por defecto)
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          return prefersDark ? "dark" : "light";
        }
        return "light";
      });
      
  const [language, setLanguage] = useState<"es" | "en" | "fr">(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language");
      if (savedLang === "es" || savedLang === "en" || savedLang === "fr") {
        return savedLang;
      }
  
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "en") return "en";
      if (browserLang === "fr") return "fr";
    }
    return "es"; // idioma por defecto
  });
  

  // 🔹 Cargar preferencias guardadas al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedLang = localStorage.getItem("language") as "es" | "en" | null;

    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLanguage(savedLang);
  }, []);

  // 🔹 Guardar cambios y aplicar clase de Tailwind
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
  }, [theme, language]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };  
  const toggleLanguage = () => {
    if (language === "es") setLanguage("en");
    else if (language === "en") setLanguage("fr");
    else setLanguage("es");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
