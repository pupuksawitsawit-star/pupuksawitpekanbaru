'use client'

import { Hero } from '@/components/landing/Hero'
import { Problem } from '@/components/landing/Problem'
import { Solution } from '@/components/landing/Solution'
import { Trust } from '@/components/landing/Trust'
import { TestimonialGallery } from '@/components/landing/TestimonialGallery'
import { Process } from '@/components/landing/Process'
import { CTA } from '@/components/landing/CTA'
import { FAQ } from '@/components/landing/FAQ'
import { WhatsAppButton } from '@/components/landing/WhatsAppButton'
import { Footer } from '@/components/landing/Footer'
import { Toaster } from '@/components/ui/toaster'
import { useEffect } from 'react'

export default function Home() {
  // Track page view for Meta Pixel and Google Analytics
  useEffect(() => {
    // Meta Pixel PageView
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'PageView')
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Trust />
        <TestimonialGallery />
        <Process />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  )
}
