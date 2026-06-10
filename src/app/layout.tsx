import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WHATSAPP_DISPLAY_NUMBER } from '@/lib/whatsapp'
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supplier Pupuk Kelapa Sawit Skala Besar | Pupuk Sawit",
  description: "Supply pupuk kelapa sawit 100 - 200 Ton/Bulan dengan kualitas terjamin dan pengiriman stabil. Supplier terpercaya untuk perkebunan sawit di seluruh Indonesia.",
  keywords: ["pupuk kelapa sawit", "supplier pupuk sawit", "distributor pupuk sawit", "pupuk sawit berkualitas", "supply pupuk perkebunan"],
  authors: [{ name: "Pupuk Sawit" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Supplier Pupuk Kelapa Sawit Skala Besar",
    description: "Supply pupuk kelapa sawit 100 - 200 Ton/Bulan dengan kualitas terjamin dan pengiriman stabil",
    url: "https://pupuksawit.com",
    siteName: "Pupuk Sawit",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supplier Pupuk Kelapa Sawit Skala Besar",
    description: "Supply pupuk kelapa sawit 100 - 200 Ton/Bulan dengan kualitas terjamin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Google Analytics - Ganti GA_MEASUREMENT_ID dengan ID Google Analytics Anda */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Meta Pixel (Facebook) - Ganti YOUR_PIXEL_ID dengan ID Pixel Meta Anda */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* Structured Data untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pupuk Sawit",
              "description": "Supplier pupuk kelapa sawit skala besar dengan pengiriman stabil ke seluruh Indonesia",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Indonesia"
              },
              "telephone": WHATSAPP_DISPLAY_NUMBER,
              "email": "info@pupuksawit.com",
              "priceRange": "$$$",
              "areaServed": [
                "Riau",
                "Sumatera Utara",
                "Sumatera Barat",
                "Kalimantan",
                "Sulawesi"
              ],
              "keywords": "pupuk kelapa sawit, supplier pupuk sawit, distributor pupuk sawit"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
