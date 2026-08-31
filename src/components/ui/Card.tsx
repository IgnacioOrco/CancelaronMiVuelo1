"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "dark" | "featured";
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  hoverEffect = true,
  className = "",
  ...props
}) => {
  const variantStyles = {
    default:
      "bg-white border border-gray-100/80 shadow-soft",
    elevated:
      "bg-white border border-gray-100 shadow-card",
    dark:
      "bg-brand-petroleo-900 border border-brand-petroleo-700 text-white shadow-elevated",
    featured:
      "bg-white border-2 border-brand-celeste shadow-card relative ring-4 ring-brand-celeste/10",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl md:rounded-3xl transition-all duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
