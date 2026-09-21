"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ShieldCheck, ArrowRight, Zap, Scale } from "lucide-react";
import { Button } from "../ui/Button";
import { AbogaciarBadge } from "../branding/AbogaciarBadge";
import { getWhatsAppLink } from "@/data/constants";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F0F4F8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-petroleo text-white rounded-3xl md:rounded-[40px] p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-brand-petroleo-700 text-center"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-celeste/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-rojo/15 rounded-full blur-3xl pointer-events-none" />

          {/* Central Official Logo Shield */}
          <div className="flex justify-center mb-6">
            <Image
              src="/brand/shield-logo.png"
              alt="CancelaronMiVuelo Escudo Oficial"
              width={80}
              height={80}
              className="drop-shadow-2xl object-contain animate-float"
            />
          </div>

          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-celeste mb-3 block">
            No dejes que la aerolínea se quede con lo que te corresponde
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Cancelaron tu vuelo. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-celeste via-cyan-200 to-white">
              Nosotros hacemos valer tus derechos.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Obtené tu <strong>diagnóstico legal gratuito en menos de 5 minutos</strong> directamente por WhatsApp con el respaldo de abogados matriculados.
          </p>

          {/* CTA Button in Rojo Cancelación */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={getWhatsAppLink("Hola, quiero iniciar mi reclamo legal con diagnóstico gratuito ahora mismo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="primary"
                size="xl"
                fullWidth
                leftIcon={<MessageCircle className="w-6 h-6" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Reclamar mi Compensación Ahora
              </Button>
            </a>
          </div>

          {/* Bottom Badges */}
          <div className="mt-8 pt-6 border-t border-brand-petroleo-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-celeste" />
              <span>Sin costos ocultos</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Diagnóstico en 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-celeste" />
              <span>Res. ANAC 774/2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
