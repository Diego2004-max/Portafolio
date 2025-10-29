'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";

export default function Contactos() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-page)] p-10 text-[var(--text-primary)] transition-all">
      <section className="bg-[var(--bg-card)] rounded-3xl shadow-xl border border-[var(--border-color)] w-full max-w-3xl p-10 flex flex-col items-center text-center animate-fadeIn">
        <h1 className="text-4xl font-bold mb-10">
          {t?.nav?.contact ?? "Contacto"}
        </h1>

        <div className="w-full bg-white/70 dark:bg-slate-700/50 backdrop-blur-md p-6 rounded-2xl shadow-md space-y-5">
          <div className="flex justify-between border-b border-gray-300 pb-3 hover:bg-blue-50 dark:hover:bg-slate-800 transition rounded-md px-3 group">
            <p><strong>Email:</strong> diegoalejandromallama@gmail.com</p>
            <Image src="/email.png" alt="Email" width={32} height={32} />
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-3 hover:bg-blue-50 dark:hover:bg-slate-800 transition rounded-md px-3 group">
            <p><strong>Teléfono:</strong> 3225436249</p>
            <Image src="/telefono.png" alt="Teléfono" width={32} height={32} />
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-3 hover:bg-blue-50 dark:hover:bg-slate-800 transition rounded-md px-3 group">
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/diego-alejandro-mallama-yandun"
                target="_blank"
                className="text-blue-700 hover:underline"
              >
                Diego Alejandro Mallama Yandun
              </a>
            </p>
            <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </div>

          <div className="flex justify-between hover:bg-blue-50 dark:hover:bg-slate-800 transition rounded-md px-3 group">
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Diego2004-max"
                target="_blank"
                className="text-blue-700 hover:underline"
              >
                Diego2004-max
              </a>
            </p>
            <Image src="/git.png" alt="GitHub" width={32} height={32} />
          </div>
        </div>

        <div className="mt-10">
          <Link href="/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-blue-400/40 transition-all">
              Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
