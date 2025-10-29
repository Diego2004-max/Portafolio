'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') || 'system';
      setTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (mode: string) => {
    if (typeof document !== 'undefined') {
      if (mode === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
      } else {
        document.documentElement.classList.toggle('dark', mode === 'dark');
      }
    }
  };

  const changeTheme = (mode: string) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
    applyTheme(mode);
  };

  return (
    <div className="flex gap-1 bg-slate-200/60 dark:bg-slate-700/40 p-1 rounded-lg">
      <button
        onClick={() => changeTheme('light')}
        className={`p-2 rounded-md ${theme === 'light' ? 'bg-white shadow-md dark:bg-slate-600' : ''}`}
        title="Modo claro"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => changeTheme('dark')}
        className={`p-2 rounded-md ${theme === 'dark' ? 'bg-white shadow-md dark:bg-slate-600' : ''}`}
        title="Modo oscuro"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => changeTheme('system')}
        className={`p-2 rounded-md ${theme === 'system' ? 'bg-white shadow-md dark:bg-slate-600' : ''}`}
        title="Seguir el sistema"
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
