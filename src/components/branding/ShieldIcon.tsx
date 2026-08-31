import React from "react";

interface ShieldIconProps {
  className?: string;
  size?: number;
}

export const ShieldIcon: React.FC<ShieldIconProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Shield Gradient */}
        <linearGradient id="shieldGrad" x1="20" y1="10" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D1B2A" />
          <stop offset="60%" stopColor="#007EA7" />
          <stop offset="100%" stopColor="#00A8E8" />
        </linearGradient>
        {/* Turquoise Accent Glow */}
        <linearGradient id="cyanAccent" x1="15" y1="40" x2="70" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00A8E8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.4" />
        </linearGradient>
        {/* Drop shadow for Red Cross */}
        <filter id="crossShadow" x="55" y="55" width="55" height="55" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0D1B2A" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Main Shield Outline & Background */}
      <path
        d="M60 12C78 19 92 23 102 26C103 48 99 76 60 108C21 76 17 48 18 26C28 23 42 19 60 12Z"
        fill="url(#shieldGrad)"
      />

      {/* Inner Dynamic Cyan Arc / Wing Effect */}
      <path
        d="M20 38C22 58 29 82 60 105C42 85 30 65 28 42L20 38Z"
        fill="url(#cyanAccent)"
      />

      {/* Airplane Vapor Trail */}
      <path
        d="M22 75C28 62 40 50 56 46C53 49 46 56 38 68C32 78 26 84 22 75Z"
        fill="#FFFFFF"
        fillOpacity="0.9"
      />

      {/* White Airplane Silhouette */}
      <path
        d="M74 30L68 37L55 35L48 42L57 46L53 52L46 51L42 55L48 59L53 65L57 62L56 55L62 51L67 60L74 53L72 40L80 34C82 32 80 28 74 30Z"
        fill="#FFFFFF"
      />

      {/* Prominent Red Cancellation Cross with White Border */}
      <g filter="url(#crossShadow)">
        {/* White outline backdrop for contrast */}
        <path
          d="M78 68L86 60L96 70L106 60L114 68L104 78L114 88L106 96L96 86L86 96L78 88L88 78L78 68Z"
          fill="#FFFFFF"
        />
        {/* Red core */}
        <path
          d="M80 70L86 64L96 74L106 64L112 70L102 80L112 90L106 96L96 86L86 96L80 90L90 80L80 70Z"
          fill="#FF3B30"
        />
      </g>
    </svg>
  );
};
