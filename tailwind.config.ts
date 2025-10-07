/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class", // 👈 importante para el cambio claro/oscuro
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // busca clases tailwind en todo src
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  