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
      {/* So, this is the idea of the layout of this website.

          The main page auto directs to /about.
          Since the header does not change, it's better to call it once here instead of every other page.
      */}
      <head />
      <body className={`${vcrFont.variable} antialiased`}>
        {/* Yeah so root-container and root content is styled in global.css :/ 
        'root-container' exists because of fuzzy-overlay.
        There is probably another way around this but for now it works lol.
        */}
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
