const fs = require('fs');
const path = require('path');

const clients = [
  'monica-milan',
  'paolo-gay',
  'giovanna-padalino',
  'simone-marenco',
  'angelo-paparella'
];

const italianFooter = `"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SmartLink } from "@/components/smart-link";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Inizia oggi il tuo percorso verso il benessere
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto">
              Sessioni professionali e supporto personalizzato adattato alle tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SmartLink href="/contatti" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25">
                Prenota un consulto
              </SmartLink>
              <SmartLink href="/servizi" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Scopri i servizi
              </SmartLink>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Lumina</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Supporto professionale per la tua salute e il tuo benessere.
            </p>
            <div className="text-white/50 text-sm space-y-2">
              <p>✉️ contatti@luminadigital.it</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Pazienti</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/servizi" className="hover:text-primary transition-colors">Aree di Intervento</Link></li>
              <li><Link href="/contatti" className="hover:text-primary transition-colors">Prenota Appuntamento</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Studio</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/chi-sono" className="hover:text-primary transition-colors">Chi Sono</Link></li>
              <li><Link href="/contatti" className="hover:text-primary transition-colors">Contatti</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Note Legali</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/termini" className="hover:text-primary transition-colors">Termini di Servizio</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 LUMINA. Tutti i diritti riservati.</p>
          <p>Powered by <a href="https://www.luminadigital.it" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-white/60">Lumina™</a></p>
        </div>
      </div>
    </footer>
  );
}
`;

const pageTsx = `import { HeroSection } from "@/components/home/hero";
import { IssuesGrid } from "@/components/home/issues";
import { ServicesSection } from "@/components/home/services";
import { ReviewsSection } from "@/components/home/reviews";
import { FaqSection } from "@/components/home/faq";
import { getDemoParams } from "@/lib/demo-params";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function HomePage(props: Props) {
  const params = await getDemoParams(props.searchParams);

  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection field={params.fieldDisplay} />
      <IssuesGrid />
      <ServicesSection />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
}
`;

