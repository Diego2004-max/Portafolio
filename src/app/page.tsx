export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-200">
        <h1 className="text-xl font-bold">Diego Mallama</h1>
        <ul className="flex gap-4">
          <li><a href="#acerca">Acerca de mí</a></li>
          <li><a href="#ex">Ex. acadm</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>
      </nav>

      {/* 🔹 Hero */}
      <section className="flex flex-col items-center text-center py-10">
        <img
          src="/foto.png"
          alt="Foto perfil"
          className="w-28 h-28 rounded-full"
        />
        <h2 className="text-2xl font-bold mt-4">
          Soy Diego Alejandro Mallama Yandun
        </h2>
        <p className="mt-2 text-gray-600">
          Desarrollador en formación apasionado por la tecnología, el diseño y la innovación
        </p>

        {/* Botones */}
        <div className="flex gap-3 mt-4">
          <a href="#" className="bg-blue-500 text-white px-3 py-1 rounded">LinkedIn</a>
          <a href="#" className="bg-pink-500 text-white px-3 py-1 rounded">Instagram</a>
          <a href="#" className="bg-gray-800 text-white px-3 py-1 rounded">GitHub</a>
        </div>

        <button className="mt-4 bg-blue-300 px-4 py-2 rounded">
          Descargar CV ↓
        </button>
      </section>

      {/* 🔹 Cards */}
      <section className="flex justify-center gap-6 mt-10">
        <div className="bg-white shadow-md p-4 w-36 text-center rounded hover:bg-blue-100">
          <a href="/Ex_academica">Ex. acadm</a>
        </div>
        <div className="bg-white shadow-md p-4 w-36 text-center rounded hover:bg-blue-100">
          <a href="/Proyectos">Proyectos</a>
        </div>
        <div className="bg-white shadow-md p-4 w-36 text-center rounded hover:bg-blue-100">
          <a href="/Testimonios">Testimonios</a>
        </div>
        <div className="bg-white shadow-md p-4 w-36 text-center rounded hover:bg-blue-100">
          <a href="/Contactos">Contactos</a>
        </div>
      </section>
    </main>
  );
}
