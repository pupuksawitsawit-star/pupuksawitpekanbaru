'use client'

import { getWhatsAppUrl } from '@/lib/whatsapp'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl()

  const handleClick = () => {
    // Track WhatsApp click (for Meta Pixel)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'Contact')
    }
  }

  return (
    <div className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="relative z-10 flex w-14 h-14 md:w-16 md:h-16 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-700"
        onClick={handleClick}
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>
      {/* Pulse Animation Ring */}
      <div className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-green-400 opacity-30 animate-ping" />
    </div>
  )
}
