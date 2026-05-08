"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Devo portare esami strumentali (Raggi X, Risonanze)?",
    answer: "Sì, se sei già in possesso di referti medici, ecografie, radiografie o risonanze magnetiche recenti, ti prego di portarli alla prima visita. Saranno molto utili per un inquadramento clinico più preciso."
  },
  {
    question: "I trattamenti sono dolorosi?",
    answer: "Alcune manovre di sblocco articolare o il trattamento di contratture profonde possono provocare un leggero fastidio temporaneo, ma la terapia viene sempre modulata in base alla tua soglia del dolore. L'obiettivo è farti stare meglio, non peggio!"
  },
  {
    question: "Come mi devo vestire per la seduta?",
    answer: "Ti consiglio di indossare un abbigliamento comodo e intimo sportivo. Durante la valutazione e il trattamento potrebbe essere necessario scoprire la zona interessata per poter operare con efficacia."
  },
  {
    question: "Quanto dura un ciclo di fisioterapia?",
    answer: "Dipende dalla patologia e dalla tua risposta al trattamento. Durante la prima visita di valutazione stabiliremo insieme un piano terapeutico indicando il numero orientativo di sedute necessarie."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary/80 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Domande Frequenti
          </span>
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Hai dei dubbi?
          </h2>
          <p className="text-lg text-foreground/80">
            Ecco le risposte alle domande più comuni sulle sedute di fisioterapia.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-border/60 rounded-2xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/5 transition-colors"
                >
                  <span className="font-semibold text-lg text-secondary-foreground pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-foreground/70 leading-relaxed border-t border-border/20 mt-2">
                        {faq.answer}
                      </div>
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
}
