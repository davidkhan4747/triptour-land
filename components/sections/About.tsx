import { motion } from 'framer-motion';
import { Language } from '@/types';
import Image from 'next/image';

const content = {
  title: {
    uz: 'Biz haqimizda',
    ru: 'О нас',
    en: 'About Us'
  },
  description: {
    uz: 'Trip Tour sayyohlik agentligi 2021 yilda o\'z faoliyatini boshlagan bo\'lib hozirgi kunda 20 dan ortiq filiallarga ega. Asoschilarimiz Mirsalimova Azizaxon va Saydullayeva Malikaxon. Rahbarlari boshchiligida Trip Tour sayohatlar bo\'yicha ko\'p imkoniyatlarni taqdim etadi.',
    ru: 'Туристическое агентство Trip Tour начало свою деятельность в 2021 году и на сегодняшний день имеет более 20 филиалов. Наши основатели - Мирсалимова Азизахон и Сайдуллаева Маликахон. Под руководством директоров Trip Tour предоставляет множество возможностей для путешествий.',
    en: 'Trip Tour travel agency started its operations in 2021 and currently has more than 20 branches. Our founders are Mirsalimova Azizakhon and Saydullaeva Malikakhon. Under the leadership of our directors, Trip Tour offers many travel opportunities.'
  },
  achievements: [
    {
      year: '2022',
      title: {
        uz: 'Yilning eng yaxshi tur firmasi',
        ru: 'Лучшая турфирма года',
        en: 'Best Tour Company of the Year'
      }
    },
    {
      year: '2023',
      title: {
        uz: 'Sayohatni tashkillashtirish bo\'yicha yetakchi o\'rin',
        ru: 'Лидер в организации путешествий',
        en: 'Leader in Travel Organization'
      }
    },
    {
      year: '2024',
      title: {
        uz: 'UZfranchiseda yetakchi o\'rin',
        ru: 'Лидер UZfranchise',
        en: 'Leader in UZfranchise'
      }
    }
  ],
  stats: [
    {
      value: '20+',
      label: {
        uz: 'Filiallar',
        ru: 'Филиалы',
        en: 'Branches'
      }
    },
    {
      value: '3000+',
      label: {
        uz: 'O\'quvchilar',
        ru: 'Студенты',
        en: 'Students'
      }
    },
    {
      value: '60000+',
      label: {
        uz: 'Mijozlar',
        ru: 'Клиенты',
        en: 'Clients'
      }
    }
  ]
};

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Content */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUpVariants}
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

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.description[language]}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {content.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                variants={fadeInUpVariants}
              >
                <h3 className="text-4xl font-bold text-[rgb(103,44,142)] mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label[language]}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Timeline */}
          <motion.div 
            className="relative"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {content.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={fadeInUpVariants}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-[rgb(103,44,142)] mb-2">
                      {achievement.year}
                    </h4>
                    <p className="text-gray-700">
                      {achievement.title[language]}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgb(103,44,142)] rounded-full border-4 border-white"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
