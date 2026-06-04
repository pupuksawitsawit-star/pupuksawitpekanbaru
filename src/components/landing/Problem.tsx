'use client'

import { Card } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

export function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Supply Tidak Stabil',
      description: 'Kehabisan stok di saat penting, mengganggu jadwal pemupukan dan produktivitas perkebunan'
    },
    {
      icon: AlertTriangle,
      title: 'Kualitas Tidak Konsisten',
      description: 'Kualitas pupuk berubah-ubah setiap pengiriman, sulit untuk memastikan hasil panen yang optimal'
    },
    {
      icon: AlertTriangle,
      title: 'Pengiriman Terlambat',
      description: 'Pupuk sampai tidak tepat waktu, mengakibatkan kerugian waktu dan biaya operasional'
    },
    {
      icon: AlertTriangle,
      title: 'Harga Tidak Transparan',
      description: 'Harga berubah tanpa pemberitahuan, sulit menghitung cost of production dengan akurat'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Masalah yang Sering Dihadapi
          </h2>
          <p className="text-lg text-gray-600">
            Jangan biarkan masalah ini menghambat produktivitas perkebunan Anda
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 font-medium">
            Apakah Anda mengalami masalah yang sama?
          </p>
        </div>
      </div>
    </section>
  )
}
