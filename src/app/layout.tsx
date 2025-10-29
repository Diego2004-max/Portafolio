import './globals.css';
import Navbar from './components/Navbar';
import { LanguageProvider } from '../context/LanguageContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-[#e7edf7] dark:bg-[#0f172a] transition-colors duration-300">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
