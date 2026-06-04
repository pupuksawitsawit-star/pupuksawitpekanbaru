'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { HelpCircle } from 'lucide-react'

export function FAQ() {
  const faqs = [
    {
      question: 'Berapa minimal order?',
      answer: 'Minimal order adalah 10 ton per bulan. Kami dapat melayani kebutuhan dari skala kecil hingga besar, mulai dari 10 hingga 100 ton per bulan atau lebih sesuai kebutuhan perkebunan Anda.'
    },
    {
      question: 'Area mana saja yang bisa dikirim?',
      answer: 'Kami dapat mengirim ke berbagai wilayah di Indonesia, terutama di area perkebunan kelapa sawit seperti Sumatera (Riau, Sumatera Utara, Sumatera Barat), Kalimantan (Kalimantan Tengah, Kalimantan Timur, Kalimantan Barat), dan Sulawesi. Hubungi kami untuk informasi pengiriman ke wilayah spesifik Anda.'
    },
    {
      question: 'Bagaimana sistem pembayaran?',
      answer: 'Kami menawarkan berbagai opsi pembayaran yang fleksibel, termasuk pembayaran tunai (cash), tempo (term of payment), dan pembayaran bertahap. Syarat dan ketentuan dapat dinegosiasikan sesuai dengan volume dan durasi kerjasama.'
    },
    {
      question: 'Apakah bisa kontrak jangka panjang?',
      answer: 'Ya, kami sangat merekomendasikan kontrak jangka panjang untuk memastikan ketersediaan stok dan harga yang stabil. Kontrak dapat dibuat untuk periode 6 bulan, 1 tahun, atau lebih sesuai kebutuhan perkebunan Anda.'
    },
    {
      question: 'Bagaimana kualitas pupuk yang disediakan?',
      answer: 'Kami hanya menyediakan pupuk berkualitas tinggi dari produsen dan distributor terpercaya yang telah terbukti dan bersertifikat. Kualitas pupuk kami konsisten dan sesuai dengan standar untuk perkebunan kelapa sawit.'
    },
    {
      question: 'Berapa lama proses pengiriman setelah pesanan dikonfirmasi?',
      answer: 'Lama pengiriman bervariasi tergantung pada lokasi dan volume pesanan. Untuk area terdekat, pengiriman dapat dilakukan dalam 2-5 hari kerja. Untuk area lebih jauh, waktu pengiriman disesuaikan dengan jarak dan ketersediaan armada.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-green-600 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg transition-colors"
          >
            <span>Hubungi via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
