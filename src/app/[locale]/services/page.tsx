import { getDictionary } from '@/lib/dictionaries';
import { locales } from '@/middleware';
import Image from 'next/image';
import { FaTools, FaCar, FaSprayCan, FaHammer, FaHistory, FaShieldAlt, FaGlasses } from 'react-icons/fa';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await the params
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getDictionary(locale);
  
  // Service items
  const services = [
    {
      id: 'insurance',
      icon: <FaShieldAlt className="text-5xl text-red-600 mb-4" />,
      title: messages.services?.insurance?.title || "Consulenza Assicurativa",
      description: messages.services?.insurance?.description || "Offriamo consulenza per pratiche assicurative in Svizzera e all'estero."
    },
    {
      id: 'courtesy',
      icon: <FaCar className="text-5xl text-red-600 mb-4" />,
      title: messages.services?.courtesy?.title || "Vetture di Cortesia",
      description: messages.services?.courtesy?.description || "Forniamo delle vetture di cortesia durante il periodo di riparazione."
    },
    {
      id: 'repairs',
      icon: <FaTools className="text-5xl text-red-600 mb-4" />,
      title: messages.services?.repairs?.title || "Riparazioni e Verniciature",
      description: messages.services?.repairs?.description || "Ripariamo e verniciamo autovetture e veicoli pesanti con la massima cura."
    },
    {
      id: 'hail',
      icon: <FaHammer className="text-5xl text-red-600 mb-4" />,
      title: messages.services?.hail?.title || "Danni da Grandine",
      description: messages.services?.hail?.description || "Ripariamo danni da grandine e piccole ammaccature con metodo alternativo."
    },
    {
      id: 'restoration',
      icon: <FaHistory className="text-5xl text-red-600 mb-4" />,
      title: messages.services?.restoration?.title || "Restauri",
      description: messages.services?.restoration?.description || "Offriamo servizi di restauro di ogni genere per veicoli d'epoca e classici."
    },
    {
      id: 'corrosion',
      icon: <FaSprayCan className="text-5xl text-red-600 mb-4" />,
      title: messages.services?.corrosion?.title || "Trattamenti Anti Corrosivi",
      description: messages.services?.corrosion?.description || "Eseguiamo trattamenti anti corrosivi per proteggere il vostro veicolo."
    },
    {
      id: 'glass',
      icon: <FaGlasses className="text-5xl text-red-600 mb-4" />,
      title: messages.services?.glass?.title || "Sostituzione Vetri",
      description: messages.services?.glass?.description || "Sostituiamo parabrezza e vetri di ogni genere per autovetture e veicoli pesanti."
    }
  ];
  
  return (
    <main className="flex-1 bg-white">
      {/* Hero Banner */}
      <section className="relative pt-16 pb-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/serviceHero.webp" 
            alt={messages.services?.title || "Servizi"} 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-center text-white mb-2 drop-shadow-md">{messages.services?.title || "I Nostri Servizi"}</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {messages.services?.subtitle || "Offriamo una gamma completa di servizi per la cura, manutenzione e riparazione del tuo veicolo"}
          </p>
        </div>
      </section>
      
      {/* Services Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {messages.services?.whyChooseUs?.title || "Perché Scegliere Noi"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <span className="text-2xl text-red-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {messages.services?.whyChooseUs?.experience?.title || "50 Anni di Esperienza"}
                </h3>
                <p className="text-gray-700">
                  {messages.services?.whyChooseUs?.experience?.description || "Con mezzo secolo di esperienza, garantiamo un servizio di qualità superiore e professionalità."}
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <span className="text-2xl text-red-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {messages.services?.whyChooseUs?.certified?.title || "Tecnici Certificati"}
                </h3>
                <p className="text-gray-700">
                  {messages.services?.whyChooseUs?.certified?.description || "Il nostro team di tecnici qualificati garantisce riparazioni eseguite secondo i più alti standard del settore."}
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <span className="text-2xl text-red-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {messages.services?.whyChooseUs?.quality?.title || "Qualità Garantita"}
                </h3>
                <p className="text-gray-700">
                  {messages.services?.whyChooseUs?.quality?.description || "Utilizziamo solo prodotti e ricambi di alta qualità per garantire risultati duraturi e affidabili."}
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <span className="text-2xl text-red-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {messages.services?.whyChooseUs?.support?.title || "Assistenza Completa"}
                </h3>
                <p className="text-gray-700">
                  {messages.services?.whyChooseUs?.support?.description || "Offriamo un supporto completo dalla valutazione iniziale fino alla consegna del veicolo riparato."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 