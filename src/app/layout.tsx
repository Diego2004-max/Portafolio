import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: 'Portafolio Diego',
  description: 'Cambio de tema e idioma global',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
