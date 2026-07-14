import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter, youngSerif } from "@/lib/fonts";
import Script from "next/script";

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
    icon: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "WAMNAM",
    images: [
      {
        url: "/images/home_page_photo.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QRVWM5E2E4"
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-QRVWM5E2E4');
        `}
      </Script>
    </html>
  );
}
