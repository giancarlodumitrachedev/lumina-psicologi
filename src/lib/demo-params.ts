export interface DemoParams {
  name: string;
  city: string;
  address: string;
  field: string;
  fieldDisplay: string;
  isFemale: boolean;
  prefix: string;
}

export async function getDemoParams(searchParamsPromise: Promise<{ [key: string]: string | string[] | undefined }> | undefined): Promise<DemoParams> {
  const searchParams = searchParamsPromise ? await searchParamsPromise : {};
  
  // AL SITO VENDUTO: Se imposti queste variabili su Vercel, il sito ignorerà l'URL
  // e utilizzerà sempre questi dati finali. Il dominio resterà pulitissimo: www.ilsuosito.it
  const rawName = process.env.NEXT_PUBLIC_CLIENT_NAME || (searchParams.name as string) || "Dott. Mario Rossi";
  const rawCity = process.env.NEXT_PUBLIC_CLIENT_CITY || (searchParams.city as string) || "Milano";
  const rawAddress = process.env.NEXT_PUBLIC_CLIENT_ADDRESS || (searchParams.address as string) || "Via Montenapoleone 1";
  const rawField = process.env.NEXT_PUBLIC_CLIENT_FIELD || (searchParams.field as string) || "psicologo";

  // Rimuovi i trattini dall'URL e rendi la prima lettera maiuscola (es. "terapia-di-coppia" -> "Terapia di coppia")
  const fieldWithoutHyphens = rawField.replace(/-/g, " ");
  const fieldDisplay = fieldWithoutHyphens.charAt(0).toUpperCase() + fieldWithoutHyphens.slice(1);

  // Determina il sesso in base al prefisso
  const lowerName = rawName.toLowerCase();
  const isFemale = lowerName.includes("dott.ssa") || lowerName.includes("dottoressa");
  const prefix = isFemale ? "la Dottoressa" : "il Dottor";

  return {
    name: rawName,
    city: rawCity,
    address: rawAddress,
    field: rawField,
    fieldDisplay,
    isFemale,
    prefix
  };
}

export function getDictionary(field: string) {
  const f = field.toLowerCase();
  
  if (f.includes("sessuolog")) {
    return {
      heroTitle: "Siediti. Parla. Ritrova l'intimità.",
      heroSubtitle: "Un percorso calmo, sicuro e riservato per esplorare e superare le difficoltà legate alla sfera relazionale e intima."
    };
  } else if (f.includes("coppia")) {
    return {
      heroTitle: "Siediti. Parlate. Ritrovatevi.",
      heroSubtitle: "Uno spazio neutrale ed empatico dove ristabilire l'equilibrio della coppia, riscoprendo serenità e comunicazione profonda."
    };
  } else if (f.includes("dipendenz")) {
    return {
      heroTitle: "Siediti. Parla. Ritrova la tua libertà.",
      heroSubtitle: "Affronta e supera le dinamiche disfunzionali in un ambiente accogliente e autenticamente non giudicante. Insieme."
    };
  }

  // Default
  return {
    heroTitle: "Siediti. Parla. Ritrova la serenità.",
    heroSubtitle: "Un supporto psicologico dedicato e altamente professionale per superare l'impasse e ritrovare il proprio centro."
  };
}
