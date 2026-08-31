"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "../branding/BrandLogo";
import { Button } from "../ui/Button";
import { MessageCircle, Menu, X, ShieldAlert } from "lucide-react";
import { getWhatsAppLink } from "@/data/constants";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Cómo Funciona", href: "#como-funciona" },
    { label: "Propuesta AbogacIAr", href: "#abogaciar" },
    { label: "Planes & Precios", href: "#planes" },
    { label: "Garantía & Seguridad", href: "#seguridad" },
    { label: "Preguntas Frecuentes", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-gray-100"
          : "bg-brand-humo/90 backdrop-blur-sm py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Horizontal Logo */}
        <a href="#" className="focus:outline-none">
          <BrandLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-petroleo-700 hover:text-brand-celeste transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="whatsapp"
              size="sm"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Consultar por WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366] text-white rounded-xl"
            aria-label="Abrir WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-petroleo rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-5 pt-4 pb-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-brand-petroleo-900 hover:text-brand-celeste py-1.5 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                Iniciar Reclamo Gratis
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
