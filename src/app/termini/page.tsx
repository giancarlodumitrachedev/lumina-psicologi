import { getDemoParams } from "@/lib/demo-params";

export const metadata = { title: "Termini di Servizio | Lumina Psicologo" };

export default async function TerminiPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6 prose prose-slate text-foreground/80">
        <h1 className="text-4xl font-heading font-semibold text-secondary-foreground mb-8">Termini di Servizio</h1>
        
        <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Premessa</h2>
        <p>
          I presenti Termini di Servizio regolano l'utilizzo del sito web e dei servizi psicologici offerti da {params.name}. 
          Navigando sul sito o prenotando un appuntamento per l'ambito di {params.fieldDisplay.toLowerCase()}, l'utente accetta implicitamente le seguenti condizioni.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Servizi Offerti</h2>
        <p>
          {params.prefix} si impegna a fornire prestazioni di consulenza e supporto psicologico nel pieno rispetto del Codice Deontologico degli Psicologi Italiani.
          Le consulenze possono avvenire sia online che in presenza presso lo studio di {params.city}, situato in {params.address}.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Prenotazioni e Disdette</h2>
        <p>
          Gli appuntamenti possono essere prenotati tramite i canali di contatto forniti sul sito. Eventuali disdette devono essere comunicate con almeno 24 ore di anticipo. In caso contrario, lo studio si riserva il diritto di addebitare il costo della seduta.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Segreto Professionale</h2>
        <p>
          Tutte le informazioni condivise durante le sedute sono coperte da rigoroso segreto professionale, come stabilito dall'Art. 11 del Codice Deontologico, salvo i limitati casi di deroga previsti dalla legge italiana.
        </p>
      </div>
    </div>
  );
}
