# Lumina Psychologist Prototype - Q&A e Contesto
Questo file contiene tutte le decisioni, le direttive visive e operative concordate con l'utente per il progetto Lumina.
DEVE essere letto prima di ogni singolo step di implementazione.

## 1. Palette Colori e Regola 60/30/10
- **Sfondo (60%):** Avorio Pastello (`#FBF9F6`) - Un bianco pastello più caldo e calmante. Usato come colore dominante (es. sfondi, sezioni).
- **Secondario (30%):** Blu Nebbia (`#C4D4E0`) - Usato per sfondi delicati, bordi, schede.
- **Accento/Primario (10%):** Blu Ardesia Tenue (`#5A7D9A`) - Calmante ma autorevole.
- **Testo/Focus:** Blu Navy Scuro (`#1A365D`) - Usato per testi altamente leggibili e call to action importanti (es. bottoni "Prenota un appuntamento").
*Nota*: I pulsanti principali andranno in `#1A365D` (o `#5A7D9A` per azioni secondarie), il testo principale idillicamente in `#1A365D`.

## 2. Servizio Email e Form
- Verrà utilizzato **Resend** (nativo, estremamente efficiente su Vercel e Edge Functions).
- Poiché non ci sono API Key pronte, il codice preparerà l'integrazione di Resend aspettandosi una variabile d'ambiente `RESEND_API_KEY`, gestita tramite Next.js Server Actions isolate in un file `.ts` protetto. Nel frattempo il frontend mostrerà il flusso completato correttamente ma con un fallback gestito nel caso invii a un log.

## 3. Immagini e Asset
- Saranno generate **dinamicamente** (es tramite AI o Unsplash placeholder temporanei ma di alta qualità) e salvate nella cartella `public/Assets/` rispettando fedelmente i nomi rigidi forniti nell'Implementation Plan (`logo.png`, `hero-bg.webp`, `psychologist-portrait.webp`, `studio-1.webp`, ecc.).
- Formati `.webp` come da specifica.

## 4. Mappa "Dove Siamo"
- C'è l'obbligo di usare un vero e proprio **iframe Google Maps** integrato nel sito. L'URL sorgente verrà costruito o alimentato tramite la direttiva dinamica proveniente dai `searchParams` dell'URL (es. usando endpoint Google Maps standard accessibili senza chiave bloccante, come la ricerca per stringa `q=...`).

## 5. Animazioni e Design
- **UX**: Calma, professionale, fluida e interattiva (`framer-motion`).
- Nessun movimento brusco o "rimbalzo" eccessivo: si preferiranno morbide dissolvenze in fade-in (opacity: 0 -> 1) e slide-up delicati (y: 20 -> 0) allo scroll della pagina. Micro-interazioni fluide al passaggio del mouse sui pulsanti.
