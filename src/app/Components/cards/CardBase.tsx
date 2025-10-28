'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardBaseProps {
  icon: string;
  title: string;
  href: string;
  preview: string;
  accent: string;
}

export default function CardBase({ icon, title, href, preview, accent }: CardBaseProps) {
  const accentColor = {
    purple: 'from-purple-100 to-purple-200 border-purple-300',
    blue: 'from-blue-100 to-blue-200 border-blue-300',
    yellow: 'from-yellow-100 to-yellow-200 border-yellow-300',
    pink: 'from-pink-100 to-pink-200 border-pink-300',
    orange: 'from-orange-100 to-orange-200 border-orange-300',
  }[accent];

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`w-48 h-64 bg-gradient-to-b ${accentColor} border rounded-3xl p-5 shadow-md 
                  flex flex-col justify-between items-center text-center hover:shadow-2xl transition-all
                  overflow-hidden relative`}
    >
      {/* Icono principal */}
      <div className="text-4xl mb-2">{icon}</div>

      {/* Título */}
      <h3 className="font-bold text-lg text-slate-800 mb-1">{title}</h3>

      {/* Contenido con animación tipo scroll */}
      <motion.div
        className="overflow-hidden h-16 text-sm text-slate-700 leading-snug"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-ellipsis">{preview}</p>
      </motion.div>

      {/* Botón “Ir →” */}
      <Link
        href={href}
        className="text-blue-700 font-semibold hover:underline mt-1"
      >
        Ir →
      </Link>
    </motion.div>
  );
}