const data = {
  "monica-milan": {
    hero: { tag: "Psicoterapia Sistemica", title: "Restituiamo voce alle tue emozioni", sub: "Uno spazio di ascolto autentico. Accompagno coppie e famiglie nei momenti di crisi o trasformazione.", img: "psychologist-portrait-f.webp" },
    issues: [
      { t: "Crisi di Coppia e Familiari", d: "Ristabiliamo un equilibrio che si è incrinato, dando voce ai bisogni che non hanno trovato spazio." },
      { t: "Difficoltà Relazionali", d: "La sofferenza non riguarda mai l'individuo isolato, ma prende forma all'interno delle relazioni che abitiamo." },
      { t: "Vulnerabilità e Traumi", d: "Restituiamo dignità, voce e potere personale a chi attraversa situazioni di forte vulnerabilità." }
    ],
    services: [
      { t: "Terapia Sistemico-Familiare", d: "Un percorso per l'intero nucleo familiare, volto a ripristinare dinamiche relazionali sane." },
      { t: "Terapia di Coppia", d: "Sostegno per ritrovare comunicazione, intimità e comprensione reciproca nei momenti di crisi." },
      { t: "Sostegno Individuale", d: "Un luogo di collaborazione dove terapeuta e persona co-costruiscono il percorso passo dopo passo." }
    ],
    faqs: [
      { q: "L'approccio sistemico richiede la presenza di tutta la famiglia?", a: "Non necessariamente. L'approccio sistemico analizza le relazioni in cui la persona è inserita; si può lavorare individualmente mantenendo il focus sulle dinamiche familiari." },
      { q: "Come funziona la terapia di coppia?", a: "Gli incontri prevedono la presenza di entrambi i partner in uno spazio neutrale e non giudicante, per facilitare una comunicazione costruttiva." }
    ]
  },
  "paolo-gay": {
    hero: { tag: "Psicoterapeuta", title: "Affrontiamo insieme il disagio", sub: "Oltre vent'anni di esperienza clinica, dalle comunità psichiatriche alla libera professione. Esperto in dipendenze.", img: "psychologist-portrait-m.webp" },
    issues: [
      { t: "Dipendenze", d: "Percorsi strutturati per il trattamento e l'uscita da dipendenze da sostanze o comportamentali." },
      { t: "Disagi Psichiatrici", d: "Trattamento clinico profondo, con forte esperienza maturata nei Centri di Salute Mentale." },
      { t: "Problematiche Adolescenziali", d: "Sostegno specifico per i giovani e le loro famiglie durante le fasi critiche dello sviluppo." }
    ],
    services: [
      { t: "Psicoterapia Psicoanalitica", d: "Trattamento profondo dei disturbi contemporanei con un approccio clinico consolidato." },
      { t: "Conduzione di Gruppi", d: "Percorsi terapeutici di gruppo per favorire la condivisione e il supporto reciproco." },
      { t: "Sostegno Familiare", d: "Lavoro congiunto con i familiari di adolescenti per ristabilire dinamiche comunicative funzionali." }
    ],
    faqs: [
      { q: "In cosa consiste l'approccio psicoanalitico contemporaneo?", a: "È un approccio che mira all'esplorazione profonda del sé, ricercando le cause inconsce della sofferenza declinandolo per i disturbi attuali." },
      { q: "Tratta solo adulti o anche giovani?", a: "Lavoro molto attivamente anche con adolescenti problematici e offro supporto specifico ai loro familiari." }
    ]
  },
  "giovanna-padalino": {
    hero: { tag: "Pedagogista e Psicologa", title: "Uno spazio accogliente per crescere", sub: "Sostegno psicologico per bambini, adolescenti e adulti. Specializzata in neurodivergenze e genitorialità.", img: "psychologist-portrait-f.webp" },
    issues: [
      { t: "Neurodivergenze", d: "Supporto mirato per disturbi dello spettro autistico, DSA, BES e ADHD." },
      { t: "Sviluppo Infantile", d: "Gestione delle difficoltà emotive e comportamentali nell'infanzia e adolescenza." },
      { t: "Gestione Conflitti e Genitorialità", d: "Accompagnamento alla genitorialità, gestione dei conflitti e miglioramento della comunicazione." }
    ],
    services: [
      { t: "Interventi ABA", d: "Programmi educativi e comportamentali personalizzati come Tecnico ABA specializzato." },
      { t: "Sostegno Psicologico Integrato", d: "Percorsi per affrontare ansia, stress e regolazione emotiva, con un approccio umanistico-integrato." },
      { t: "Sostegno Scolastico", d: "Interventi pedagogici e di orientamento, forte della mia esperienza come educatrice specializzata." }
    ],
    faqs: [
      { q: "Offre sedute online?", a: "Sì, ricevo sia nel mio studio a Bologna che online tramite piattaforma sicura." },
      { q: "Cos'è esattamente il metodo ABA?", a: "L'Applied Behavior Analysis è un intervento evidence-based particolarmente efficace per supportare lo sviluppo di abilità in persone neurodivergenti." }
    ]
  },
  "simone-marenco": {
    hero: { tag: "Psicoterapeuta Psicoanalitico", title: "Ritrova l'equilibrio della tua vita", sub: "Dall'ansia ai disturbi alimentari, un supporto clinico specializzato e professionale attivo dal 2011.", img: "psychologist-portrait-m.webp" },
    issues: [
      { t: "Ansia e Umore", d: "Trattamento clinico per disturbi d'ansia, attacchi di panico e problematiche depressive." },
      { t: "Disturbi dell'Alimentazione", d: "Supporto specializzato per affrontare e superare disordini legati all'alimentazione." },
      { t: "Stress Lavoro-Correlato", d: "Interventi mirati per prevenire il burnout e ritrovare serenità nel contesto professionale." }
    ],
    services: [
      { t: "Psicoterapia Individuale", d: "Approccio psicoanalitico per esplorare a fondo il disagio e favorire un cambiamento duraturo." },
      { t: "Terapia Relazionale e di Coppia", d: "Interventi sulle problematiche relazionali legate alle varie fasi del ciclo di vita." },
      { t: "Supporto all'Apprendimento", d: "Valutazione e trattamento delle difficoltà legate ai disturbi dell'apprendimento." }
    ],
    faqs: [
      { q: "Quali aree cliniche tratta maggiormente?", a: "Avendo costantemente ampliato la mia formazione dal 2011, mi occupo di disturbi d'ansia, dell'umore, problematiche di coppia, genitorialità e disturbi dell'alimentazione." },
      { q: "Quanto dura un percorso psicoterapeutico psicoanalitico?", a: "La durata varia profondamente in base alla problematica e agli obiettivi che concorderemo durante le prime sedute." }
    ]
  },
  "angelo-paparella": {
    hero: { tag: "Fisioterapista", title: "Prima ascolto la persona, poi il paziente.", sub: "Ogni giorno coltivo la passione profonda per questo lavoro. Entriamo in connessione per riconquistare il tuo equilibrio.", img: "psychologist-portrait-m.webp" },
    issues: [
      { t: "Recupero Post-Traumatico", d: "Riabilitazione attenta per farti ritrovare la mobilità dopo un infortunio sportivo o lavorativo." },
      { t: "Dolori Articolari e Muscolari", d: "Interventi mirati per risolvere l'infiammazione e i sovraccarichi cronici (cervicalgie, lombalgie)." },
      { t: "Cura del Corpo Umano", d: "Studio dell'anatomia e della tua struttura per correggere le abitudini errate alla radice." }
    ],
    services: [
      { t: "Terapia Manuale Empatica", d: "Un approccio pratico che si basa sulla connessione con il paziente per ristabilire l'equilibrio." },
      { t: "Riabilitazione Funzionale", d: "Esercizi mirati e costanti, imparando ad ascoltare veramente le risposte del tuo corpo." },
      { t: "Supporto Concreto e Costante", d: "Ti seguo passo dopo passo nel percorso di guarigione, mettendoti sempre al centro." }
    ],
    faqs: [
      { q: "Cosa intende per 'prima la persona, poi il paziente'?", a: "Significa che non tratto solo il sintomo fisico in modo asettico. Mi piace creare un rapporto empatico, ascoltarti veramente per supportarti al 100%." },
      { q: "Devo portare abbigliamento specifico per le sedute?", a: "Sì, consiglio abbigliamento intimo o sportivo molto comodo, per permettermi di valutare e trattare liberamente l'anatomia della zona interessata." }
    ]
  }
};

