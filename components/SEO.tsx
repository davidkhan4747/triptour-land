import Head from 'next/head';
import { Language } from '@/types';

interface SEOProps {
  language: Language;
}

const seoContent = {
  title: {
    uz: 'TripTour - O\'zbekistondagi eng yaxshi sayohat agentligi | Trip Tour',
    ru: 'TripTour - Лучшее туристическое агентство в Узбекистане | Трип Тур',
    en: 'TripTour - Best Travel Agency in Uzbekistan | Trip Tour'
  },
  description: {
    uz: 'TripTour - O\'zbekistondagi eng ishonchli sayohat agentligi. Dunyo bo\'ylab sayohatlar, vizalar, aviachiptalar va mehmonxonalarni bron qilish xizmatlari. Biz bilan dunyoni kashf eting! ✈️ Eng yaxshi narxlar va xizmat.',
    ru: 'TripTour (Трип Тур) - надежное туристическое агентство в Узбекистане. Путешествия по всему миру, визы, авиабилеты и бронирование отелей. Откройте мир с нами! ✈️ Лучшие цены и сервис.',
    en: 'TripTour - trusted travel agency in Uzbekistan. Worldwide tours, visas, flight tickets, and hotel bookings. Discover the world with us! ✈️ Best prices and service.'
  },
  keywords: {
    uz: 'TripTour, Trip Tour, sayohat, turizm, aviachiptalar, mehmonxona, viza, O\'zbekiston, Toshkent, sayohat agentligi, chet el sayohatlari, arzon turlar, yozgi sayohatlar, qishki sayohatlar, Dubai sayohati, Turkiya sayohati, Malayziya sayohati, Dubayga sayohat, umra ziyorati, haj ziyorati, ziyorat turlari',
    ru: 'TripTour, Трип Тур, путешествия, туризм, авиабилеты, отель, виза, Узбекистан, Ташкент, турагентство, зарубежные туры, горящие туры, летние туры, зимние туры, тур в Дубай, тур в Турцию, тур в Малайзию, поездка в Дубай, умра тур, хадж тур, паломнические туры',
    en: 'TripTour, Trip Tour, travel, tourism, flight tickets, hotel, visa, Uzbekistan, Tashkent, travel agency, international tours, cheap tours, summer tours, winter tours, Dubai tour, Turkey tour, Malaysia tour, Dubai trip, umrah tour, hajj tour, pilgrimage tours'
  }
};

export default function SEO({ language }: SEOProps) {
  return (
    <Head>
      <title>{seoContent.title[language]}</title>
      <meta name="description" content={seoContent.description[language]} />
      <meta name="keywords" content={seoContent.keywords[language]} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://triptour.uz/" />
      <meta property="og:title" content={seoContent.title[language]} />
      <meta property="og:description" content={seoContent.description[language]} />
      <meta property="og:image" content="https://triptour.uz/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://triptour.uz/" />
      <meta property="twitter:title" content={seoContent.title[language]} />
      <meta property="twitter:description" content={seoContent.description[language]} />
      <meta property="twitter:image" content="https://triptour.uz/og-image.jpg" />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href="https://triptour.uz/" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "TripTour",
            "image": "https://triptour.uz/logo.png",
            "description": seoContent.description[language],
            "url": "https://triptour.uz",
            "telephone": "+998785557788",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15 Mustakillik Street",
              "addressLocality": "Tashkent",
              "addressCountry": "UZ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.309514",
              "longitude": "69.296259"
            },
            "sameAs": [
              "https://facebook.com/triptour.uz",
              "https://instagram.com/triptour.uz",
              "https://t.me/triptour_uz"
            ]
          })
        }}
      />
    </Head>
  );
}
