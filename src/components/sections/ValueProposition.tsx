"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, Smile, Zap, UserCheck, Sparkles, Check } from "lucide-react";
import { PILLARS } from "@/data/content";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { AbogaciarBadge } from "../branding/AbogaciarBadge";

export const ValueProposition: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Scale: <Scale className="w-6 h-6 text-brand-celeste" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-celeste" />,
    Smile: <Smile className="w-6 h-6 text-brand-celeste" />,
    Zap: <Zap className="w-6 h-6 text-brand-celeste" />,
    UserCheck: <UserCheck className="w-6 h-6 text-brand-celeste" />,
  };

  return (
    <section id="abogaciar" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <Badge variant="secondary" size="md">
              Propuesta de Valor & LegalTech
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petroleo-900 tracking-tight">
            Motor Conceptual <span className="text-brand-celeste">AbogacIAr</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-petroleo-600 leading-relaxed">
            "Tu abogado experto al alcance de tu mano". Combinamos la velocidad de la inteligencia artificial con la experiencia y firma de abogados especialistas en derecho aeronáutico.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, index) => {
            const isWide = index === 4; // Humano pillar highlighted on larger screens
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={isWide ? "lg:col-span-2" : ""}
              >
                <Card
                  variant={isWide ? "featured" : "default"}
                  className="p-6 sm:p-8 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-celeste/10 flex items-center justify-center border border-brand-celeste/20">
                        {iconMap[pillar.iconName]}
                      </div>
                      <Badge variant="outline" size="sm">
                        {pillar.badge}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-brand-petroleo-900 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-celeste-dark mt-0.5 mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-brand-petroleo-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {isWide && (
                    <div className="mt-6 pt-5 border-t border-brand-celeste/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-brand-celeste/5 p-4 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm shrink-0 border border-brand-celeste/30">
                          <Image
                            src="/brand/logo-circle.png"
                            alt="CancelaronMiVuelo"
                            width={36}
                            height={36}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-bold text-brand-petroleo-800">
                          Cero respuestas genéricas de bots: cada documento es auditado por un letrado matriculado.
                        </span>
                      </div>
                      <AbogaciarBadge className="shrink-0" />
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Authority Quote */}
        <div className="mt-14 max-w-4xl mx-auto bg-brand-petroleo text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-celeste/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-celeste">
                Empatía y Rigor Jurídico
              </span>
              <h4 className="text-xl sm:text-2xl font-bold leading-tight">
                No tenés que entender leyes complejas ni discutir con la aerolínea.
              </h4>
            </div>
            <a
              href="#como-funciona"
              className="shrink-0 bg-brand-celeste hover:bg-brand-celeste-hover text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-glow-celeste/50"
            >
              Ver los 7 Pasos del Proceso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
