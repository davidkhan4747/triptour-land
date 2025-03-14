import { ReactNode } from 'react';
import Header from './Header';
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
    <div className={`min-h-screen bg-white ${montserrat.className}`}>
      <Header language={language} onLanguageChange={onLanguageChange} />
      <main>{children}</main>
    </div>
  );
}
