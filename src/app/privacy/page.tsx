import { getDemoParams } from "@/lib/demo-params";

export const metadata = { title: "Privacy Policy | Lumina Psicologo" };

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6 prose prose-slate text-foreground/80">
        <h1 className="text-4xl font-heading font-semibold text-secondary-foreground mb-8">Privacy Policy</h1>
        
        <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Titolare del Trattamento</h2>
        <p>
          Il Titolare del trattamento dei dati personali è {params.name}, con studio situato in {params.address}, {params.city}.
          Questa pagina descrive le modalità di gestione del sito in riferimento al trattamento dei dati personali degli utenti che lo consultano.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Tipologia di dati raccolti</h2>
        <p>
          I Dati Personali raccolti da questo sito, in modo autonomo o tramite terze parti, includono:
          Nome, Email, Numero di Telefono e qualsiasi altra informazione fornita volontariamente tramite il modulo di contatto per la prenotazione di un consulto in ambito di {params.fieldDisplay.toLowerCase()}.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Finalità del Trattamento</h2>
        <p>
          I Dati dell'Utente sono raccolti per consentire al Titolare di fornire i propri servizi, contattare l'Utente in risposta a specifiche richieste di prenotazione o informazioni relative allo studio situato a {params.city}.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Sicurezza e Conservazione</h2>
        <p>
          Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzata dei Dati Personali. I dati sono trattati presso le sedi operative del Titolare e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.
        </p>
      </div>
    </div>
  );
}
