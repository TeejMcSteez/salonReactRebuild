import type { Metadata } from "next";
import { Inter, Nunito, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600"]
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600"]
});

export const metadata: Metadata = {
  title: "Heather Melton",
  description: "Made by teejmcsteez.tech with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
