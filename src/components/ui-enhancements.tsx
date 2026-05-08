"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SmartLink } from "./smart-link";

export function UiEnhancements() {
  const [showScroll, setShowScroll] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookie(true), 1500);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookie(false);
  };

  return (
    <>
      {/* Scroll to top (Mobile only) */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="md:hidden fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-xl hover:bg-primary/90 transition-colors"
            aria-label="Torna in cima"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner (Responsive) */}
      <AnimatePresence>
        {showCookie && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
          >
            <div className="max-w-5xl mx-auto bg-background/95 backdrop-blur-sm border border-border shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
              <div className="text-sm text-foreground/80 md:pr-8">
                <p className="font-semibold text-foreground mb-1">Gestione dei Cookie</p>
                Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito e raccogliere dati analitici anonimi. 
                <SmartLink href="/privacy" className="text-primary font-medium hover:underline ml-1">
                  Scopri di più
                </SmartLink>.
              </div>
              <div className="flex gap-4 w-full md:w-auto shrink-0">
                <button
                  onClick={acceptCookies}
                  className="w-full md:w-auto px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Accetta e Prosegui
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
