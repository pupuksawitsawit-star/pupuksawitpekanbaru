'use client'

import { CheckCircle2, Shield, Award, FileCheck } from 'lucide-react'

export function QualityProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Teruji Laboratorium & Kualitas Terjamin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Setiap batch pupuk kami telah melalui pengujian ketat untuk memastikan kualitas dan efektivitas terbaik untuk perkebunan kelapa sawit Anda.
          </p>
        </div>

        {/* Quality Points */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Lab Testing Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Pengujian Laboratorium Independen
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Setiap produk pupuk kelapa sawit kami diuji oleh laboratorium bersertifikasi untuk memastikan kandungan nutrisi sesuai dengan spesifikasi yang tertera. Hasil uji laboratorium tersedia untuk klien yang memerlukan dokumentasi kualitas.
                  </p>
                </div>
              </div>
            </div>

            {/* Complete Nutrients Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Kandungan Nutrisi Lengkap dan Seimbang
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Formulasi pupuk kami mengandung keseimbangan Nitrogen (N), Fosfor (P), Kalium (K), serta mikronutrien penting seperti Magnesium, Boron, dan Zat Besi yang dibutuhkan tanaman kelapa sawit untuk pertumbuhan optimal dan hasil panen maksimal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Quality Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    pH Seimbang
                  </h4>
                  <p className="text-sm text-gray-600">
                    Formulasi dirancang untuk menjaga keseimbangan pH tanah, mencegah asamisasi dan menciptakan kondisi optimal untuk serapan nutrisi oleh akar tanaman sawit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Aman untuk Jangka Panjang
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pupuk kami aman digunakan secara terus-menerus dalam jangka panjang tanpa menyebabkan degradasi tanah atau kerusakan ekosistem perkebunan kelapa sawit yang berkelanjutan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Standar Kualitas Terverifikasi
                  </h4>
                  <p className="text-sm text-gray-600">
                    Semua produk memenuhi standar kualitas nasional untuk pupuk pertanian, dengan dokumentasi lengkap dan sertifikasi yang dapat diverifikasi untuk kebutuhan perizinan dan dokumentasi perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Document Placeholder */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Dokumentasi Uji Laboratorium Tersedia
                </h3>
                <p className="text-green-100 text-lg">
                  Untuk kebutuhan dokumentasi dan verifikasi kualitas, hasil uji laboratorium dapat disediakan bersama setiap pengiriman.
                </p>
              </div>
              <div className="flex-shrink-0 bg-white/10 rounded-xl p-6 border border-white/30">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-8 h-8 text-green-300" />
                  <div>
                    <p className="font-semibold text-white">Hasil Uji</p>
                    <p className="text-green-200 text-sm">Sertifikat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
