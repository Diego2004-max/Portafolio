import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="
        min-h-screen w-full
        bg-[var(--bg-page)]
        text-[var(--text-primary)]
        transition-colors duration-300
      ">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="pt-28"> {/* espacio para el navbar */}
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
