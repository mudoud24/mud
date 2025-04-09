'use client'

import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { formatCurrency } from '../utils/currency'
import Image from 'next/image'
import ImageViewer from './ImageViewer'

type ProductCardProps = {
  id: string
  name: string
  price: number
  image: string
  images?: string[]
  description?: string
  category: string
  subcategory?: string
  discount?: number
  originalPrice?: number
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image,
  images = [], 
  description = '',
  category,
  subcategory,
  discount = 0,
  originalPrice
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent opening the viewer when clicking like button
    setIsLiked(!isLiked)
  }

  // Update the image path generation
  const productImages = images.length > 0 ? images : [
    image.replace('.webp', '/1.webp'),
    image.replace('.webp', '/2.webp'),
    image.replace('.webp', '/3.webp')
  ]

  return (
    <>
      <div 
        className={`group relative rounded-lg overflow-hidden transition-colors duration-300 ${
          isLiked ? 'bg-red-50' : 'bg-white'
        }`}
      >
        {/* Image Container */}
        <div 
          className="relative aspect-square cursor-pointer"
          onClick={() => setIsViewerOpen(true)}
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
          
          {/* Discount Badge */}
          {discount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              -{discount}%
            </span>
          )}

          {/* Subcategory Badge */}
          {subcategory && ['60ml', '100ml'].includes(subcategory) && (
            <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
              {subcategory === '60ml' ? '60 مل' : '100 مل'}
            </span>
          )}

          {/* Like Button */}
          <button 
            onClick={handleLikeClick}
            className={`absolute top-2 left-2 p-2 rounded-full transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white scale-110' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <FaHeart size={16} />
          </button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-mud-primary">
              {formatCurrency(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(originalPrice)}
              </span>
            )}
          </div>
          {description && (
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Image Viewer */}
      <ImageViewer
        images={productImages}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        productName={name}
        price={price}
        description={description}
      />
    </>
  )
}

export default ProductCard