import React from "react";
import { BrandLogo } from "../branding/BrandLogo";
import { AbogaciarBadge } from "../branding/AbogaciarBadge";
import { ShieldCheck, Lock, FileText, Scale } from "lucide-react";
import { BRAND, getWhatsAppLink } from "@/data/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-petroleo-900 text-white pt-16 pb-12 border-t border-brand-petroleo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-petroleo-800">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4 lg:col-span-1">
            <BrandLogo variant="dark" size="md" />
            <p className="text-sm text-gray-300 leading-relaxed pt-2">
              Transformamos la frustración e impotencia ante vuelos cancelados o demorados en una respuesta legal, clara y accionable.
            </p>
            <div className="pt-2">
              <span className="text-xs text-brand-celeste font-semibold uppercase tracking-wider block mb-1">
                Motor conceptual & LegalTech
              </span>
              <AbogaciarBadge />
            </div>
          </div>

          {/* Col 2: Marco Regulatorio & Respaldo */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-celeste" /> Marco Legal & Respaldo
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-celeste shrink-0 mt-0.5" />
                <span><strong>Estudio Márquez & Asociados</strong> · Dirección letrada y patrocinio jurídico.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-brand-celeste shrink-0 mt-0.5" />
                <span><strong>Resolución ANAC 774/2025</strong> · Plazo obligatorio de respuesta de 30 días hábiles.</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="w-4 h-4 text-brand-celeste shrink-0 mt-0.5" />
                <span><strong>Código Aeronáutico Argentino</strong> y Ley 24.240 de Defensa del Consumidor.</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Privacidad y Transparencia */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" /> Protección de Datos
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Cumplimos estrictamente con la <strong>Ley Nacional 25.326 de Protección de Datos Personales</strong> de la República Argentina. Tus pasajes, comprobantes y datos bancarios están encriptados y protegidos.
            </p>
            <div className="p-3 rounded-xl bg-brand-petroleo-800/80 border border-brand-petroleo-700 text-[11px] text-gray-300">
              🔒 <strong>Transparencia Total</strong>: Pago único en pesos argentinos (IVA incluido) para la gestión administrativa de tu reclamo.
            </div>
          </div>

          {/* Col 4: Contacto Inmediato */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight">
              Guardia Legal WhatsApp
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Atención directa en minutos para emergencias en aeropuertos de todo el país.
            </p>
            <div className="pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-lg"
              >
                <span>💬 Abrir chat directo</span>
              </a>
            </div>
            <p className="text-[11px] text-gray-400">
              Email: {BRAND.supportEmail}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#seguridad" className="hover:text-brand-celeste transition-colors">Términos de Servicio</a>
            <a href="#seguridad" className="hover:text-brand-celeste transition-colors">Política de Privacidad (Ley 25.326)</a>
            <a href="#faq" className="hover:text-brand-celeste transition-colors">Res. ANAC 774/2025</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
