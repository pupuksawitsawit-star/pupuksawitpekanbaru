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
      answer: 'Minimal order adalah 100 Ton/Bulan. Kami dapat melayani kebutuhan perkebunan skala besar, mulai dari 100 - 200 Ton/Bulan atau lebih sesuai kebutuhan perkebunan Anda.'
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
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <HelpCircle className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-4 md:px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-900 hover:text-green-600 py-4 md:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pb-4 md:pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-base md:text-lg transition-colors"
          >
            <span>Hubungi via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
