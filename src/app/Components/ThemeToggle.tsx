'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type ThemeMode = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('system');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as ThemeMode) || 'system';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    const html = document.documentElement;

    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.classList.toggle('dark', prefersDark);
      html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      return;
    }

    html.classList.toggle('dark', mode === 'dark');
    html.setAttribute('data-theme', mode);
  };

  const changeTheme = (mode: ThemeMode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
    applyTheme(mode);
  };

  const baseBtn =
    'p-2 rounded-md flex items-center justify-center transition-colors';
  const activeBtn =
    'bg-[var(--border-color)]/60 text-[var(--text-primary)] shadow-sm';
  const inactiveBtn = 'bg-transparent text-[var(--text-primary)] opacity-80';

  return (
    <div
      className="
        flex gap-1 p-1 rounded-lg
        bg-[var(--bg-card)]
        border border-[var(--border-color)]
        shadow-sm
      "
    >
      <button
        onClick={() => changeTheme('light')}
        className={`${baseBtn} ${theme === 'light' ? activeBtn : inactiveBtn}`}
        title="Modo claro"
      >
        <Sun size={16} />
      </button>

      <button
        onClick={() => changeTheme('dark')}
        className={`${baseBtn} ${theme === 'dark' ? activeBtn : inactiveBtn}`}
        title="Modo oscuro"
      >
        <Moon size={16} />
      </button>

      <button
        onClick={() => changeTheme('system')}
        className={`${baseBtn} ${theme === 'system' ? activeBtn : inactiveBtn}`}
        title="Usar tema del sistema"
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
