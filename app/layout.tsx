import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOKUYAMA INTERNATIONAL MEETING",
  description: "Pagina de eventos tokuyama x Balsas Dental",
  icons: {
    icon: "/Favicon.png"
  },
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
        {/* NAVBAR GLOBAL */}
        <Navbar />

        {/* CONTENIDO */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
