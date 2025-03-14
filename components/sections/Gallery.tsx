import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Language } from '@/types';

const gallery = [
  {
    id: 'dubai',
    name: {
      uz: 'Dubai',
      ru: 'Дубай',
      en: 'Dubai'
    },
    image: '/images/dubia.jpg',
    size: 'large'
  },
  {
    id: 'thailand',
    name: {
      uz: 'Tayland',
      ru: 'Таиланд',
      en: 'Thailand'
    },
    image: '/images/tay1.jpg',
    size: 'medium'
  },
  {
    id: 'japan',
    name: {
      uz: 'Yaponiya',
      ru: 'Япония',
      en: 'Japan'
    },
    image: '/images/yap.jpg',
    size: 'small'
  }
];

interface GalleryProps {
  language: Language;
}

export default function Gallery({ language }: GalleryProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleGallery = showAll ? gallery : gallery.slice(0, 6);

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

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'uz' ? 'Fotogalereya' :
               language === 'ru' ? 'Фотогалерея' :
               'Photo Gallery'}
            </h2>
            <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'uz' ? 'Eng qiziqarli va unutilmas sayohat onlari' :
               language === 'ru' ? 'Самые интересные и незабываемые моменты путешествий' :
               'Most interesting and memorable travel moments'}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {visibleGallery.map((item) => (
              <motion.div
                key={item.id}
                className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow
                          ${item.size === 'large' ? 'row-span-2 col-span-2' :
                           item.size === 'medium' ? 'row-span-2' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`relative ${item.size === 'large' ? 'h-[600px]' :
                                          item.size === 'medium' ? 'h-[500px]' : 'h-[300px]'}`}>
                  <Image
                    src={item.image}
                    alt={item.name[language]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {item.name[language]}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {gallery.length > 6 && (
            <motion.div 
              className="text-center mt-12"
              variants={itemVariants}
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
        </motion.div>
      </div>
    </section>
  );
}
