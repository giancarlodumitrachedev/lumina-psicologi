"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const studioImages = [
  { src: "/Assets/studio-1.webp", alt: "Sala d'attesa Lumina" },
  { src: "/Assets/studio-2.webp", alt: "Studio principale Lumina" },
  { src: "/Assets/studio-3.webp", alt: "Dettaglio ambiente Lumina" },
];

export function StudioSection() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Lo Studio
          </h2>
          <p className="text-lg text-foreground/80">
            Un ambiente pensato per accoglierti. Ho curato ogni dettaglio per offrirti uno spazio calmo, 
            sicuro e rilassante in cui sentirti a tuo agio dal primo momento.
          </p>
        </motion.div>

        <div className="md:hidden flex items-center justify-end text-[13px] uppercase tracking-wider text-primary/70 font-semibold mb-4 pr-2">
          Scorri le foto <ArrowRight className="w-4 h-4 ml-2" />
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory px-6 md:px-0 pb-8 -mx-6 md:mx-0 hide-scrollbar md:grid md:grid-cols-3 gap-6 md:gap-8">
          {studioImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative aspect-[4/3] w-[85vw] md:w-auto shrink-0 snap-center rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
