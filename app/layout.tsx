import type { Metadata } from "next";
import Header from "./components/Header";
import localFont from "next/font/local";
import "./globals.css";
import FuzzyOverlay from "./components/NoiseOverlay";

// How to add local fonts that isn't part of NEXT
const vcrFont = localFont({
  src: [
    {
      path: "../public/fonts/VCR.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vcr",
  display: "swap", // Prevents invisible text, actually I have no idea what this means
});

export const metadata: Metadata = {
  title: "TigerLiu",
  description: "lmfao nerd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* So, this is the idea of the layout of this website.

          The main page auto directs to /about.
          Since the header does not change, it's better to call it once here instead of every other page.
      */}
      <head />
      <body className={`${vcrFont.variable} antialiased`}>
        {/* The reason for 2 containers
          1. root-container exist specifically for fuzzy overlay.
          
        */}
        <div className="root-container">
          <div className="root-content font-[family-name:var(--font-vcr)]">
            <Header />
            {children}
          </div>
          <div className="fuzzy-overlay"></div>
        </div>
      </body>
      <FuzzyOverlay />
    </html>
  );
}
