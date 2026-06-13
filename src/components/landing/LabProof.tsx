'use client'

import Image from 'next/image'
import { BadgeCheck, FlaskConical, Leaf, PackageCheck } from 'lucide-react'

export function LabProof() {
  const results = [
    ['pH', '7,40'],
    ['N-Total', '2,27%'],
    ['P2O5', '7,27%'],
    ['K2O', '17,24%'],
    ['C-Organik', '28,59%'],
    ['C/N Ratio', '12,46'],
    ['Bahan ikutan', '0%'],
    ['Ukuran butir 2-4,75 mm', '99,32%'],
  ]

  const badges = [
    { icon: FlaskConical, label: 'Lab Resmi' },
    { icon: BadgeCheck, label: 'Kandungan Terukur' },
    { icon: Leaf, label: 'Aman untuk Tanah' },
    { icon: PackageCheck, label: 'Produksi Skala Besar' },
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Pupuk Organik Padat Teruji Laboratorium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Kualitas bukan sekadar klaim. Produk telah melalui analisis laboratorium Universitas Andalas untuk memastikan kandungan hara dan keamanan penggunaan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-green-200 bg-green-50 shadow-lg">
            <Image
              src="/images/UJI LAB.webp"
              alt="Hasil uji laboratorium Universitas Andalas untuk pupuk organik sawit"
              fill
              className="object-contain p-3"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-5 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
              Ringkasan Hasil Penting
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {results.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-lg bg-white px-4 py-3 border border-green-100"
                >
                  <span className="text-sm md:text-base text-gray-600">{label}</span>
                  <span className="text-sm md:text-base font-bold text-green-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mt-6 md:mt-8">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-3 text-sm md:text-base font-semibold text-green-700"
            >
              <badge.icon className="w-4 h-4 md:w-5 md:h-5" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
