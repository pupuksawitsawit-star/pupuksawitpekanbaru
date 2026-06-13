'use client'

import { Card } from '@/components/ui/card'
import { Truck, Shield, MessageSquare, Star, FileCheck } from 'lucide-react'

export function Trust() {
  const trustPoints = [
    {
      icon: Truck,
      title: 'Jaringan Supplier Terpercaya',
      description: 'Kerjasama langsung dengan produsen dan distributor pupuk terkemuka di Indonesia'
    },
    {
      icon: Shield,
      title: 'Logistik Andal',
      description: 'Armada pengiriman yang tersebar di berbagai wilayah untuk pengiriman tepat waktu'
    },
    {
      icon: MessageSquare,
      title: 'Komunikasi Responsif',
      description: 'Tim customer service siap membantu menjawab pertanyaan dan kebutuhan Anda'
    },
    {
      icon: FileCheck,
      title: 'Teruji Laboratorium',
      description: 'Data analisis pupuk tersedia sebagai bukti kandungan hara dan kualitas produk.'
    }
  ]

  const testimonials = [
    {
      name: 'PT. Palm Jaya',
      role: 'Perkebunan Sawit',
      location: 'Riau',
      rating: 5,
      text: 'Sudah 2 tahun bekerjasama dengan tim ini. Selalu tepat waktu dan kualitas pupuk konsisten.'
    },
    {
      name: 'Bpk. Ahmad Suryadi',
      role: 'Pemilik Perkebunan',
      location: 'Sumatera Barat',
      rating: 5,
      text: 'Respon cepat dan profesional. Sangat membantu operasional perkebunan kami.'
    },
    {
      name: 'PT. Sawit Subur',
      role: 'Distributor',
      location: 'Kalimantan',
      rating: 5,
      text: 'Volume besar tidak jadi masalah. Supply selalu stabil meskipun pesanan 100 ton/bulan.'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Keunggulan yang membuat kami menjadi mitra terpercaya bagi perkebunan sawit
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-16">
          {trustPoints.map((point, index) => (
            <Card
              key={index}
              className="p-5 md:p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {point.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-green-600 rounded-2xl p-5 md:p-8 mb-8 md:mb-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
            <div>
              <p className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2">10+</p>
              <p className="text-sm md:text-base text-green-100">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2">500+</p>
              <p className="text-sm md:text-base text-green-100">Perkebunan Dilayani</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2">5000+</p>
              <p className="text-sm md:text-base text-green-100">Ton Terkirim/Bulan</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2">98%</p>
              <p className="text-sm md:text-base text-green-100">Klien Puas</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-5 md:mb-8">
            Apa Kata Klien Kami?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
