"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  const variantStyles = {
    // Rojo Cancelación #FF3B30 (Reserved strictly for primary conversion CTAs)
    primary:
      "bg-brand-rojo text-white shadow-soft hover:bg-brand-rojo-hover hover:shadow-glow-rojo active:scale-[0.98]",
    // Celeste Turquesa #00A8E8 (Tech / secondary actions)
    secondary:
      "bg-brand-celeste text-white shadow-soft hover:bg-brand-celeste-hover hover:shadow-glow-celeste active:scale-[0.98]",
    // Azul Petróleo #0D1B2A (Authority / institutional)
    dark:
      "bg-brand-petroleo-900 text-white shadow-soft hover:bg-brand-petroleo-800 active:scale-[0.98]",
    // WhatsApp Emerald
    whatsapp:
      "bg-[#25D366] text-white shadow-soft hover:bg-[#20bd5a] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] active:scale-[0.98]",
    // Clean outline
    outline:
      "border-2 border-brand-petroleo-900/20 text-brand-petroleo-900 hover:border-brand-celeste hover:text-brand-celeste bg-transparent active:scale-[0.98]",
    // Ghost
    ghost:
      "text-brand-petroleo-900 hover:bg-brand-petroleo-50 active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold rounded-xl min-h-[40px] gap-1.5",
    md: "px-5 py-3 text-sm font-bold rounded-xl min-h-[48px] gap-2",
    lg: "px-7 py-4 text-base font-bold rounded-2xl min-h-[54px] gap-2.5",
    xl: "px-8 py-4.5 text-lg font-extrabold rounded-2xl min-h-[60px] gap-3",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`inline-flex items-center justify-center font-sans tracking-tight transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-brand-celeste focus:ring-offset-2 ${
        fullWidth ? "w-full" : "w-auto"
      } ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </motion.button>
  );
};
