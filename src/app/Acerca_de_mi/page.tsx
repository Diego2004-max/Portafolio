"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const actividades = [
  {
    titulo: "Deportes",
    descripcion: "Basketball, fútbol, volleyball",
    imagen: "/Deportes.jpg",
  },
  {
    titulo: "Paseos",
    descripcion: "Familiares cada fin de semana",
    imagen: "/Paseos.jpg",
  },
  {
    titulo: "Salidas",
    descripcion:
      "Con mi pareja salimos en la moto a conocer pueblos, salgo a caminar con mi mascota",
    imagen: "/Salidas.jpg",
  },
  {
    titulo: "Encuentros",
    descripcion: "Salidas con amigos",
    imagen: "/Encuentros.jpg",
  },
  {
    titulo: "Estudiar",
    descripcion:
      "Me gusta llenarme más de conocimientos; en mi tiempo libre estudio o veo videos sobre la especialidad que quisiera hacer.",
    imagen: "/Estudiar.jpg",
  },
];

export default function AcercaDeMi() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen flex flex-col md:flex-row items-center justify-between p-10 transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100"
          : "bg-[#F9FAFB] text-gray-900"
      }`}
    >
      {/* Sección izquierda */}
      <div className="max-w-2xl">
        <h1
          className={`text-4xl font-extrabold mb-4 transition-all ${
            theme === "dark"
              ? "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
              : "text-gray-800"
          }`}
        >
          Acerca de mí
        </h1>

        <p className="mb-6 leading-relaxed text-lg">
          Tengo 21 años, mi vida es activa y hago muchas actividades. Algunas son:
        </p>

        <ul className="space-y-3">
          {actividades.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-4 rounded-xl shadow-sm border transition-all hover:scale-[1.02] hover:shadow-md relative overflow-hidden ${
                theme === "dark"
                  ? "bg-gray-800/70 border-gray-700 hover:bg-gray-700/80"
                  : "bg-[#F9FAFB] border-gray-200 hover:bg-gray-100"
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <strong className="text-blue-600 dark:text-blue-400">
                {item.titulo}:
              </strong>{" "}
              {item.descripcion}

              {/* Imagen de vista previa con fade-in */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-500 ${
                  hovered === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={item.imagen}
                  alt={item.titulo}
                  width={300}
                  height={200}
                  className="rounded-2xl shadow-lg border border-gray-300 dark:border-gray-600 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Botón volver */}
        <div className="mt-10">
          <Link href="/" passHref>
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-400/40"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
              }`}
            >
              Ir a la página principal
            </button>
          </Link>
        </div>
      </div>

      {/* Imagen personal con fade-out al hover */}
      <div className="mt-10 md:mt-0 relative w-[220px] h-[220px]">
        {/* Foto principal */}
        <div
          className={`absolute inset-0 rounded-3xl p-4 shadow-xl transition-opacity duration-700 ease-in-out ${
            theme === "dark" ? "bg-gray-800" : "bg-[#F9FAFB]"
          } ${hovered !== null ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src="/me.jpg"
            alt="Foto personal"
            width={220}
            height={220}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Imagen de actividad seleccionada (vista previa a la derecha) */}
        {hovered !== null && (
          <div className="absolute inset-0 rounded-3xl overflow-hidden transition-opacity duration-700 ease-in-out opacity-100">
            <Image
              src={actividades[hovered].imagen}
              alt={actividades[hovered].titulo}
              width={220}
              height={220}
              className="rounded-2xl object-cover shadow-xl scale-105"
            />
          </div>
        )}
      </div>
    </main>
  );
}
