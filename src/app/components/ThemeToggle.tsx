'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (mode: string) => {
    const html = document.documentElement;

    if (mode === 'light') {
      html.classList.remove('dark');        // 🔥 FIX 1
      html.setAttribute('data-theme', 'light');
      return;
    }

    if (mode === 'dark') {
      html.classList.add('dark');           // 🔥 FIX 2
      html.setAttribute('data-theme', 'dark');
      return;
    }

    // system
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark');        // 🔥 FIX 3
      html.setAttribute('data-theme', 'light');
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
        className={`p-2 rounded-md ${
          theme === 'light' ? 'bg-white shadow-md dark:bg-slate-600' : ''
        }`}
        title="Light Mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => changeTheme('dark')}
        className={`p-2 rounded-md ${
          theme === 'dark' ? 'bg-white shadow-md dark:bg-slate-600' : ''
        }`}
        title="Dark Mode"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => changeTheme('system')}
        className={`p-2 rounded-md ${
          theme === 'system' ? 'bg-white shadow-md dark:bg-slate-600' : ''
        }`}
        title="System Mode"
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
