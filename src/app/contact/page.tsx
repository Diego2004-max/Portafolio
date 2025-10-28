'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Contactos() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#dfeafc] p-10">
      {/* 🔹 Caja principal */}
      <section className="bg-[#f5f8ff] rounded-3xl shadow-xl border border-blue-200 w-full max-w-3xl p-10 flex flex-col items-center text-center animate-fadeIn">
        <h1 className="text-4xl font-bold mb-10 text-blue-900 tracking-wide">
          Contactos
        </h1>

        {/* 🔹 Contenedor de info */}
        <div className="w-full bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md space-y-5">

          {/* Email */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 hover:bg-blue-50 transition-colors rounded-md px-3 group">
            <p className="text-lg text-gray-800 group-hover:text-blue-800 transition-colors">
              <strong>Email:</strong>{' '}
              <span className="ml-1">diegoalejandromallama@gmail.com</span>
            </p>
            <Image
              src="/email.png"
              alt="Gmail"
              width={34}
              height={34}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Teléfono */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 hover:bg-blue-50 transition-colors rounded-md px-3 group">
            <p className="text-lg text-gray-800 group-hover:text-blue-800 transition-colors">
              <strong>Teléfono:</strong> 3225436249
            </p>
            <Image
              src="/telefono.png"
              alt="Teléfono"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 hover:bg-blue-50 transition-colors rounded-md px-3 group">
            <p className="text-lg text-gray-800 group-hover:text-blue-800 transition-colors">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/diego-alejandro-mallama-yandun"
                target="_blank"
                className="text-blue-700 hover:underline"
              >
                Diego Alejandro Mallama Yandun
              </a>
            </p>
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between hover:bg-blue-50 transition-colors rounded-md px-3 group">
            <p className="text-lg text-gray-800 group-hover:text-blue-800 transition-colors">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/Diego2004-max"
                target="_blank"
                className="text-blue-700 hover:underline"
              >
                Diego2004-max
              </a>
            </p>
            <Image
              src="/git.png"
              alt="GitHub"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* 🔹 Botón Home */}
        <div className="mt-10">
          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-blue-400/40 transition-all animate-float">
              Home
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
