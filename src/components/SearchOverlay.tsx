'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
import { formatCurrency } from '../utils/currency'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
  products: any[]
}

const SearchOverlay = ({ isOpen, onClose, products }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleProductClick = (product: any) => {
    // Navigate to products page with query params
    window.location.href = `/products?category=${product.category}&productId=${product.id}`
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] p-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-end mb-4">
          <button 
            onClick={onClose}
            className="text-white p-2"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <input
          type="text"
          placeholder="ابحث عن منتج..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/10 text-white border-0 rounded-lg p-4 mb-8 text-lg focus:outline-none focus:ring-2 focus:ring-mud-primary"
          autoFocus
        />

        <div className="grid gap-4 max-h-[60vh] overflow-y-auto">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="bg-white/5 rounded-lg p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold">{product.name}</h3>
                <p className="text-mud-primary">{formatCurrency(product.price)}</p>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && searchTerm && (
            <p className="text-center text-gray-400">لا توجد نتائج للبحث</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchOverlay
