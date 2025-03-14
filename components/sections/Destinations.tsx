import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Language } from '@/types';

const destinations = [
  {
    id: 'uae',
    name: {
      uz: 'BAA',
      ru: 'ОАЭ',
      en: 'UAE'
    },
    image: '/images/destinations/dubai.jpg',
    description: {
      uz: 'Dubaydagi hashamatli mehmonxonalar va zamonaviy arxitektura',
      ru: 'Роскошные отели и современная архитектура Дубая',
      en: 'Luxury hotels and modern architecture in Dubai'
    }
  },
  {
    id: 'turkey',
    name: {
      uz: 'Turkiya',
      ru: 'Турция',
      en: 'Turkey'
    },
    image: '/images/destinations/turkey.jpg',
    description: {
      uz: 'Kappadokiya va Istanbulning tarixiy joylari',
      ru: 'Исторические места Каппадокии и Стамбула',
      en: 'Historical sites of Cappadocia and Istanbul'
    }
  },
  {
    id: 'thailand',
    name: {
      uz: 'Tayland',
      ru: 'Таиланд',
      en: 'Thailand'
    },
    image: '/images/destinations/thailand.jpg',
    description: {
      uz: 'Tropik plyajlar va Bangkokning hayratlanarli ibodatxonalari',
      ru: 'Тропические пляжи и удивительные храмы Бангкока',
      en: 'Tropical beaches and amazing temples of Bangkok'
    }
  },
  {
    id: 'vietnam',
    name: {
      uz: 'Vetnam',
      ru: 'Вьетнам',
      en: 'Vietnam'
    },
    image: '/images/destinations/vietnam.jpg',
    description: {
      uz: 'Ha Long qo\'ltig\'i va Xanoyning madaniy merosi',
      ru: 'Залив Ха Лонг и культурное наследие Ханоя',
      en: 'Ha Long Bay and cultural heritage of Hanoi'
    }
  },
  {
    id: 'egypt',
    name: {
      uz: 'Sharm el Sheyh',
      ru: 'Шарм-эль-Шейх',
      en: 'Sharm El Sheikh'
    },
    image: '/images/destinations/sharm.jpg',
    description: {
      uz: 'Qizil dengiz va suv osti g\'aroyibotlari',
      ru: 'Красное море и подводные чудеса',
      en: 'Red Sea and underwater wonders'
    }
  },
  {
    id: 'georgia',
    name: {
      uz: 'Gruziya',
      ru: 'Грузия',
      en: 'Georgia'
    },
    image: '/images/destinations/georgia.jpg',
    description: {
      uz: 'Tog\'lar va qadimiy cherkovlar',
      ru: 'Горы и древние церкви',
      en: 'Mountains and ancient churches'
    }
  },
  {
    id: 'azerbaijan',
    name: {
      uz: 'Ozarbayjon',
      ru: 'Азербайджан',
      en: 'Azerbaijan'
    },
    image: '/images/destinations/azerbaijan.jpg',
    description: {
      uz: 'Boku shahri va Ozarbayjon madaniyati',
      ru: 'Город Баку и культура Азербайджана',
      en: 'Baku city and Azerbaijani culture'
    }
  },
  {
    id: 'oman',
    name: {
      uz: 'Oman',
      ru: 'Оман',
      en: 'Oman'
    },
    image: '/images/destinations/oman.jpg',
    description: {
      uz: 'Qadimiy qal\'alar va cho\'l safari',
      ru: 'Древние крепости и пустынное сафари',
      en: 'Ancient forts and desert safari'
    }
  },
  {
    id: 'qatar',
    name: {
      uz: 'Qatar',
      ru: 'Катар',
      en: 'Qatar'
    },
    image: '/images/destinations/qatar.jpg',
    description: {
      uz: 'Zamonaviy Doha va an\'anaviy bozorlar',
      ru: 'Современная Доха и традиционные рынки',
      en: 'Modern Doha and traditional markets'
    }
  },
  {
    id: 'sri-lanka',
    name: {
      uz: 'Shri Lanka',
      ru: 'Шри-Ланка',
      en: 'Sri Lanka'
    },
    image: '/images/destinations/sri-lanka.jpg',
    description: {
      uz: 'Choy plantatsiyalari va buddaviylik ibodatxonalari',
      ru: 'Чайные плантации и буддийские храмы',
      en: 'Tea plantations and Buddhist temples'
    }
  },
  {
    id: 'malaysia',
    name: {
      uz: 'Malayziya',
      ru: 'Малайзия',
      en: 'Malaysia'
    },
    image: '/images/destinations/malaysia.jpg',
    description: {
      uz: 'Kuala-Lumpur minorasi va milliy bog\'lar',
      ru: 'Башни Куала-Лумпур и национальные парки',
      en: 'Kuala Lumpur towers and national parks'
    }
  },
  {
    id: 'indonesia',
    name: {
      uz: 'Indoneziya',
      ru: 'Индонезия',
      en: 'Indonesia'
    },
    image: '/images/destinations/indonesia.jpg',
    description: {
      uz: 'Bali orollari va madaniy meros',
      ru: 'Острова Бали и культурное наследие',
      en: 'Bali islands and cultural heritage'
    }
  },
  {
    id: 'goa',
    name: {
      uz: 'Goa',
      ru: 'Гоа',
      en: 'Goa'
    },
    image: '/images/destinations/goa.jpg',
    description: {
      uz: 'Plyajlar va portugaliya me\'morchiligi',
      ru: 'Пляжи и португальская архитектура',
      en: 'Beaches and Portuguese architecture'
    }
  },
  {
    id: 'maldives',
    name: {
      uz: 'Maldiv',
      ru: 'Мальдивы',
      en: 'Maldives'
    },
    image: '/images/destinations/maldives.jpg',
    description: {
      uz: 'Suv usti villalari va marjon riflari',
      ru: 'Виллы над водой и коралловые рифы',
      en: 'Overwater villas and coral reefs'
    }
  },
  {
    id: 'china',
    name: {
      uz: 'Xitoy',
      ru: 'Китай',
      en: 'China'
    },
    image: '/images/destinations/china.jpg',
    description: {
      uz: 'Buyuk Xitoy devori va imperatorlik saroylari',
      ru: 'Великая Китайская стена и императорские дворцы',
      en: 'Great Wall and imperial palaces'
    }
  }
];

