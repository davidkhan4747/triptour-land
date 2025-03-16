import { useState } from 'react';

import { Montserrat } from 'next/font/google';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/SEO';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Services from '@/components/sections/Services';
import Destinations from '@/components/sections/Destinations';
// import Reviews from '@/components/sections/Reviews';
import Study from '@/components/sections/Study';
import Branches from '@/components/sections/Branches';

import HotTours from '@/components/sections/HotTours';
import { Language } from '@/types';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
});

export default function Home() {
  const [language, setLanguage] = useState<Language>('uz');

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className={`${montserrat.variable} font-sans bg-white`}>
      <SEO language={language} />
      <Layout language={language} onLanguageChange={handleLanguageChange}>
        <Hero language={language} />
        <HotTours language={language} />
        <About language={language} />
        <Services language={language} />
        <Destinations language={language} />
        <Study language={language} />
        {/* <Reviews language={language} /> */}
        <Branches language={language} />
        <Contact language={language} />

        {/*<Footer language={language} />*/}
      </Layout>
    </div>
  );
}