function generateHero(client) {
  const d = data[client].hero;
  return `"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { Video, Mic, MicOff } from "lucide-react";
export function HeroSection({ field }: { field: string }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-primary text-sm font-semibold mb-6 tracking-wide uppercase border border-primary/10">
              ${d.tag}
            </span>
            <h1 className="text-foreground font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              ${d.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              ${d.sub}
            </p>
            <SmartLink href="/contatti" className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
              Prenota un Consulto
            </SmartLink>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative lg:ml-auto w-full max-w-lg">
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src="/Assets/hero-bg.webp" alt="Studio" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <motion.div initial={{ opacity: 0, x: -50, y: 50 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="absolute -bottom-10 -left-10 md:-left-20 bg-card p-4 rounded-2xl shadow-xl border border-border/50 flex flex-col gap-3 w-64 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-muted shrink-0">
                  <Image src="/Assets/${d.img}" alt="Professionista" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Seduta in corso</p>
                  <p className="text-xs text-muted-foreground">00:15:32</p>
                </div>
              </div>
              <div className="flex gap-2 w-full mt-1">
                <div className="h-8 flex-1 bg-secondary rounded-lg flex items-center justify-center text-primary"><Video className="w-4 h-4" /></div>
                <div className="h-8 flex-1 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive"><MicOff className="w-4 h-4" /></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute top-10 -right-6 md:-right-12 bg-card px-5 py-3 rounded-xl shadow-lg border border-border/50 flex items-center gap-3 z-20">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">Paziente in Sessione</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`;
}

