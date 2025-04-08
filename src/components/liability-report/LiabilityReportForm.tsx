"use client";

import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

type LiabilityReportFormProps = {
  messages: any;
  locale: string;
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCity: string;
  birthDate: string;
  
  // Assicurazione
  insuranceCompany: string;
  policyNumber: string;
  
  // Parte lesa
  thirdPartyName: string;
  thirdPartyAddress: string;
  thirdPartyZipCity: string;
  thirdPartyPhone: string;
  thirdPartyEmail: string;
  
  // Veicolo parte lesa
  thirdPartyPlate: string;
  thirdPartyVehicleMake: string;
  thirdPartyVehicleModel: string;
  
  // Informazioni evento
  accidentDate: string;
  accidentLocation: string;
  accidentDescription: string;
  policeReport: string;
  
  files: File[];
  consent: boolean;
}

export default function LiabilityReportForm({ messages, locale }: LiabilityReportFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCity: '',
    birthDate: '',
    
    insuranceCompany: '',
    policyNumber: '',
    
    thirdPartyName: '',
    thirdPartyAddress: '',
    thirdPartyZipCity: '',
    thirdPartyPhone: '',
    thirdPartyEmail: '',
    
    thirdPartyPlate: '',
    thirdPartyVehicleMake: '',
    thirdPartyVehicleModel: '',
    
    accidentDate: '',
    accidentLocation: '',
    accidentDescription: '',
    policeReport: '',
    
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
        address: '',
        zipCity: '',
        birthDate: '',
        
        insuranceCompany: '',
        policyNumber: '',
        
        thirdPartyName: '',
        thirdPartyAddress: '',
        thirdPartyZipCity: '',
        thirdPartyPhone: '',
        thirdPartyEmail: '',
        
        thirdPartyPlate: '',
        thirdPartyVehicleMake: '',
        thirdPartyVehicleModel: '',
        
        accidentDate: '',
        accidentLocation: '',
        accidentDescription: '',
        policeReport: '',
        
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
          <label className="block text-gray-700 font-medium mb-2" htmlFor="birthDate">
            {messages.liabilityReport.form.fields.birthDate || "Data di nascita"}*
          </label>
          <input 
            type="date" 
            id="birthDate" 
            value={formData.birthDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.liabilityReport.insuranceInfo || "Informazioni sull'assicurazione"}</h3>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="insuranceCompany">
            {messages.liabilityReport.form.fields.insuranceCompany || "Compagnia di assicurazione"}*
          </label>
          <input 
            type="text" 
            id="insuranceCompany" 
            value={formData.insuranceCompany}
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
          <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyName">
            {messages.liabilityReport.form.fields.thirdPartyName || "Nome e cognome"}*
          </label>
          <input 
            type="text" 
            id="thirdPartyName" 
            value={formData.thirdPartyName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyAddress">
              {messages.liabilityReport.form.fields.thirdPartyAddress || "Indirizzo"}*
            </label>
            <input 
              type="text" 
              id="thirdPartyAddress" 
              value={formData.thirdPartyAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyZipCity">
              {messages.liabilityReport.form.fields.thirdPartyZipCity || "CAP / Località"}*
            </label>
            <input 
              type="text" 
              id="thirdPartyZipCity" 
              value={formData.thirdPartyZipCity}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyPhone">
              {messages.liabilityReport.form.fields.thirdPartyPhone || "Telefono"}
            </label>
            <input 
              type="tel" 
              id="thirdPartyPhone" 
              value={formData.thirdPartyPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyEmail">
              {messages.liabilityReport.form.fields.thirdPartyEmail || "Email"}
            </label>
            <input 
              type="email" 
              id="thirdPartyEmail" 
              value={formData.thirdPartyEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.liabilityReport.thirdPartyVehicle || "Veicolo della parte lesa"}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyPlate">
              {messages.liabilityReport.form.fields.thirdPartyPlate || "Targa"}*
            </label>
            <input 
              type="text" 
              id="thirdPartyPlate" 
              value={formData.thirdPartyPlate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyVehicleMake">
              {messages.liabilityReport.form.fields.thirdPartyVehicleMake || "Marca"}*
            </label>
            <input 
              type="text" 
              id="thirdPartyVehicleMake" 
              value={formData.thirdPartyVehicleMake}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="thirdPartyVehicleModel">
              {messages.liabilityReport.form.fields.thirdPartyVehicleModel || "Modello"}*
            </label>
            <input 
              type="text" 
              id="thirdPartyVehicleModel" 
              value={formData.thirdPartyVehicleModel}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-medium text-gray-800">{messages.liabilityReport.accidentDetails || "Dettagli dell'incidente"}</h3>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="accidentDate">
            {messages.liabilityReport.form.fields.accidentDate || "Data dell'incidente"}*
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
            {messages.liabilityReport.form.fields.accidentLocation || "Luogo dell'incidente"}*
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
            {messages.liabilityReport.form.fields.accidentDescription || "Descrizione dell'incidente"}*
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
          <label className="block text-gray-700 font-medium mb-2" htmlFor="policeReport">
            {messages.liabilityReport.form.fields.policeReport || "Rapporto di polizia (se disponibile)"}
          </label>
          <input 
            type="text" 
            id="policeReport" 
            value={formData.policeReport}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
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