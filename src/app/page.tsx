'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './context/ThemeContext';
import { translations } from './context/Translations';

export default function Home() {
  const { themeMode, toggleTheme, language, toggleLanguage } = useTheme();
  const t = translations[language];

  const [showAboutPreview, setShowAboutPreview] = useState(false);
  const [showAcademicPreview, setShowAcademicPreview] = useState(false);
  const [showProjectsPreview, setShowProjectsPreview] = useState(false);
  const [showTestimonialsPreview, setShowTestimonialsPreview] = useState(false);
  const [showContactPreview,   setShowContactPreview]   = useState(false);

  const themeLabel =
    themeMode === 'system' ? '🖥️ Sistema' : themeMode === 'light' ? '☀️ Claro' : '🌙 Oscuro';

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-6xl bg-gray-100 dark:bg-slate-900/40 rounded-2xl shadow-lg overflow-visible relative">

        {/* Top bar */}
        <div className="flex items-center justify-between px-10 py-3">
          {/* Idioma */}
          <button
            onClick={toggleLanguage}
            className="px-10 py-2.5 rounded-lg bg-blue-200 text-blue-900 hover:bg-blue-300"
          >
            {language.toUpperCase()}
          </button>

          {/* Navbar (usa Link y rutas en minúsculas) */}
          <nav className="flex-1 mx-16 bg-blue-600 text-white shadow-md z-50 rounded-3xl py-0.5">
            <div className="flex justify-center items-center p-4 w-full">
              <ul className="flex gap-6">
                <li><Link href="/acerca_de_mi"  className="hover:text-blue-200">{t.nav.about}</Link></li>
                <li><Link href="/ex_academica"  className="hover:text-blue-200">{t.nav.academic}</Link></li>
                <li><Link href="/projects"      className="hover:text-blue-200">{t.nav.projects}</Link></li>
                <li><Link href="/testimonial"   className="hover:text-blue-200">{t.nav.testimonials}</Link></li>
                <li><Link href="/contactos"     className="hover:text-blue-200">{t.nav.contact}</Link></li>
              </ul>
            </div>
          </nav>

          {/* Tema */}
          <button
            onClick={toggleTheme}
            className="px-8 py-2.5 rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            title="Change theme"
          >
            {themeLabel}
          </button>
        </div>

        {/* Hero */}
        <section className="flex flex-col items-center text-center pt-16 pb-12 px-4">
          <img src="/me.jpg" alt="Foto perfil" className="w-32 h-32 rounded-full shadow-md" />

          <div className="flex flex-col items-center bg-blue-200 dark:bg-blue-300/20 rounded-lg py-0.5 px-12 mb-2.5 mt-2.5">
            <h2 className="text-2xl font-bold mt-6 text-blue-600 dark:text-blue-300">
              {t.hero.nameLine1}<br />{t.hero.nameLine2}
            </h2>
          </div>

          <p className="mt-3 max-w-lg text-gray-700 dark:text-slate-300">
            {t.hero.subtitle}
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">LinkedIn</a>
            <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow">Instagram</a>
            <a href="#" className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded shadow">GitHub</a>
          </div>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow">
            {t.hero.downloadCv}
          </button>
        </section>

        {/* Cards */}
        <section className="relative max-w-6xl mx-auto pb-16 px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">

            {/* Acerca de mí */}
            <div className="relative">
              <div
                className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-slate-700"
                onMouseEnter={() => setShowAboutPreview(true)}
                onMouseLeave={() => setShowAboutPreview(false)}
              >
                <div className="text-4xl mb-3">👤</div>
                <Link href="/acerca_de_mi" className="font-semibold text-blue-800 dark:text-blue-300">
                  {t.cards.about}
                </Link>
              </div>

              {showAboutPreview && (
                <div
                  className="absolute top-0 left-0 bg-white dark:bg-slate-900 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-blue-200 dark:border-slate-700 transition-all duration-200"
                  onMouseEnter={() => setShowAboutPreview(true)}
                  onMouseLeave={() => setShowAboutPreview(false)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img src="/me.jpg" alt="Foto perfil" className="w-16 h-16 rounded-full shadow-md" />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">{t.cards.about}</h4>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {t.cards.preview.about}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-sm">📷</a>
                      <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">in</a>
                      <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-sm">🐱</a>
                    </div>
                    <Link href="/acerca_de_mi" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors">
                      {t.actions.go}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Experiencia Académica */}
            <div className="relative">
              <div
                className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-slate-700"
                onMouseEnter={() => setShowAcademicPreview(true)}
                onMouseLeave={() => setShowAcademicPreview(false)}
              >
                <div className="text-4xl mb-3">🎓</div>
                <Link href="/ex_academica" className="font-semibold text-blue-800 dark:text-blue-300">
                  {t.cards.academic}
                </Link>
              </div>

              {showAcademicPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-900/70 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-blue-200 dark:border-slate-700 transition-all duration-200"
                  onMouseEnter={() => setShowAcademicPreview(true)}
                  onMouseLeave={() => setShowAcademicPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">{t.cards.academic}</h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400">{t.labels.education}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-slate-300">{t.academic.softwareEng}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-slate-300">{t.academic.certs}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-slate-300">{t.academic.courses}</span>
                    </div>
                  </div>

                  <Link href="/ex_academica" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded text-sm transition-all transform hover:scale-105 text-center block">
                    {t.actions.details}
                  </Link>
                </div>
              )}
            </div>

            {/* Proyectos → /projects */}
            <div className="relative">
              <div
                className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-slate-700"
                onMouseEnter={() => setShowProjectsPreview(true)}
                onMouseLeave={() => setShowProjectsPreview(false)}
              >
                <div className="text-4xl mb-3">💡</div>
                <Link href="/projects" className="font-semibold text-blue-800 dark:text-blue-300">
                  {t.cards.projects}
                </Link>
              </div>

              {showProjectsPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-900 dark:to-slate-900/70 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-purple-200 dark:border-slate-700 transition-all duration-200"
                  onMouseEnter={() => setShowProjectsPreview(true)}
                  onMouseLeave={() => setShowProjectsPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300">{t.cards.projects}</h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400">{t.labels.innovation}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                      <div className="text-lg mb-1">🌐</div>
                      <p className="text-xs text-gray-600 dark:text-slate-400">Web Apps</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                      <div className="text-lg mb-1">📱</div>
                      <p className="text-xs text-gray-600 dark:text-slate-400">Mobile</p>
                    </div>
                  </div>

                  <Link href="/projects" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded text-sm transition-all transform hover:scale-105 text-center block">
                    {t.actions.explore}
                  </Link>
                </div>
              )}
            </div>

            {/* Testimonios → corrige el bug del onMouseEnter */}
            <div className="relative">
              <div
                className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-slate-700"
                onMouseEnter={() => setShowTestimonialsPreview(true)}  // <-- así
                onMouseLeave={() => setShowTestimonialsPreview(false)}
              >
                <div className="text-4xl mb-3">💬</div>
                <Link href="/testimonial" className="font-semibold text-blue-800 dark:text-blue-300">
                  {t.cards.testimonials}
                </Link>
              </div>

              {showTestimonialsPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-green-50 to-teal-100 dark:from-slate-900 dark:to-slate-900/70 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-green-200 dark:border-slate-700 transition-all duration-200"
                  onMouseEnter={() => setShowTestimonialsPreview(true)}
                  onMouseLeave={() => setShowTestimonialsPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💬</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-800 dark:text-green-300">{t.cards.testimonials}</h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400">{t.labels.whatTheySay}</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                      <span className="text-xs text-gray-500 dark:text-slate-400">5.0</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-slate-300 italic">
                      "Excelente desarrollador, creativo"
                    </p>
                  </div>

                  <Link href="/testimonial" className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-4 py-2 rounded text-sm transition-all transform hover:scale-105 text-center block">
                    {t.actions.more}
                  </Link>
                </div>
              )}
            </div>

            {/* Contactos */}
            <div className="relative">
              <div
                className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-slate-700"
                onMouseEnter={() => setShowContactPreview(true)}
                onMouseLeave={() => setShowContactPreview(false)}
              >
                <div className="text-4xl mb-3">📞</div>
                <Link href="/contactos" className="font-semibold text-blue-800 dark:text-blue-300">
                  {t.cards.contact}
                </Link>
              </div>

              {showContactPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-orange-50 to-red-100 dark:from-slate-900 dark:to-slate-900/70 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-orange-200 dark:border-slate-700 transition-all duration-200"
                  onMouseEnter={() => setShowContactPreview(true)}
                  onMouseLeave={() => setShowContactPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-orange-800 dark:text-orange-300">{t.cards.contact}</h4>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📧</span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-slate-300">diegoalejandromallama@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📱</span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-slate-300">3225436249</span>
                    </div>
                  </div>

                  <Link href="/contactos" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded text-sm transition-all transform hover:scale-105 text-center block">
                    {t.actions.contact}
                  </Link>
                </div>
              )}
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
