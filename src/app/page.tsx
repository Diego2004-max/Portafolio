'use client';

import { useState } from 'react';
import Navbar from './Components/Navbar';
import { useTheme } from './context/ThemeContext';
import { translations } from './context/Translations';


export default function Home() {
  const { language } = useTheme();
  const [showAboutPreview, setShowAboutPreview] = useState(false);
  const [showAcademicPreview, setShowAcademicPreview] = useState(false);
  const [showProjectsPreview, setShowProjectsPreview] = useState(false);
  const [showTestimonialsPreview, setShowTestimonialsPreview] = useState(false);
  const [showContactPreview, setShowContactPreview] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center items-start py-10 px-4">
      {/* ───── Caja principal gris (contenido dentro) ───── */}
      <div className="w-full max-w-6xl bg-gray-100 rounded-2xl shadow-lg overflow-visible relative">

        {/* 🔹 Contenedor de navbar + botones */}
        <div className="flex items-center justify-between px10 py-3">
          {/* Botón idioma */}
          <button className="px-10 py-2.5 rounded-lg bg-blue-200 text-blue-900 hover:bg-blue-300">
            EN
          </button>

          {/* Navbar */}
          <nav className="flex-1 mx-15 bg-blue-600 text-white shadow-md z-50 rounded-4xl py-0.2">
            <div className="flex justify-center items-center p-4 w-full">
              <ul className="flex gap-6">
                <li><a href="Acerca_de_mi" className="hover:text-blue-200">Acerca de mí</a></li>
                <li><a href="Ex_academica" className="hover:text-blue-200">Ex. acadm</a></li>
                <li><a href="Proyectos" className="hover:text-blue-200">Proyectos</a></li>
                <li><a href="Testimonios" className="hover:text-blue-200">Testimonios</a></li>
                <li><a href="Contactos" className="hover:text-blue-200">Contactos</a></li>
              </ul>
            </div>
          </nav>

          {/* Botón modo claro/oscuro */}
          <button className="px-7.5 py-2.5 rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400">
            🌙
          </button>
        </div>

        {/* 🔹 Hero */}
        <section className="flex flex-col items-center text-center pt-16 pb-12 px-4">
          <img
            src="/me.jpg"
            alt="Foto perfil"
            className="w-32 h-32 rounded-full shadow-md"
          />

            <div className="flex flex-col items-center bg-blue-200 rounded-lg py-0.5 px-12 mb-2.5 mt-2.5">
              <h2 className="text-2xl font-bold mt-6 text-blue-400">
              Soy Diego Alejandro
              <br />
              Mallama Yandun
            </h2>
            </div>
          <p className="mt-3 max-w-lg text-gray-700">
            Desarrollador en formación apasionado por la tecnología, el diseño y la innovación.
          </p>

          {/* Botones redes */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
              LinkedIn
            </a>
            <a href="#" className="bg-blue-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow">
              Instagram
            </a>
            <a href="#" className="bg-blue-500 hover:bg-gray-900 text-white px-4 py-2 rounded shadow">
              GitHub
            </a>
          </div>

          {/* Botón CV */}
          <button className="mt-6 bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded shadow">
            Descargar CV ↓
          </button>
        </section>

        {/* 🔹 Cards */}
        <section className="relative max-w-6xl mx-auto pb-16 px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
            {/* Acerca de mí */}
            <div className="relative">
              <div
                className="bg-white shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50"
                onMouseEnter={() => setShowAboutPreview(true)}
                onMouseLeave={() => setShowAboutPreview(false)}
              >
                <div className="text-4xl mb-3">👤</div>
                <a href="/Acerca_de_mi" className="font-semibold text-blue-800">Acerca de mi</a>
              </div>

              {showAboutPreview && (
                <div
                  className="absolute top-0 left-0 bg-white shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-blue-200 transition-all duration-200"
                  onMouseEnter={() => setShowAboutPreview(true)}
                  onMouseLeave={() => setShowAboutPreview(false)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="/me.jpg"
                      alt="Foto perfil"
                      className="w-16 h-16 rounded-full shadow-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-blue-800 mb-2">Acerca de mi</h4>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Aquí puedes conocer más sobre mi experiencia, habilidades y pasión por el desarrollo web.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm">📷</span>
                      </a>
                      <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-sm">in</span>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-white text-sm">🐱</span>
                      </a>
                    </div>
                    <a
                      href="/Acerca_de_mi"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm cursor-pointer transition-colors duration-200"
                    >
                      Ir
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Experiencia Académica */}
            <div className="relative">
              <div
                className="bg-white shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
                onMouseEnter={() => setShowAcademicPreview(true)}
                onMouseLeave={() => setShowAcademicPreview(false)}
              >
                <div className="text-4xl mb-3">🎓</div>
                <a href="/Ex_academica" className="font-semibold text-blue-800">Ex. acadm</a>
              </div>

              {showAcademicPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-blue-200 transition-all duration-200"
                  onMouseEnter={() => setShowAcademicPreview(true)}
                  onMouseLeave={() => setShowAcademicPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-800">Mi Trayectoria</h4>
                      <p className="text-sm text-gray-600">Educación & Formación</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Ingeniería de Software</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Certificaciones</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Cursos</span>
                    </div>
                  </div>

                  <a
                    href="/Ex_academica"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded text-sm cursor-pointer transition-all duration-200 transform hover:scale-105 text-center block"
                  >
                    Ver Detalles →
                  </a>
                </div>
              )}
            </div>

            {/* Proyectos */}
            <div className="relative">
              <div
                className="bg-white shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
                onMouseEnter={() => setShowProjectsPreview(true)}
                onMouseLeave={() => setShowProjectsPreview(false)}
              >
                <div className="text-4xl mb-3 ">💡</div>
                <a href="/Proyectos" className="font-semibold text-blue-800">Proyectos</a>
              </div>

              {showProjectsPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-purple-50 to-pink-100 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-purple-200 transition-all duration-200"
                  onMouseEnter={() => setShowProjectsPreview(true)}
                  onMouseLeave={() => setShowProjectsPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-purple-800">Mis Proyectos</h4>
                      <p className="text-sm text-gray-600">Innovación & Creatividad</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-lg mb-1">🌐</div>
                      <p className="text-xs text-gray-600">Web Apps</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-lg mb-1">📱</div>
                      <p className="text-xs text-gray-600">Mobile</p>
                    </div>
                  </div>

                  <a
                    href="/Proyectos"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded text-sm cursor-pointer transition-all duration-200 transform hover:scale-105 text-center block"
                  >
                    Explorar Proyectos →
                  </a>
                </div>
              )}
            </div>

            {/* Testimonios */}
            <div className="relative">
              <div
                className="bg-white shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
                onMouseEnter={() => setShowTestimonialsPreview(true)}
                onMouseLeave={() => setShowTestimonialsPreview(false)}
              >
                <div className="text-4xl mb-3">💬</div>
                <a href="/Testimonios" className="font-semibold text-blue-800">Testimonios</a>
              </div>

              {showTestimonialsPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-green-50 to-teal-100 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-green-200 transition-all duration-200"
                  onMouseEnter={() => setShowTestimonialsPreview(true)}
                  onMouseLeave={() => setShowTestimonialsPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💬</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-800">Testimonios</h4>
                      <p className="text-sm text-gray-600">Lo que dicen sobre mí</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                      <span className="text-xs text-gray-500">5.0</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">
                      "Excelente desarrollador, creativo"
                    </p>
                  </div>

                  <a
                    href="/Testimonios"
                    className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-4 py-2 rounded text-sm cursor-pointer transition-all duration-200 transform hover:scale-105 text-center block"
                  >
                    Ver Más Testimonios →
                  </a>
                </div>
              )}
            </div>

            {/* Contactos */}
            <div className="relative">
              <div
                className="bg-white shadow-md p-6 rounded-lg text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
                onMouseEnter={() => setShowContactPreview(true)}
                onMouseLeave={() => setShowContactPreview(false)}
              >
                <div className="text-4xl mb-3">📞</div>
                <a href="/Contactos" className="font-semibold text-blue-800">Contactos</a>
              </div>

              {showContactPreview && (
                <div
                  className="absolute top-0 left-0 bg-gradient-to-br from-orange-50 to-red-100 shadow-2xl p-6 rounded-lg w-80 transform -translate-y-2 z-20 border border-orange-200 transition-all duration-200"
                  onMouseEnter={() => setShowContactPreview(true)}
                  onMouseLeave={() => setShowContactPreview(false)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-orange-800">Contáctame</h4>

                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📧</span>
                      </div>
                      <span className="text-sm text-gray-700">diegoalejandromallama@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📱</span>
                      </div>
                      <span className="text-sm text-gray-700">3225436249</span>
                    </div>
      
                    
                  </div>

                  <a
                    href="/Contactos"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded text-sm cursor-pointer transition-all duration-200 transform hover:scale-105 text-center block"
                  >
                    Enviar Mensaje →
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
