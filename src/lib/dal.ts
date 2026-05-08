import { supabase } from "./supabase";

export interface TenantData {
  id: string;
  name: string;
  title: string;
  contact_info: {
    email: string;
    phone: string;
    address: string;
    city: string;
  };
  content: {
    hero: {
      tag: string;
      title: string;
      sub: string;
      img: string;
    };
    issues: Array<{
      t: string;
      d: string;
    }>;
    services: Array<{
      t: string;
      d: string;
    }>;
    faqs: Array<{
      q: string;
      a: string;
    }>;
    chi_sono: {
      bio: string[];
      quote: string;
    };
    servizi_page: Array<{
      title: string;
      desc: string;
    }>;
    reviews: Array<{
      text: string;
      author: string;
      role: string;
      initial: string;
    }>;
  };
}

export async function getTenantData(id: string): Promise<TenantData | null> {
  // In modalità di sviluppo, se non abbiamo credenziali valide, mockiamo la risposta
  if (process.env.NEXT_PUBLIC_SUPABASE_URL === "https://mock.supabase.co" || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return getMockTenantData(id);
  }

  const { data, error } = await supabase
    .from("psychologists")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Errore nel recupero dati tenant:", error);
    return null;
  }

  return data as TenantData;
}

// Mock fallback per far funzionare la build anche senza DB configurato
function getMockTenantData(id: string): TenantData | null {
  const isFisio = id === "angelo-paparella";
  
  return {
    id,
    name: id.replace("-", " ").toUpperCase(),
    title: isFisio ? "Fisioterapista" : "Psicoterapeuta",
    contact_info: {
      email: `info@${id}.it`,
      phone: "+39 123 4567890",
      address: "Via Roma 1",
      city: "Torino"
    },
    content: {
      hero: {
        tag: isFisio ? "Fisioterapia" : "Psicologia",
        title: "Test Titolo Hero",
        sub: "Sottotitolo hero temporaneo senza database",
        img: isFisio ? "psychologist-portrait-m.webp" : "psychologist-portrait-f.webp"
      },
      issues: [
        { t: "Issue 1", d: "Description 1" },
        { t: "Issue 2", d: "Description 2" },
        { t: "Issue 3", d: "Description 3" }
      ],
      services: [
        { t: "Service 1", d: "Description 1" },
        { t: "Service 2", d: "Description 2" },
        { t: "Service 3", d: "Description 3" }
      ],
      faqs: [
        { q: "Question 1?", a: "Answer 1" },
        { q: "Question 2?", a: "Answer 2" }
      ],
      chi_sono: {
        bio: ["Paragrafo bio 1", "Paragrafo bio 2"],
        quote: "Una citazione d'esempio"
      },
      servizi_page: [
        { title: "Servizio A", desc: "Descrizione dettagliata A" }
      ],
      reviews: [
        { text: "Review text 1", author: "Paziente 1", role: "Ruolo", initial: "P" }
      ]
    }
  };
}
