'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote, ChevronLeft, ChevronRight, Building2, MapPin } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  location: string
  avatar: string
  rating: number
  content: string
  highlight?: boolean
}

export function TestimonialGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Bapak Ahmad Fauzi",
      company: "PT. Sawit Makmur Jaya",
      role: "General Manager",
      location: "Riau",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Sudah 2 tahun kami supply pupuk dari sini, kualitas sangat konsisten dan pengiriman selalu tepat waktu. Produktivitas TBS kami naik hingga 23%. Sangat recommended!",
      highlight: true
    },
    {
      id: 2,
      name: "Ibu Siti Rahayu",
      company: "CV. Kelapa Sawit Nusantara",
      role: "Owner",
      location: "Sumatera Utara",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Awalnya ragu karena ini supplier baru, tapi setelah coba 1 bulan langsung repeat order. Harga sangat kompetitif dengan kualitas yang tidak kalah dari supplier besar.",
    },
    {
      id: 3,
      name: "Bapak Budi Santoso",
      company: "PT. Agro Investama",
      role: "Operations Manager",
      location: "Kalimantan Tengah",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Tim support sangat responsif, selalu siap membantu jika ada kendala. Supply stabil 50 ton per bulan tanpa pernah telat. Kualitas lab teruji dan konsisten.",
      highlight: true
    },
    {
      id: 4,
      name: "Ibu Linda Wijaya",
      company: "PT. Green Palm Resources",
      role: "Procurement Manager",
      location: "Sumatera Barat",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Sudah coba beberapa supplier, tapi yang paling puas di sini. Harga transparan, kualitas terjamin, dan pelayanan luar biasa. Kami kontrak 6 bulan langsung.",
    },
    {
      id: 5,
      name: "Bapak Hendra Pratama",
      company: "PT. Sawit Prima Indonesia",
      role: "Plantation Manager",
      location: "Kalimantan Timur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Pengiriman ke Kalimantan selalu on-time. Kualitas pupuk yang bagus membuat hasil panen kami meningkat signifikan. Sangat profesional dan terpercaya.",
      highlight: true
    },
    {
      id: 6,
      name: "Ibu Rina Kusuma",
      company: "CV. Palm Oil Indonesia",
      role: "Director",
      location: "Riau",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Kontrak supply 1 tahun telah kami lakukan dan tidak pernah ada masalah. Stok selalu tersedia dan kualitas stabil. Mitra terbaik untuk perkebunan sawit.",
    },
    {
      id: 7,
      name: "Bapak Dedy Setiawan",
      company: "PT. Nusantara Palm Oil",
      role: "Site Manager",
      location: "Sulawesi",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Meskipun lokasi kami di Sulawesi, pengiriman tetap lancar dan tepat waktu. Kualitas pupuk premium dengan harga yang sangat bersaing. Terima kasih!",
      highlight: true
    },
    {
      id: 8,
      name: "Ibu Maya Sari",
      company: "PT. Golden Palm Group",
      role: "Senior Agronomist",
      location: "Sumatera Utara",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Sebagai agronomist, saya sangat selektif memilih pupuk. Produk di sini lulus uji lab dengan kandungan nutrisi yang optimal. Sangat saya rekomendasikan.",
    },
    {
      id: 9,
      name: "Bapak Tommy Wibowo",
      company: "PT. Mega Sawit Indonesia",
      role: "CEO",
      location: "Kalimantan Barat",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      content: "Dari 50 ton sampai 100 ton per bulan, kami naikkan volume karena puas dengan pelayanan dan kualitas. Tim sales sangat proaktif dan selalu ada solusi.",
    },
  ]

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => 
      Math.min(prev + itemsPerPage, testimonials.length - itemsPerPage)
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>APAKATA KLIEN KAMI</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galeri Testimoni
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Lebih dari <span className="text-green-600 font-bold">2500+ perkebunan</span> telah 
            mempercayakan kebutuhan pupuk mereka kepada kami. Berikut testimoni dari 
            klien-klien yang telah merasakan manfaatnya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
          {currentTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`p-6 transition-all duration-300 hover:shadow-2xl border-2 ${
                testimonial.highlight
                  ? 'border-green-500 shadow-lg'
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {/* Highlight Badge */}
              {testimonial.highlight && (
                <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ⭐ TESTIMONI UNGGULAN
                </div>
              )}

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-green-200 mb-2" />
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {testimonial.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                <div className="relative flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base mb-1 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-green-600 font-semibold text-sm mb-1">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                    <Building2 className="w-3 h-3" />
                    <span className="truncate">{testimonial.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="w-full sm:w-auto border-2 hover:bg-green-50 hover:border-green-400 hover:text-green-700 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Sebelumnya
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === i * itemsPerPage
                    ? 'bg-green-600 w-6'
                    : 'bg-gray-300 hover:bg-green-400'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - itemsPerPage}
            className="w-full sm:w-auto border-2 hover:bg-green-50 hover:border-green-400 hover:text-green-700 disabled:opacity-50"
          >
            Selanjutnya
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-200">
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-900">4.9/5</p>
            <p className="text-sm text-gray-600">Rating Rata-rata</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-2">98%</p>
            <p className="text-sm text-gray-600">Klien Puas & Repeat Order</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-2">2500+</p>
            <p className="text-sm text-gray-600">Total Testimoni</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg mb-4">
            Ingin menjadi salah satu klien yang merasakan manfaatnya?
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
