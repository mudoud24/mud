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
  discount?: number
  originalPrice?: number
}

const ProductCard = ({ id, name, price, image, discount = 0, originalPrice }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  // Generate additional image variations for the viewer
  const productImages = [
    image,
    image.replace('.webp', '-2.webp'),
    image.replace('.webp', '-3.webp')
  ]

  const productDescription = `عطر ${name} هو مزيج فريد من النفحات العطرية الشرقية والغربية، يجمع بين العود والمسك مع لمسات من الفانيليا والعنبر، مما يخلق تجربة عطرية فريدة تدوم طويلاً.`

  return (
    <>
      <div className={`group relative rounded-lg overflow-hidden transition-colors duration-300 ${isLiked ? 'bg-red-50' : 'bg-white'}`}>
        {/* Image Container */}
        <div 
          className="relative aspect-square cursor-pointer"
          onClick={() => setIsViewerOpen(true)}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          {discount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              -{discount}%
            </span>
          )}
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute top-2 left-2 p-2 rounded-full transition-colors ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <FaHeart size={16} />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{name}</h3>
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
        </div>
      </div>

      <ImageViewer
        images={productImages}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        productName={name}
        price={price}
        description={productDescription}
      />
    </>
  )
}

export default ProductCard
