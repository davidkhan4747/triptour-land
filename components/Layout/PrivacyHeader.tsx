import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/types';
import { useRouter } from 'next/router';

interface PrivacyHeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function PrivacyHeader({ language }: PrivacyHeaderProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    const basePath = '/privacy-policy';
    if (lang === 'en') {
      router.push(basePath);
    } else {
      router.push(`${basePath}/${lang}`);
    }
  };

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 py-2 shadow-md backdrop-blur-sm' : 'bg-purple-800 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group relative z-50">
            <div className={`relative transform transition-all duration-300 ease-in-out ${isScrolled ? 'w-10 h-10 scale-95' : 'w-12 h-12'}`}>
              <Image
                src={isScrolled ? '/logo.png' : '/logowhite.png'}
                alt="TripTour Logo"
                fill
                className="object-contain transition-all duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <h1 className={`text-3xl font-bold tracking-tight transition-colors ${
              isScrolled 
                ? 'bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent'
                : 'text-white'
            }`}
            >
              TripTour
            </h1>
          </Link>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            {['uz', 'ru', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageSelect(lang as Language)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  language === lang 
                    ? (isScrolled ? 'bg-purple-800 text-white' : 'bg-white text-purple-800')
                    : (isScrolled ? 'text-gray-500 hover:text-purple-800' : 'text-white/70 hover:text-white')
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}              
          </div>
        </nav>
      </div>
    </header>
  );
}
