"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS } from "@/data/content";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { getWhatsAppLink } from "@/data/constants";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <Badge variant="secondary" size="md">
            Dudas Frecuentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petroleo-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-brand-petroleo-600 leading-relaxed">
            Todo lo que necesitás saber sobre plazos legales, normativas aeronáuticas y cómo protegemos tus derechos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-brand-petroleo-50/50 border-brand-celeste/40 shadow-sm"
                    : "bg-white border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-brand-petroleo-900 leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen
                        ? "bg-brand-celeste text-white"
                        : "bg-gray-100 text-brand-petroleo-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-brand-petroleo-700 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra Help Callout */}
        <div className="mt-12 text-center p-6 bg-brand-petroleo-50 rounded-3xl border border-brand-petroleo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-brand-petroleo-900">
              ¿Tenés otra consulta específica sobre tu vuelo?
            </h4>
            <p className="text-xs text-brand-petroleo-600 mt-0.5">
              Nuestros abogados responden en minutos por WhatsApp sin costo alguno.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hola, tengo una pregunta específica sobre mi caso que no vi en las FAQ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
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
      </div>
    </section>
  );
};
