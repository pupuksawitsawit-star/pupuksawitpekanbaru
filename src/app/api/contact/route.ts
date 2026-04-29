import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, company, tonnage, phone, message } = body

    if (!name || !company || !tonnage || !phone) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Store in database using Prisma
    // 2. Send email notification
    // 3. Send WhatsApp notification via API

    // For now, just log the submission
    console.log('Contact form submission:', {
      name,
      company,
      tonnage,
      phone,
      message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { message: 'Pesan berhasil dikirim' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses pesan' },
      { status: 500 }
    )
  }
}
