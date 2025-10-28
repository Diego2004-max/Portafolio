'use client';
import CardBase from "./CardBase";
import Link from 'next/link';
import Image from 'next/image';

export default function Contactos() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#e7edf7] p-10 rounded-3xl shadow-md">
      <h1 className="text-4xl font-semibold mb-10 text-black">Contactos</h1>

      {/* Contenedor principal */}
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md space-y-4">

        {/* Email */}
        <div className="flex items-center justify-between border-b border-gray-400 pb-2 hover:bg-blue-50 transition-colors rounded-md px-2">
          <p className="text-lg text-gray-800">
            <strong>Email:</strong> diegoalejandromallama@gmail.com
          </p>
          <Image src="/email.png" alt="Gmail" width={30} height={30} />
        </div>

        {/* Teléfono */}
        <div className="flex items-center justify-between border-b border-gray-400 pb-2 hover:bg-blue-50 transition-colors rounded-md px-2">
          <p className="text-lg text-gray-800">
            <strong>Teléfono:</strong> 3225436249
          </p>
          <Image src="/telefono.png" alt="Teléfono" width={28} height={28} />
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between border-b border-gray-400 pb-2 hover:bg-blue-50 transition-colors rounded-md px-2">
          <p className="text-lg text-gray-800">
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/diego-alejandro-mallama-yandun"
              target="_blank"
              className="text-black-600 hover:underline"
            >
              Diego Alejandro Mallama Yandun
            </a>
          </p>
          <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-between border-b border-gray-400 pb-2 hover:bg-blue-50 transition-colors rounded-md px-2">
          <p className="text-lg text-gray-800">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Diego2004-max"
              target="_blank"
              className="text-black-600 hover:underline"
            >
              Diego2004-max
            </a>
          </p>
          <Image src="/git.png" alt="GitHub" width={28} height={28} />
        </div>
      </div>

      {/* Botón Home */}
      <div className="mt-10">
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-blue-400/40 transition-all">
            Home
          </button>
        </Link>
      </div>
    </section>
  );
}
