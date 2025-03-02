'use client'

import { useState, useEffect, useRef } from 'react'
import { FaTimes, FaSearch } from 'react-icons/fa'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
}

const SearchOverlay = ({ isOpen, onClose, products }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  const normalizeArabicText = (text: string) => {
    return text
      .replace(/[يى]/g, 'ي')
      .replace(/[أإآا]/g, 'ا')
      .replace(/[ؤئ]/g, 'ء')
      .replace(/[ة]/g, 'ه')
      .toLowerCase()
      .trim()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    const normalizedSearchTerm = normalizeArabicText(searchTerm)
    const results = products.filter(product => 
      normalizeArabicText(product.name).includes(normalizedSearchTerm) ||
      normalizeArabicText(product.category).includes(normalizedSearchTerm)
    )
    setFilteredProducts(results)
  }, [searchTerm, products])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div
        ref={searchRef}
        className="fixed inset-x-0 top-0 bg-white p-6 max-h-screen overflow-y-auto"
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1 max-w-2xl mx-auto relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن المنتجات..."
                className="w-full p-3 pr-10 text-right border border-gray-300 rounded-lg focus:outline-none focus:border-mud-primary"
                dir="rtl"
                autoFocus
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={onClose}
              className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {searchTerm && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-mud-primary">${product.price}</p>
                  </div>
                </Link>
              ))}
              {filteredProducts.length === 0 && (
                <p className="text-gray-500 col-span-full text-center">
                  لا توجد نتائج
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchOverlay
