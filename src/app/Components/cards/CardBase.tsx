'use client'
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  icon: string;
  title: string;
  href: string;
  preview: string;
  accent?: 'blue' | 'purple' | 'green' | 'orange';
};

export default function CardBase({ icon, title, href, preview, accent = 'blue' }: Props) {
  const [open, setOpen] = useState(false);

  const bgAccent = {
    blue: 'border-blue-200',
    purple: 'border-purple-200',
    green: 'border-green-200',
    orange: 'border-orange-200',
  }[accent];

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(o => !o)} // mobile
        onBlur={() => setOpen(false)}
        tabIndex={0}
        className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50/70 dark:hover:bg-slate-700 focus-visible:ring"
        aria-expanded={open}
      >
        <div className="text-4xl mb-3">{icon}</div>
        <Link href={href} className="font-semibold text-blue-800 dark:text-blue-300 hover:underline">
          {title}
        </Link>
      </div>

      {open && (
        <div className={`absolute top-0 left-0 bg-white dark:bg-slate-900 shadow-2xl p-6 rounded-lg w-80 -translate-y-2 z-20 border ${bgAccent} transition-all`}>
          <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">{title}</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{preview}</p>
          <Link href={href} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm block text-center focus-visible:ring">
            Ir
          </Link>
        </div>
      )}
    </div>
  );
}
