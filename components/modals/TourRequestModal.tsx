import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

interface TourRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  tourName?: string;
  tourPrice?: number;
}

const translations = {
  title: {
    uz: 'Tur uchun ariza',
    ru: 'Заявка на тур',
    en: 'Tour Request'
  },
  selectedTour: {
    uz: 'Tanlangan tur',
    ru: 'Выбранный тур',
    en: 'Selected Tour'
  },
  description: {
    uz: 'Ariza qoldiring va biz siz bilan tez orada bog\'lanamiz',
    ru: 'Оставьте заявку и мы свяжемся с вами в ближайшее время',
    en: 'Leave a request and we will contact you shortly'
  },
  callUs: {
    uz: 'Yoki bizga qo\'ng\'iroq qiling',
    ru: 'Или позвоните нам',
    en: 'Or call us'
  },

  name: {
    uz: 'Ismingiz',
    ru: 'Ваше имя',
    en: 'Your Name'
  },
  phone: {
    uz: 'Telefon raqamingiz',
    ru: 'Ваш номер телефона',
    en: 'Your Phone Number'
  },
  email: {
    uz: 'Elektron pochtangiz',
    ru: 'Ваш email',
    en: 'Your Email'
  },
  message: {
    uz: 'Xabaringiz',
    ru: 'Ваше сообщение',
    en: 'Your Message'
  },
  submit: {
    uz: 'Yuborish',
    ru: 'Отправить',
    en: 'Submit'
  },
  success: {
    uz: 'Arizangiz yuborildi! Tez orada siz bilan bog\'lanamiz.',
    ru: 'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.',
    en: 'Your request has been sent! We will contact you soon.'
  },
  error: {
    uz: 'Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
    ru: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
    en: 'An error occurred. Please try again.'
  },
  price: {
    uz: 'Narxi',
    ru: 'Цена',
    en: 'Price'
  }
};

export default function TourRequestModal({ isOpen, onClose, language, tourName, tourPrice }: TourRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/send-tour-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tourName,
          tourPrice,
          language
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-sm w-full p-5 mx-4"
          >
            <div className="relative mb-5">
              <button
                onClick={onClose}
                className="absolute -right-1.5 -top-1.5 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1 shadow-sm transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1.5">
                  {/* {translations.title[language]} */}
                </h3>
                <p className="text-gray-500 text-sm">
                  {/*{translations.description[language]}*/}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {tourName && (
                <div className="p-4 bg-purple-50/50 rounded-md border border-purple-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[rgb(103,44,142)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm font-medium text-gray-500">{translations.selectedTour[language]}</p>
                    </div>
                    {tourPrice && (
                      <p className="text-lg font-bold text-[rgb(103,44,142)]">${tourPrice}</p>
                    )}
                  </div>
                  <p className="text-base font-semibold text-[rgb(103,44,142)] pl-6">{tourName}</p>
                </div>
              )}

              {status === 'success' ? (
                <div className="text-[rgb(103,44,142)] text-center py-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-[rgb(103,44,142)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-medium">{translations.success[language]}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder={translations.name[language]}
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-[rgb(103,44,142)] focus:border-[rgb(103,44,142)] text-gray-900 placeholder-gray-500 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder={translations.phone[language]}
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-[rgb(103,44,142)] focus:border-[rgb(103,44,142)] text-gray-900 placeholder-gray-500 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder={translations.email[language]}
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-[rgb(103,44,142)] focus:border-[rgb(103,44,142)] text-gray-900 placeholder-gray-500 outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={translations.message[language]}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-[rgb(103,44,142)] focus:border-[rgb(103,44,142)] text-gray-900 placeholder-gray-500 outline-none"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-100 rounded-md p-3 text-center">
                      <p className="text-red-600 text-sm">{translations.error[language]}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-2 px-4 text-sm text-white font-medium rounded-md transition-all ${
                      status === 'submitting'
                        ? 'bg-purple-400 cursor-not-allowed'
                        : 'bg-[rgb(103,44,142)] hover:bg-[rgb(83,24,122)]'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-4 w-4 mr-2 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {translations.submit[language]}
                      </div>
                    ) : (
                      translations.submit[language]
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500 mb-2">{translations.callUs[language]}</p>
              <div className="flex items-center gap-2 justify-center">
                <svg className="w-5 h-5 text-[rgb(103,44,142)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${language === 'uz' ? '+998785557788' : language === 'ru' ? '+998785557789' : '+998785557790'}`}
                  className="text-base font-medium text-[rgb(103,44,142)] hover:text-purple-600 transition-colors"
                >
                  {language === 'uz' ? '+998785557788' :
                   language === 'ru' ? '+998785557789' :
                   '+998785557790'}
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
