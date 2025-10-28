'use client';
import CardBase from "./CardBase";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../../context/ThemeContext";

const estudios = [
  "Los logros académicos y estudios que estoy cursando",
  "Primaria",
  "Secundaria",
  "Certificado de inglés",
  "Certificado de lectura rápida (AMI)",
  "Ingeniería de software 5to semestre",
  "Curso de backend y frontend con los siguientes lenguajes y etiquetas"
];

const lenguajes = [
  { src: "/py.png", alt: "Python" },
  { src: "/java.png", alt: "Java" },
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" }
];

export default function ExperienciaAcademica() {
  const { themeMode } = useTheme(); // ✅ corregido aquí

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-between p-10 transition-all duration-500 ${
        themeMode === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100"
          : "bg-[#f9fafb] text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Experiencia Académica</h1>

      <ul className="list-disc text-left max-w-md">
        {estudios.map((e, i) => (
          <li key={i} className="mb-2">{e}</li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {lenguajes.map((lang) => (
          <div key={lang.alt} className="w-20 h-20 flex items-center justify-center bg-white/20 rounded-lg p-2 shadow-md">
            <Image src={lang.src} alt={lang.alt} width={60} height={60} />
          </div>
        ))}
      </div>
    </main>
  );
}
