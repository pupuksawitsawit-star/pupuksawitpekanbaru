import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FAQ_ITEMS, SEO_KEYWORDS, SITE_URL } from '@/lib/seo'
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
  metadataBase: new URL(SITE_URL),
  title: "Supplier Pupuk Sawit Pekanbaru | Pupuk Organik Kelapa Sawit",
  description: "Supplier pupuk sawit Pekanbaru untuk pupuk organik kelapa sawit teruji laboratorium. Supply 100 - 200 Ton/Bulan untuk perkebunan dan distributor.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Pupuk Sawit" }],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Supplier Pupuk Sawit Pekanbaru | Pupuk Organik Kelapa Sawit",
    description: "Pupuk organik sawit teruji laboratorium untuk kebutuhan supply 100 - 200 Ton/Bulan.",
    url: SITE_URL,
    siteName: "Pupuk Sawit",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supplier Pupuk Sawit Pekanbaru",
    description: "Pupuk organik kelapa sawit teruji laboratorium dengan supply skala besar.",
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  "name": "Pupuk Sawit Pekanbaru",
                  "url": SITE_URL,
                  "logo": `${SITE_URL}/logo.svg`,
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": WHATSAPP_DISPLAY_NUMBER,
                    "contactType": "sales",
                    "areaServed": "ID",
                    "availableLanguage": ["id"]
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": `${SITE_URL}/#localbusiness`,
                  "name": "Pupuk Sawit Pekanbaru",
                  "description": "Supplier pupuk kelapa sawit dan pupuk organik sawit teruji laboratorium untuk kebutuhan perkebunan skala besar.",
                  "url": SITE_URL,
                  "telephone": WHATSAPP_DISPLAY_NUMBER,
                  "email": "pupuksawitsawit@gmail.com",
                  "priceRange": "$$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Pekanbaru",
                    "addressRegion": "Riau",
                    "addressCountry": "ID"
                  },
                  "areaServed": [
                    "Pekanbaru",
                    "Riau",
                    "Sumatera Utara",
                    "Sumatera Barat",
                    "Kalimantan",
                    "Sulawesi"
                  ],
                  "keywords": SEO_KEYWORDS.join(", ")
                },
                {
                  "@type": "Product",
                  "@id": `${SITE_URL}/#product`,
                  "name": "Pupuk Organik Padat Teruji Laboratorium",
                  "description": "Pupuk organik sawit dengan hasil analisis laboratorium Universitas Andalas: pH 7,40, N Total 2,27%, P2O5 7,27%, K2O 17,24%, C Organik 28,59%, dan C/N Ratio 12,46.",
                  "brand": {
                    "@id": `${SITE_URL}/#organization`
                  },
                  "category": "Pupuk organik kelapa sawit",
                  "image": `${SITE_URL}/images/UJI%20LAB.webp`,
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "IDR",
                    "url": SITE_URL
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${SITE_URL}/#faq`,
                  "mainEntity": FAQ_ITEMS.map((item) => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                }
              ]
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
