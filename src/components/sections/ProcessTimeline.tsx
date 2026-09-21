"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Plane, FileSearch, Layers, UploadCloud, CreditCard, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { STEPS } from "@/data/content";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { getWhatsAppLink } from "@/data/constants";

export const ProcessTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<"all" | "free" | "paid">("all");

  const iconMap: Record<string, React.ReactNode> = {
    MessageCircle: <MessageCircle className="w-5 h-5" />,
    Plane: <Plane className="w-5 h-5" />,
    FileSearch: <FileSearch className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    UploadCloud: <UploadCloud className="w-5 h-5" />,
    CreditCard: <CreditCard className="w-5 h-5" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
  };

  const freeSteps = STEPS.filter((s) => s.stage === "free");
  const paidSteps = STEPS.filter((s) => s.stage === "paid");

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="primary" size="md">
            Transparencia Total
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petroleo-900 tracking-tight">
            Cómo Funciona: Flujo de 7 Pasos
          </h2>
          <p className="text-base sm:text-lg text-brand-petroleo-600 leading-relaxed">
            Dividimos el proceso en dos etapas claras. Evaluás la viabilidad sin pagar nada y avanzás solo si tenés derecho a cobrar.
          </p>
        </div>

        {/* Two Stage Overview Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Bloque 1: Etapa Gratuita */}
          <div className="bg-white border-2 border-emerald-400/40 rounded-3xl p-6 sm:p-8 shadow-soft relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="success" size="md">
                🟢 ETAPA 1 · 100% GRATUITA
              </Badge>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Pasos 1 al 3
              </span>
            </div>
            <h3 className="text-xl font-bold text-brand-petroleo-900 mb-2">
              Evaluación & Diagnóstico Legal
            </h3>
            <p className="text-xs sm:text-sm text-brand-petroleo-700 leading-relaxed mb-4">
              Ingresás los datos de tu vuelo y te informamos al instante si la aerolínea incumplió la normativa y cuánto dinero podés reclamar. <strong>Cero costo y cero compromiso.</strong>
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
              <ShieldCheck className="w-4 h-4" /> Sin necesidad de tarjeta de crédito
            </div>
          </div>

          {/* Bloque 2: Etapa Paga */}
          <div className="bg-white border-2 border-brand-celeste/40 rounded-3xl p-6 sm:p-8 shadow-soft relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" size="md">
                🔵 ETAPA 2 · PAGO ÚNICO Y FIJO
              </Badge>
              <span className="text-xs font-bold text-brand-celeste bg-brand-celeste/10 px-3 py-1 rounded-full">
                Pasos 4 al 7
              </span>
            </div>
            <h3 className="text-xl font-bold text-brand-petroleo-900 mb-2">
              Formalización, Intimación & Cobro
            </h3>
            <p className="text-xs sm:text-sm text-brand-petroleo-700 leading-relaxed mb-4">
              Elegís tu plan a precio final en pesos (IVA incluido), adjuntás tus comprobantes y nuestros abogados redactan e intiman formalmente a la aerolínea.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-brand-celeste-dark">
              <CheckCircle2 className="w-4 h-4" /> Redacción y patrocinio con respaldo letrado
            </div>
          </div>
        </div>

        {/* 7-Step Timeline Cards */}
        <div className="relative">
          {/* Vertical Connecting Line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-emerald-400 via-brand-celeste to-brand-petroleo -translate-x-1/2 rounded-full" />

          <div className="space-y-6 lg:space-y-12">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 1;
              const isFree = step.stage === "free";

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 shadow-soft hover:shadow-card ${
                        isFree
                          ? "border-emerald-100 hover:border-emerald-300"
                          : "border-brand-celeste/20 hover:border-brand-celeste/50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-2xl flex items-center justify-center font-black text-sm text-white ${
                              isFree ? "bg-emerald-500 shadow-sm" : "bg-brand-celeste shadow-sm"
                            }`}
                          >
                            {step.number}
                          </span>
                          <h4 className="text-lg font-bold text-brand-petroleo-900">
                            {step.title}
                          </h4>
                        </div>
                        <Badge
                          variant={isFree ? "success" : "secondary"}
                          size="sm"
                        >
                          {step.badge}
                        </Badge>
                      </div>

                      <p className="text-xs font-semibold text-brand-petroleo-600 mb-2">
                        {step.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-petroleo-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon (Desktop) */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-white shadow-md z-10 text-brand-petroleo shrink-0">
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center text-white ${
                        isFree ? "bg-emerald-500" : "bg-brand-celeste"
                      }`}
                    >
                      {iconMap[step.iconName]}
                    </div>
                  </div>

                  {/* Spacer for 2-column balance on Desktop */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppLink("Hola, quiero iniciar el Paso 1 de mi reclamo para obtener el diagnóstico gratuito.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5" />}
            >
              Comenzar Paso 1: Diagnóstico Gratis
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
