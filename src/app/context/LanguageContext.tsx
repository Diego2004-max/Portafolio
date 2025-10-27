'use client';

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { useTheme } from './ThemeContext';

type Lang = 'es' | 'en' | 'fr';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

// Diccionario simple. Para crecer, muévelo a /src/data/*.json
const translations: Record<Lang, Record<string, string>> = {
  es: {
    greeting: 'Soy Diego Alejandro Mallama Yandún',
    description: 'Desarrollador en formación apasionado por la tecnología, el diseño y la innovación.',
    about: 'Acerca de mí',
  },
  en: {
    greeting: "I'm Diego Alejandro Mallama Yandún",
    description: 'Developer in training passionate about technology, design, and innovation.',
    about: 'About me',
  },
  fr: {
    greeting: 'Je suis Diego Alejandro Mallama Yandún',
    description: "Développeur en formation passionné par la technologie, le design et l'innovation.",
    about: 'À propos de moi',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: (k) => k,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { language, setLanguage } = useTheme();

  const value = useMemo<LanguageContextType>(() => ({
    lang: language,
    setLang: setLanguage,
    t: (key: string) => translations[language][key] ?? key,
  }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
