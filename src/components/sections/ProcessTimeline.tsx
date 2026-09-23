"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Plane, FileSearch, Layers, UploadCloud, CreditCard, CheckCircle2 } from "lucide-react";
import { STEPS } from "@/data/content";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { getWhatsAppLink } from "@/data/constants";

export const ProcessTimeline: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    MessageCircle: <MessageCircle className="w-5 h-5" />,
    Plane: <Plane className="w-5 h-5" />,
    FileSearch: <FileSearch className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    UploadCloud: <UploadCloud className="w-5 h-5" />,
    CreditCard: <CreditCard className="w-5 h-5" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
  };

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petroleo-900 tracking-tight">
            COMO FUNCIONA
          </h2>
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
