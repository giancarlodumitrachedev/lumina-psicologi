"use client";

import { motion } from "framer-motion";
import { Activity, Bone, HeartPulse, PersonStanding, Flame, Stethoscope } from "lucide-react";

const issues = [
  {
    title: "Cervicalgia e Mal di Schiena",
    description: "Interventi mirati per risolvere dolori acuti e cronici alla colonna vertebrale, ripristinando una corretta mobilità senza dolore.",
    icon: <Bone className="w-6 h-6" />
  },
  {
    title: "Traumi Sportivi",
    description: "Percorsi di riabilitazione intensiva post-infortunio (distorsioni, strappi, lussazioni) per farti tornare in campo al 100%.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Recupero Post-Operatorio",
    description: "Affiancamento specializzato dopo interventi chirurgici ortopedici per un recupero articolare e muscolare rapido e sicuro.",
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    title: "Problemi Posturali",
    description: "Analisi e correzione delle asimmetrie e dei difetti posturali che causano tensioni muscolari e sovraccarichi articolari.",
    icon: <PersonStanding className="w-6 h-6" />
  },
  {
    title: "Infiammazioni e Tendiniti",
    description: "Terapie manuali e fisiche (Tecar, Laser) per disinfiammare rapidamente i tessuti e curare epicondiliti o fasciti.",
    icon: <Flame className="w-6 h-6" />
  },
  {
    title: "Prevenzione Infortuni",
    description: "Programmi di rinforzo e riequilibrio muscolare per atleti e non, volti a minimizzare il rischio di future lesioni.",
    icon: <HeartPulse className="w-6 h-6" />
  }
];

export function IssuesGrid() {
  return (
    <section className="py-24 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Di cosa mi occupo?
          </h2>
          <p className="text-lg text-foreground/80">
            Il dolore fisico non deve essere la normalità. Insieme possiamo individuare la causa e strutturare il recupero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/40 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {issue.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
                {issue.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {issue.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
