import React from 'react';
import { useRouter } from 'next/router';
import PrivacyLayout from '../../components/Layout/PrivacyLayout';
import { Language } from '@/types';
import Head from 'next/head';
import { content, phoneNumbers } from '@/lib/privacy-policy';

const PrivacyPolicyUz = () => {
  const router = useRouter();
  const language: Language = 'uz';

  const handleLanguageChange = (newLang: Language) => {
    const basePath = '/privacy-policy';
    if (newLang === 'en') {
      router.push(basePath);
    } else {
      router.push(`${basePath}/${newLang}`);
    }
  };

  return (
    <PrivacyLayout 
      language={language}
      onLanguageChange={handleLanguageChange}
    >
      <Head>
        <title>{content.title[language]} - TripTour</title>
      </Head>
      <div className="container mx-auto px-4 py-8 max-w-4xl mt-20">
        <h1 className="text-3xl font-bold mb-6 text-purple-800 pt-4">
          {content.title[language]}
        </h1>
        
        <p className="text-gray-600 mb-8 text-base">
          {content.lastUpdated[language]}
        </p>

        <p className="text-lg mb-8 text-gray-700">
          {content.introduction[language]}
        </p>

        <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-purple-700 border-b pb-3">
            {content.dataCollection.title[language]}
          </h2>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed">
            {content.dataCollection.content[language]}
          </p>
        </section>

        <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-purple-700 border-b pb-3">
            {content.dataUsage.title[language]}
          </h2>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed">
            {content.dataUsage.content[language]}
          </p>
        </section>

        <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-purple-700 border-b pb-3">
            {content.dataSecurity.title[language]}
          </h2>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed">
            {content.dataSecurity.content[language]}
          </p>
        </section>

        <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-purple-700 border-b pb-3">
            {content.contact.title[language]}
          </h2>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed">
            {content.contact.content[language]}
          </p>
          <div className="mt-6 text-gray-700 font-medium text-lg">
            <a 
              href={`tel:${phoneNumbers[language]}`}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors group"
              aria-label={`Bizga qo'ng'iroq qiling: ${phoneNumbers[language]}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="group-hover:text-purple-700 transition-colors font-mono">
                {phoneNumbers[language]}
              </span>
            </a>
          </div>
        </section>
      </div>
    </PrivacyLayout>
  );
};

export default PrivacyPolicyUz;
