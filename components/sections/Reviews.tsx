import { motion } from 'framer-motion';
import { useState } from 'react';
import { Language } from '@/types';

const reviews = [
  {
    id: 1,
    name: {
      uz: 'Aziz Karimov',
      ru: 'Азиз Каримов',
      en: 'Aziz Karimov'
    },
    review: {
      uz: 'Ajoyib sayohat uchun rahmat! Hammasi yaxshi tashkil etilgan, mehmonxona va transport xizmatlari yuqori darajada.',
      ru: 'Спасибо за отличное путешествие! Все было хорошо организовано, отличный сервис в гостинице и транспорте.',
      en: 'Thank you for the great trip! Everything was well organized, excellent hotel and transport services.'
    },
    rating: 5,
    destination: {
      uz: 'Dubai',
      ru: 'Дубай',
      en: 'Dubai'
    }
  },
  {
    id: 2,
    name: {
      uz: 'Malika Saidova',
      ru: 'Малика Саидова',
      en: 'Malika Saidova'
    },
    review: {
      uz: 'Professional va do\'stona jamoa. Ular bizning dam olishimizni unutilmas qilishdi.',
      ru: 'Профессиональная и дружелюбная команда. Они сделали наш отдых незабываемым.',
      en: 'Professional and friendly team. They made our vacation unforgettable.'
    },
    rating: 5,
    destination: {
      uz: 'Turkiya',
      ru: 'Турция',
      en: 'Turkey'
    }
  },
  {
    id: 3,
    name: {
      uz: 'Jamshid Alimov',
      ru: 'Джамшид Алимов',
      en: 'Jamshid Alimov'
    },
    review: {
      uz: 'Zo\'r agentlik! Hammasi aniq va tez. Keyingi safar ham albatta ular bilan ketamiz.',
      ru: 'Отличное агентство! Все четко и быстро. В следующий раз обязательно поедем с ними.',
      en: 'Great agency! Everything is precise and fast. We will definitely travel with them next time.'
    },
    rating: 5,
    destination: {
      uz: 'Tayland',
      ru: 'Таиланд',
      en: 'Thailand'
    }
  }
];

interface ReviewsProps {
  language: Language;
}

export default function Reviews({ language }: ReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'uz' ? 'Mijozlar fikri' :
               language === 'ru' ? 'Отзывы клиентов' :
               'Customer Reviews'}
            </h2>
            <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'uz' ? 'Bizning mijozlarimiz biz haqimizda nima deyishadi' :
               language === 'ru' ? 'Что говорят о нас наши клиенты' :
               'What our customers say about us'}
            </p>
          </motion.div>

          {/* Reviews Carousel */}
          <motion.div 
            className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center text-center">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xl text-gray-600 italic mb-8">
                &ldquo;{reviews[currentIndex].review[language]}&rdquo;
              </p>

              {/* Author */}
              <div className="mb-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  {reviews[currentIndex].name[language]}
                </h4>
                <p className="text-[rgb(103,44,142)]">
                  {reviews[currentIndex].destination[language]}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full left-0 px-4">
              <button
                onClick={prevReview}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors
                            ${index === currentIndex ? 'bg-[rgb(103,44,142)]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
