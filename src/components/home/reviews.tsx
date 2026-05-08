"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewsProps {
  reviews: Array<{ text: string; author: string; role: string; initial: string }>;
}

export function ReviewsSection({ reviews }: ReviewsProps) {
  const [index, setIndex] = useState(0);

  if (!reviews || reviews.length === 0) return null;

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[#FDF8F5] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
          <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 text-primary/5 -rotate-12" />

          <div className="flex-1 relative z-10 w-full mt-10 md:mt-0">
            <div className="min-h-[220px] md:min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
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
              <Image src="/Assets/hero-bg.webp" alt="Studio" fill className="object-cover" />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
