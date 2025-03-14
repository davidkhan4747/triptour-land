import { Language } from '@/types';
import { motion } from 'framer-motion';

const content = {
  title: {
    uz: 'Kontaktlar',
    ru: 'Контакты',
    en: 'Contact Us'
  },
  subtitle: {
    uz: 'Biz bilan bog\'laning',
    ru: 'Свяжитесь с нами',
    en: 'Get in touch with us'
  },
  address: {
    uz: 'Toshkent sh., Mustaqillik ko\'chasi, 15',
    ru: 'г. Ташкент, улица Мустакиллик, 15',
    en: '15 Mustakillik Street, Tashkent'
  }
};

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/triptour.uz',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/triptour.uz/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/triptour_uz',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
];

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
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
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {content.title[language]}
            </h2>
            <div className="w-24 h-1 bg-[rgb(103,44,142)] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle[language]}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[rgb(103,44,142)]">
                  {language === 'uz' ? 'Bizning manzil' :
                   language === 'ru' ? 'Наш адрес' :
                   'Our Address'}
                </h3>
                <p className="text-lg text-gray-700">{content.address[language]}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[rgb(103,44,142)]">
                  {language === 'uz' ? 'Telefon' :
                   language === 'ru' ? 'Телефон' :
                   'Phone'}
                </h3>
                <a 
                  href="tel:+998785557788" 
                  className="text-lg text-gray-700 hover:text-[rgb(103,44,142)] transition-colors"
                >
                  +998 78 555 77 88
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[rgb(103,44,142)]">Email</h3>
                <a 
                  href="mailto:triptour.uz@gmail.com" 
                  className="text-lg text-gray-700 hover:text-[rgb(103,44,142)] transition-colors"
                >
                  triptour.uz@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[rgb(103,44,142)]">
                  {language === 'uz' ? 'Ijtimoiy tarmoqlar' :
                   language === 'ru' ? 'Социальные сети' :
                   'Social Media'}
                </h3>
                <div className="flex space-x-6">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-[rgb(103,44,142)] transition-colors transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              className=""
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-[rgb(103,44,142)]">
                  {language === 'uz' ? 'Bizni kartada toping' :
                   language === 'ru' ? 'Найдите нас на карте' :
                   'Find Us on Map'}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {language === 'uz' ? 'Trip Tour asosiy ofisi' :
                   language === 'ru' ? 'Главный офис Trip Tour' :
                   'Trip Tour Main Office'}
                </p>
              </div>
              <div className="h-[500px] overflow-hidden relative border border-gray-200">
                <a 
                  href="https://yandex.uz/maps/org/trip_tour/91645399141/?utm_medium=mapframe&utm_source=maps" 
                  className="text-gray-600 text-base absolute top-4 left-4 z-10 hover:text-[rgb(103,44,142)] transition-colors"
                >
                  Trip Tour
                </a>
                <a 
                  href="https://yandex.uz/maps/10335/tashkent/category/travel_agency/184106432/?utm_medium=mapframe&utm_source=maps" 
                  className="text-gray-600 text-base absolute top-12 left-4 z-10 hover:text-[rgb(103,44,142)] transition-colors"
                >
                  Турагентство в Ташкенте
                </a>
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=69.296259%2C41.309514&mode=search&oid=91645399141&ol=biz&z=14.97"
                  width="100%"
                  height="100%"
                  frameBorder="1"
                  allowFullScreen
                  style={{ position: 'relative' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
