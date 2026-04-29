export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog Perkebunan Sawit
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Tips, panduan, dan informasi terbaru untuk mengoptimalkan produktivitas perkebunan kelapa sawit Anda
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center p-12 bg-blue-50 rounded-xl border-2 border-blue-200">
            <p className="text-lg text-blue-800 mb-4">
              <strong>3 Artikel Blog Tersedia:</strong>
            </p>
            <ul className="text-left text-blue-700 space-y-2 inline-block">
              <li>✓ Cara Memilih Pupuk Kelapa Sawit yang Tepat</li>
              <li>✓ Kebutuhan Pupuk Sawit per Hektar</li>
              <li>✓ Tips Meningkatkan Hasil Panen Sawit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Konsultasi Pupuk untuk Perkebunan Anda?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu menentukan kebutuhan pupuk yang tepat untuk perkebunan kelapa sawit Anda
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-6 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-8 text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center h-10 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-all"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  )
}
