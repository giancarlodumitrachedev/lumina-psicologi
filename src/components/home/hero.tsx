"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { Video, Mic, MicOff } from "lucide-react";

interface HeroProps {
  tag: string;
  title: string;
  sub: string;
  img: string;
  tenantId: string;
}

export function HeroSection({ tag, title, sub, img, tenantId }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-start text-left">
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block py-1.5 px-4 rounded-full bg-secondary text-primary text-sm font-semibold mb-6 tracking-wide uppercase border border-primary/10">
              {tag}
            </motion.span>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-foreground font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              {title}
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              {sub}
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <SmartLink href={`/${tenantId}/contatti`} className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                Prenota un Consulto
              </SmartLink>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.3 }} className="relative lg:ml-auto w-full max-w-lg mt-8 lg:mt-0">
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src="/Assets/hero-bg.webp" alt="Studio" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <motion.div initial={{ opacity: 0, x: -50, y: 50 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="absolute -bottom-6 left-2 sm:-left-6 md:-left-12 lg:-left-20 bg-card p-4 rounded-2xl shadow-xl border border-border/50 flex flex-col gap-3 w-56 sm:w-64 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-muted shrink-0">
                  <Image src={`/Assets/${img}`} alt="Professionista" fill className="object-cover" />
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
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute top-6 right-2 sm:-right-4 md:-right-8 lg:-right-12 bg-card px-4 sm:px-5 py-3 rounded-xl shadow-lg border border-border/50 flex items-center gap-2 sm:gap-3 z-20">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">Paziente in Sessione</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
