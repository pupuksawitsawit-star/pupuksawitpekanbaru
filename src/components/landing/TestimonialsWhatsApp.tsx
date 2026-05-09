'use client'

import { MessageCircle, Star, MapPin, Building2, Calendar } from 'lucide-react'

export function TestimonialsWhatsApp() {
  const testimonials = [
    {
      quote: "Setelah beralih ke pupuk dari supplier ini, hasil panen sawit kami meningkat sekitar 30% dalam 6 bulan terakhir. Distribusinya selalu tepat waktu dan kualitas pupuk sangat konsisten.",
      name: "Bpk. Ahmad Fauzi",
      company: "PT. Sawit Maju Jaya",
      location: "Riau",
      duration: "2 tahun kerjasama",
      rating: 5
    },
    {
      quote: "Sangat puas dengan layanan mereka. Tim support selalu responsif ketika kami butuh bantuan atau konsultasi mengenai jadwal pemupukan yang tepat untuk tanaman sawit kami.",
      name: "Ibu Ratna Dewi",
      company: "PT. Green Palm Indonesia",
      location: "Kalimantan Tengah",
      duration: "1 tahun kerjasama",
      rating: 5
    },
    {
      quote: "Kontrak supply jangka panjang yang mereka tawarkan sangat menguntungkan bagi perusahaan kami. Harga stabil dan stok selalu tersedia tanpa perlu khawatir tentang kelangkaan pupuk.",
      name: "Bpk. Budi Santoso",
      company: "CV. Agro Nusantara",
      location: "Sumatera Barat",
      duration: "3 tahun kerjasama",
      rating: 5
    },
    {
      quote: "Kualitas pupuk sangat baik dan terbukti efektif. Dokumentasi uji lab yang mereka berikan sangat membantu kami dalam proses sertifikasi dan audit internal perusahaan.",
      name: "Ibu Sari Wulandari",
      company: "PT. Palm Plantation Indonesia",
      location: "Sumatera Utara",
      duration: "1.5 tahun kerjasama",
      rating: 5
    },
    {
      quote: "Pengiriman ke lokasi perkebunan kami yang cukup terpencil pun selalu dapat diandalkan. Armada logistik mereka profesional dan selalu memastikan pupuk sampai dengan kondisi baik.",
      name: "Bpk. Hendra Wijaya",
      company: "PT. Bumi Sawit Mandiri",
      location: "Kalimantan Timur",
      duration: "8 bulan kerjasama",
      rating: 5
    },
    {
      quote: "Rekomendasi supplier terbaik untuk pupuk kelapa sawit. Tidak hanya kualitas produk yang bagus, tetapi pelayanan pelanggan juga sangat profesional dan responsif.",
      name: "Bpk. Rizky Pratama",
      company: "PT. Golden Harvest Plantation",
      location: "Sulawesi",
      duration: "2 tahun kerjasama",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimoni asli dari pemilik perkebunan dan distributor yang telah bekerjasama dengan kami untuk supply pupuk kelapa sawit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                {/* Quote */}
                <div className="mb-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Client Info - WhatsApp Style */}
                <div className="border-t pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 mb-1 truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 mb-2 truncate">
                        {testimonial.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonial.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{testimonial.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Bergabunglah dengan Ratusan Klien Puas Kami
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Dapatkan supply pupuk kelapa sawit berkualitas tinggi dengan layanan profesional dan pengiriman terpercaya untuk perkebunan Anda.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20kebutuhan%20pupuk%20kelapa%20sawit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 shadow-lg"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
