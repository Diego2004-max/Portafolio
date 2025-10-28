'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

export default function ProjectsPage() {
  const { themeMode } = useTheme();

  const projects = [
    {
      title: "Cámara de fotomultas",
      tech: "Spring Boot",
      img: "/spring.png",
      link: "#",
    },
    {
      title: "Agenda de libros con BD",
      tech: "MongoDB",
      img: "/mongo.png",
      link: "#",
    },
    {
      title: "Cards con Tailwind",
      tech: "TailwindCSS",
      img: "/tailwind.png",
      link: "#",
    },
    {
      title: "Reproductor de música",
      tech: "Python",
      img: "/python.png",
      link: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`min-h-screen flex flex-col items-center px-8 py-20 ${
        themeMode === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-300">
        Proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:scale-[1.03] ${
              themeMode === "dark"
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                : "bg-white border-blue-100 hover:bg-blue-50"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <Image
                src={p.img}
                alt={p.tech}
                width={40}
                height={40}
                className="rounded"
              />
            </div>
            <p className="text-sm opacity-80">{p.tech}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
