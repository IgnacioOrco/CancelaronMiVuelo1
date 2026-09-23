"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, AlertCircle, Sparkles } from "lucide-react";
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
        </motion.div>

        {/* Trust Indicator - Single Card: 30 Días (Res. ANAC 774/2025) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 max-w-lg mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-sm border border-brand-celeste/30 rounded-2xl p-4 sm:p-5 text-center shadow-card hover:shadow-elevated transition-all flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="w-12 h-12 shrink-0 flex items-center justify-center">
              <Image
                src="/brand/shield-logo.png"
                alt="CancelaronMiVuelo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-brand-petroleo-900 tracking-tight shrink-0">
              30 Días
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-brand-petroleo-900 leading-tight">
                Plazo Máximo que tiene la aerolínea para responder
              </div>
              <div className="text-xs font-semibold text-brand-celeste-dark mt-0.5">
                Res. Anac 774/2025
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
