import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Enlightened Magic | Premium Scrollytelling Experience",
  description: "A high-end, Apple-level scrollytelling experience for Enlightened Magic. Cinematic storytelling meets performance-first architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
