import { getDictionary } from '@/lib/dictionaries';
import { locales } from '@/middleware';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaCarSide, FaDirections, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function FindUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await the params
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getDictionary(locale);
  
  return (
    <main className="flex-1 bg-white">
      {/* Hero Banner */}
      <section className="relative pt-16 pb-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/map-background.jpg" 
            alt={messages.findUs.title} 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-center text-white mb-2 drop-shadow-md">{messages.findUs.title}</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Info Column */}
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8">
                <div className="bg-white shadow-lg rounded-xl p-8 mb-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaMapMarkerAlt className="text-red-600 mr-3" />
                    {messages.findUs.address}
                  </h2>
                  
                  <div className="mb-6">
                    <p className="font-semibold text-xl text-gray-900 mb-1">Torpedo 2000 SA</p>
                    <p className="text-gray-700 text-lg">Via Bellinzona 26</p>
                    <p className="text-gray-700 text-lg">6743 Bodio</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
                    <p className="text-gray-800 font-medium">
                      <FaCarSide className="inline-block mr-2 text-red-600" />
                      {messages.findUs.directions}
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.google.com/maps/dir//Carrozzeria+Torpedo+2000+SA,+Via+Bellinzona+26,+6743+Bodio" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                    >
                      <FaDirections className="mr-2" />
                      {messages.findUs.directions}
                    </a>
                  </div>
                </div>
                
                <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaClock className="text-red-600 mr-3" />
                    {messages.findUs.hours}
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="font-semibold text-gray-900">{messages.findUs.weekdays.split(':')[0]}</div>
                    <div className="text-gray-700">7:30 - 12:00<br/>13:30 - 17:30</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="font-semibold text-gray-900">{messages.findUs.saturday.split(':')[0]}</div>
                    <div className="text-gray-700">{messages.findUs.saturday.split(':')[1] ? messages.findUs.saturday.split(':')[1].trim() : ''}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-semibold text-gray-900">{messages.findUs.sunday.split(':')[0]}</div>
                    <div className="text-gray-700">{messages.findUs.sunday.split(':')[1] ? messages.findUs.sunday.split(':')[1].trim() : ''}</div>
                  </div>
                </div>
              </div>
              
              {/* Map Column */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-100 h-full">
                  <div className="rounded-lg overflow-hidden h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5455351054824!2d8.972873876553991!3d46.3823889688355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47844e54df960a51%3A0xcb43f86ca142e0f9!2sVia%20Bellinzona%2026%2C%206743%20Bodio%2C%20Svizzera!5e0!3m2!1sit!2sit!4v1703267521563!5m2!1sit!2sit"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "500px" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{messages.contact.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <a href="mailto:info@torpedo2000.ch" className="hover:text-red-600 transition-colors">info@torpedo2000.ch</a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Seguici sui social</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.facebook.com/carrozzeriatorpedo2000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaFacebookSquare className="text-3xl mr-2" />
                    <span className="font-medium">Facebook</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/carrozzeriatorp2000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <FaInstagram className="text-3xl mr-2" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href={`/${locale === 'it' ? '' : locale}/contact`} 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  {messages.contact.form.submit}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 