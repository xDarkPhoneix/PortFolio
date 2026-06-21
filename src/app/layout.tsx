import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saurav - Software Developer',
  description: 'Full-Stack Developer & Generative AI Enthusiast Portfolio',
  openGraph: {
    title: 'Saurav - Software Developer',
    description: 'Full-Stack Developer & Generative AI Enthusiast',
    type: 'website',
    images: [{ url: '/Mylogo.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
