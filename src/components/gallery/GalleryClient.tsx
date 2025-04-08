"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/app/[locale]/gallery/page';

type GalleryClientProps = {
  messages: any; // Dizionario delle traduzioni
  locale: string;
  galleryImages: GalleryImage[];
};

// Componente client per i filtri e la visualizzazione della galleria
export default function GalleryClient({ messages, locale, galleryImages }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtra le immagini in base alla categoria selezionata
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      {/* Filtro categorie */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            className={`px-5 py-2 text-sm font-medium border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600 ${activeCategory === 'all' ? 'bg-red-600 text-white hover:text-white' : 'bg-white text-gray-900'}`}
            onClick={() => setActiveCategory('all')}
          >
            {messages.gallery.categories.all}
          </button>
          <button 
            type="button" 
            className={`px-5 py-2 text-sm font-medium border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600 ${activeCategory === 'repairs' ? 'bg-red-600 text-white hover:text-white' : 'bg-white text-gray-900'}`}
            onClick={() => setActiveCategory('repairs')}
          >
            {messages.gallery.categories.repairs}
          </button>
          <button 
            type="button" 
            className={`px-5 py-2 text-sm font-medium border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600 ${activeCategory === 'restorations' ? 'bg-red-600 text-white hover:text-white' : 'bg-white text-gray-900'}`}
            onClick={() => setActiveCategory('restorations')}
          >
            {messages.gallery.categories.restorations}
          </button>
          <button 
            type="button" 
            className={`px-5 py-2 text-sm font-medium border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600 ${activeCategory === 'paintwork' ? 'bg-red-600 text-white hover:text-white' : 'bg-white text-gray-900'}`}
            onClick={() => setActiveCategory('paintwork')}
          >
            {messages.gallery.categories.paintwork}
          </button>
        </div>
      </div>
        
      {/* Griglia immagini */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            {/* Placeholder per le immagini in attesa delle reali */}
            <div className="bg-gray-200 h-72 w-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">{image.alt}</span>
            </div>
            
            {/* Dettagli dell'immagine con overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold mb-2">{image.alt}</h3>
              <p className="text-gray-200 text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 