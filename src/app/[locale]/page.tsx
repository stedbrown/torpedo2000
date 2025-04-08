import Link from 'next/link';
import Image from 'next/image';
import { locales } from '@/middleware';
import { getDictionary } from '@/lib/dictionaries';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await the params
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getDictionary(locale);
  
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Torpedo2000HeroHome.webp"
            alt="Torpedo 2000 Carrozzeria"
            fill
            priority
            style={{objectFit: 'cover'}}
            quality={90}
          />
        </div>
        {/* Overlay per migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{messages.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">{messages.hero.subtitle}</p>
          <Link 
            href={`/${locale === 'it' ? '' : locale}/contact`} 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            {messages.hero.cta}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{messages.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{messages.services.repairs.title}</h3>
              <p className="text-gray-800">{messages.services.repairs.description}</p>
            </div>
            
            {/* Service 2 */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{messages.services.hail.title}</h3>
              <p className="text-gray-800">{messages.services.hail.description}</p>
            </div>
            
            {/* Service 3 */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{messages.services.restoration.title}</h3>
              <p className="text-gray-800">{messages.services.restoration.description}</p>
            </div>
            
            {/* Service 4 */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{messages.services.corrosion.title}</h3>
              <p className="text-gray-800">{messages.services.corrosion.description}</p>
            </div>
            
            {/* Service 5 */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{messages.services.glass.title}</h3>
              <p className="text-gray-800">{messages.services.glass.description}</p>
            </div>
            
            {/* Service 6 */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{messages.services.insurance.title}</h3>
              <p className="text-gray-800">{messages.services.insurance.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{messages.about.title}</h2>
              <p className="text-gray-800 mb-4">
                {messages.about.text1}
              </p>
              <p className="text-gray-800 mb-4">
                {messages.about.text2}
              </p>
              <p className="text-gray-800">
                {messages.about.text3}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md h-64 bg-gray-300 rounded-lg relative shadow-md overflow-hidden">
                <Image 
                  src="/images/about-placeholder.jpg"
                  alt="Torpedo 2000 Carrozzeria"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eccellenza nella formazione</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700">
                Con orgoglio, siamo un'azienda formatrice ufficialmente riconosciuta e membro attivo dell'Unione Svizzera dei Carrozzieri, impegnata nell'eccellenza professionale e nella formazione delle future generazioni di artigiani.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center w-full max-w-xs">
                <div className="relative w-48 h-32 mb-4">
                  <Image 
                    src="/images/carrosserieSuisseLogo.webp"
                    alt="Unione Svizzera dei Carrozzieri"
                    fill
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Unione Svizzera dei Carrozzieri</h3>
                <p className="text-gray-600 text-center text-sm">
                  Membro ufficiale dell'associazione che garantisce standard qualitativi elevati nel settore della carrozzeria.
                </p>
              </div>
              
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center w-full max-w-xs">
                <div className="relative w-48 h-32 mb-4">
                  <Image 
                    src="/images/logoApprendisti.webp"
                    alt="Azienda Formatrice Certificata"
                    fill
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Azienda Formatrice Certificata</h3>
                <p className="text-gray-600 text-center text-sm">
                  Investiamo nel futuro formando giovani talenti con competenze tecniche all'avanguardia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">{messages.cta.title}</h2>
          <p className="text-xl mb-8 drop-shadow-sm">{messages.cta.text}</p>
          <Link 
            href={`/${locale === 'it' ? '' : locale}/contact`} 
            className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            {messages.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
} 