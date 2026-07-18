import type { Metadata } from "next";
import "./globals.css";
import BootSequence from "@/components/BootSequence";

export const metadata: Metadata = {
  title: "FIGU3IR4 | Desenvolvedor(a) Full-Stack",
  description:
    "Portfólio de Victor Figueira — Desenvolvedor(a) Full-Stack focado(a) em construir produtos digitais sólidos, do front-end ao back-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <BootSequence>{children}</BootSequence>
      </body>
    </html>
  );
}