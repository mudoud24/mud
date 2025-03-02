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
    // Handle form submission - could send to WhatsApp or email
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
                  <FaPhone className="text-mud-primary text-xl" />
                  <p>+XXX XX XXX XXXX</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-mud-primary text-xl" />
                  <p>+XXX XX XXX XXXX</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-mud-primary text-xl" />
                  <p>info@mud.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-mud-primary text-xl" />
                  <p>بلاد الله الواسعة</p>
                </div>
              </div>
            </div>

            <div className="bg-mud-secondary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">ساعات العمل</h2>
              <p>من السبت إلى الخميس: 10 صباحاً - 10 مساءً</p>
              <p>الجمعة: 2 مساءً - 10 مساءً</p>
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
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-mud-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-mud-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">الرسالة</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-mud-primary h-32"
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
          </div>
        </div>
      </div>
    </div>
  )
}
