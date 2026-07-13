import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saurav - Software Developer',
  description: 'Full-Stack Developer & Generative AI Enthusiast Portfolio',
  icons: {
    icon: '/Mylogo.png',
  },
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
