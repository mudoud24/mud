'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../../components/ProductCard'
import { FaFilter } from 'react-icons/fa'

const products = [
  // Men's Perfumes
  {
    id: 'mp1',
    name: 'الفريد 100 مل',
    price: 119,
    originalPrice: 238,
    image: '/products/alfareed.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp2',
    name: 'أميري 75 مل',
    price: 86,
    originalPrice: 172,
    image: '/products/amiri.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp3',
    name: 'سلطاني 100 مل',
    price: 157.50,
    originalPrice: 315,
    image: '/products/sultani.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp4',
    name: 'عود ملكي 100 مل',
    price: 368,
    originalPrice: 736,
    image: '/products/royal-oud.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp5',
    name: 'مسك اسود 100 مل',
    price: 299,
    originalPrice: 598,
    image: '/products/black-musk.webp',
    category: 'mens',
    discount: 50
  },
  // Women's Perfumes
  {
    id: 'wp1',
    name: 'مسك الورد 100 مل',
    price: 129,
    originalPrice: 258,
    image: '/products/rose-musk.webp',
    category: 'womens',
    discount: 50
  },
  {
    id: 'wp2',
    name: 'عطر الياسمين 75 مل',
    price: 199,
    originalPrice: 398,
    image: '/products/jasmine.webp',
    category: 'womens',
    discount: 50
  },
  // Unisex Perfumes
  {
    id: 'up1',
    name: 'عنبر خاص 100 مل',
    price: 279,
    originalPrice: 558,
    image: '/products/special-amber.webp',
    category: 'unisex',
    discount: 50
  },
  {
    id: 'up2',
    name: 'مسك البنفسج 100 مل',
    price: 249,
    originalPrice: 498,
    image: '/products/violet-musk.webp',
    category: 'unisex',
    discount: 50
  },
  // Oud Oils
  {
    id: 'o1',
    name: 'دهن عود ملكي',
    price: 599,
    originalPrice: 1198,
    image: '/products/royal-oud-oil.webp',
    category: 'oils',
    discount: 50
  },
  {
    id: 'o2',
    name: 'دهن عود هندي',
    price: 499,
    originalPrice: 998,
    image: '/products/indian-oud-oil.webp',
    category: 'oils',
    discount: 50
  }
]

const categories = [
  { id: 'all', name: 'جميع المنتجات' },
  { id: 'mens', name: 'عطور رجالية' },
  { id: 'womens', name: 'عطور نسائية' },
  { id: 'unisex', name: 'عطور للجنسين' },
  { id: 'oils', name: 'دهن عود' }
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  // Add console log to debug
  console.log('Category:', selectedCategory)
  console.log('Filtered Products:', filteredProducts)

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">منتجاتنا</h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-mud-primary text-white p-2 rounded-md"
          >
            <FaFilter />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">التصنيفات</h2>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`block w-full text-right py-2 px-4 rounded ${
                      selectedCategory === cat.id 
                        ? 'bg-mud-primary text-white' 
                        : 'hover:bg-mud-light'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
