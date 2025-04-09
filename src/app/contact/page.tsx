'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare email content
    const subject = `رسالة جديدة من ${formData.name}`
    const body = `
      الاسم: ${formData.name}
      البريد الإلكتروني: ${formData.email}
      
      الرسالة:
      ${formData.message}
    `

    // Create mailto URL
    const mailtoUrl = `mailto:info@musk-oud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open default email client
    window.location.href = mailtoUrl

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">اتصل بنا</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-mud-primary text-xl" />
                  <a
                    href="mailto:info@musk-oud.com"
                    className="hover:text-mud-primary transition-colors"
                  >
                    info@musk-oud.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-mud-primary text-xl" />
                  <p>Yakuplu, 67. Sk. No: 26, 34000 Beylikdüzü/İstanbul</p>
                </div>
              </div>
            </div>
            {/* Google Maps Embed */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.891385657146!2d28.641310376707015!3d41.00904297134307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fc19ca567e9%3A0x42c5c2e3c0891612!2sYakuplu%2C%2067.%20Sk.%20No%3A26%2C%2034524%20Beylikd%C3%BCz%C3%BC%2F%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1709667444290!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-mud-secondary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">ساعات العمل</h2>
              <p>من الإثنين إلى السبت : 10 صباحاً - 7 مساءً</p>
              <p>الأحد : 12 مساءً - 7 مساءً</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">راسلنا</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-mud-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-mud-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">الرسالة</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-mud-primary h-52"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-mud-primary text-white py-3 rounded hover:bg-mud-primary/90 transition-colors"
              >
                إرسال
              </button>
            </form>

            {/* Direct Email Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">أو يمكنك مراسلتنا مباشرة على</p>
              <a
                href="mailto:info@musk-oud.com"
                className="text-mud-primary hover:underline"
              >
                info@musk-oud.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}