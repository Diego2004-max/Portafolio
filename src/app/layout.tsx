import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "../app/components/Navbar";
import ThemeToggle from "../app/components/ThemeToggle";
import LanguageToggle from "../app/components/LanguageToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="transition-colors duration-300 bg-[var(--bg-main)] text-[var(--text-primary)] dark:bg-[var(--bg-main)]">
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex justify-between items-center px-8 pt-4 md:px-16">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
