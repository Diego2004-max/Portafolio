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
        className="flex items-center gap-1 px-2 py-1 text-sm bg-slate-200/70 dark:bg-slate-700/50 
                   rounded-lg hover:bg-slate-300/60 dark:hover:bg-slate-600/50"
      >
        <Globe size={16} />
        {language.toUpperCase()}
      </button>

      {open && (
        <div className="absolute top-9 left-0 bg-white dark:bg-slate-800 border border-slate-200 
                        dark:border-slate-600 rounded-lg shadow-md text-sm z-50">
          <button
            onClick={() => { toggleLanguage(); setOpen(false); }}
            className="block px-4 py-2 w-full text-left hover:bg-blue-100 dark:hover:bg-slate-700"
          >
            {language === 'es' ? 'English' : 'Español'}
          </button>
        </div>
      )}
    </div>
  );
}
