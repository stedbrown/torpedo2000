"use client";

import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { Dictionary } from '@/lib/dictionaries';

interface GalleryClientProps {
  messages: Dictionary;
  locale: string;
}

// Dati di esempio per la galleria
const galleryItems = [
  { id: 1, category: 'repairs', image: '/images/gallery/placeholder1.jpg', title: 'Riparazione BMW' },
  { id: 2, category: 'restorations', image: '/images/gallery/placeholder2.jpg', title: 'Restauro Fiat 500' },
  { id: 3, category: 'paintwork', image: '/images/gallery/placeholder3.jpg', title: 'Verniciatura Mercedes' },
  { id: 4, category: 'repairs', image: '/images/gallery/placeholder4.jpg', title: 'Riparazione Audi' },
  { id: 5, category: 'paintwork', image: '/images/gallery/placeholder5.jpg', title: 'Verniciatura Ferrari' },
  { id: 6, category: 'restorations', image: '/images/gallery/placeholder6.jpg', title: 'Restauro Alfa Romeo' },
  { id: 7, category: 'repairs', image: '/images/gallery/placeholder7.jpg', title: 'Riparazione Volvo' },
  { id: 8, category: 'paintwork', image: '/images/gallery/placeholder8.jpg', title: 'Verniciatura Porsche' },
  { id: 9, category: 'restorations', image: '/images/gallery/placeholder9.jpg', title: 'Restauro Lancia' },
];

export default function GalleryClient({ messages, locale }: GalleryClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Funzione per tradurre le categorie
  const translateCategory = (category: string) => {
    const categoryTranslations: Record<string, string> = {
      'repairs': messages.gallery.categories.repairs,
      'restorations': messages.gallery.categories.restorations,
      'paintwork': messages.gallery.categories.paintwork
    };
    return categoryTranslations[category] || category;
  };
  
  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <button
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'all'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter('all')}
        >
          {messages.gallery.categories.all}
        </button>
        
        <button
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'repairs'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter('repairs')}
        >
          {messages.gallery.categories.repairs}
        </button>
        
        <button
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'restorations'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter('restorations')}
        >
          {messages.gallery.categories.restorations}
        </button>
        
        <button
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'paintwork'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter('paintwork')}
        >
          {messages.gallery.categories.paintwork}
        </button>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-4 aspect-h-3 w-full h-60 bg-gray-200">
              {/* Placeholder per immagini in attesa delle reali */}
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${item.image}')` }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{translateCategory(item.category)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 