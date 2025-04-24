'use client'

import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { formatCurrency } from '../utils/currency'
import Image from 'next/image'
import ImageViewer from './ImageViewer'
import { getGenderLabel } from '@/data/products'

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
  gender?: 'men' | 'women' | 'unisex'
  priority?: boolean
  sizes?: string
  className?: string
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
  originalPrice,
  gender,
  priority = false,
  sizes = '100vw',
  className = ''
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const productImages = images.length > 0 ? images : [
    image.replace('.webp', '/1.webp'),
    image.replace('.webp', '/2.webp'),
    image.replace('.webp', '/3.webp')
  ]

  return (
    <>
      <div className={`group relative rounded-lg overflow-hidden transition-colors duration-300 ${
        isLiked ? 'bg-red-50' : 'bg-white'
      }`}>
        <div className={`relative cursor-pointer ${className}`}
             onClick={() => setIsViewerOpen(true)}>
          <Image
            src={image}
            alt={name}
            fill
            sizes={sizes}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            quality={75}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
          
          {/* Discount Badge */}
          {discount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              -{discount}%
            </span>
          )}

          {/* Badges Container */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            {/* Volume Badge */}
            {subcategory && ['60ml', '100ml'].includes(subcategory) && (
              <span className="bg-black/70 text-white px-1.5 py-0.5 rounded text-xs">
                {subcategory === '60ml' ? '60 مل' : '100 مل'}
              </span>
            )}
            
            {/* Gender Badge */}
            {gender && (
              <span className="bg-black/70 text-white px-1.5 py-0.5 rounded text-xs">
                {getGenderLabel(gender)}
              </span>
            )}
          </div>

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

// Add shimmer effect helpers
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#eee" offset="20%" />
      <stop stop-color="#f5f5f5" offset="50%" />
      <stop stop-color="#eee" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#eee" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default ProductCard