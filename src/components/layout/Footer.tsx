"use client";

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  locale: string;
  dictionary?: any;
}

export default function Footer({ locale = 'it', dictionary }: FooterProps) {
  // Usa le traduzioni dal dizionario se disponibili, altrimenti fallback statico
  const nav = dictionary?.navigation || {
    home: "Home",
    about: "Chi Siamo",
    services: "Servizi",
    gallery: "Galleria",
    contact: "Contatti",
    findUs: "Dove trovarci"
  };
  
  const footer = dictionary?.footer || {
    contacts: "Contatti",
    quickLinks: "Link Rapidi",
    servicesTitle: "Servizi",
    copyright: `© ${new Date().getFullYear()} Carrozzeria Torpedo 2000 SA. Tutti i diritti riservati.`,
    privacyPolicy: "Privacy Policy"
  };
  
  // Servizi dal dizionario o fallback
  const services = dictionary?.services || {
    repairs: {
      title: "Riparazioni e Verniciature"
    },
    hail: {
      title: "Danni da Grandine"
    },
    restoration: {
      title: "Restauri Auto d'Epoca"
    },
    corrosion: {
      title: "Trattamenti Anticorrosivi"
    },
    glass: {
      title: "Sostituzione Vetri"
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{footer.contacts}</h3>
            <address className="not-italic">
              <p className="mb-2 text-gray-100">Carrozzeria Torpedo 2000 SA</p>
              <p className="mb-2 text-gray-100">Via Bellinzona 26</p>
              <p className="mb-2 text-gray-100">6743 Bodio</p>
              <p className="mb-2 text-gray-100">Ticino, Svizzera</p>
              <p className="mb-2 text-gray-100">
                <span className="font-semibold">Tel:</span> +41 91 864 22 12
              </p>
              <p className="text-gray-100">
                <span className="font-semibold">Email:</span> info@torpedo2000.ch
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href={locale === 'it' ? "/" : `/${locale}`} className="text-gray-200 hover:text-red-400 transition">
                  {nav.home}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/about" : `/${locale}/about`} className="text-gray-200 hover:text-red-400 transition">
                  {nav.about}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/services" : `/${locale}/services`} className="text-gray-200 hover:text-red-400 transition">
                  {nav.services}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/gallery" : `/${locale}/gallery`} className="text-gray-200 hover:text-red-400 transition">
                  {nav.gallery}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/contact" : `/${locale}/contact`} className="text-gray-200 hover:text-red-400 transition">
                  {nav.contact}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/find-us" : `/${locale}/find-us`} className="text-gray-200 hover:text-red-400 transition">
                  {nav.findUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{footer.servicesTitle}</h3>
            <ul className="space-y-2">
              <li>
                <a href={locale === 'it' ? "/services" : `/${locale}/services`} className="text-gray-200 hover:text-red-400 transition">
                  {services.repairs.title}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/services" : `/${locale}/services`} className="text-gray-200 hover:text-red-400 transition">
                  {services.hail.title}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/services" : `/${locale}/services`} className="text-gray-200 hover:text-red-400 transition">
                  {services.restoration.title}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/services" : `/${locale}/services`} className="text-gray-200 hover:text-red-400 transition">
                  {services.corrosion.title}
                </a>
              </li>
              <li>
                <a href={locale === 'it' ? "/services" : `/${locale}/services`} className="text-gray-200 hover:text-red-400 transition">
                  {services.glass.title}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-200">{footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
            <a href={locale === 'it' ? "/privacy-policy" : `/${locale}/privacy-policy`} className="text-gray-200 hover:text-red-400 transition">
              {footer.privacyPolicy || "Privacy Policy"}
            </a>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/carrozzeriatorpedo2000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-red-400 transition"
              aria-label="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/torpedo2000sa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-red-400 transition"
              aria-label="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 