"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

// Language type definition
type Language = {
  code: string;
  name: string;
};

// Available languages
const languages: Language[] = [
  { code: 'it', name: 'Italiano' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'rm', name: 'Rumantsch' },
];

interface HeaderProps {
  locale: string;
  dictionary?: any;
}

export default function Header({ locale = 'it', dictionary }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (langMenuOpen) setLangMenuOpen(false);
  };
  
  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  // Trova la lingua corrente
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  // Funzione per creare correttamente gli URL basati sulla lingua
  const createLocalizedHref = (path: string = ''): string => {
    if (path === '' || path === '/') {
      return locale === 'it' ? '/' : `/${locale}`;
    }
    const basePath = locale === 'it' ? '' : `/${locale}`;
    return `${basePath}${path}`;
  };

  // Funzione per generare URL per il cambio lingua mantenendo il percorso corrente
  const createLanguageLink = (langCode: string): string => {
    // Rimuovere il prefisso della lingua corrente dal pathname
    const path = pathname.replace(new RegExp(`^/(${languages.map(l => l.code).join('|')})`), '') || '/';
    return langCode === 'it' ? path : `/${langCode}${path}`;
  };

  // Usa le traduzioni dal dizionario se disponibili, altrimenti fallback statico
  const nav = dictionary?.navigation || {
    home: "Home",
    findUs: "Dove trovarci",
    contact: "Contatti", 
    partners: "Partner",
    gallery: "Galleria",
    services: "Servizi",
    damageReport: "Notifica di danno"
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="relative h-12 w-40">
              <Image 
                src="/images/torpedo2000Logo.webp"
                alt="Torpedo 2000 Logo"
                fill
                priority
                style={{ objectFit: 'contain' }}
                className="transition-opacity hover:opacity-90"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href={`/${locale}`} className="text-gray-800 hover:text-red-600 font-medium">
              {nav.home}
            </Link>
            <Link href={createLocalizedHref('/services')} className="text-gray-800 hover:text-red-600 font-medium">
              {nav.services}
            </Link>
            <Link href={createLocalizedHref('/find-us')} className="text-gray-800 hover:text-red-600 font-medium">
              {nav.findUs}
            </Link>
            <Link href={createLocalizedHref('/contact')} className="text-gray-800 hover:text-red-600 font-medium">
              {nav.contact}
            </Link>
            <Link href={createLocalizedHref('/partners')} className="text-gray-800 hover:text-red-600 font-medium">
              {nav.partners}
            </Link>
            <Link href={createLocalizedHref('/gallery')} className="text-gray-800 hover:text-red-600 font-medium">
              {nav.gallery}
            </Link>
            <Link href={createLocalizedHref('/damage-report')} className="text-gray-800 hover:text-red-600 font-medium">
              {nav.damageReport}
            </Link>
          </nav>

          {/* Language & Mobile Menu Controls */}
          <div className="flex items-center">
            {/* Language Selector */}
            <div className="relative mr-4">
              <button 
                onClick={toggleLangMenu}
                className="flex items-center text-gray-800 hover:text-red-600 font-medium"
              >
                <span className="mr-1">{currentLanguage.code.toUpperCase()}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Language Dropdown */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <Link 
                        key={lang.code}
                        href={createLanguageLink(lang.code)}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600"
                        onClick={() => setLangMenuOpen(false)}
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-800 hover:text-red-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link 
                href={`/${locale}`}
                className="text-gray-800 hover:text-red-600 px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.home}
              </Link>
              <Link 
                href={createLocalizedHref('/services')}
                className="text-gray-800 hover:text-red-600 px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.services}
              </Link>
              <Link 
                href={createLocalizedHref('/find-us')}
                className="text-gray-800 hover:text-red-600 px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.findUs}
              </Link>
              <Link 
                href={createLocalizedHref('/contact')}
                className="text-gray-800 hover:text-red-600 px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.contact}
              </Link>
              <Link 
                href={createLocalizedHref('/partners')}
                className="text-gray-800 hover:text-red-600 px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.partners}
              </Link>
              <Link 
                href={createLocalizedHref('/gallery')}
                className="text-gray-800 hover:text-red-600 px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.gallery}
              </Link>
              <Link 
                href={createLocalizedHref('/damage-report')}
                className="text-gray-800 hover:text-red-600 px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.damageReport}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 