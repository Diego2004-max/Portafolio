"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-16 pb-12 px-4">
      <Image
        src="/me.jpg"
        alt="Foto de perfil"
        width={128}
        height={128}
        className="rounded-full shadow-md"
      />
      <div className="flex flex-col items-center bg-blue-200 dark:bg-blue-300/20 rounded-lg py-1 px-10 mb-3 mt-3">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300">
          Soy Diego Alejandro <br /> Mallama Yandún
        </h2>
      </div>
      <p className="mt-3 max-w-lg text-gray-700 dark:text-slate-300">
        Desarrollador en formación apasionado por la tecnología, el diseño y la innovación.
      </p>
      <div className="flex gap-4 mt-6">
        <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow">Instagram</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">LinkedIn</a>
        <a href="#" className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded shadow">GitHub</a>
      </div>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow">
        Descargar CV ↓
      </button>
    </section>
  );
}
