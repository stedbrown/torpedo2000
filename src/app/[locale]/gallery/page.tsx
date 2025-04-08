import React from 'react';
import { getDictionary } from '@/lib/dictionaries';
import { locales } from '@/middleware';
import GalleryClient from '@/components/gallery/GalleryClient';

// Questa funzione viene utilizzata per generare le rotte statiche
export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Definizione dei tipi per le immagini della galleria
export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  description: string;
};

// Dati fittizi per le immagini della galleria in attesa delle immagini reali
const galleryImages: GalleryImage[] = [
  {
    id: 'img1',
    src: '/placeholder-image.jpg',
    alt: 'Riparazione auto dopo incidente',
    category: 'repairs',
    description: 'Riparazione completa dopo un incidente frontale'
  },
  {
    id: 'img2',
    src: '/placeholder-image.jpg',
    alt: 'Restauro auto d\'epoca',
    category: 'restorations',
    description: 'Restauro completo di una Alfa Romeo d\'epoca'
  },
  {
    id: 'img3',
    src: '/placeholder-image.jpg',
    alt: 'Verniciatura personalizzata',
    category: 'paintwork',
    description: 'Verniciatura personalizzata con effetto metallizzato'
  },
  {
    id: 'img4',
    src: '/placeholder-image.jpg',
    alt: 'Riparazione danni da grandine',
    category: 'repairs',
    description: 'Riparazione danni da grandine con tecnica PDR'
  },
  {
    id: 'img5',
    src: '/placeholder-image.jpg',
    alt: 'Restauro Ferrari classica',
    category: 'restorations',
    description: 'Restauro di una Ferrari classica degli anni \'80'
  },
  {
    id: 'img6',
    src: '/placeholder-image.jpg',
    alt: 'Verniciatura integrale',
    category: 'paintwork',
    description: 'Verniciatura integrale con cambio di colore'
  },
  {
    id: 'img7',
    src: '/placeholder-image.jpg',
    alt: 'Ripristino dopo sinistro',
    category: 'repairs',
    description: 'Ripristino completo dopo sinistro laterale'
  },
  {
    id: 'img8',
    src: '/placeholder-image.jpg',
    alt: 'Restauro Fiat d\'epoca',
    category: 'restorations',
    description: 'Restauro completo di una Fiat 500 d\'epoca'
  },
  {
    id: 'img9',
    src: '/placeholder-image.jpg',
    alt: 'Verniciatura sportiva',
    category: 'paintwork',
    description: 'Verniciatura sportiva con bande racing'
  },
];

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await the params
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getDictionary(locale);
  
  return (
    <main className="flex-1 bg-white">
      <section className="relative pt-16 pb-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">{messages.gallery.title}</h1>
          <p className="text-xl text-center text-gray-700 max-w-2xl mx-auto">{messages.gallery.subtitle}</p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6 mb-8"></div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GalleryClient 
            messages={messages} 
            locale={locale}
          />
        </div>
      </section>
      
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Hai un progetto in mente?</h2>
          <p className="text-gray-800 text-lg mb-8 max-w-3xl mx-auto">
            Se stai pensando a un restauro, una riparazione o una verniciatura personalizzata,
            contattaci per un preventivo gratuito. La tua auto merita il meglio.
          </p>
          <a 
            href={`/${locale === 'it' ? '' : locale}/contact`} 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Richiedi informazioni
          </a>
        </div>
      </section>
    </main>
  );
} 