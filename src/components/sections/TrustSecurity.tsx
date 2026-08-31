"use client";

import React from "react";
import { motion } from "framer-motion";
import { SearchCheck, Compass, Lock, CheckSquare, ShieldCheck, Award, Scale, CheckCircle } from "lucide-react";
import { RULES } from "@/data/content";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { BRAND } from "@/data/constants";

export const TrustSecurity: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    SearchCheck: <SearchCheck className="w-6 h-6 text-brand-celeste" />,
    Compass: <Compass className="w-6 h-6 text-brand-celeste" />,
    Lock: <Lock className="w-6 h-6 text-brand-celeste" />,
    CheckSquare: <CheckSquare className="w-6 h-6 text-brand-celeste" />,
  };

  return (
    <section id="seguridad" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="primary" size="md">
            Garantía & Transparencia
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petroleo-900 tracking-tight">
            Nuestras 4 Reglas Inquebrantables
          </h2>
          <p className="text-base sm:text-lg text-brand-petroleo-600 leading-relaxed">
            Construimos una plataforma basada en la ética profesional, la honestidad jurídica y la protección irrestricta de tus derechos.
          </p>
        </div>

        {/* 4 Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RULES.map((rule, index) => (
            <motion.div
              key={rule.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-7 h-full flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-brand-celeste bg-brand-celeste/10 px-2.5 py-1 rounded-lg">
                      REGLA #{rule.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-petroleo-50 flex items-center justify-center">
                      {iconMap[rule.iconName]}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-petroleo-900 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-petroleo-700 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Legal Endorsement Authority Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-petroleo text-white rounded-3xl p-8 sm:p-12 shadow-elevated relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Law firm credentials */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-celeste/10 border border-brand-celeste/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-celeste">
                <Scale className="w-4 h-4" /> Respaldo Jurídico Institucional
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Patrocinio y Dirección Letrada: <br />
                <span className="text-brand-celeste">Estudio Márquez & Asociados</span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Cada reclamo formulado a través de <strong>CancelaronMiVuelo</strong> cuenta con la solvencia técnica, supervisión y firma de abogados matriculados en el fuero federal aeronáutico y civil y comercial.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Matrículas habilitadas CPACF / CFAM</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Amparo bajo Ley 25.326 de Datos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doctrina ANAC Res. 774/2025</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Representación en COPREC y Juzgados</span>
                </div>
              </div>
            </div>

            {/* Right Col: Trust Seal Box */}
            <div className="lg:col-span-5 bg-brand-petroleo-800/90 border border-brand-petroleo-700 p-6 sm:p-7 rounded-2xl flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-celeste to-emerald-400 flex items-center justify-center text-brand-petroleo shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Sello de Seguridad Jurídica
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Garantía de rigor profesional sin algoritmos que firmen demandas sin revisión humana.
                </p>
              </div>
              <div className="w-full pt-3 border-t border-brand-petroleo-700/80 text-[11px] text-brand-celeste font-semibold">
                Auditado por AbogacIAr · Red Legal Argentina
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
