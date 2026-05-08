const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// Sostituisci questi valori nel file .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("ERRORE: Inserisci NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY nel file .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const psychologistsData = [
  {
    id: "nuovo-cliente",
    name: "Dott. Nome Cliente",
    title: "Psicoterapeuta / Fisioterapista",
    contact_info: {
      email: "cliente@luminadigital.it",
      phone: "+39 000 0000000",
      address: "Via Roma 1",
      city: "Milano"
    },
    content: {
      hero: {
        tag: "Specializzazione",
        title: "Titolo Principale del Sito",
        sub: "Sottotitolo descrittivo per l'hero section.",
        img: "psychologist-portrait-f.webp"
      },
      issues: [
        { t: "Problema 1", d: "Descrizione di come il professionista risolve questo problema." },
        { t: "Problema 2", d: "Descrizione di come il professionista risolve questo problema." },
        { t: "Problema 3", d: "Descrizione di come il professionista risolve questo problema." }
      ],
      services: [
        { t: "Servizio Base 1", d: "Descrizione sintetica del servizio offerto." },
        { t: "Servizio Base 2", d: "Descrizione sintetica del servizio offerto." },
        { t: "Servizio Base 3", d: "Descrizione sintetica del servizio offerto." }
      ],
      faqs: [
        { q: "Domanda frequente 1?", a: "Risposta alla domanda 1." },
        { q: "Domanda frequente 2?", a: "Risposta alla domanda 2." }
      ],
      chi_sono: {
        bio: [
          "Primo paragrafo della biografia del professionista. Spiega il background e gli studi.",
          "Secondo paragrafo della biografia. Si concentra sull'approccio lavorativo ed empatico."
        ],
        quote: "Una frase d'impatto o citazione che rappresenta la filosofia del professionista."
      },
      servizi_page: [
        { title: "Servizio Dettagliato 1", desc: "Spiegazione approfondita del primo servizio e di come si svolge." },
        { title: "Servizio Dettagliato 2", desc: "Spiegazione approfondita del secondo servizio e di come si svolge." },
        { title: "Servizio Dettagliato 3", desc: "Spiegazione approfondita del terzo servizio e di come si svolge." }
      ],
      reviews: [
        { text: "Recensione eccellente 1.", author: "Mario R.", role: "Paziente", initial: "M" },
        { text: "Recensione eccellente 2.", author: "Luigi P.", role: "Paziente", initial: "L" },
        { text: "Recensione eccellente 3.", author: "Anna F.", role: "Paziente", initial: "A" }
      ]
    }
  }
];

async function seed() {
  console.log("Iniziando il seeding del database Supabase...");
  
  for (const doc of psychologistsData) {
    const { error } = await supabase
      .from('psychologists')
      .upsert({
        id: doc.id,
        name: doc.name,
        title: doc.title,
        contact_info: doc.contact_info,
        content: doc.content
      });

    if (error) {
      console.error(`Errore nell'inserimento di ${doc.id}:`, error.message);
    } else {
      console.log(`✅ Inserito con successo: ${doc.id}`);
    }
  }
  
  console.log("Seeding completato!");
}

seed();
