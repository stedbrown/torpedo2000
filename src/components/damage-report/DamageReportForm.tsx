"use client";

import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

type DamageReportFormProps = {
  messages: any;
  locale: string;
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  make: string;
  model: string;
  plate: string;
  company: string;
  damageType: string;
  address: string;
  zipCity: string;
  accidentDate: string;
  accidentLocation: string;
  accidentDescription: string;
  reportedBy: string;
  claimNumber: string;
  files: File[];
  consent: boolean;
}

export default function DamageReportForm({ messages, locale }: DamageReportFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    make: '',
    model: '',
    plate: '',
    company: '',
    damageType: '',
    address: '',
    zipCity: '',
    accidentDate: '',
    accidentLocation: '',
    accidentDescription: '',
    reportedBy: '',
    claimNumber: '',
    files: [],
    consent: false
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData({ ...formData, [id]: checked });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Qui inserire la logica di invio del form
      // Per ora simuliamo un invio con successo dopo 1 secondo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setSubmitting(false);
      // Resetta il form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        make: '',
        model: '',
        plate: '',
        company: '',
        damageType: '',
        address: '',
        zipCity: '',
        accidentDate: '',
        accidentLocation: '',
        accidentDescription: '',
        reportedBy: '',
        claimNumber: '',
        files: [],
        consent: false
      });
    } catch (error) {
      setSubmitError(true);
      setSubmitting(false);
    }
  };
  
  // Se il form è stato inviato con successo
  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-medium text-green-800 mb-2">{messages.contact?.form?.success?.title || "Grazie per averci contattato!"}</h3>
        <p className="text-green-700">{messages.contact?.form?.success?.message || "Ti risponderemo il prima possibile."}</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">
        {messages.damageReport.form.title}
      </h2>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.damageReport.insuredData || "Dati dell'assicurato"}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
              {messages.damageReport.form.fields.firstName}*
            </label>
            <input 
              type="text" 
              id="firstName" 
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
              {messages.damageReport.form.fields.lastName}*
            </label>
            <input 
              type="text" 
              id="lastName" 
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              {messages.damageReport.form.fields.email}
            </label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              {messages.damageReport.form.fields.phone}*
            </label>
            <input 
              type="tel" 
              id="phone" 
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {messages.damageReport.form.fields.vehicleInfo}*
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              id="plate" 
              value={formData.plate}
              onChange={handleInputChange}
              placeholder={messages.damageReport.form.fields.plate}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input 
              type="text" 
              id="make" 
              value={formData.make}
              onChange={handleInputChange}
              placeholder={messages.damageReport.form.fields.make}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input 
              type="text" 
              id="model" 
              value={formData.model}
              onChange={handleInputChange}
              placeholder={messages.damageReport.form.fields.model}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="company">
            {messages.damageReport.company || "Società"}
          </label>
          <input 
            type="text" 
            id="company" 
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="damageType">
            {messages.damageReport.damageType || "Tipo di danno"}*
          </label>
          <select 
            id="damageType" 
            value={formData.damageType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          >
            <option value="">{messages.damageReport.selectDamageType || "Seleziona il tipo di danno"}</option>
            <option value="parking">{messages.damageReport.parkingDamage || "Parcheggio (ho trovato il veicolo danneggiato)"}</option>
            <option value="nature">{messages.damageReport.natureDamage || "Natura (grandine, caduta sassi, forte vento, animali)"}</option>
            <option value="collision">{messages.damageReport.collisionDamage || "Collisione (urto/scontro con il proprio veicolo in movimento)"}</option>
            <option value="glass">{messages.damageReport.glassDamage || "Vetri"}</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
              {messages.damageReport.address || "Via"}
            </label>
            <input 
              type="text" 
              id="address" 
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="zipCity">
              {messages.damageReport.zipCity || "CAP / Luogo"}*
            </label>
            <input 
              type="text" 
              id="zipCity" 
              value={formData.zipCity}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.damageReport.accidentInfo || "Informazioni sull'evento"}</h3>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="accidentDate">
            {messages.damageReport.form.fields.accidentDate}*
          </label>
          <input 
            type="date" 
            id="accidentDate" 
            value={formData.accidentDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="accidentLocation">
            {messages.damageReport.accidentLocation || "Luogo dell'evento"}*
          </label>
          <input 
            type="text" 
            id="accidentLocation" 
            value={formData.accidentLocation}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="accidentDescription">
            {messages.damageReport.form.fields.damageDescription}*
          </label>
          <textarea 
            id="accidentDescription" 
            value={formData.accidentDescription}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="reportedBy">
            {messages.damageReport.reportedBy || "Notifica trasmessa da (concessionario)"}
          </label>
          <input 
            type="text" 
            id="reportedBy" 
            value={formData.reportedBy}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="claimNumber">
            {messages.damageReport.claimNumber || "Numero sinistro"}
          </label>
          <input 
            type="text" 
            id="claimNumber" 
            value={formData.claimNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="file-upload">
          {messages.damageReport.uploadFiles || "Carica file"}
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600 justify-center">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
              >
                <span>{messages.damageReport.form.fields.uploadPhotos || "Carica file"}</span>
                <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  className="sr-only" 
                  multiple 
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">{messages.damageReport.form.fields.photoFormats || "PNG, JPG, PDF fino a 10MB"}</p>
            {formData.files.length > 0 && (
              <p className="text-sm text-gray-700">{formData.files.length} {messages.damageReport.filesSelected || "file selezionati"}</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className="font-medium text-gray-700">
            {messages.damageReport.form.fields.privacyConsent || "Consento di ricevere e-mail sui vostri prodotti, offerte speciali e novità."}
          </label>
        </div>
      </div>
      
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
          {messages.contact?.form?.error || "Spiacenti, si è verificato un errore durante l'invio del messaggio. Per favore riprova più tardi."}
        </div>
      )}
      
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={submitting}
          className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {submitting ? (messages.damageReport.submitting || "Invio in corso...") : (messages.damageReport.form.submit || "Invia notifica")}
        </button>
      </div>
    </form>
  );
} 