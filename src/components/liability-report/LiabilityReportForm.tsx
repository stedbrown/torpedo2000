"use client";

import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { Dictionary } from '@/lib/dictionaries';

type LiabilityReportFormProps = {
  messages: Dictionary;
  locale: string;
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  insurance: string;
  policyNumber: string;
  address: string;
  zipCity: string;
  incidentDate: string;
  incidentLocation: string;
  otherParty: string;
  otherPartyContact: string;
  damageDescription: string;
  files: File[];
  consent: boolean;
}

export default function LiabilityReportForm({ messages, locale }: LiabilityReportFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    insurance: '',
    policyNumber: '',
    address: '',
    zipCity: '',
    incidentDate: '',
    incidentLocation: '',
    otherParty: '',
    otherPartyContact: '',
    damageDescription: '',
    files: [],
    consent: false
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      // Simuliamo un invio con successo dopo 1 secondo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setSubmitting(false);
      // Reset del form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        insurance: '',
        policyNumber: '',
        address: '',
        zipCity: '',
        incidentDate: '',
        incidentLocation: '',
        otherParty: '',
        otherPartyContact: '',
        damageDescription: '',
        files: [],
        consent: false
      });
    } catch (submitError) {
      console.error(`Error submitting form (${locale}):`, submitError);
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
        <h3 className="text-lg font-medium text-green-800 mb-2">
          {"Grazie per averci contattato!"}
        </h3>
        <p className="text-green-700">
          {"La tua segnalazione di danno è stata inviata. Ti risponderemo il prima possibile."}
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">
        {messages.liabilityReport.form.title || "Notifica di responsabilità civile"}
      </h2>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.liabilityReport.personalInfo || "Dati personali"}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
              {messages.liabilityReport.form.fields.firstName || "Nome"}*
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
              {messages.liabilityReport.form.fields.lastName || "Cognome"}*
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
              {messages.liabilityReport.form.fields.email || "Email"}
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
              {messages.liabilityReport.form.fields.phone || "Telefono"}*
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
              {messages.liabilityReport.form.fields.address || "Indirizzo"}*
            </label>
            <input 
              type="text" 
              id="address" 
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="zipCity">
              {messages.liabilityReport.form.fields.zipCity || "CAP / Località"}*
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
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="incidentDate">
            {messages.liabilityReport.form.fields.incidentDate || "Data dell'incidente"}*
          </label>
          <input 
            type="date" 
            id="incidentDate" 
            value={formData.incidentDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.liabilityReport.insuranceInfo || "Informazioni sull'assicurazione"}</h3>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="insurance">
            {messages.liabilityReport.form.fields.insurance || "Compagnia di assicurazione"}*
          </label>
          <input 
            type="text" 
            id="insurance" 
            value={formData.insurance}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="policyNumber">
            {messages.liabilityReport.form.fields.policyNumber || "Numero di polizza"}*
          </label>
          <input 
            type="text" 
            id="policyNumber" 
            value={formData.policyNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.liabilityReport.thirdPartyInfo || "Informazioni della parte lesa"}</h3>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="otherParty">
            {messages.liabilityReport.form.fields.otherParty || "Nome e cognome"}*
          </label>
          <input 
            type="text" 
            id="otherParty" 
            value={formData.otherParty}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="otherPartyContact">
              {messages.liabilityReport.form.fields.otherPartyContact || "Contatto"}*
            </label>
            <input 
              type="text" 
              id="otherPartyContact" 
              value={formData.otherPartyContact}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="damageDescription">
              {messages.liabilityReport.form.fields.damageDescription || "Descrizione del danno"}*
            </label>
            <textarea 
              id="damageDescription" 
              value={formData.damageDescription}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="file-upload">
          {messages.liabilityReport.form.fields.uploadFiles || "Carica file"}
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600 justify-center">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
              >
                <span>{messages.liabilityReport.form.fields.uploadPhotos || "Carica file"}</span>
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
            <p className="text-xs text-gray-500">{messages.liabilityReport.form.fields.photoFormats || "PNG, JPG, PDF fino a 10MB"}</p>
            {formData.files.length > 0 && (
              <p className="text-sm text-gray-700">{formData.files.length} {messages.liabilityReport.form.fields.filesSelected || "file selezionati"}</p>
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
            {messages.liabilityReport.form.fields.privacyConsent || "Acconsento al trattamento dei miei dati personali per l'elaborazione della notifica di responsabilità civile."}
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
          {submitting ? (messages.liabilityReport.submitting || "Invio in corso...") : (messages.liabilityReport.submit || "Invia notifica")}
        </button>
      </div>
    </form>
  );
} 