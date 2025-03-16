import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Страница не найдена</p>
        <Link 
          href="/" 
          className="bg-[rgb(103,44,142)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(133,74,172)] transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
