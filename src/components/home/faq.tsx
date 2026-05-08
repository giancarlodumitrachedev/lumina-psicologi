"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqProps {
  faqs: Array<{ q: string; a: string }>;
}

export function FaqSection({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <span className="text-primary/80 font-semibold tracking-wider uppercase text-sm mb-4 block">Domande Frequenti</span>
          <h2 className="text-secondary-foreground font-heading text-3xl md:text-5xl font-semibold mb-6">Hai dei dubbi?</h2>
          <p className="text-lg text-foreground/80">Le risposte alle domande più comuni sul percorso.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs?.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="border border-border/60 rounded-2xl overflow-hidden bg-card">
                <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/5 transition-colors">
                  <span className="font-semibold text-lg text-secondary-foreground pr-8">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <div className="p-6 pt-0 text-foreground/70 leading-relaxed border-t border-border/20 mt-2">{f.a}</div>
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
