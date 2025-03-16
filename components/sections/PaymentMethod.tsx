import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '@/types';

interface PaymentMethodProps {
  language: Language;
}

const translations = {
  title: {
    uz: "To'lov usuli",
    ru: 'Способ оплаты',
    en: 'Payment Method'
  },
  description: {
    uz: "Payme orqali to'lov qilish",
    ru: 'Оплата через Payme',
    en: 'Payment via Payme'
  },
  scan: {
    uz: 'QR kodni skanerlang',
    ru: 'Отсканируйте QR код',
    en: 'Scan QR code'
  },
  or: {
    uz: 'yoki',
    ru: 'или',
    en: 'or'
  },
  button: {
    uz: "To'lovga o'tish",
    ru: 'Перейти к оплате',
    en: 'Go to payment'
  },
  secure: {
    uz: "Xavfsiz to'lov",
    ru: 'Безопасный платеж',
    en: 'Secure payment'
  }
};

export default function PaymentMethod({ language }: PaymentMethodProps) {
  return (
    <section id="payment" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[rgb(103,44,142)] mb-4">
              {translations.title[language]}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {translations.description[language]}
            </p>
          </div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[rgb(103,44,142)] to-purple-400" />
            
            <motion.div 
              className="relative w-64 h-64 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/qr.png"
                alt="Payme QR Code"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>

            <p className="text-lg font-medium text-gray-700 mb-6">
              {translations.scan[language]}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gray-200 w-20" />
              <span className="text-gray-500">{translations.or[language]}</span>
              <div className="h-px bg-gray-200 w-20" />
            </div>

            <motion.a
              href="https://payme.uz/home/payment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(103,44,142)] text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7H7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H17C18.1046 17 19 16.1046 19 15V9C19 7.89543 18.1046 7 17 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {translations.button[language]}
            </motion.a>

            <div className="mt-8 pt-6 border-t border-gray-100 w-full">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">{translations.secure[language]}</span>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Image 
                  src="/paymelogo.png" 
                  alt="Payme" 
                  width={150} 
                  height={50} 
                  className="hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