function generateIssues(client) {
  const issues = data[client].issues;
  return `"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Brain, HeartPulse } from "lucide-react";
const issues = [
  { title: "${issues[0].t}", description: "${issues[0].d}", icon: <ShieldAlert className="w-6 h-6" /> },
  { title: "${issues[1].t}", description: "${issues[1].d}", icon: <Brain className="w-6 h-6" /> },
  { title: "${issues[2].t}", description: "${issues[2].d}", icon: <HeartPulse className="w-6 h-6" /> }
];
export function IssuesGrid() {
  return (
    <section className="py-24 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">Aree di Competenza</h2>
          <p className="text-lg text-foreground/80">Affrontiamo le sfide insieme, costruendo un percorso su misura per te.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((i, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-card p-8 rounded-2xl shadow-sm border border-border/40 hover:shadow-md hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">{i.icon}</div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-3">{i.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{i.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;
}

function generateServices(client) {
  const srvs = data[client].services;
  return `"use client";
import { motion } from "framer-motion";
import { SmartLink } from "@/components/smart-link";
import { ArrowRight, UserCircle, Users, Activity } from "lucide-react";
const services = [
  { title: "${srvs[0].t}", description: "${srvs[0].d}", icon: <UserCircle className="w-8 h-8" /> },
  { title: "${srvs[1].t}", description: "${srvs[1].d}", icon: <Users className="w-8 h-8" /> },
  { title: "${srvs[2].t}", description: "${srvs[2].d}", icon: <Activity className="w-8 h-8" /> }
];
export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="text-primary/80 font-semibold tracking-wider uppercase text-sm mb-4 block">Metodologia</span>
            <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold">Come posso aiutarti</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <SmartLink href="/servizi" className="group inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">Scopri tutti i servizi<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></SmartLink>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="bg-background rounded-3xl p-10 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-8 text-primary/80 group-hover:text-primary transition-colors">{s.icon}</div>
              <h3 className="text-2xl font-semibold text-secondary-foreground mb-4">{s.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;
}

function generateFaq(client) {
  const faqs = data[client].faqs;
  return `"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
  { question: "${faqs[0].q}", answer: "${faqs[0].a}" },
  { question: "${faqs[1].q}", answer: "${faqs[1].a}" }
];
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary/80 font-semibold tracking-wider uppercase text-sm mb-4 block">Domande Frequenti</span>
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">Hai dei dubbi?</h2>
          <p className="text-lg text-foreground/80">Le risposte alle domande più comuni sul percorso.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="border border-border/60 rounded-2xl overflow-hidden bg-card">
                <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/5 transition-colors">
                  <span className="font-semibold text-lg text-secondary-foreground pr-8">{f.question}</span>
                  <ChevronDown className={\`w-5 h-5 text-primary shrink-0 transition-transform duration-300 \${isOpen ? "rotate-180" : ""}\`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <div className="p-6 pt-0 text-foreground/70 leading-relaxed border-t border-border/20 mt-2">{f.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`;
}

clients.forEach(client => {
  const dir = path.join('clients', client, 'src', 'components');
  
  // page.tsx senza componenti mancanti
  fs.writeFileSync(path.join('clients', client, 'src', 'app', 'page.tsx'), pageTsx);
  
  // Footer
  fs.writeFileSync(path.join(dir, 'footer.tsx'), italianFooter);
  
  // Tailored Home
  const homeDir = path.join(dir, 'home');
  fs.writeFileSync(path.join(homeDir, 'hero.tsx'), generateHero(client));
  fs.writeFileSync(path.join(homeDir, 'issues.tsx'), generateIssues(client));
  fs.writeFileSync(path.join(homeDir, 'services.tsx'), generateServices(client));
  fs.writeFileSync(path.join(homeDir, 'faq.tsx'), generateFaq(client));
});

console.log("Success!");
