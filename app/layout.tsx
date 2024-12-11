import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
          <div className="root-content">{children}</div>
          <div className="fuzzy-overlay"></div>
        </div>
      </body>
    </html>
  );
}
