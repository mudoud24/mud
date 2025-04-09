'use client'

import { Product } from '@/data/products'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import ImageViewer from '@/components/ImageViewer'
import { products as productsData, categories as categoriesData } from '@/data/products'

type SubCategory = {
  id: string
  name: string
}

const getSubCategories = (categoryId: string): SubCategory[] => {
  const defaultSubCategories = [
    { id: 'all', name: 'الكل' },
    { id: 'men', name: 'رجالي' },
    { id: 'women', name: 'نسائي' },
    { id: 'unisex', name: 'للجنسين' }
  ]

  const perfumeSubCategories = [
    { id: 'all', name: 'الكل' },
    { id: '60ml', name: '60 مل' },
    { id: '100ml', name: '100 مل' }
  ]

  switch(categoryId) {
    case 'perfumes':
      return perfumeSubCategories
    case 'oils':
      return defaultSubCategories
    default:
      return []
  }
}

const ProductsPage = () => {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')
  const productId = searchParams.get('productId')
  const currentSubCategory = searchParams.get('subcategory') || 'all'

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products = Object.values(productsData).flat() as Product[]
  const currentSubCategories = currentCategory ? getSubCategories(currentCategory) : []

  const filteredProducts = products.filter(product => {
    const categoryMatch = !currentCategory || product.category === currentCategory
    const subcategoryMatch = 
      !currentSubCategory || 
      currentSubCategory === 'all' || 
      product.subcategory === currentSubCategory
    return categoryMatch && subcategoryMatch
  })

  // Mobile menu scroll lock
  useEffect(() => {
    if (isCategoriesOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isCategoriesOpen])

  // Handle product selection from localStorage
  useEffect(() => {
    let mounted = true
    const handleStoredProduct = () => {
      const storedProduct = localStorage.getItem('selectedProduct')
      if (storedProduct && mounted) {
        const { id, action } = JSON.parse(storedProduct)
        const product = products.find(p => p.id === id)
        if (product && action === 'openViewer') {
          setSelectedProduct(product)
        }
        localStorage.removeItem('selectedProduct')
      }
    }
    handleStoredProduct()
    return () => { mounted = false }
  }, [products])

  // Handle product from URL
  useEffect(() => {
    if (productId) {
      const product = products.find(p => p.id === productId)
      if (product) {
        setSelectedProduct(product)
      }
    }
  }, [productId, products])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-right">المنتجات</h1>
      
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="w-full bg-mud-primary text-white py-2 px-4 rounded-md flex items-center justify-between"
        >
          <span>تصفية المنتجات</span>
          <FaChevronDown className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Categories Sidebar */}
        <div className={`
          fixed md:relative md:bg-transparent
          top-0 pt-20 pb-6 md:pt-0 md:pb-0 
          inset-0 bg-white z-40 
          transition-transform duration-300
          md:w-64 md:translate-x-0 md:block md:flex-shrink-0
          overflow-y-auto
          ${isCategoriesOpen ? 'translate-x-0' : 'translate-x-full'}
          max-h-screen
        `}>
          <div className="h-full p-4 md:p-0">
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center mb-4 sticky top-0 bg-white pb-4">
              <h2 className="text-lg font-bold">الفئات</h2>
              <button 
                onClick={() => setIsCategoriesOpen(false)}
                className="text-gray-500 p-2"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="sticky top-4 space-y-8">
              {/* Main Categories */}
              <div>
                <h2 className="text-lg font-bold mb-4 border-b pb-2 text-right">الفئات</h2>
                <div className="space-y-2">
                  {categoriesData.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products?category=${category.id}`}
                      onClick={() => setIsCategoriesOpen(false)}
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
              {currentCategory && currentSubCategories.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold mb-4 border-b pb-2 text-right">التصنيف</h2>
                  <div className="space-y-2">
                    {currentSubCategories.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/products?category=${currentCategory}&subcategory=${sub.id}`}
                        onClick={() => setIsCategoriesOpen(false)}
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
        </div>

        {/* Mobile Overlay */}
        {isCategoriesOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsCategoriesOpen(false)}
          />
        )}

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-4 text-gray-600 text-right">
            تم العثور على {filteredProducts.length} منتج
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
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

      {/* Product Viewer */}
      {selectedProduct && (
        <ImageViewer
          images={selectedProduct.images || [selectedProduct.image]}
          isOpen={!!selectedProduct}
          onClose={() => {
            setSelectedProduct(null)
            const url = new URL(window.location.href)
            url.searchParams.delete('productId')
            window.history.pushState({}, '', url)
          }}
          productName={selectedProduct.name}
          price={selectedProduct.price}
          description={selectedProduct.description}
        />
      )}
    </div>
  )
}

export default ProductsPage