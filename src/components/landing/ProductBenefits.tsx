'use client'

import { getWhatsAppUrl } from '@/lib/whatsapp'
import { TrendingUp, Sprout, Shield, Recycle } from 'lucide-react'

export function ProductBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Meningkatkan Hasil Panen',
      description: 'Formulasi nutrisi seimbang secara spesifik dirancang untuk memaksimalkan produksi tandan buah segar kelapa sawit. Pupuk kami memberikan suplai nutrisi yang cukup di setiap fase pertumbuhan tanaman, mulai dari pembungaan hingga pematangan buah, sehingga hasil panen dapat meningkat signifikan secara konsisten setiap musim panen.'
    },
    {
      icon: Sprout,
      title: 'Memperbaiki Struktur Tanah',
      description: 'Penggunaan jangka panjang pupuk berkualitas tinggi membantu meningkatkan kandungan bahan organik tanah dan memperbaiki struktur tanah menjadi lebih gembur dan subur. Tanah yang sehat mampu menahan air lebih baik, meningkatkan aerasi akar, dan menciptakan lingkungan yang optimal untuk pertumbuhan akar tanaman kelapa sawit yang kuat dan sehat.'
    },
    {
      icon: Recycle,
      title: 'Mengurangi Ketergantungan Pupuk Kimia',
      description: 'Pupuk organik dan NPK berimbang kami dapat mengurangi ketergantungan pada pupuk kimia berat yang berpotensi merusak tanah dan ekosistem dalam jangka panjang. Dengan menggunakan produk kami, perkebunan dapat beralih ke praktik pemupukan yang lebih berkelanjutan dan ramah lingkungan sambil tetap mempertahankan atau bahkan meningkatkan produktivitas.'
    },
    {
      icon: Shield,
      title: 'Aman untuk Penggunaan Jangka Panjang',
      description: 'Semua produk pupuk kelapa sawit kami aman digunakan secara rutin dan berkelanjutan tanpa menyebabkan penumpukan zat berbahaya di tanah atau mencemari air tanah. Formulasi kami telah diuji untuk memastikan tidak mengandung logam berat berbahaya atau kontaminan lain yang dapat membahayakan kesehatan tanaman, pekerja perkebunan, dan konsumen minyak sawit.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sprout className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Manfaat Nyata untuk Perkebunan Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pupuk kelapa sawit berkualitas tinggi kami memberikan berbagai manfaat penting untuk meningkatkan produktivitas dan keberlanjutan perkebunan Anda.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Mini */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ingin Meningkatkan Produktivitas Perkebunan?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Konsultasikan dengan tim kami untuk menentukan program pemupukan yang tepat sesuai dengan kondisi tanah dan kebutuhan tanaman kelapa sawit Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
