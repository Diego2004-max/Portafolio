'use client';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-1 px-2 py-1 text-sm 
          bg-[var(--bg-card)] text-[var(--text-primary)]
          border border-[var(--border-color)]
          rounded-lg shadow-sm
          hover:bg-[var(--border-color)]/40
          transition
        "
      >
        <Globe size={16} />
        {language.toUpperCase()}
      </button>

      {open && (
        <div
          className="
            absolute top-9 left-0 
            bg-[var(--bg-card)]
            border border-[var(--border-color)]
            rounded-lg shadow-md 
            text-sm z-50
            w-28
          "
        >
          <button
            onClick={() => { toggleLanguage(); setOpen(false); }}
            className="
              block px-4 py-2 w-full text-left
              text-[var(--text-primary)]
              hover:bg-[var(--border-color)]/40
            "
          >
            {language === 'es' ? 'English' : 'Español'}
          </button>
        </div>
      )}
    </div>
  );
}
