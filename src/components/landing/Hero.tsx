'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const whatsappMessage = encodeURIComponent('Halo, saya ingin konsultasi kebutuhan pupuk kelapa sawit')
  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Palm oil plantation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Supplier Pupuk Kelapa Sawit Skala Besar
            <span className="block text-green-400 mt-2">(10–100 Ton/Bulan)</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Supply stabil, kualitas terjamin, siap kirim ke berbagai wilayah
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                // Track WhatsApp click (for Meta Pixel)
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  ;(window as any).fbq('track', 'Contact')
                }
              }}
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-green-300 mt-4 text-sm">
              Respon cepat • Gratis konsultasi
            </p>
          </div>

          {/* Trust Badges */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-white font-semibold text-lg">10+ Tahun</p>
              <p className="text-green-300 text-sm">Pengalaman</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-white font-semibold text-lg">1000+</p>
              <p className="text-green-300 text-sm">Klien Puas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-white font-semibold text-lg">24/7</p>
              <p className="text-green-300 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
