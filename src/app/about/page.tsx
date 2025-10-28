'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const actividades = [
  { titulo: "Deportes", descripcion: "Basketball, fútbol, volleyball.", imagen: "/Deportes.jpg" },
  { titulo: "Paseos", descripcion: "Familiares cada fin de semana.", imagen: "/Paseos.jpg" },
  { titulo: "Salidas", descripcion: "Con mi pareja salimos en la moto a conocer pueblos, salgo a caminar con mi mascota.", imagen: "/Salidas.jpg" },
  { titulo: "Encuentros", descripcion: "Salidas con amigos.", imagen: "/Encuentros.jpg" },
  { titulo: "Estudiar", descripcion: "Me gusta llenarme más de conocimientos; en mi tiempo libre estudio o veo videos sobre la especialidad que quisiera hacer.", imagen: "/Estudiar.jpg" },
];

export default function AboutPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const imagenActual = actividades.find((a) => a.titulo === hovered)?.imagen || "/me.jpg";

  return (
    <main className="min-h-screen bg-[#dfeafc] flex items-center justify-center p-10">
      <div className="bg-[#f5f8ff] rounded-3xl shadow-2xl w-full max-w-7xl flex flex-col md:flex-row items-center justify-between p-14 border border-blue-200 gap-12 transition-all duration-500">
        
        {/* 🟦 Texto principal */}
        <div className="max-w-3xl text-blue-900 space-y-6 leading-relaxed text-[18px]">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Acerca de mí</h1>
          <p>Tengo 21 años, mi vida es activa y hago muchas actividades. Algunas son:</p>

          <ul className="space-y-4">
            {actividades.map((item) => (
              <li
                key={item.titulo}
                onMouseEnter={() => setHovered(item.titulo)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer p-2 rounded-md hover:bg-blue-50 transition-all"
              >
                <strong className="text-blue-700">{item.titulo}:</strong> {item.descripcion}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link href="/" passHref>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm shadow-md transition-all">
                Home
              </button>
            </Link>
          </div>
        </div>

        {/* 🖼️ Imagen dinámica con efecto suave */}
        <div className="relative w-[280px] h-[280px] rounded-3xl shadow-lg overflow-hidden bg-[#cfe0ff] border border-blue-200 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={imagenActual}
              initial={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={imagenActual}
                alt="Vista previa"
                fill
                className="object-cover rounded-3xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
