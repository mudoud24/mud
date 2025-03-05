'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../../components/ProductCard'
import Link from 'next/link'

const categories = [
  {
    id: 'perfumes',
    name: 'العطور'
  },
  {
    id: 'oils',
    name: 'الزيوت'
  },
  {
    id: 'incense',
    name: 'معطرات اعواد'
  },
  {
    id: 'room-spray',
    name: 'معطرات الغرفة'
  },
  {
    id: 'car-perfumes',
    name: 'معطرات السيارات'
  },
  {
    id: 'skin-care',
    name: 'العناية بالبشرة'
  },
  {
    id: 'body-mist',
    name: 'معطر الجسم'
  },
  {
    id: 'diffuser',
    name: 'المعطرات الكهربائية'
  }
]

const subCategories = [
  { id: 'all', name: 'الكل' },
  { id: 'men', name: 'رجالي' },
  { id: 'women', name: 'نسائي' },
  { id: 'unisex', name: 'للجنسين' }
]

const products = [
  {
    id: 'p1',
    name: 'عطر المسك الأسود',
    price: 299,
    image: '/products/black-musk.webp',
    category: 'perfumes',
    subcategory: 'men'
  },
  {
    id: 'p2',
    name: 'عطر الورد الملكي',
    price: 399,
    image: '/products/rose.webp',
    category: 'perfumes',
    subcategory: 'women'
  },
  {
    id: 'p3',
    name: 'عود معطر للسيارة',
    price: 49,
    image: '/products/car-freshener.webp',
    category: 'car-perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p4',
    name: 'زيت العود الفاخر',
    price: 599,
    image: '/products/oud-oil.webp',
    category: 'oils',
    subcategory: 'men'
  },
  {
    id: 'p5',
    name: 'معطر غرفة الياسمين',
    price: 159,
    image: '/products/room-spray.webp',
    category: 'room-spray',
    subcategory: 'unisex'
  },
  // Add more test products for each category...
]

const ProductsPage = () => {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')
  const currentSubCategory = searchParams.get('subcategory') || 'all'

  // Filter products based on selected category and subcategory
  const filteredProducts = products.filter(product => {
    const categoryMatch = !currentCategory || product.category === currentCategory
    const subcategoryMatch = 
      !currentSubCategory || 
      currentSubCategory === 'all' || 
      product.subcategory === currentSubCategory
    
    return categoryMatch && subcategoryMatch
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-right">المنتجات</h1>
      
      <div className="flex gap-8">
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-4 space-y-8">
            {/* Categories */}
            <div>
              <h2 className="text-lg font-bold mb-4 border-b pb-2 text-right">الفئات</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/products?category=${category.id}${currentSubCategory ? `&subcategory=${currentSubCategory}` : ''}`}
                    className={`block px-4 py-2 rounded-md transition-colors text-right ${
                      currentCategory === category.id
                        ? 'bg-mud-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sub Categories */}
            {currentCategory && (
              <div>
                <h2 className="text-lg font-bold mb-4 border-b pb-2 text-right">التصنيف</h2>
                <div className="space-y-2">
                  {subCategories.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/products?category=${currentCategory}&subcategory=${sub.id}`}
                      className={`block px-4 py-2 rounded-md transition-colors text-right ${
                        currentSubCategory === sub.id
                          ? 'bg-mud-secondary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 text-gray-600 text-right">
            تم العثور على {filteredProducts.length} منتج
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                discount={0}
                originalPrice={product.price}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              لا توجد منتجات في هذه الفئة
            </div>
          )}
        </div>


      </div>
    </div>
  )
}

export default ProductsPage
