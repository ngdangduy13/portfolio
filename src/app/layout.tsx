import { CursorLightEffect } from "@/components/CursorLightEffect";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dang Duy Nguyen",
  description: "Dang Duy Nguyen's personal portfolio",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: "#0d0c0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${jetbrainsMono.variable} antialiased flex flex-col relative`}
      >
        <CursorLightEffect />
        {children}
      </body>
    </html>
  );
}
