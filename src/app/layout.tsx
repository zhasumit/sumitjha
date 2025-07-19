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
  title: "Sumit Jha | Portfolio",
  description: "Sumit is a MNNIT graduate, Software Developer experienced in building real-time systems, scalable UI design, and secure APIs in performant web apps using Django, DRF, Next.js, and Rails. Delivered core tax and business workflows.",
  icons: {
    icon: '/sumitjha.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[900px] mx-auto px-6">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
