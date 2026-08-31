import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          petroleo: {
            DEFAULT: "#0D1B2A",
            50: "#F0F4F8",
            100: "#D9E2EC",
            200: "#BCCCDC",
            300: "#9FB3C8",
            400: "#627D98",
            500: "#486581",
            600: "#334E68",
            700: "#243B53",
            800: "#102A43",
            900: "#0D1B2A",
            950: "#060D15",
          },
          celeste: {
            DEFAULT: "#00A8E8",
            light: "#E0F7FF",
            hover: "#0096D1",
            dark: "#007EA7",
          },
          rojo: {
            DEFAULT: "#FF3B30",
            hover: "#E02E24",
            light: "#FFF1F0",
            border: "#FFCCC7",
          },
          humo: {
            DEFAULT: "#F8F9FA",
            card: "#FFFFFF",
            border: "#E9ECEF",
            muted: "#6C757D",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(13, 27, 42, 0.08)',
        'card': '0 20px 40px -15px rgba(13, 27, 42, 0.06)',
        'elevated': '0 25px 50px -12px rgba(13, 27, 42, 0.15)',
        'glow-celeste': '0 0 25px rgba(0, 168, 232, 0.35)',
        'glow-rojo': '0 0 25px rgba(255, 59, 48, 0.35)',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.95' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
