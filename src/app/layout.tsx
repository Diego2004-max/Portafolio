import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  title: "Portafolio | Diego Mallama",
  description: "Desarrollador en formación apasionado por la tecnología, el diseño y la innovación.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
