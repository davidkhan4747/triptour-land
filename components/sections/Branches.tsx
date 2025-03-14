import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Language } from '@/types';
import Image from 'next/image';

type LanguageString = {
  uz: string;
  ru: string;
  en: string;
};

interface Branch {
  id: number;
  name: LanguageString;
  address?: LanguageString;
  phone: string;
  type: LanguageString;
  image?: string;
}

interface BranchesProps {
  language: Language;
}

const branches: Branch[] = [
  {
    id: 1,
    name: {
      uz: 'Toshkent',
      ru: 'Ташкент',
      en: 'Tashkent'
    },
    address: {
      uz: 'Ipak Yo\'li ko\'chasi 48',
      ru: 'Улица Ипак Йули 48',
      en: '48 Ipak Yuli Street'
    },
    phone: '90 041 77 88',
    type: {
      uz: 'Markaziy ofis',
      ru: 'Центральный офис',
      en: 'Central Office'
    },
    image: '/assets/images/branches/tashkent_bratskiy.jpeg'
  },
  {
    id: 2,
    name: {
      uz: 'Xorazm',
      ru: 'Хорезм',
      en: 'Khorezm'
    },
    phone: '90 829 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/namangan.PNG'
  },
  {
    id: 4,
    name: {
      uz: 'Buxoro',
      ru: 'Бухара',
      en: 'Bukhara'
    },
    phone: '90 244 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/buxoro.JPG'
  },
  {
    id: 5,
    name: {
      uz: 'Navoiy',
      ru: 'Навои',
      en: 'Navoi'
    },
    phone: '90 069 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/navoi.jpeg'
  },
  {
    id: 6,
    name: {
      uz: 'Samarqand',
      ru: 'Самарканд',
      en: 'Samarkand'
    },
    phone: '90 052 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/samarqand.jpeg'
  },
  {
    id: 8,
    name: {
      uz: 'Namangan',
      ru: 'Наманган',
      en: 'Namangan'
    },
    phone: '90 053 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/namangan.PNG'
  },
  {
    id: 9,
    name: {
      uz: 'Qo\'qon',
      ru: 'Коканд',
      en: 'Kokand'
    },
    phone: '90 816 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/qoqon.jpeg'
  },
  {
    id: 10,
    name: {
      uz: 'Farg\'ona',
      ru: 'Фергана',
      en: 'Fergana'
    },
    phone: '90 812 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/fargona.JPG'
  },
  {
    id: 11,
    name: {
      uz: 'Qarshi',
      ru: 'Карши',
      en: 'Karshi'
    },
    phone: '90 112 77 88',
    type: {
      uz: 'Franchiza',
      ru: 'Франшиза',
      en: 'Franchise'
    },
    image: '/assets/images/branches/qarshi.jpeg'
  }
];

const Branches = ({ language }: BranchesProps): React.ReactElement => {
  const [showAll, setShowAll] = useState(false);
  const visibleBranches = showAll ? branches : branches.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50" id="branches">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'uz' ? 'Bizning filiallarimiz' :
             language === 'ru' ? 'Наши филиалы' :
             'Our Branches'}
          </h2>
          <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'O\'zbekistonning asosiy shaharlarida joylashgan filiallarimiz' :
             language === 'ru' ? 'Наши филиалы в основных городах Узбекистана' :
             'Our branches located in major cities of Uzbekistan'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBranches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {branch.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={branch.image}
                    alt={branch.name[language]}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {branch.name[language]}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-[rgb(103,44,142)] text-white rounded-full">
                    {branch.type[language]}
                  </span>
                </div>
                {branch.address && (
                  <p className="text-gray-600 mb-4">
                    {branch.address[language]}
                  </p>
                )}
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-[rgb(103,44,142)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:+998${branch.phone}`} className="hover:text-[rgb(103,44,142)] transition-colors">
                    +998 {branch.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {branches.length > 6 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white text-[rgb(103,44,142)] border-2 border-[rgb(103,44,142)] px-8 py-3 rounded-full
                         hover:bg-[rgb(103,44,142)] hover:text-white transition-all duration-300
                         transform hover:scale-105 active:scale-95 font-medium"
            >
              {showAll ? 
                (language === 'uz' ? 'Kamroq ko\'rsatish' :
                 language === 'ru' ? 'Показать меньше' :
                 'Show Less') :
                (language === 'uz' ? 'Ko\'proq ko\'rsatish' :
                 language === 'ru' ? 'Показать больше' :
                 'Show More')}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Branches;
