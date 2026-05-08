"use client";

import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { motion } from "framer-motion";

interface AboutSectionProps {
  name: string;
  fieldDisplay: string;
  isFemale: boolean;
  prefix: string;
}

export function AboutSection({ name, fieldDisplay, isFemale, prefix }: AboutSectionProps) {
  const imageUrl = isFemale 
    ? "/Assets/psychologist-portrait-f.webp"
    : "/Assets/psychologist-portrait-m.webp";

  const lastName = name.split(" ").filter(n => !n.toLowerCase().includes("dott")).join(" ").trim();

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={imageUrl}
              alt={`Ritratto di ${name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Chi Sono
            </h2>
            <h3 className="text-2xl text-primary font-medium mb-8">
              {name} — {fieldDisplay}
            </h3>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-10">
              <p>
                {isFemale ? "Benvenuta/o" : "Benvenuto"}, sono {prefix} {lastName}. Il mio approccio alla psicologia si basa sull'ascolto profondo, 
                sull'empatia e sulla costruzione di un'alleanza terapeutica solida per affrontare insieme 
                le sfide della vita.
              </p>
              <p>
                Credo fermamente che ogni persona abbia le risorse interne per superare i momenti di stallo. 
                Il percorso psicologico è lo spazio protetto dove poter far emergere, riconoscere e valorizzare 
                queste potenzialità.
              </p>
            </div>

            <SmartLink
              href="/chi-sono"
              className="group inline-flex items-center text-primary font-medium text-lg border-b-2 border-primary pb-1 hover:text-primary/80 hover:border-primary/80 transition-colors w-fit"
            >
              Leggi il mio percorso completo
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </SmartLink>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
