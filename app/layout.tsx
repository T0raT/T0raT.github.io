import type { Metadata } from "next";
import Header from "./components/Header";
import localFont from "next/font/local";
import "./globals.css";
import FuzzyOverlay from "./components/NoiseOverlay";

// Local font
const vcrFont = localFont({
  src: [
    {
      path: "../public/fonts/VCR.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vcr",
  display: "swap", // Prevents invisible text
});

export const metadata: Metadata = {
  title: "My attempt at reh.at",
  description: "If you reading this, you a nerd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${vcrFont.variable} antialiased`}>
        <div className="root-container">
          <div className="root-content">
            <FuzzyOverlay />
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-vcr)] w-full">
              <Header />
              {children}
            </div>
          </div>
          <div className="fuzzy-overlay"></div>
        </div>
      </body>
    </html>
  );
}
