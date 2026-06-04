export const WHATSAPP_NUMBER = '6282239703783'
export const WHATSAPP_DISPLAY_NUMBER = '+62 822 3970 3783'
export const WHATSAPP_GREETING =
  'Halo admin, boleh bantu info jenis jenis pupuk yang redy, dan cara pemesananya.'

export function getWhatsAppUrl(message = WHATSAPP_GREETING) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
