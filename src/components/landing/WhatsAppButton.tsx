'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappMessage = encodeURIComponent('Halo, saya ingin konsultasi kebutuhan pupuk kelapa sawit')
  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`

  const handleClick = () => {
    // Track WhatsApp click (for Meta Pixel)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'Contact')
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Button
        asChild
        size="lg"
        className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center p-0"
        onClick={handleClick}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </Button>
      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 -m-2 rounded-full bg-green-400 opacity-30 animate-ping" />
    </div>
  )
}
