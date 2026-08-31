"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Star, ShieldCheck, Zap, HelpCircle } from "lucide-react";
import { PLANS } from "@/data/content";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { getWhatsAppLink } from "@/data/constants";

export const PricingSection: React.FC = () => {
  return (
    <section id="planes" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="accent" size="md">
            Cero Comisiones Sorpresa
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petroleo-900 tracking-tight">
            Planes Claros y Precios Finales
          </h2>
          <p className="text-base sm:text-lg text-brand-petroleo-600 leading-relaxed">
            Pago único en pesos argentinos (IVA incluido). No nos quedamos con el 30% ni el 40% de tu dinero recuperado: <strong>el 100% de la indemnización es tuyo</strong>.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {PLANS.map((plan, index) => {
            const isFeatured = plan.featured;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex"
              >
                <div
                  className={`w-full flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 relative ${
                    isFeatured
                      ? "bg-white border-2 border-brand-celeste shadow-card ring-4 ring-brand-celeste/10 scale-[1.03] z-10"
                      : "bg-[#F8F9FA] border border-gray-200/80 shadow-soft hover:shadow-card hover:bg-white"
                  }`}
                >
                  {/* Top Badge for Featured */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-brand-celeste text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-white" /> {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Plan Top Section */}
                  <div>
                    <div className="mb-4">
                      <h3 className="text-xl font-black text-brand-petroleo-900 tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-brand-petroleo-600 mt-1 min-h-[34px] leading-snug">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="pb-5 mb-5 border-b border-gray-200/70">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-black text-brand-petroleo-900 tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-brand-petroleo-500 block mt-1">
                        {plan.period}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-petroleo-700 block">
                        Incluye:
                      </span>
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2.5 text-xs text-brand-petroleo-800">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isFeatured
                                ? "bg-brand-celeste text-white"
                                : "bg-brand-petroleo-100 text-brand-petroleo-700"
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action Button */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppLink(plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant={isFeatured ? "primary" : plan.rawPrice === 0 ? "outline" : "dark"}
                        size="md"
                        fullWidth
                        leftIcon={<MessageCircle className="w-4 h-4" />}
                      >
                        {plan.ctaText}
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Comparison Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-brand-petroleo-50 border border-brand-petroleo-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-brand-petroleo-900">
              💡 ¿Por qué nuestro modelo de pago único te hace ahorrar miles de pesos?
            </h4>
            <p className="text-xs sm:text-sm text-brand-petroleo-700 max-w-2xl leading-relaxed">
              Otras plataformas te cobran el 35% de tu compensación. Si la aerolínea te indemniza por $500.000, te descuentan $175.000. Con <strong>CancelaronMiVuelo</strong> pagás un monto fijo y conservás la totalidad de tu dinero.
            </p>
          </div>
          <div className="shrink-0">
            <Badge variant="success" size="md" icon={<ShieldCheck className="w-4 h-4" />}>
              100% de la indemnización es tuya
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
