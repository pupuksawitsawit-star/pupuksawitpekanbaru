'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function Solution() {
  const solutions = [
    {
      icon: CheckCircle2,
      title: 'Supply Stabil Bulanan',
      description: 'Ketersediaan pupuk terjamin setiap bulan sesuai kebutuhan perkebunan Anda'
    },
    {
      icon: CheckCircle2,
      title: 'Bisa Kontrak Jangka Panjang',
      description: 'Komitmen supply jangka panjang dengan harga yang kompetitif dan stabil'
    },
    {
      icon: CheckCircle2,
      title: 'Pengiriman Terjadwal',
      description: 'Jadwal pengiriman yang tepat waktu dan dapat diandalkan sesuai kebutuhan'
    },
    {
      icon: CheckCircle2,
      title: 'Support Volume Besar',
      description: 'Kapasitas supply 100 - 200 Ton/Bulan untuk perkebunan skala besar'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Solusi yang Kami Tawarkan
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Mitra terpercaya untuk kebutuhan pupuk kelapa sawit perkebunan Anda
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-5 md:p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12 bg-green-50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Siap Meningkatkan Produktivitas Perkebunan?
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            Konsultasikan kebutuhan pupuk Anda dengan tim kami
          </p>
        </div>
      </div>
    </section>
  )
}