interface DestinationsProps {
  language: Language;
}

import { useState } from 'react';

export default function Destinations({ language }: DestinationsProps) {
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const visibleDestinations = destinations.slice(0, displayCount);

  const handleShowMore = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (showAll) {
      // Collapsing: first update state, then animate
      setShowAll(false);
      setTimeout(() => {
        setDisplayCount(6);
        setIsAnimating(false);
      }, 300);
    } else {
      // Expanding: first animate, then update state
      setDisplayCount(destinations.length);
      setTimeout(() => {
        setShowAll(true);
        setIsAnimating(false);
      }, 300);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.03,
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.4,
        bounce: 0.1,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="destinations">
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
              {language === 'uz' ? 'Mashhur yo\'nalishlar' :
               language === 'ru' ? 'Популярные направления' :
               'Popular Destinations'}
            </h2>
            <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'uz' ? 'Eng mashhur va sevimli sayohat yo\'nalishlari' :
               language === 'ru' ? 'Самые популярные и любимые направления путешествий' :
               'Most popular and beloved travel destinations'}
            </p>
          </motion.div>

          {/* Destinations Grid */}
          <motion.div 
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={displayCount}
            layout
            transition={{ duration: 0.3, type: 'spring', bounce: 0.1, staggerChildren: 0.08 }}
            style={{
              minHeight: showAll ? '1200px' : '600px',
              transition: 'min-height 0.3s ease-out',
              willChange: 'min-height, transform'
            }}
          >
            <AnimatePresence mode="wait">
            {visibleDestinations.map((destination, index) => (
              <motion.a
                href="https://t.me/triptour_uz"
                target="_blank"
                rel="noopener noreferrer"
                key={destination.id}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={destination.image}
                    alt={destination.name[language]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 6}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {destination.name[language]}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {destination.description[language]}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
            </AnimatePresence>
          </motion.div>

          {destinations.length > 6 && (
            <motion.div 
              className="text-center mt-12 flex items-center justify-center gap-4"
              variants={itemVariants}
            >
              <button
                onClick={handleShowMore}
                disabled={isAnimating}
                className="bg-white text-[rgb(103,44,142)] border-2 border-[rgb(103,44,142)] px-8 py-3 rounded-full
                           hover:bg-[rgb(103,44,142)] hover:text-white transition-all duration-300
                           transform hover:scale-105 active:scale-95 font-medium
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {showAll ? 
                  (language === 'uz' ? 'Kamroq ko\'rsatish' :
                   language === 'ru' ? 'Показать меньше' :
                   'Show Less') :
                  (language === 'uz' ? 'Ko\'proq ko\'rsatish' :
                   language === 'ru' ? 'Показать больше' :
                   'Show More')}
              </button>
              <a
                href="https://t.me/triptour_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(103,44,142)] text-white px-8 py-3 rounded-full
                         hover:bg-[rgb(83,24,122)] transition-all duration-300
                         transform hover:scale-105 active:scale-95 font-medium"
              >
                {language === 'uz' ? 'Ko\'proq ma\'lumot' :
                 language === 'ru' ? 'Подробнее' :
                 'More Info'}
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
