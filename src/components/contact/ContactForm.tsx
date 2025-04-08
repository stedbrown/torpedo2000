"use client";

import React from 'react';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaUpload } from 'react-icons/fa';
import { Dictionary } from '@/lib/dictionaries';

interface ContactFormProps {
  locale: string;
  messages: Dictionary;
}

export default function ContactForm({ locale, messages }: ContactFormProps) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
    file: null as File | null,
    isSubmitting: false,
    success: false,
    error: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormState(prev => ({ ...prev, file: e.target.files?.[0] || null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState(prev => ({ ...prev, isSubmitting: true, success: false, error: false }));
    
    // Qui andrebbe inserita la logica per l'invio del form al backend
    // Per ora simulo una risposta dopo 1.5 secondi
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simula una risposta di successo
      setFormState(prev => ({ ...prev, 
        isSubmitting: false, 
        success: true,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        consent: false,
        file: null
      }));
    } catch (submitError) {
      console.error('Form submission error:', submitError);
      setFormState(prev => ({ ...prev, isSubmitting: false, error: true }));
    }
  };
  
  return (
    <>
      <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{messages.contact.alwaysReachable}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-start">
            <div className="bg-red-100 rounded-full p-3 mr-4">
              <FaPhone className="text-xl text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">{messages.findUs.phone}</p>
              <p className="text-gray-700 text-xl">+41 91 864 22 12</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-red-100 rounded-full p-3 mr-4">
              <FaEnvelope className="text-xl text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">{messages.findUs.email}</p>
              <p className="text-gray-700">
                <a href={`mailto:info@torpedo2000.ch?subject=Contact from ${locale} website`} className="hover:text-red-600 transition-colors">info@torpedo2000.ch</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-red-100 rounded-full p-3 mr-4">
            <FaClock className="text-xl text-red-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">{messages.contact.officeHours}</p>
            <p className="text-gray-700 mb-1">{messages.contact.weekdays}</p>
            <p className="text-gray-700">{messages.contact.weekend}</p>
          </div>
        </div>
      </div>
      
      {/* Form di contatto */}
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{messages.contact.form.title}</h2>
        
        {formState.success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
            <p>{messages.contact.form.success}</p>
          </div>
        )}
        
        {formState.error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p>{messages.contact.form.error}</p>
          </div>
        )}
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                {messages.contact.form.firstName}*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                required
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                {messages.contact.form.lastName}*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {messages.contact.form.phone}*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {messages.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              {messages.contact.form.subject}*
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {messages.contact.form.message}*
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formState.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
              required
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
              {messages.contact.form.attachFile}
            </label>
            <div className="flex items-center">
              <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-300 mr-3">
                <FaUpload className="inline-block mr-2" />
                {messages.contact.form.browse}
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-600">
                {formState.file ? formState.file.name : 'Nessun file selezionato'}
              </span>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formState.consent}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="text-gray-700">
                {messages.contact.form.consentLabel}
              </label>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className={`inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${formState.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {formState.isSubmitting ? 'Invio in corso...' : messages.contact.form.submit}
            </button>
          </div>
        </form>
      </div>
    </>
  );
} 