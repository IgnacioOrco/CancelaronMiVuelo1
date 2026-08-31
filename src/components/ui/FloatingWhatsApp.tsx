"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ShieldCheck } from "lucide-react";
import { BRAND, getWhatsAppLink } from "@/data/constants";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { label: "🚨 Mi vuelo fue cancelado", msg: "Hola, mi vuelo fue cancelado y quiero saber qué compensación me corresponde." },
    { label: "⏳ Demora de más de 3 horas", msg: "Hola, mi vuelo tiene más de 3 horas de demora y quiero hacer el reclamo." },
    { label: "🧳 Perdieron o dañaron mi valija", msg: "Hola, tengo un problema con mi equipaje y quiero iniciar el reclamo legal." },
    { label: "⚖️ Hablar con un abogado", msg: "Hola, quiero consultar con un abogado de CancelaronMiVuelo sobre mi caso." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick chat popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[340px] max-w-[calc(100vw-48px)] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-petroleo text-white p-4 relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white">
                  <MessageCircle className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Guardia Legal WhatsApp</h4>
                  <p className="text-[11px] text-brand-celeste flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3 h-3 inline" /> Respuestas en minutos
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Cerrar ventana de WhatsApp"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content & Quick Prompts */}
            <div className="p-4 bg-gray-50/50">
              <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm text-xs text-brand-petroleo-700 leading-relaxed mb-3">
                👋 <strong>¡Hola!</strong> Seleccioná tu problema para conectar inmediatamente con nuestro equipo legal y recibir tu <strong>diagnóstico gratis</strong>:
              </div>

              <div className="space-y-2">
                {quickOptions.map((opt, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppLink(opt.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 bg-white hover:bg-brand-celeste/10 hover:border-brand-celeste/40 border border-gray-200/80 rounded-xl text-xs font-semibold text-brand-petroleo transition-all duration-150"
                  >
                    {opt.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 text-center">
                <span className="text-[10px] text-gray-400">
                  Respaldo legal Estudio Márquez & Asociados
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main trigger button with pulse animation */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        aria-label="Abrir chat de WhatsApp para consulta de reclamo"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </span>
        <span className="font-bold text-sm hidden sm:inline tracking-tight">
          ¿Cancelaron tu vuelo? Hablá con un abogado
        </span>
      </motion.button>
    </div>
  );
};
