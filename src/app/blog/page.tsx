import { Link } from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog - Tips & Informasi Perkebunan Kelapa Sawit',
  description: 'Artikel lengkap tentang perkebunan kelapa sawit, tips pemupukan, dan cara meningkatkan hasil panen.',
  keywords: 'blog sawit, tips perkebunan, pemupukan sawit, artikel pertanian',
}

export default function BlogPage() {
  const whatsappMessage = encodeURIComponent('Halo, saya ingin konsultasi kebutuhan pupuk kelapa sawit')
  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Image */}
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

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full group">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
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
          <Button
            asChild
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-8 text-center">
        <Link href="/">
          <Button variant="ghost">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  )
}
