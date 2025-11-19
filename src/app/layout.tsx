import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-[var(--bg-page)]">   {/* 🔥 FONDO GLOBAL REAL */}
              <Navbar />
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
