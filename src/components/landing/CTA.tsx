'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, WHATSAPP_GREETING } from '@/lib/whatsapp'

export function CTA() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-600 to-green-700">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Diskusikan Kebutuhan Pupuk Anda Sekarang
          </h2>
          <p className="text-base md:text-lg text-green-100">
            Konsultasi gratis tanpa komitmen. Kami siap membantu menemukan solusi terbaik.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-5 md:p-8 bg-white">
            <div className="text-center space-y-5 md:space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Respon Cepat via WhatsApp
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Dapatkan jawaban dalam 30 menit atau kurang
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-base md:text-lg py-5 md:py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  // Track WhatsApp click (for Meta Pixel)
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    ;(window as any).fbq('track', 'Contact')
                  }
                }}
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>Hubungi via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <div className="space-y-3 pt-2 md:pt-4">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>{WHATSAPP_DISPLAY_NUMBER}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-600">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>info@pupuksawit.com</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-700">
                  <strong>Pesan Terkirim:</strong> "{WHATSAPP_GREETING}"
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
