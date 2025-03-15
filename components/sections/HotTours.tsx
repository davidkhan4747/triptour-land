import { motion } from 'framer-motion';
import React, { useEffect, useState, useCallback } from 'react';
import { Language } from '@/types';
import Image from 'next/image';

interface Tour {
  id: string;
  name: {
    en: string | null;
    ru: string;
    uz: string;
  };
  price: number;
  image: {
    name: string;
    path: string;
  };
  type: string[];
  country: string;
  hotel: string;
  duration: number;
  nutrition: string;
  startDate: string | null;
}

interface HotToursProps {
  language: Language;
}

export default function HotTours({ language }: HotToursProps): React.ReactElement {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTours = useCallback(async () => {
    try {
      const response = await fetch('https://api.triptour.uz/tour', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliYjczNDgxLWUwMGItNGM2Mi1iMWFjLTQ0YjQ5OGJhZGUxYiIsInVzZXJuYW1lIjoiY2VvNzc4OCIsInR5cGUiOiJVU0VSIiwicm9sZXMiOlsiU1VQRVJBRE1JTiJdLCJpYXQiOjE3Mzk4MDgyNDksImV4cCI6MTc0MjQwMDI0OX0.5qMlu8PkI3Pk9zQw2kVuZh9w0-rlfRPFX8EoVGWnhsA'
        }
      });

      if (!response.ok) {
        let errorMessage = '';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || response.statusText;
        } catch {
          errorMessage = response.statusText;
        }
        
        if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          throw new Error(errorMessage || 'Network error');
        }
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        console.error('API response is not an array:', data);
        throw new Error('Invalid API response format');
      }

      const hotTours = data
        .filter((tour: Tour) => 
          tour.type && Array.isArray(tour.type) && tour.type.includes('HOT')
        )
        .slice(0, 6);

      if (hotTours.length === 0) {
        setError(language === 'uz' ? 'Hozirda qaynoq turlar mavjud emas' :
                language === 'ru' ? 'Сейчас нет горящих туров' :
                'No hot tours available at the moment');
      } else {
        setError(null);
      }

      setTours(hotTours);
    } catch (error) {
      console.error('Error fetching tours:', error);
      setTours([]);

      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      if (errorMessage.includes('Unauthorized')) {
        setError(language === 'uz' ? 'Avtorizatsiya xatosi. Iltimos, keyinroq qayta urinib ko\'ring' :
                language === 'ru' ? 'Ошибка доступа. Попробуйте позже' :
                'Authorization error. Please try again later');
      } else if (errorMessage.includes('Network error')) {
        setError(language === 'uz' ? 'Internet bilan bog\'lanishda xatolik. Iltimos, internetingizni tekshiring' :
                language === 'ru' ? 'Нет связи с сервером. Проверьте подключение' :
                'Network error. Please check your internet connection');
      } else {
        setError(language === 'uz' ? 'Ma\'lumotlarni yuklashda xatolik yuz berdi' :
                language === 'ru' ? 'Не удалось загрузить туры' :
                'Error loading tour data');
      }
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  useEffect(() => {
    fetchTours();
  }, [language]); // Re-fetch when language changes

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'uz' ? 'Qaynoq turlar' :
               language === 'ru' ? 'Горящие туры' :
               'Hot Tours'}
            </h2>
            <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="relative h-64 w-full bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="h-10 bg-gray-200 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 rounded-full w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="hot-tours">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'uz' ? 'Qaynoq turlar' :
             language === 'ru' ? 'Горящие туры' :
             'Hot Tours'}
          </h2>
          <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Eng yaxshi narxlardagi maxsus takliflar' :
             language === 'ru' ? 'Специальные предложения по лучшим ценам' :
             'Special offers at the best prices'}
          </p>
        </motion.div>

        {error ? (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center p-4 mb-4 text-red-800 rounded-lg bg-red-50">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
            <motion.button
              onClick={() => {
                setError(null);
                setIsLoading(true);
                fetchTours();
              }}
              className="inline-flex items-center px-4 py-2 bg-[rgb(103,44,142)] text-white rounded-full hover:bg-[rgb(83,24,122)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {language === 'uz' ? 'Qayta urinish' :
               language === 'ru' ? 'Попробовать снова' :
               'Try Again'}
            </motion.button>
          </div>
        ) : tours.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">
              {language === 'uz' ? 'Hozirda qaynoq turlar mavjud emas' :
               language === 'ru' ? 'Горящих туров пока нет' :
               'No hot tours available at the moment'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:rotate-[0.5deg]"
            >
              <div className="relative h-64 w-full group overflow-hidden">
                <Image
                  src={`https://api.triptour.uz/${tour.image.name}`}
                  alt={tour.name[language] || ''}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute top-4 right-4 bg-[rgb(103,44,142)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-transform duration-200">
                  HOT
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-lg font-semibold mb-1">
                      {tour.name[language]}
                    </div>
                    <div className="text-sm opacity-90">
                      {language === 'uz' ? 'Batafsil ma\'lumot uchun qo\'ng\'iroq qiling' :
                       language === 'ru' ? 'Звоните для подробной информации' :
                       'Call for more details'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                {/* <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tour.name[language]}
                </h3> */}
                {tour.country && (
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">
                      {language === 'uz' ? 'Davlat: ' :
                       language === 'ru' ? 'Страна: ' :
                       'Country: '}
                    </span>
                    {tour.country}
                  </p>
                )}
                {tour.hotel && tour.hotel !== 'N/A' && (
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">
                      {language === 'uz' ? 'Mehmonxona: ' :
                       language === 'ru' ? 'Отель: ' :
                       'Hotel: '}
                    </span>
                    {tour.hotel}
                  </p>
                )}
                {tour.duration > 0 && (
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">
                      {language === 'uz' ? 'Davomiyligi: ' :
                       language === 'ru' ? 'Длительность: ' :
                       'Duration: '}
                    </span>
                    {tour.duration} {language === 'uz' ? 'kun' :
                                   language === 'ru' ? 'дней' :
                                   'days'}
                  </p>
                )}
                {tour.nutrition && (
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">
                      {language === 'uz' ? 'Ovqatlanish: ' :
                       language === 'ru' ? 'Питание: ' :
                       'Meals: '}
                    </span>
                    {tour.nutrition}
                  </p>
                )}
                <div className="flex justify-between items-center mt-4">
                  <motion.div 
                    className="relative group cursor-pointer"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-[rgb(103,44,142)] group-hover:opacity-0 transition-opacity duration-300">
                      {`${tour.price} сум`}
                    </div>
                    <div className="absolute top-0 left-0 w-full text-3xl font-bold text-[rgb(83,24,122)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {`${tour.price} сум`}
                    </div>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2">
                    <motion.a
                      href={`tel:${language === 'uz' ? '+998785557788' : 
                                    language === 'ru' ? '+998785557789' :
                                    '+998785557790'}`}
                      className="inline-block bg-[rgb(103,44,142)] text-white px-6 py-2 rounded-full text-sm font-semibold 
                               hover:bg-[rgb(83,24,122)] transition-all duration-300 
                               transform hover:scale-105 active:scale-95"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language === 'uz' ? 'Qo\'ng\'iroq qiling' :
                       language === 'ru' ? 'Позвонить' :
                       'Call Now'}
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
