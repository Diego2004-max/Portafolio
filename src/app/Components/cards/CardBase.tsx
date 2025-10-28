'use client';
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CardBase({ icon, title, href, preview }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="bg-blue-100 border border-blue-200 text-blue-800 rounded-2xl shadow-md p-6 text-center transition-all duration-300">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute top-0 left-0 bg-white border border-blue-200 p-5 rounded-2xl w-72 shadow-lg z-20"
          >
            <h4 className="font-bold text-blue-800 mb-2">{title}</h4>
            <p className="text-slate-700 mb-3">{preview}</p>
            <Link
              href={href}
              className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Ir →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
