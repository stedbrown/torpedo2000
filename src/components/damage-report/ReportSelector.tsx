"use client";

import React, { useState } from 'react';
import DamageReportForm from './DamageReportForm';
import LiabilityReportForm from '@/components/liability-report/LiabilityReportForm';
import { Dictionary } from '@/lib/dictionaries';

type ReportSelectorProps = {
  messages: Dictionary;
  locale: string;
};

export default function ReportSelector({ messages, locale }: ReportSelectorProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const handleSelectType = (type: string) => {
    setSelectedType(type);
  };
  
  // Mostra il selettore iniziale
  if (selectedType === null) {
    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {messages.damageReport.selectTypePrompt || "Seleziona il tipo di notifica di danno che desideri inviare:"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center"
            onClick={() => handleSelectType('standard')}
          >
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{messages.damageReport.title}</h3>
            <p className="text-gray-600 text-center mb-4">
              {messages.damageReport.standardDescription || "Seleziona questa opzione se hai subito un danno al tuo veicolo e vuoi notificarlo."}
            </p>
            <span className="text-red-600 font-medium">{messages.common?.continue || "Continua"} &rarr;</span>
          </div>
          
          <div 
            className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center"
            onClick={() => handleSelectType('liability')}
            data-testid="liability-option"
          >
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{messages.liabilityReport.title}</h3>
            <p className="text-gray-600 text-center mb-4">
              {messages.liabilityReport.standardDescription || "Seleziona questa opzione in caso di danno di responsabilità civile verso terzi."}
            </p>
            <span className="text-red-600 font-medium">{messages.common?.continue || "Continua"} &rarr;</span>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {messages.common?.needHelp || "Hai bisogno di assistenza?"} <a href={`/${locale === 'it' ? '' : locale}/contact`} className="text-red-600 hover:underline">{messages.contact?.contactUs || "Kontaktieren Sie uns"}</a>
          </p>
        </div>
      </div>
    );
  }
  
  // Mostra il form selezionato
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <button 
          onClick={() => setSelectedType(null)}
          className="inline-flex items-center text-gray-700 hover:text-red-600"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {messages.common?.backToSelection || "Torna alla selezione"}
        </button>
        
        <h2 className="text-xl font-bold text-gray-900">
          {selectedType === 'standard' ? messages.damageReport.title : messages.liabilityReport.title}
        </h2>
      </div>
      
      {selectedType === 'standard' ? (
        <DamageReportForm messages={messages} locale={locale} />
      ) : (
        <LiabilityReportForm messages={messages} locale={locale} />
      )}
    </div>
  );
} 