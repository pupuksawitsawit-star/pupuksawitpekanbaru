'use client'

import { Hero } from '@/components/landing/Hero'
import { Problem } from '@/components/landing/Problem'
import { Solution } from '@/components/landing/Solution'
import { LabProof } from '@/components/landing/LabProof'
import { Trust } from '@/components/landing/Trust'
import { TestimonialCarousel } from '@/components/landing/TestimonialCarousel'
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
        <LabProof />
        <Trust />
        <TestimonialCarousel />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  )
}
