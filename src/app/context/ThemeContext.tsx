'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeMode = 'system' | 'light' | 'dark';
type Lang = 'es' | 'en';

interface ThemeContextType {
  theme: Theme;               // aplicado (resuelto)
  themeMode: ThemeMode;       // preferencia (system|light|dark)
  toggleTheme: () => void;    // system -> light -> dark -> system
  language: Lang;
  toggleLanguage: () => void; // es <-> en
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('themeMode');
      if (saved === 'system' || saved === 'light' || saved === 'dark') return saved;
    }
    return 'system';
  });
  const [theme, setTheme] = useState<Theme>('light');

  const [language, setLanguage] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'es' || saved === 'en') return saved as Lang;
      return navigator.language.slice(0, 2) === 'en' ? 'en' : 'es';
    }
    return 'es';
  });

  // Aplica tema a <html> y reacciona al sistema si themeMode === 'system'
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const resolved: Theme = themeMode === 'system' ? (mq.matches ? 'dark' : 'light') : themeMode;
      setTheme(resolved);
      document.documentElement.classList.toggle('dark', resolved === 'dark');
    };
    apply();
    const handler = () => themeMode === 'system' && apply();
    mq.addEventListener('change', handler);
    localStorage.setItem('themeMode', themeMode);
    return () => mq.removeEventListener('change', handler);
  }, [themeMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () =>
    setThemeMode((m) => (m === 'system' ? 'light' : m === 'light' ? 'dark' : 'system'));
  const toggleLanguage = () => setLanguage((l) => (l === 'es' ? 'en' : 'es'));

  const value = useMemo(
    () => ({ theme, themeMode, toggleTheme, language, toggleLanguage }),
    [theme, themeMode, language]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
