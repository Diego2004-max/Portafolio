'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardBaseProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  preview: string;
}

export default function CardBase({ icon, title, href, preview }: CardBaseProps) {
  return (
      <motion.div
        whileHover={{ scale: 1.05, y: -6 }}
        transition={{ type: 'spring', stiffness: 250, damping: 15 }}
        className="w-44 h-56 bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 rounded-2xl 
                  p-4 shadow-md flex flex-col justify-between items-center text-center 
                  hover:shadow-2xl transition-all overflow-hidden relative group"
      >

      {/* Icono */}
      <motion.div
        className="text-4xl mb-2"
        whileHover={{ rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      {/* Título */}
      <h3 className="font-bold text-lg text-slate-800 mb-1">{title}</h3>

      {/* Vista previa animada */}
      <div className="overflow-hidden relative h-16 w-full">
        <motion.p
          className="text-sm text-slate-700 leading-snug absolute w-full"
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {preview}
        </motion.p>
      </div>

      {/* Botón */}
      <Link
        href={href}
        className="text-blue-700 font-semibold hover:underline mt-1 transition-all"
      >
        Ir →
      </Link>
    </motion.div>
  );
}
