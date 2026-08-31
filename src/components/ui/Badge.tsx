import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success" | "outline" | "petroleo";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "secondary",
  size = "md",
  className = "",
  icon,
}) => {
  const variantStyles = {
    primary: "bg-brand-petroleo-50 text-brand-petroleo-900 border border-brand-petroleo-200",
    secondary: "bg-brand-celeste/10 text-brand-celeste border border-brand-celeste/25",
    accent: "bg-brand-rojo/10 text-brand-rojo border border-brand-rojo/20",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    outline: "bg-white/80 text-brand-petroleo-700 border border-gray-200 shadow-sm",
    petroleo: "bg-brand-petroleo-900 text-white border border-brand-petroleo-800",
  };

  const sizeStyles = {
    sm: "text-[11px] font-semibold px-2.5 py-1 rounded-lg gap-1",
    md: "text-xs font-bold px-3.5 py-1.5 rounded-xl gap-1.5",
  };

  return (
    <span
      className={`inline-flex items-center tracking-tight leading-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
