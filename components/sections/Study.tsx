import { motion } from 'framer-motion';
import React from 'react';
import { Language } from '@/types';
import Image from 'next/image';

interface StudyProps {
  language: Language;
}

const Study = ({ language }: StudyProps): React.ReactElement => {
  const content = {
    title: {
      uz: 'Trip Tour Study',
      ru: 'Trip Tour Study',
      en: 'Trip Tour Study'
    },
    subtitle: {
      uz: "O'zbekistonda yetakchi bo'lgan turizm maktabi",
      ru: 'Ведущая туристическая школа в Узбекистане',
      en: 'Leading Tourism School in Uzbekistan'
    },
    description: {
      uz: "Ilk bor 2023 yilda ochilgan turizm maktabimizda hozirgi kunga qadar 65 dan ortiq guruhlarda, 2 xil yo'nalishlar (turagent; tur firma ochish) bo'yicha 3000 dan oshiq o'quvchilar tamomlashdi",
      ru: 'В нашей туристической школе, впервые открытой в 2023 году, более 3000 студентов окончили обучение в более чем 65 группах по 2 направлениям (турагент; открытие турфирмы)',
      en: 'In our tourism school, first opened in 2023, more than 3000 students have graduated in over 65 groups across 2 directions (travel agent; opening a tour company)'
    },
    contact: {
      uz: 'Batafsil ma\'lumot uchun qo\'ng\'iroq qiling',
      ru: 'Звоните для подробной информации',
      en: 'Call for more information'
    }
  };

  return (
    <section className="py-20 bg-white" id="study">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <div className="relative w-32 h-32 mx-auto mb-12">
            <Image
              src="/logo.png"
              alt="TripTour Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title[language]}
          </h2>
          <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
          <h3 className="text-2xl text-[rgb(103,44,142)] font-semibold mb-6">
            {content.subtitle[language]}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {content.description[language]}
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[rgb(103,44,142)] font-medium">
              {content.contact[language]}
            </p>
            <a 
              href="tel:+998900177788" 
              className="text-2xl font-bold text-[rgb(103,44,142)] hover:text-[rgb(133,74,172)] transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +998 90 017 77 88
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Study;
