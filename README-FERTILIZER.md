# Pupuk Kelapa Sawit - B2B Landing Page

Landing page B2B modern untuk supplier pupuk kelapa sawit, dirancang khusus untuk menghasilkan leads dan membangun kepercayaan dengan klien korporat.

## 🎯 Tujuan Utama

1. **Lead Generation** - Menghasilkan qualified leads melalui WhatsApp dan formulir kontak
2. **Trust Building** - Memperlihatkan kredibilitas sebagai supplier terpercaya
3. **Conversion Optimization** - Dirancang khusus untuk traffic dari Meta Ads
4. **SEO Friendly** - Optimasi untuk mesin pencari dengan blog dan konten

## 🚀 Fitur yang Telah Dibangun

### Landing Page (/)
- **Hero Section** - Headline yang kuat dengan CTA WhatsApp
- **Problem Section** - Menampilkan pain points target audience
- **Solution Section** - Solusi yang ditawarkan
- **Trust Section** - Statistik, keunggulan, dan testimonial
- **Process Section** - 4 langkah mudah kerjasama
- **CTA Section** - Form kontak + tombol WhatsApp
- **FAQ Section** - Pertanyaan yang sering diajukan
- **Floating WhatsApp Button** - Muncul setelah scroll
- **Footer** - Informasi kontak dan navigasi

### Blog System (/blog)
- **Blog List Page** - Menampilkan semua artikel
- **Dynamic Blog Detail** - Halaman detail artikel dengan slug
- **3 Sample Articles**:
  - Cara Memilih Pupuk Kelapa Sawit yang Tepat
  - Kebutuhan Pupuk Sawit per Hektar
  - Tips Meningkatkan Hasil Panen Sawit

### Contact API (/api/contact)
- API endpoint untuk submit formulir kontak
- Validasi input
- Ready untuk integrasi dengan database, email, atau WhatsApp

### SEO & Tracking
- **SEO Metadata** - Title, description, keywords, OpenGraph
- **Google Analytics** - Placeholder siap untuk setup
- **Meta Pixel** - Placeholder siap untuk setup
- **Structured Data** - Schema.org markup untuk local business

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.tsx                    # Landing page utama
│   ├── layout.tsx                  # Root layout dengan tracking
│   ├── blog/
│   │   ├── page.tsx               # Blog list page
│   │   └── [slug]/
│   │       └── page.tsx           # Blog detail page
│   └── api/
│       └── contact/
│           └── route.ts          # Contact API endpoint
├── components/
│   ├── landing/                   # Landing page components
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Trust.tsx
│   │   ├── Process.tsx
│   │   ├── CTA.tsx
│   │   ├── FAQ.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── Footer.tsx
│   └── ui/                        # shadcn/ui components
└── lib/
    ├── blog-data.ts              # Blog data & functions
    └── utils.ts
```

## 🎨 Design System

- **Framework**: Tailwind CSS 4
- **Component Library**: shadcn/ui
- **Color Palette**: Green/Nature theme (agriculture feel)
- **Typography**: Clean, professional B2B style
- **Responsive**: Mobile-first design
- **Icons**: Lucide React

## ⚙️ Setup Tracking Analytics

### Google Analytics

1. Ganti `GA_MEASUREMENT_ID` di `src/app/layout.tsx` dengan GA ID Anda:
```typescript
src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
```

2. Ganti di config:
```typescript
gtag('config', 'GA_MEASUREMENT_ID');
```

### Meta Pixel (Facebook)

1. Ganti `YOUR_PIXEL_ID` di `src/app/layout.tsx` dengan Pixel ID Anda:
```typescript
fbq('init', 'YOUR_PIXEL_ID');
```

2. Juga ganti di noscript tag:
```html
src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
```

### Events yang Tertracking

- **PageView** - Setiap kali halaman dibuka
- **Contact** - Klik tombol WhatsApp
- **Lead** - Submit formulir kontak

## 📝 Update Kontak Information

Update informasi kontak di beberapa file:

### Nomor WhatsApp
Di semua komponen yang menggunakan WhatsApp, ganti:
```typescript
const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`
```

### Email & Kontak Lainnya
Di file:
- `src/components/landing/CTA.tsx`
- `src/components/landing/Footer.tsx`

## 🔌 Integrasi Database (Opsional)

Untuk menyimpan data formulir kontak:

1. Update Prisma schema:
```prisma
model Contact {
  id        String   @id @default(uuid())
  name      String
  company   String
  tonnage   String
  phone     String
  message   String?
  createdAt DateTime @default(now())
}
```

2. Run: `bun run db:push`

3. Update `/src/app/api/contact/route.ts` untuk menyimpan ke database

## 🚀 Deployment

### Production Build
```bash
bun run build
```

### Start Production Server
```bash
bun run start
```

## 📊 Optimasi Kinerja

- ✅ Next.js Image optimization
- ✅ Lazy loading untuk gambar
- ✅ Komponen client-side hanya saat diperlukan
- ✅ Code splitting otomatis Next.js
- ✅ Tailwind CSS production build

## 🎯 Tips Konversi

1. **A/B Testing** - Uji berbagai headline dan CTA
2. **WhatsApp Response Time** - Pastikan respon dalam 30 menit
3. **Follow-up** - Kirim follow-up otomatis setelah form submit
4. **Testimonial** - Tambah testimonial real dari klien
5. **Blog Content** - Publish artikel secara rutin untuk SEO

## 📝 Catatan Penting

- Tidak menampilkan harga (fokus pada lead generation)
- Pesan persuasif tapi profesional (B2B audience)
- Semua CTA mengarah ke WhatsApp atau form kontak
- Setiap blog memiliki CTA ke WhatsApp
- Mobile-first design sangat penting untuk traffic dari Ads

## 🛠️ Development Commands

```bash
# Start development server
bun run dev

# Check code quality
bun run lint

# Build for production
bun run build

# Start production server
bun run start

# Database operations (jika menggunakan Prisma)
bun run db:push
bun run db:generate
bun run db:migrate
```

## 📄 Lisensi

Proyek ini dibangun sebagai landing page B2B untuk supplier pupuk kelapa sawit.
