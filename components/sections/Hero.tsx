import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Language } from '@/types';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const content = {
  title: {
    uz: 'Dunyo bo\'ylab sayohatlar',
    ru: 'Путешествия по всему миру',
    en: 'Travel Around the World'
  },
  subtitle: {
    uz: 'Trip Tour bilan dunyoni kashf eting',
    ru: 'Откройте мир с Trip Tour',
    en: 'Discover the world with Trip Tour'
  },
  description: {
    uz: '2021 yildan beri sifatli va ishonchli sayohat xizmatlari',
    ru: 'Качественные и надежные туристические услуги с 2021 года',
    en: 'Quality and reliable travel services since 2021'
  },
  cta: {
    uz: 'Sayohatni rejalashtirish',
    ru: 'Планировать путешествие',
    en: 'Plan Your Trip'
  }
};

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.8]), {
    stiffness: 100,
    damping: 30
  });

  const images = [
    '/images/dubia.jpg',
    '/images/tay1.jpg',
    '/images/yap.jpg'
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1.1 : 1
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <Image
            src={image}
            alt="Travel Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            variants={itemVariants}
          >
            {content.title[language]}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-4 text-gray-200"
            variants={itemVariants}
          >
            {content.subtitle[language]}
          </motion.p>
          <motion.p 
            className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {content.description[language]}
          </motion.p>
          <motion.a
            href="https://t.me/TripTour_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(103,44,142)] text-white px-8 py-4 rounded-full text-lg font-semibold 
                       hover:bg-[rgb(83,24,122)] transition-all duration-300 
                       transform hover:scale-105 active:scale-95 hover:shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.cta[language]}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
