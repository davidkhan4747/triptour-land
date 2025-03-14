import { motion } from 'framer-motion';
import { Language } from '@/types';
import { IconPlane, IconHotel, IconPassport, IconBus, IconShield } from '@/components/icons';

const services = [
  {
    id: 'travel',
    title: {
      uz: 'Sayohat turlari',
      ru: 'Виды путешествий',
      en: 'Travel Types'
    },
    description: {
      uz: 'Dunyoning istalgan yeriga tez va oson tashkillashtiriladigan sayohatlar',
      ru: 'Быстро и легко организуемые путешествия в любую точку мира',
      en: 'Quick and easy travel arrangements to any part of the world'
    },
    icon: IconPlane
  },
  {
    id: 'transport',
    title: {
      uz: 'Transport xizmatlari',
      ru: 'Транспортные услуги',
      en: 'Transport Services'
    },
    description: {
      uz: 'Aviachiptalar, avtobus va mikroavtobuslar orqali guruh sayohatlari',
      ru: 'Авиабилеты, групповые поездки на автобусах и микроавтобусах',
      en: 'Airline tickets, group tours by bus and minibus'
    },
    icon: IconBus
  },
  {
    id: 'accommodation',
    title: {
      uz: 'Turar joy',
      ru: 'Проживание',
      en: 'Accommodation'
    },
    description: {
      uz: 'Mehmonxonalar, kurortlar va mehmon uylari bron qilish',
      ru: 'Бронирование отелей, курортов и гостевых домов',
      en: 'Booking hotels, resorts and guest houses'
    },
    icon: IconHotel
  },
  {
    id: 'visa',
    title: {
      uz: 'Viza va hujjatlar',
      ru: 'Визы и документы',
      en: 'Visa and Documents'
    },
    description: {
      uz: 'Xalqaro sayohatlar uchun kerakli hujjatlarni tayyorlash',
      ru: 'Подготовка необходимых документов для международных путешествий',
      en: 'Preparation of necessary documents for international travel'
    },
    icon: IconPassport
  },
  {
    id: 'insurance',
    title: {
      uz: 'Sayohat sug\'urtasi',
      ru: 'Страхование путешествий',
      en: 'Travel Insurance'
    },
    description: {
      uz: 'Sayohat davomida xavfsizlikni ta\'minlash uchun sug\'urta xizmatlari',
      ru: 'Страховые услуги для обеспечения безопасности во время путешествия',
      en: 'Insurance services to ensure safety during travel'
    },
    icon: IconShield
  }
];

interface ServicesProps {
  language: Language;
}

export default function Services({ language }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'uz' ? 'Xizmatlarimiz' : 
               language === 'ru' ? 'Наши услуги' : 'Our Services'}
            </h2>
            <div className="w-20 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'uz' ? 'Sayohatlarni tashkil etish, turistik turlarni rejalashtirish va transport xizmatlari' :
               language === 'ru' ? 'Организация путешествий, планирование туристических туров и транспортные услуги' :
               'Travel organization, tour planning and transport services'}
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 relative mb-6">
                  <service.icon className="w-full h-full text-[rgb(103,44,142)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title[language]}
                </h3>
                <p className="text-gray-600">
                  {service.description[language]}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <a
              href="https://t.me/TripTour_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(103,44,142)] text-white px-8 py-4 rounded-full text-lg font-semibold 
                             hover:bg-[rgb(83,24,122)] transition-colors duration-300 
                             transform hover:scale-105 active:scale-95"
            >
              {language === 'uz' ? 'Batafsil ma\'lumot' :
               language === 'ru' ? 'Подробнее' : 'Learn More'}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
