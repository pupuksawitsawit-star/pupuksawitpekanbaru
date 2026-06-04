'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  rating: number
  content: string
}

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Bapak Ahmad Fauzi",
      company: "PT. Sawit Makmur Jaya",
      role: "General Manager",
      rating: 5,
      content: "Kualitas pupuk sangat konsisten, pengiriman tepat waktu. Produkivitas TBS kami naik hingga 23%. Sangat recommended!"
    },
    {
      id: 2,
      name: "Ibu Siti Rahayu",
      company: "CV. Kelapa Sawit Nusantara",
      role: "Owner",
      rating: 5,
      content: "Harga sangat kompetitif dengan kualitas premium. Sudah 1 tahun supply dan selalu puas dengan pelayanannya."
    },
    {
      id: 3,
      name: "Bapak Budi Santoso",
      company: "PT. Agro Investama",
      role: "Operations Manager",
      rating: 5,
      content: "Supply stabil 50 ton per bulan tanpa pernah telat. Kualitas lab teruji dan tim support sangat responsif."
    },
    {
      id: 4,
      name: "Ibu Linda Wijaya",
      company: "PT. Green Palm Resources",
      role: "Procurement Manager",
      rating: 5,
      content: "Pelayanan luar biasa, harga transparan, kualitas terjamin. Kami kontrak 6 bulan langsung tanpa ragu."
    },
    {
      id: 5,
      name: "Bapak Hendra Pratama",
      company: "PT. Sawit Prima Indonesia",
      role: "Plantation Manager",
      rating: 5,
      content: "Pengiriman ke Kalimantan selalu on-time. Kualitas pupuk yang bagus membuat hasil panen meningkat signifikan."
    }
  ]

  // Auto-slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>TESTIMONI KLIEN</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Lebih dari <span className="text-green-600 font-bold">2500+ perkebunan</span> telah 
            mempercayakan kebutuhan pupuk mereka kepada kami.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2 border-green-200 shadow-2xl bg-white">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-green-200 mb-6" />
            
            {/* Testimonial Content */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-green-600 font-semibold mb-1">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrevious}
                className="border-2 hover:bg-green-50 hover:border-green-400 hover:text-green-700"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Sebelumnya
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-6 bg-green-600'
                        : 'bg-gray-300 hover:bg-green-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                onClick={handleNext}
                className="border-2 hover:bg-green-50 hover:border-green-400 hover:text-green-700"
              >
                Selanjutnya
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Testimoni {currentIndex + 1} dari {testimonials.length}
              </p>
            </div>
          </Card>

          {/* Auto-play Indicator */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              <span>Auto-slide setiap 4 detik</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-200">
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-900">4.9/5</p>
            <p className="text-sm text-gray-600">Rating Rata-rata</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-200">
            <p className="text-4xl font-bold text-green-600 mb-2">98%</p>
            <p className="text-sm text-gray-600">Klien Puas & Repeat Order</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-200">
            <p className="text-4xl font-bold text-gray-900 mb-2">2500+</p>
            <p className="text-sm text-gray-600">Total Klien</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg mb-4">
            Ingin bergabung dengan ribuan klien puas lainnya?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Sekarang
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
