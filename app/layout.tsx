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

export const metadata: Metadata = {
  title: "WAMNAM",
  description: "WAMNAM website",

  icons: {
    apple: "/images/home_page_photo.jpg",
  },

  openGraph: {
    title: "WAMNAM",
    description: "WAMNAM website",
    images: [
      {
        url: "/images/home_page_photo.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
