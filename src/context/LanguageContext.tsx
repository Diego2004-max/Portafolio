'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import es from "../data/es.json";
import en from "../data/en.json";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: any; // traducciones dinámicas
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("es");
  const [t, setT] = useState<any>(es);

  // Cargar idioma guardado o por defecto
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) {
      setLangState(savedLang);
      setT(savedLang === "es" ? es : en);
    }
  }, []);

  // Cambiar idioma y guardar preferencia
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    setT(newLang === "es" ? es : en);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
