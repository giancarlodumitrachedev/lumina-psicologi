"use client";

import Image from "next/image";
import { SmartLink } from "./smart-link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";

export function Header({ tenantId }: { tenantId: string }) {
  const navLinks = [
    { href: `/${tenantId}`, label: "Home" },
    { href: `/${tenantId}/chi-sono`, label: "Chi Sono" },
    { href: `/${tenantId}/servizi`, label: "Servizi" },
    { href: `/${tenantId}/contatti`, label: "Contatti" },
  ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40 h-16" 
          : "bg-transparent h-16 md:h-24"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-full items-center justify-between px-6 transition-all duration-300">
        {/* Logo */}
        <SmartLink href={`/${tenantId}`} className="flex items-center space-x-2">
          <Image 
            src="/Assets/logo.png" 
            alt="Lumina" 
            width={140} 
            height={42} 
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-7 md:h-8" : "h-8 md:h-10"}`}
            priority
          />
        </SmartLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <SmartLink
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium text-[15px] tracking-wide transition-all"
            >
              {link.label}
            </SmartLink>
          ))}
          <SmartLink
            href={`/${tenantId}/contatti`}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full text-[15px] font-medium transition-all shadow-sm hover:shadow"
          >
            Prenota un consulto
          </SmartLink>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<button className="p-2 -mr-2 text-foreground focus:outline-none" aria-label="Menu" />}
            >
              <Menu className="h-7 w-7" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-full sm:w-[400px]">
              <SheetTitle className="sr-only">Menu di Navigazione</SheetTitle>
              <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
                {navLinks.map((link) => (
                  <SmartLink
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-heading font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </SmartLink>
                ))}
                <SmartLink
                  href={`/${tenantId}/contatti`}
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3.5 rounded-full text-lg text-center font-medium mt-4 shadow-md"
                >
                  Prenota un consulto
                </SmartLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
