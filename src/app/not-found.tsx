'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mud-light">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-mud-primary mb-4">404</h2>
        <p className="text-xl mb-8">عذراً، الصفحة غير موجودة</p>
        <Link 
          href="/"
          className="bg-mud-primary text-white px-6 py-3 rounded-md hover:bg-mud-primary/90 transition-colors"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  )
}
