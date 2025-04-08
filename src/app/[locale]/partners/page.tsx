import { getDictionary } from '@/lib/dictionaries';
import { locales } from '@/middleware';
import Image from 'next/image';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Dati fittizzi dei partner in attesa delle immagini e informazioni reali
const partners = [
  {
    id: 1,
    name: 'Assicurazione XYZ',
    logo: '/placeholder-logo.svg',
    description: 'Compagnia assicurativa leader nel settore auto',
    website: 'https://example.com'
  },
  {
    id: 2,
    name: 'Auto Parts Swiss',
    logo: '/placeholder-logo.svg',
    description: 'Fornitore di parti originali e certificate',
    website: 'https://example.com'
  },
  {
    id: 3,
    name: 'Vernici Premium',
    logo: '/placeholder-logo.svg',
    description: 'Produttore di vernici di alta qualità per auto',
    website: 'https://example.com'
  },
  {
    id: 4,
    name: 'AutoGlass Pro',
    logo: '/placeholder-logo.svg',
    description: 'Specialisti nella riparazione e sostituzione di vetri auto',
    website: 'https://example.com'
  },
  {
    id: 5,
    name: 'Carrosserie Swiss',
    logo: '/placeholder-logo.svg',
    description: 'Associazione svizzera dei carrozzieri',
    website: 'https://example.com'
  },
  {
    id: 6,
    name: 'Auto Leasing Ticino',
    logo: '/placeholder-logo.svg',
    description: 'Servizi di leasing e finanziamento auto',
    website: 'https://example.com'
  },
];

export default async function PartnersPage({
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
      <section className="relative pt-16 pb-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">{messages.partners.title}</h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">{messages.partners.subtitle}</p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6 mb-8"></div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <p className="text-gray-800 text-lg">
              {messages.partners.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-40 h-40 bg-gray-100 rounded-full mb-6 flex items-center justify-center p-4">
                  {/* Placeholder per i loghi in attesa delle immagini reali */}
                  <div className="text-center text-gray-400">Logo {partner.name}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-center mb-4">{partner.description}</p>
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Visita il sito
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Diventa nostro partner</h2>
            <p className="text-gray-800 text-lg mb-8">
              Se sei interessato a una collaborazione con la Carrozzeria Torpedo 2000 SA, 
              contattaci per discutere le opportunità di partnership.
            </p>
            <a 
              href={`mailto:info@torpedo2000.ch?subject=Partnership%20Opportunity`} 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contattaci per una partnership
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 