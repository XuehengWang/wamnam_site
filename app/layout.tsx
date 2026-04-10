import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter, youngSerif } from "@/lib/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAMNAM",
  description: "WAMNAM website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // This 3 fonts are globally available, but the default is inter
    <html
      lang="en"
      className={`${inter.variable} ${youngSerif.variable} ${geistMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
       
    </html>
  );
}
