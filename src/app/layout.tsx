// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* fondo de globals*/}
      <body className="min-h-screen text-[var(--text-primary)] transition-colors duration-300">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
