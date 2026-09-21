import React from "react";
import Image from "next/image";

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
      width: 120,
      height: 40,
      shieldSize: 34,
      textClass: "text-lg tracking-tight",
      taglineClass: "text-[10px]",
    },
    md: {
      width: 156,
      height: 52,
      shieldSize: 44,
      textClass: "text-2xl tracking-tight",
      taglineClass: "text-xs",
    },
    lg: {
      width: 192,
      height: 64,
      shieldSize: 56,
      textClass: "text-3xl md:text-4xl tracking-tight",
      taglineClass: "text-sm",
    },
  };

  const currentSize = sizeStyles[size];

  // For light mode (e.g. Navbar), use the official horizontal logo
  if (!isDark) {
    return (
      <div className="flex flex-col select-none group cursor-pointer">
        <Image
          src="/brand/logo-horizontal.png"
          alt="CancelaronMiVuelo"
          width={currentSize.width}
          height={currentSize.height}
          priority
          className="object-contain transition-transform duration-300 group-hover:scale-105 h-auto"
        />
        {showTagline && (
          <span className={`mt-0.5 font-medium text-brand-petroleo-600 ${currentSize.taglineClass}`}>
            Tu abogado experto al alcance de tu mano
          </span>
        )}
      </div>
    );
  }

  // For dark mode (e.g. Footer), use the official shield logo with high-contrast text
  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      <Image
        src="/brand/shield-logo.png"
        alt="CancelaronMiVuelo Escudo"
        width={currentSize.shieldSize}
        height={currentSize.shieldSize}
        className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col">
        <div className={`font-sans font-bold leading-none ${currentSize.textClass}`}>
          <span className="text-white">Cancelaron </span>
          <span className="text-brand-celeste font-medium">Mi </span>
          <span className="text-white">Vuelo</span>
        </div>
        {showTagline && (
          <span className={`mt-1 font-medium text-brand-petroleo-300 ${currentSize.taglineClass}`}>
            Tu abogado experto al alcance de tu mano
          </span>
        )}
      </div>
    </div>
  );
};
