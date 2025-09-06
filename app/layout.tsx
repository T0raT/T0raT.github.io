import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "TigerLiu",
  description: "Interknot?",
};

/* Local fonts */
const vcrFont = localFont({
  src: [
    {
      path: "../public/fonts/VCR.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vcr",
  display: "swap",
});

const departFont = localFont({
  src: [
    {
      path: "../public/fonts/DepartureMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-departure",
  display: "swap", // Prevents invisible text, actually I have no idea what this means
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vcrFont.variable} ${departFont.variable} antialiased`}
      >
        <div className="relative isolate overflow-hidden z-0">
          <div className="flex min-h-dvh max-w-280 mx-auto font-(family-name:--font-departure) z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
