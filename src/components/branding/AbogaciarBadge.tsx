import React from "react";

interface AbogaciarBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AbogaciarBadge: React.FC<AbogaciarBadgeProps> = ({
  className = "",
  size = "md",
}) => {
  return (
    <div className={`inline-flex items-center gap-3 bg-white/90 backdrop-blur-md border border-brand-celeste/30 rounded-2xl px-4 py-2 shadow-soft hover:shadow-card transition-all duration-300 ${className}`}>
      {/* Visual icon representation */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-brand-petroleo to-brand-celeste text-white shadow-glow-celeste/40">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          {/* Handshake representation */}
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" className="opacity-20 fill-white" />
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L13 12.4" />
          <path d="m13 7.6-1.7 1.7a1 1 0 0 1-1.4 0L7.3 6.7a1 1 0 0 1 0-1.4l2.6-2.6a1 1 0 0 1 1.4 0l4.3 4.3a1 1 0 0 1 0 1.4L13 11" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-400" />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold text-brand-petroleo text-sm tracking-tight">
            Abogac<span className="text-brand-celeste">IA</span>r
          </span>
          <span className="text-[10px] bg-brand-celeste/10 text-brand-celeste font-semibold px-1.5 py-0.5 rounded-md">
            LegalTech
          </span>
        </div>
        <span className="text-[11px] font-medium text-brand-petroleo-600 mt-0.5">
          Tu abogado experto al alcance de tu mano
        </span>
      </div>
    </div>
  );
};
