import React from "react";
import { ShieldIcon } from "./ShieldIcon";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "light",
  size = "md",
  showTagline = false,
}) => {
  const isDark = variant === "dark";

  const sizeStyles = {
    sm: {
      iconSize: 34,
      textClass: "text-lg tracking-tight",
      taglineClass: "text-[10px]",
    },
    md: {
      iconSize: 44,
      textClass: "text-2xl tracking-tight",
      taglineClass: "text-xs",
    },
    lg: {
      iconSize: 56,
      textClass: "text-3xl md:text-4xl tracking-tight",
      taglineClass: "text-sm",
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      <ShieldIcon size={currentSize.iconSize} className="transition-transform duration-300 group-hover:scale-105" />
      <div className="flex flex-col">
        <div className={`font-sans font-bold leading-none ${currentSize.textClass}`}>
          <span className={isDark ? "text-white" : "text-brand-petroleo-900"}>Cancelaron </span>
          <span className="text-brand-celeste font-medium">Mi </span>
          <span className={isDark ? "text-white" : "text-brand-petroleo-900"}>Vuelo</span>
        </div>
        {showTagline && (
          <span
            className={`mt-1 font-medium ${
              isDark ? "text-brand-petroleo-300" : "text-brand-petroleo-600"
            } ${currentSize.taglineClass}`}
          >
            Tu abogado experto al alcance de tu mano
          </span>
        )}
      </div>
    </div>
  );
};
