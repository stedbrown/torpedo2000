import React from 'react';
import { getDictionary } from '@/lib/dictionaries';
import { locales } from '@/middleware';
import ReportSelector from '@/components/damage-report/ReportSelector';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const messages = await getDictionary(resolvedParams.locale);
  
  return (
    <div className="w-full bg-white">
      <div className="px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {messages.damageReport.title || "Notifica di danno"}
            </h1>
            <p className="text-lg text-gray-600">
              {messages.damageReport.subtitle || "Compila il form seguente per inviare una notifica di danno"}
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 mb-10">
            <ReportSelector messages={messages} locale={resolvedParams.locale} />
          </div>
        </div>
      </div>
    </div>
  );
} 