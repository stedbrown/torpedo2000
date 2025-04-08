import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/lib/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carrozzeria Torpedo 2000 SA",
  description: "Carrozzeria a Bodio con 50 anni d'esperienza - Riparazioni auto, restauri, trattamenti anticorrosivi",
  icons: {
    icon: [
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180' },
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/images/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/images/favicon/android-chrome-512x512.png',
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Await the params
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Carica il dizionario per la lingua corrente
  const dictionary = await getDictionary(locale);
  
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header locale={locale} dictionary={dictionary} />
          {children}
          <Footer locale={locale} dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
} 