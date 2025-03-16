import { ReactNode } from 'react';
import PrivacyHeader from './PrivacyHeader';
import { Montserrat } from 'next/font/google';
import { Language } from '@/types';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

interface PrivacyLayoutProps {
  children: ReactNode;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function PrivacyLayout({ children, language, onLanguageChange }: PrivacyLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-white ${montserrat.className}`}>
      <PrivacyHeader language={language} onLanguageChange={onLanguageChange} />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
