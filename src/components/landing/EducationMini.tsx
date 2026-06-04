'use client'

import { getWhatsAppUrl } from '@/lib/whatsapp'
import { BookOpen, Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react'

export function EducationMini() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <BookOpen className="w-7 h-7 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pentingnya Pemilihan Pupuk untuk Kelapa Sawit
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Memilih pupuk kelapa sawit yang tepat adalah kunci untuk mengoptimalkan produktivitas perkebunan dan mencapai hasil panen yang maksimal secara konsisten.
          </p>
        </div>

        {/* Education Content */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Why Fertilizer Matters */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">
                  Mengapa Pupuk Sangat Penting?
                </h3>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-3 pl-10">
                <p>
                  Tanaman kelapa sawit adalah tanaman perkebunan jangka panjang yang terus memproduksi buah sepanjang tahun. Untuk mempertahankan produktivitas yang tinggi dan hasil panen yang optimal, tanaman membutuhkan suplai nutrisi yang cukup dan seimbang secara terus-menerus. Kekurangan nutrisi dapat menyebabkan penurunan hasil panen hingga 40-50%.
                </p>
                <p>
                  <strong>Pupuk kelapa sawit</strong> yang tepat tidak hanya meningkatkan produksi tandan buah segar, tetapi juga meningkatkan kualitas minyak sawit dan berat tandan buah kering. Pemupukan yang baik memastikan tanaman memiliki stamina yang cukup untuk bertahan dari serangan hama dan penyakit.
                </p>
              </div>
            </div>

            {/* Key Nutrients */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">
                  Nutrisi Utama yang Dibutuhkan
                </h3>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-3 pl-10">
                <p>
                  Kelapa sawit membutuhkan kombinasi nutrisi makro dan mikro yang seimbang. <strong>Nitrogen (N)</strong> penting untuk pertumbuhan vegetatif dan daun. <strong>Fosfor (P)</strong> diperlukan untuk pembentukan akar yang kuat dan perkembangan buah. <strong>Kalium (K)</strong> sangat krusial untuk kualitas minyak sawit dan ketahanan tanaman.
                </p>
                <p>
                  Selain NPK, tanaman kelapa sawit juga membutuhkan <strong>mikronutrien</strong> seperti Magnesium (Mg), Kalsium (Ca), dan Boron (B). Kekurangan mikronutrien ini dapat menyebabkan gangguan pembungaan dan penurunan kualitas buah. Pemupukan kelapa sawit yang komprehensif harus mencakup kedua jenis nutrisi ini.
                </p>
              </div>
            </div>

            {/* Quality Considerations */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">
                  Faktor Penting dalam Memilih Supplier Pupuk
                </h3>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-3 pl-10">
                <p>
                  Dalam memilih <strong>supplier pupuk kelapa sawit</strong> atau <strong>distributor pupuk sawit</strong>, ada beberapa faktor krusial yang perlu dipertimbangkan. Pertama, pastikan kualitas pupuk teruji di laboratorium dan memiliki sertifikasi yang valid. Kedua, supplier yang baik akan menyediakan dokumentasi dan hasil uji kualitas yang transparan.
                </p>
                <p>
                  <strong>Kebutuhan pupuk sawit per hektar</strong> bervariasi tergantung umur tanaman, kualitas tanah, dan target produksi. Tanaman belum menghasilkan (TBM) membutuhkan pupuk dengan kandungan Nitrogen lebih tinggi untuk pertumbuhan vegetatif, sedangkan tanaman menghasilkan (TM) memerlukan keseimbangan NPK yang sesuai dengan fase pembungaan dan pematangan buah.
                </p>
                <p>
                  Waktu pemupukan yang tepat juga sangat mempengaruhi efektivitas serapan nutrisi oleh tanaman. Pemupukan kelapa sawit sebaiknya dilakukan secara berkala sesuai kalender pembungaan dan pemanenan. Supplier pupuk sawit yang profesional akan memberikan rekomendasi jadwal pemupukan yang disesuaikan dengan kondisi spesifik perkebunan Anda.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-center">
                <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
                  Butuh bantuan menentukan program pemupukan yang tepat untuk perkebunan kelapa sawit Anda? Tim kami siap memberikan konsultasi profesional dengan analisa kebutuhan nutrisi yang komprehensif.
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Konsultasi dengan Ahli
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
