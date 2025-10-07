"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (text: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  es: {
    greeting: "Soy Diego Alejandro Mallama Yandún",
    description: "Desarrollador en formación apasionado por la tecnología, el diseño y la innovación.",
    about: "Acerca de mí",
  },
  en: {
    greeting: "I'm Diego Alejandro Mallama Yandún",
    description: "Developer in training passionate about technology, design, and innovation.",
    about: "About me",
  },
  fr: {
    greeting: "Je suis Diego Alejandro Mallama Yandún",
    description: "Développeur en formation passionné par la technologie, le design et l'innovation.",
    about: "À propos de moi",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: (text) => text,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("es");

  const t = (text: string) => {
    return translations[lang][text] || text;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
