'use client'

import { WHATSAPP_DISPLAY_NUMBER } from '@/lib/whatsapp'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Pupuk Sawit</h3>
            <p className="text-gray-400 mb-4">
              Supplier pupuk kelapa sawit terpercaya dengan pengiriman stabil dan kualitas terjamin.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>{WHATSAPP_DISPLAY_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400" />
                <span>pupuksawitsawit@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-green-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-green-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Area Pengiriman</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Riau</li>
              <li>Sumatera Utara</li>
              <li>Sumatera Barat</li>
              <li>Kalimantan Tengah</li>
              <li>Kalimantan Timur</li>
              <li>Kalimantan Barat</li>
              <li>Sulawesi</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Pupuk Sawit. Hak Cipta Dilindungi.</p>
          <p className="mt-2">
            Supplier pupuk kelapa sawit skala besar - 100 - 200 Ton/Bulan
          </p>
        </div>
      </div>
    </footer>
  )
}
