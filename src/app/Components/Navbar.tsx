"use client";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-blue-600 text-white rounded-3xl shadow-md">
      <LanguageToggle />
      <ul className="flex gap-6">
        <li><Link href="/">Principal</Link></li>
        <li><Link href="/acerca_de_mi">Acerca de mí</Link></li>
        <li><Link href="/ex_academica">Ex. acadm</Link></li>
        <li><Link href="/projects">Proyectos</Link></li>
        <li><Link href="/testimonial">Testimonios</Link></li>
        <li><Link href="/contactos">Contactos</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
