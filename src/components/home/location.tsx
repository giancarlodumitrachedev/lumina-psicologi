"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

interface LocationSectionProps {
  city: string;
  address: string;
}

export function LocationSection({ city, address }: LocationSectionProps) {
  // Construct a safe search query for the generic embed map
  const encodedQuery = encodeURIComponent(`${address}, ${city}, Italy`);
  const mapUrl = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8">
              Dove Siamo
            </h2>
            
            <p className="text-lg text-foreground/80 mb-10 leading-relaxed max-w-md">
              Lo studio è facilmente raggiungibile e situato in una zona tranquilla, 
              garantendo la massima privacy e comodità.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/30 p-3 rounded-full text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground">Indirizzo</p>
                  <p className="text-foreground/70 text-[17px]">{address}</p>
                  <p className="text-foreground/70 text-[17px]">{city}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/30 p-3 rounded-full text-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground">Telefono</p>
                  <p className="text-foreground/70 text-[17px]">+39 333 1234567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/30 p-3 rounded-full text-primary mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground">Email</p>
                  <p className="text-foreground/70 text-[17px]">prenotazioni@studio.it</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border/50"
          >
            <iframe
              title="Mappa dello Studio"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={mapUrl}
              allowFullScreen
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
