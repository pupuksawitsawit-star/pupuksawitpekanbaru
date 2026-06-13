import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Calendar, Clock, User, MessageCircle } from 'lucide-react'
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from '@/lib/blog-data'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan',
    }
  }

  return {
    title: `${post.title} - Pupuk Sawit`,
    description: post.excerpt,
    keywords: post.category,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug)
  const whatsappUrl = getWhatsAppUrl()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={post.image}
          alt={`Artikel pupuk kelapa sawit: ${post.title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <span className="bg-green-600 text-white text-sm px-4 py-1.5 rounded-full font-medium">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-gray-200">
                {post.excerpt}
              </p>
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} baca</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  // Handle headings
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">
                        {paragraph.replace('# ', '')}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-6">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 mb-2 mt-4">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  // Handle lists
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <li key={index} className="text-gray-700 mb-2 ml-4 list-decimal">
                        {paragraph.replace(/^\d+\.\s*/, '')}
                      </li>
                    )
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-gray-700 mb-2 ml-4 list-disc">
                        {paragraph.replace('- ', '')}
                      </li>
                    )
                  }
                  // Handle paragraphs
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  }
                  return null
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Butuh Konsultasi Pupuk?
                </h3>
                <p className="text-gray-700 mb-4">
                  Hubungi kami untuk mendapatkan rekomendasi pupuk yang tepat untuk perkebunan sawit Anda
                </p>
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 w-full md:w-auto"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Konsultasi via WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Artikel Terkait
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48">
                        <img
                          src={relatedPost.image}
                          alt={`Artikel terkait pupuk sawit: ${relatedPost.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                          <Link href={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="ghost" size="sm" className="group">
                            Baca Selengkapnya
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                  Kembali ke Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* WhatsApp Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          size="lg"
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl p-0"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat via WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </div>
  )
}
