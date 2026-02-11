'use client'

export default function WhatsAppFab() {
  const phoneNumber = '919876543210' // Replace with your WhatsApp number (country code + number)
  const message = 'Hi! I am interested in discussing a project with you.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 active:scale-95 transition-all md:hidden"
      title="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined text-[28px]">chat</span>
    </a>
  )
}
