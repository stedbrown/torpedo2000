import React from 'react';
import { getDictionary } from '@/lib/dictionaries';
import { locales } from '@/middleware';
import ContactForm from '@/components/contact/ContactForm';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getDictionary(locale);
  
  return (
    <main className="flex-1 bg-white">
      <section className="relative pt-16 pb-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/findus.webp" 
            alt={messages.contact.title} 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-center text-white mb-2 drop-shadow-md">{messages.contact.title}</h1>
          <p className="text-xl text-center text-white max-w-2xl mx-auto">{messages.contact.subtitle}</p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6 mb-8"></div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center text-gray-700 mb-12">{messages.contact.description}</p>
            
            {/* Inserimento del componente ContactForm che gestirà la parte interattiva */}
            <ContactForm locale={locale} messages={messages} />
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{messages.contact.followUs}</h2>
          <p className="text-xl mb-8 text-gray-800 max-w-2xl mx-auto">
            {messages.contact.instagramDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://www.facebook.com/carrozzeriatorpedo2000" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              <FaFacebook className="mr-2 text-xl" />
              Torpedo 2000 SA
            </a>
            <a 
              href="https://www.instagram.com/torpedo2000sa/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              <FaInstagram className="mr-2 text-xl" />
              @torpedo2000sa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 