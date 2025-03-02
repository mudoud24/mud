'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/currency'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  originalPrice?: number
  discount?: number
}

const ProductCard = ({ id, name, price, image, originalPrice, discount }: ProductCardProps) => {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({ id, name, price, image })
  }

  return (
    <div className="bg-white rounded-lg p-4 relative border border-[#C19A5B]/20">
      <div className="absolute top-4 left-4 z-10">
        <button className="text-[#C19A5B] hover:text-[#E5D5B5]">
          <FaHeart size={20} />
        </button>
      </div>
      
      {discount && (
        <div className="absolute top-4 right-4 z-10 bg-[#C19A5B] text-white px-2 py-1 rounded-md">
          <span dir="ltr">{discount}%</span> خصم
        </div>
      )}

      <Link href={`/products/${id}`}>
        <div className="relative h-64 w-full mb-4">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover rounded-md hover:scale-105 transition-transform"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-mud-secondary">{name}</h3>
          <div className="flex gap-2 items-center">
            <span className="text-mud-primary font-bold">{formatCurrency(price)}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {formatCurrency(originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <button 
        onClick={handleAddToCart}
        className="mt-4 w-full bg-[#C19A5B] text-white py-2 rounded-md hover:bg-[#E5D5B5] transition-colors"
      >
        أضف للسلة
      </button>
    </div>
  )
}

export default ProductCard
