import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackLayer - Trabajo Final Integrador | Sistema de Información Administrativa",
  description: "Presentación del Trabajo Final Integrador sobre Sistema de Información Administrativa aplicado al emprendimiento HackLayer. Incluye planificación estratégica, análisis FODA, organigrama y manuales de procedimiento.",
  keywords: ["Sistema de Información Administrativa", "HackLayer", "Trabajo Final Integrador", "Emprendimiento", "Planificación Estratégica", "Análisis FODA", "Organigrama"],
  authors: [{ name: "Estudiante SIA" }],
  creator: "Estudiante SIA",
  publisher: "Universidad",
  robots: "index, follow",
  openGraph: {
    title: "HackLayer - Trabajo Final Integrador",
    description: "Sistema de Información Administrativa aplicado a emprendimiento real",
    type: "website",
    locale: "es_ES",
    siteName: "HackLayer TFI",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackLayer - Trabajo Final Integrador",
    description: "Sistema de Información Administrativa aplicado a emprendimiento real",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
