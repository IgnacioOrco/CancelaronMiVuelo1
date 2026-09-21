import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cancelaronmivuelo.com"),
  title: "CancelaronMiVuelo | Tu Abogado Experto al Alcance de tu Mano",
  description:
    "Reclamá tu indemnización y compensación por vuelos cancelados, demorados, sobreventa o equipaje en Argentina. Diagnóstico 100% gratuito por WhatsApp impulsado por AbogacIAr.",
  keywords: [
    "cancelaron mi vuelo",
    "reclamos aéreos argentina",
    "indemnización vuelo cancelado",
    "demora de vuelo",
    "overbooking sobreventa",
    "equipaje perdido aerolínea",
    "resolucion anac 774 2025",
    "abogaciar",
    "estudio marquez",
  ],
  authors: [{ name: "CancelaronMiVuelo & AbogacIAr" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/app-icon.png",
    shortcut: "/brand/app-icon.png",
    apple: "/brand/app-icon.png",
  },
  openGraph: {
    title: "CancelaronMiVuelo | Reclamá tu Compensación Aérea",
    description:
      "Cancelaron tu vuelo. No tus derechos. Diagnóstico legal gratis en minutos con abogados matriculados.",
    url: "https://cancelaronmivuelo.com",
    siteName: "CancelaronMiVuelo",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/brand/logo-horizontal.png",
        width: 1024,
        height: 341,
        alt: "CancelaronMiVuelo Logo Oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CancelaronMiVuelo | Reclamá tu Compensación Aérea",
    description:
      "Cancelaron tu vuelo. No tus derechos. Diagnóstico legal gratis en minutos con abogados matriculados.",
    images: ["/brand/logo-horizontal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-brand-petroleo-900 bg-[#F8F9FA] selection:bg-brand-celeste selection:text-white">
        {children}
      </body>
    </html>
  );
}
