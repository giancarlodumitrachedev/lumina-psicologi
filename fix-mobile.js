const fs = require('fs');
const path = require('path');

const clients = [
  'monica-milan',
  'paolo-gay',
  'giovanna-padalino',
  'simone-marenco',
  'angelo-paparella'
];

function generateReviews(client) {
  const isFisio = client === 'angelo-paparella';
  
  const reviewsData = isFisio ? `[
  {
    text: "Mi hanno aiutato a risolvere un dolore alla spalla che mi tormentava da mesi. Approccio molto professionale e grande attenzione alle mie sensazioni durante i trattamenti.",
    author: "Marco T.",
    role: "Paziente",
    initial: "M"
  },
  {
    text: "Ho trovato finalmente qualcuno che prima mi ascolta e poi interviene. La riabilitazione post-operatoria sta procedendo a gonfie vele. Grazie infinite!",
    author: "Elena R.",
    role: "Paziente Riabilitazione",
    initial: "E"
  },
  {
    text: "Tecarterapia eseguita con grande competenza. Già dopo le prime sedute il miglioramento è stato tangibile. Consigliatissimo per sportivi e non.",
    author: "Giovanni S.",
    role: "Paziente Sportivo",
    initial: "G"
  }
]` : `[
  {
    text: "Sono riusciti a farmi condividere tutti i problemi che stavo vivendo. Mi hanno ascoltato e abbiamo discusso i miei disagi nel dettaglio senza che mi sentissi mai giudicata.",
    author: "Silvia M.",
    role: "Paziente",
    initial: "S"
  },
  {
    text: "Un percorso illuminante. Ho imparato a gestire l'ansia che mi bloccava da anni, trovando in studio uno spazio davvero sicuro e accogliente.",
    author: "Davide P.",
    role: "Paziente",
    initial: "D"
  },
  {
    text: "L'empatia e la professionalità dimostrate sono state fondamentali. Ho finalmente ritrovato la serenità che cercavo da tempo.",
    author: "Francesca L.",
    role: "Paziente",
    initial: "F"
  }
]`;

  return `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = ${reviewsData};

export function ReviewsSection() {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FDF8F5] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative"
        >
          {/* Decorative Quote */}
          <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 text-primary/5 -rotate-12" />

          <div className="flex-1 relative z-10 w-full mt-10 md:mt-0">
            <div className="min-h-[220px] md:min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-heading font-medium text-foreground leading-relaxed md:leading-relaxed mb-8 break-words">
                    "{reviews[index].text}"
                  </h3>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-lg shrink-0">
                      {reviews[index].initial}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-base md:text-lg">{reviews[index].author}</p>
                      <p className="text-muted-foreground text-xs md:text-sm">{reviews[index].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex gap-4 mt-10">
              <button onClick={prevReview} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-primary transition-colors focus:outline-none">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextReview} className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-xl focus:outline-none">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5 shrink-0 hidden md:block">
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/Assets/hero-bg.webp" 
                alt="Studio" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
`;
}

clients.forEach(client => {
  const compDir = path.join('clients', client, 'src', 'components');
  const homeDir = path.join(compDir, 'home');

  // Replace Reviews
  fs.writeFileSync(path.join(homeDir, 'reviews.tsx'), generateReviews(client));

  // Helper to replace text sizes and fix overflow
  const fixFile = (filePath, replacements) => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      replacements.forEach(([from, to]) => {
        content = content.replace(from, to);
      });
      fs.writeFileSync(filePath, content);
    }
  };

  // Fix Hero (text-5xl md:text-6xl lg:text-7xl -> text-4xl md:text-6xl lg:text-7xl)
  fixFile(path.join(homeDir, 'hero.tsx'), [
    [/text-5xl md:text-6xl lg:text-7xl/g, 'text-4xl md:text-6xl lg:text-7xl'],
    [/pt-32 pb-20 lg:pt-48 lg:pb-32/g, 'pt-24 pb-16 lg:pt-40 lg:pb-32'], // Ridurre padding mobile
  ]);

  // Fix Issues
  fixFile(path.join(homeDir, 'issues.tsx'), [
    [/text-4xl md:text-5xl/g, 'text-3xl md:text-5xl'],
    [/py-24/g, 'py-16 md:py-24'], // Ridurre padding top/bottom su mobile
    [/mb-16/g, 'mb-10 md:mb-16']
  ]);

  // Fix Services
  fixFile(path.join(homeDir, 'services.tsx'), [
    [/text-4xl md:text-5xl/g, 'text-3xl md:text-5xl'],
    [/py-24/g, 'py-16 md:py-24'],
    [/mb-16/g, 'mb-10 md:mb-16']
  ]);

  // Fix FAQ
  fixFile(path.join(homeDir, 'faq.tsx'), [
    [/text-4xl md:text-5xl/g, 'text-3xl md:text-5xl'],
    [/py-24/g, 'py-16 md:py-24'],
    [/mb-16/g, 'mb-10 md:mb-16']
  ]);

  // Fix Footer
  fixFile(path.join(compDir, 'footer.tsx'), [
    [/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-4xl lg:text-5xl'],
    [/pt-24 pb-12/g, 'pt-16 pb-8'],
    [/mb-32/g, 'mb-20']
  ]);

});

console.log("Mobile responsiveness and animated reviews injected successfully!");
