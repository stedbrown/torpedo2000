import { getDictionary } from '@/lib/dictionaries';

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await the params
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getDictionary(locale);
  
  return (
    <main className="flex-1 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">1. Informazioni generali</h2>
          <p className="text-gray-700 mb-4">
            La presente Privacy Policy descrive come Carrozzeria Torpedo 2000 SA raccoglie e utilizza le informazioni personali fornite dagli utenti durante l'utilizzo del nostro sito web.
          </p>
          <p className="text-gray-700 mb-4">
            La nostra attività è soggetta alla Legge federale svizzera sulla protezione dei dati (LPD). Ci impegniamo a proteggere la privacy degli utenti e a trattare i dati personali in conformità con la legislazione applicabile.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">2. Titolare del trattamento</h2>
          <p className="text-gray-700 mb-4">
            Il titolare del trattamento dei dati personali è:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Carrozzeria Torpedo 2000 SA</strong><br />
            Via Bellinzona 26<br />
            6743 Bodio<br />
            Ticino, Svizzera<br />
            Email: info@torpedo2000.ch<br />
            Telefono: +41 91 864 22 05
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">3. Dati raccolti e finalità</h2>
          <p className="text-gray-700 mb-4">
            Il nostro sito web raccoglie solo i dati che ci fornite volontariamente attraverso il modulo di contatto o quando ci inviate un'email. Questi dati possono includere:
          </p>
          <ul className="list-disc pl-8 mb-4 text-gray-700">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Altri dettagli che scegliete di fornirci</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Utilizziamo queste informazioni esclusivamente per:
          </p>
          <ul className="list-disc pl-8 mb-4 text-gray-700">
            <li>Rispondere alle vostre richieste</li>
            <li>Fornire i servizi richiesti</li>
            <li>Migliorare il nostro sito web e i nostri servizi</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">4. Cookie e tecnologie di tracciamento</h2>
          <p className="text-gray-700 mb-4">
            Il nostro sito web non utilizza cookie o altre tecnologie di tracciamento. Non raccogliamo automaticamente dati sulla navigazione degli utenti.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">5. Condivisione dei dati</h2>
          <p className="text-gray-700 mb-4">
            Non vendiamo, noleggiamo o condividiamo i vostri dati personali con terze parti, eccetto quando:
          </p>
          <ul className="list-disc pl-8 mb-4 text-gray-700">
            <li>È necessario per fornire un servizio richiesto</li>
            <li>Siamo legalmente obbligati a farlo</li>
            <li>Abbiamo il vostro consenso esplicito</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">6. Conservazione dei dati</h2>
          <p className="text-gray-700 mb-4">
            Conserviamo i vostri dati personali solo per il tempo necessario a soddisfare le finalità per cui sono stati raccolti, o come richiesto dalla legge.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">7. I vostri diritti</h2>
          <p className="text-gray-700 mb-4">
            In conformità con la Legge federale svizzera sulla protezione dei dati, avete il diritto di:
          </p>
          <ul className="list-disc pl-8 mb-4 text-gray-700">
            <li>Accedere ai vostri dati personali</li>
            <li>Richiedere la correzione di dati inesatti</li>
            <li>Richiedere la cancellazione dei vostri dati</li>
            <li>Opporvi al trattamento dei vostri dati</li>
            <li>Presentare un reclamo all'autorità di controllo competente</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Per esercitare questi diritti, potete contattarci utilizzando i recapiti forniti nella sezione "Titolare del trattamento".
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">8. Sicurezza dei dati</h2>
          <p className="text-gray-700 mb-4">
            Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i vostri dati personali da perdite, accessi non autorizzati, divulgazione, alterazione o distruzione.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">9. Collegamenti a siti web di terze parti</h2>
          <p className="text-gray-700 mb-4">
            Il nostro sito web può contenere link a siti web di terze parti. Non siamo responsabili per le pratiche sulla privacy o il contenuto di tali siti. Vi incoraggiamo a leggere le politiche sulla privacy di ogni sito che visitate.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">10. Modifiche alla Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Eventuali modifiche saranno pubblicate su questa pagina. Vi invitiamo a consultare regolarmente questa pagina per rimanere aggiornati.
          </p>
          <p className="text-gray-700">
            Ultima modifica: {new Date().toLocaleDateString()}
          </p>
        </div>
        
      </div>
    </main>
  );
} 