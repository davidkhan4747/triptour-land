import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Language } from '@/types';

const navigation = [
  {
    href: '#about',
    label: {
      uz: 'Biz haqimizda',
      ru: 'О нас',
      en: 'About Us'
    }
  },
  {
    href: '#services',
    label: {
      uz: 'Xizmatlar',
      ru: 'Услуги',
      en: 'Services'
    }
  },
  {
    href: '#destinations',
    label: {
      uz: 'Yo\'nalishlar',
      ru: 'Направления',
      en: 'Destinations'
    }
  },
  {
    href: '#study',
    label: {
      uz: 'O\'quv markaz',
      ru: 'Учебный центр',
      en: 'Study Center'
    }
  },
  // {
  //   href: '#contact',
  //   label: {
  //     uz: 'Aloqa',
  //     ru: 'Контакты',
  //     en: 'Contact'
  //   }
  // }
];

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    onLanguageChange(lang);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-2 shadow-md' : 'bg-black/20 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className={`text-3xl font-bold tracking-tight transition-colors ${
              isScrolled 
                ? 'bg-gradient-to-r from-[rgb(103,44,142)] to-[rgb(133,74,172)] bg-clip-text text-transparent'
                : 'text-white'
            }`}
            >
              TripTour
            </h1>
          </Link>

          {/* Navigation and Language Selector */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[rgb(103,44,142)]' 
                    : 'text-white hover:text-[rgb(133,74,172)]'
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label[language]}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              {['uz', 'ru', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageSelect(lang as Language)}
                  className={`px-2 py-1 text-sm font-medium rounded-full transition-all ${
                    language === lang 
                      ? (isScrolled ? 'bg-[rgb(103,44,142)] text-white' : 'bg-white text-[rgb(103,44,142)]')
                      : (isScrolled ? 'text-gray-500 hover:text-[rgb(103,44,142)]' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}              
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col py-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-[rgb(103,44,142)] hover:bg-gray-50 transition-colors font-semibold text-lg"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label[language]}
                </Link>
              ))}
              <div className="px-4 py-3 border-t">
                <div className="flex flex-wrap gap-2">
                  {['uz', 'ru', 'en'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang as Language)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        language === lang
                          ? 'bg-[rgb(103,44,142)] text-white'
                          : 'text-gray-500 hover:text-[rgb(103,44,142)]'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
