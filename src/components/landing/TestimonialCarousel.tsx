'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  image: string
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      rating: 5,
      content: "Kualitas pupuk sangat konsisten, pengiriman tepat waktu. Produkivitas TBS kami naik hingga 23%. Sangat recommended!"
    },
    {
      id: 2,
      name: "Ibu Siti Rahayu",
      company: "CV. Kelapa Sawit Nusantara",
      role: "Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
      rating: 5,
      content: "Harga sangat kompetitif dengan kualitas premium. Sudah 1 tahun supply dan selalu puas dengan pelayanannya."
    },
    {
      id: 3,
      name: "Bapak Budi Santoso",
      company: "PT. Agro Investama",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
      rating: 5,
      content: "Supply stabil 50 ton per bulan tanpa pernah telat. Kualitas lab teruji dan tim support sangat responsif."
    },
    {
      id: 4,
      name: "Ibu Linda Wijaya",
      company: "PT. Green Palm Resources",
      role: "Procurement Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
      rating: 5,
      content: "Pelayanan luar biasa, harga transparan, kualitas terjamin. Kami kontrak 6 bulan langsung tanpa ragu."
    },
    {
      id: 5,
      name: "Bapak Hendra Pratama",
      company: "PT. Sawit Prima Indonesia",
      role: "Plantation Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
      rating: 5,
      content: "Pengiriman ke Kalimantan selalu on-time. Kualitas pupuk yang bagus membuat hasil panen meningkat signifikan."
    }
  ]

  // Auto-slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // 4 detik

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
            mempercayakan kebutuhan pupuk mereka kepada kami. Berikut pengalaman mereka.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 border-green-200 shadow-2xl">
            {/* Image Carousel */}
            <div className="relative h-[400px] md:h-[500px] bg-gray-100">
              {/* Slides */}
              <div className="relative w-full h-full">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentIndex
                        ? 'opacity-100 translate-x-0'
                        : index < currentIndex
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.company}`}
                      fill
                      className="object-cover"
                      priority={index === currentIndex}
                    />
                    
                    {/* Gradient Overlay for Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      {/* Quote Icon */}
                      <Quote className="w-10 h-10 text-white/30 mb-4" />
                      
                      {/* Testimonial Text */}
                      <p className="text-lg md:text-xl leading-relaxed mb-6 drop-shadow-lg">
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-start gap-4">
                        <div>
                          <h4 className="text-xl font-bold mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-green-300 font-semibold text-sm mb-1">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <Building2 className="w-4 h-4" />
                            <span>{testimonial.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 hover:border-green-400 shadow-lg w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 hover:border-green-400 shadow-lg w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </Button>

              {/* Slide Number */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                {currentIndex + 1} / {testimonials.length}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-3 py-6 bg-white">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-green-600 rounded-full'
                      : 'w-3 h-3 bg-gray-300 hover:bg-green-400 rounded-full'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
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
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => {
              const whatsappMessage = encodeURIComponent('Halo, saya ingin konsultasi kebutuhan pupuk kelapa sawit')
              window.open(`https://wa.me/6281234567890?text=${whatsappMessage}`, '_blank')
            }}
          >
            Konsultasi Sekarang
          </Button>
        </div>
      </div>
    </section>
  )
}
