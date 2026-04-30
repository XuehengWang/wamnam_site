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

  icons: {
    icon: "/images/logo_with_white_background.jpg",
    apple: "/images/logo_with_white_background.jpg",
  },

  openGraph: {
    title: "WAMNAM",
    description: "WAMNAM website",
    images: ["/images/home_page_photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
