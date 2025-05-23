import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Montserrat } from 'next/font/google';
import { Language } from '@/types';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

interface LayoutProps {
  children: ReactNode;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Layout({ children, language, onLanguageChange }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-white ${montserrat.className}`}>
      <Header language={language} onLanguageChange={onLanguageChange} />
      <main className="flex-grow">{children}</main>
      <Footer language={language} />
    </div>
  );
}
