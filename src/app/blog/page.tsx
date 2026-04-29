import { Link } from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog Perkebunan Sawit',
  description: 'Tips dan informasi perkebunan kelapa sawit',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <p className="text-sm text-gray-500 mb-4">{post.readTime} baca</p>

                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Konsultasi Pupuk untuk Perkebunan Anda?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu menentukan kebutuhan pupuk yang tepat untuk perkebunan kelapa sawit Anda
          </p>
          <Button
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 rounded-full font-semibold"
            asChild
          >
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              Konsultasi via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <div className="py-8 text-center">
        <Link href="/">
          <Button>
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  )
}
