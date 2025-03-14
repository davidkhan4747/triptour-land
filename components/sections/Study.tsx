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
          <p className="text-gray-600 text-lg leading-relaxed">
            {content.description[language]}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Study;
