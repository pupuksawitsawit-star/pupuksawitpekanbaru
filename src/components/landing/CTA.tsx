'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    tonnage: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const whatsappMessage = encodeURIComponent('Halo, saya ingin konsultasi kebutuhan pupuk kelapa sawit')
  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Track form submission (for Meta Pixel)
      if (typeof window !== 'undefined' && (window as any).fbq) {
        ;(window as any).fbq('track', 'Lead')
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Pesan Terkirim!",
          description: "Tim kami akan menghubungi Anda segera.",
          variant: "default",
        })
        setFormData({ name: '', company: '', tonnage: '', phone: '', message: '' })
      } else {
        throw new Error('Gagal mengirim pesan')
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Silakan coba lagi atau hubungi via WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Diskusikan Kebutuhan Pupuk Anda Sekarang
          </h2>
          <p className="text-lg text-green-100">
            Konsultasi gratis tanpa komitmen. Kami siap membantu menemukan solusi terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: WhatsApp CTA */}
          <Card className="p-8 bg-white">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Respon Cepat via WhatsApp
                </h3>
                <p className="text-gray-600">
                  Dapatkan jawaban dalam 30 menit atau kurang
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  // Track WhatsApp click (for Meta Pixel)
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    ;(window as any).fbq('track', 'Contact')
                  }
                }}
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>Hubungi via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+62 812 3456 7890</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>info@pupuksawit.com</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-700">
                  <strong>Pesan Terkirim:</strong> "Halo, saya ingin konsultasi kebutuhan pupuk kelapa sawit"
                </p>
              </div>
            </div>
          </Card>

          {/* Right: Contact Form */}
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Atau Isi Formulir Ini
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Nama Lengkap *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Nama Anda"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company">Nama Perusahaan *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  placeholder="PT. / CV. / Perorangan"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="tonnage">Kebutuhan Ton/Bulan *</Label>
                <Input
                  id="tonnage"
                  value={formData.tonnage}
                  onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                  required
                  placeholder="Contoh: 50 ton"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">No. Telepon / WhatsApp *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="+62 xxx xxxx xxxx"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Pesan Tambahan</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan kebutuhan Anda..."
                  rows={3}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Data Anda aman dan tidak akan dibagikan ke pihak ketiga
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
