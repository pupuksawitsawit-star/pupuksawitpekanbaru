'use client'

import { Card } from '@/components/ui/card'
import { MessageCircle, FileText, Truck, CheckCircle, ArrowRight } from 'lucide-react'

export function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Hubungi Kami',
      description: 'Kontak kami melalui WhatsApp atau formulir untuk diskusi awal',
      detail: 'Tim kami akan merespon dalam waktu 30 menit'
    },
    {
      icon: FileText,
      title: 'Diskusi Kebutuhan',
      description: 'Kami akan mengidentifikasi kebutuhan pupuk spesifik perkebunan Anda',
      detail: 'Analisis kebutuhan tonase dan jadwal pemupukan'
    },
    {
      icon: CheckCircle,
      title: 'Penawaran',
      description: 'Terima penawaran harga dan jadwal pengiriman yang transparan',
      detail: 'Negosiasi fleksibel sesuai budget dan kebutuhan'
    },
    {
      icon: Truck,
      title: 'Pengiriman Rutin',
      description: 'Pupuk dikirim tepat waktu sesuai jadwal yang disepakati',
      detail: 'Monitoring pengiriman dan support berkelanjutan'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proses Kerja Sama yang Mudah
          </h2>
          <p className="text-lg text-gray-600">
            4 langkah sederhana untuk memulai supply pupuk kelapa sawit
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 bottom-0 w-0.5 bg-green-200" />
                )}

                <Card className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon & Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {step.description}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Siap Memulai Kerja Sama?
            </h3>
            <p className="text-gray-600 mb-4">
              Hubungi kami sekarang dan dapatkan konsultasi gratis
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
