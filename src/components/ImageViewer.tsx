'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { formatCurrency } from '../utils/currency'

interface ImageViewerProps {
  images: string[]
  isOpen: boolean
  onClose: () => void
  productName: string
  price?: number
  description?: string
}

const ImageViewer = ({ 
  images, 
  isOpen, 
  onClose, 
  productName,
  price,
  description = 'عطر فاخر يجمع بين الأصالة والحداثة' // Default description
}: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Add body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center touch-none"
      onClick={handleBackdropClick}
    >
      <button 
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="fixed top-4 right-4 z-[110] text-white p-4 hover:text-gray-300 bg-black/20 rounded-full"
        aria-label="Close"
      >
        <FaTimes size={24} />
      </button>

      <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 gap-8" onClick={e => e.stopPropagation()}>
        <div className="relative w-full md:w-2/3 h-[50vh] md:h-[70vh]">
          <Image
            src={images[currentIndex]}
            alt={`${productName} - صورة ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-gray-300 bg-black/20 rounded-full"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-gray-300 bg-black/20 rounded-full"
              >
                <FaChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="text-white md:w-1/3 text-right">
          <h2 className="text-2xl font-bold mb-4">{productName}</h2>
{/*           {price && (
            <p className="text-xl text-mud-primary mb-4">{formatCurrency(price)}</p>
          )} */}
          <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
          
          {images.length > 1 && (
            <div className="flex gap-2 justify-end mb-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white w-4' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageViewer
