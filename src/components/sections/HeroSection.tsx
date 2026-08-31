"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, CheckCircle, ArrowRight, AlertCircle, Plane, Sparkles, Scale } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { AbogaciarBadge } from "../branding/AbogaciarBadge";
import { ShieldIcon } from "../branding/ShieldIcon";
import { BRAND, getWhatsAppLink } from "@/data/constants";

const CLAIM_TYPES = [
  {
    id: "cancelacion",
    label: "Vuelo Cancelado",
    icon: "🚫",
    headline: "¿Tu vuelo fue cancelado?",
    description: "Te corresponde la reubicación inmediata, reintegro total y compensación económica por daños y gastos no cubiertos.",
    waText: "Hola CancelaronMiVuelo, mi vuelo fue cancelado y quiero saber qué compensación y reintegro me corresponde reclamar.",
  },
  {
    id: "demora",
    label: "Demora (+3 Horas)",
    icon: "⏳",
    headline: "¿Sufriste demoras de más de 3 horas?",
    description: "La aerolínea debe cubrir refrigerios, traslados, hospedaje y responder con indemnizaciones por el tiempo perdido.",
    waText: "Hola CancelaronMiVuelo, mi vuelo sufrió una demora de más de 3 horas y quiero iniciar mi reclamo formal.",
  },
  {
    id: "overbooking",
    label: "Sobreventa / Overbooking",
    icon: "👥",
    headline: "¿Te denegaron el embarque por sobreventa?",
    description: "Es una infracción directa. Tenés derecho a compensación económica inmediata en efectivo además de tu próximo vuelo.",
    waText: "Hola CancelaronMiVuelo, me denegaron el embarque por sobreventa (overbooking) y quiero exigir mi compensación.",
  },
  {
    id: "equipaje",
    label: "Equipaje Perdido o Roto",
    icon: "🧳",
    headline: "¿Dañaron o extraviaron tu valija?",
    description: "El Convenio de Montreal y la ANAC fijan montos indemnizatorios en DEGs (Derechos Especiales de Giro) en dólares o pesos.",
    waText: "Hola CancelaronMiVuelo, la aerolínea perdió/dañó mi valija y necesito hacer el reclamo legal correspondiente.",
  },
];

export const HeroSection: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState(CLAIM_TYPES[0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8F9FA] via-[#F0F4F8] to-[#F8F9FA]">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-celeste/20 rounded-full blur-3xl" />
        <div className="absolute top-48 -right-32 w-96 h-96 bg-brand-petroleo/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline & Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <Badge variant="primary" size="md" icon={<Sparkles className="w-3.5 h-3.5 text-brand-celeste" />}>
            Plataforma LegalTech N° 1 en Argentina
          </Badge>
          <div className="hidden sm:block">
            <AbogaciarBadge />
          </div>
        </div>

        {/* Main H1 Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-petroleo-900 tracking-tight leading-[1.12]"
          >
            Cancelaron tu vuelo. <br className="hidden sm:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-petroleo-900 via-brand-celeste to-brand-petroleo-900">
              No tus derechos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-brand-petroleo-700 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Protegé tu dinero y obtené tu <strong>compensación económica</strong> ante cancelaciones, demoras, sobreventas o problemas de equipaje.
          </motion.p>
        </div>

        {/* Interactive Claim Selector & Live Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto bg-white rounded-3xl p-5 sm:p-8 shadow-card border border-gray-100/90 relative"
        >
          {/* Issue Pills Selector */}
          <div className="text-center mb-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-petroleo-600 block mb-3">
              1. Seleccioná el inconveniente con tu vuelo:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CLAIM_TYPES.map((type) => {
                const isSelected = selectedClaim.id === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedClaim(type)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-brand-petroleo text-white border-brand-petroleo shadow-md ring-2 ring-brand-celeste/50 scale-[1.02]"
                        : "bg-gray-50 text-brand-petroleo-800 border-gray-200/80 hover:bg-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-xl mb-1">{type.icon}</span>
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Action Preview */}
          <div className="bg-brand-petroleo-50/70 border border-brand-petroleo-100 rounded-2xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white text-brand-petroleo shadow-sm shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 text-brand-celeste" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-petroleo-900 leading-tight">
                  {selectedClaim.headline}
                </h3>
                <p className="text-xs sm:text-sm text-brand-petroleo-700 mt-1 leading-relaxed">
                  {selectedClaim.description}
                </p>
              </div>
            </div>
          </div>

          {/* Primary High-Converting CTA (Rojo Cancelación #FF3B30) */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={getWhatsAppLink(selectedClaim.waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1"
            >
              <Button
                variant="primary"
                size="lg"
                fullWidth
                leftIcon={<MessageCircle className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Consultar mi caso GRATIS por WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Guarantees under CTA */}
          <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left text-xs text-brand-petroleo-600 font-medium">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Diagnóstico 100% Gratuito</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Clock className="w-4 h-4 text-brand-celeste shrink-0" />
              <span>Respuesta legal en minutos</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Scale className="w-4 h-4 text-brand-petroleo shrink-0" />
              <span>Respaldo Estudio Márquez</span>
            </div>
          </div>
        </motion.div>

        {/* Stats / Proof Counters */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "30 Días", label: "Plazo máximo de respuesta", sub: "Res. ANAC 774/2025" },
            { value: "100%", label: "Dinero para el pasajero", sub: "Sin comisiones sobre tu indemnización" },
            { value: "15+", label: "Años de experiencia", sub: "En Derecho Aeronáutico" },
            { value: "$0", label: "Costo de diagnóstico", sub: "Evaluación legal inicial sin cargo" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 text-center shadow-soft"
            >
              <div className="text-2xl sm:text-3xl font-black text-brand-petroleo-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-brand-petroleo-800 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
