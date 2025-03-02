'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-mud-light">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-mud-primary mb-4">خطأ</h2>
        <p className="text-xl mb-8">عذراً، حدث خطأ ما</p>
        <button
          onClick={reset}
          className="bg-mud-primary text-white px-6 py-3 rounded-md hover:bg-mud-primary/90 transition-colors"
        >
          حاول مرة أخرى
        </button>
      </div>
    </div>
  )
}
