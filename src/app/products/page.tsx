'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../../components/ProductCard'
import Link from 'next/link'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import ImageViewer from '../../components/ImageViewer'

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
    name: 'عبير العود',
    price: 299,
    image: '/products/Perfume/Abeer.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p2',
    name: 'أمجاد',
    price: 349,
    image: '/products/Perfume/Amjad.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p3',
    name: 'أصيل',
    price: 399,
    image: '/products/Perfume/Aseel.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p4',
    name: 'جوهر',
    price: 299,
    image: '/products/Perfume/Gohar.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p5',
    name: 'لؤلؤة',
    price: 279,
    image: '/products/Perfume/Loloaa.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p6',
    name: 'نقاء',
    price: 249,
    image: '/products/Perfume/Naqaa.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p7',
    name: 'نور',
    price: 329,
    image: '/products/Perfume/Noor.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p8',
    name: 'روح',
    price: 289,
    image: '/products/Perfume/Rooh.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p9',
    name: 'شموخ',
    price: 379,
    image: '/products/Perfume/SHomookh.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'p10',
    name: 'وهج',
    price: 359,
    image: '/products/Perfume/Wahag.webp',
    category: 'perfumes',
    subcategory: 'unisex'
  },
  // Car Perfumes
  {
    id: 'cp1',
    name: 'ريان',
    price: 79,
    image: '/products/Car Perfume/Rayyan.webp',
    category: 'car-perfumes',
    subcategory: 'unisex'
  },
  {
    id: 'cp2',
    name: 'فواح',
    price: 69,
    image: '/products/Car Perfume/Fawwah.webp',
    category: 'car-perfumes',
    subcategory: 'unisex'
  },
  // Reed Diffuser Products
  {
    id: 'rd1',
    name: 'لمسة',
    price: 189,
    image: '/products/Reed Diffuser/Lamsa.webp',
    category: 'incense',
    subcategory: 'unisex'
  },
  {
    id: 'rd2',
    name: 'ندى',
    price: 199,
    image: '/products/Reed Diffuser/Nada.webp',
    category: 'incense',
    subcategory: 'unisex'
  },
  {
    id: 'rd3',
    name: 'سما',
    price: 179,
    image: '/products/Reed Diffuser/Sama.webp',
    category: 'incense',
    subcategory: 'unisex'
  },
    // Room Spray Products
    {
      id: 'rs1',
      name: 'خلود',
      price: 159,
      image: '/products/Room Spray/Kholood.webp',
      category: 'room-spray',
      subcategory: 'unisex'
    }
]

const ProductsPage = () => {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')
  const currentSubCategory = searchParams.get('subcategory') || 'all'
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

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

  useEffect(() => {
    // Check for stored product selection
    const storedProduct = localStorage.getItem('selectedProduct')
    if (storedProduct) {
      const { id, action } = JSON.parse(storedProduct)
      const product = products.find(p => p.id === id)
      if (product && action === 'openViewer') {
        setSelectedProduct(product)
      }
      localStorage.removeItem('selectedProduct')
    }
  }, [])

  useEffect(() => {
    // Check for product from search
    const searchProduct = localStorage.getItem('searchSelectedProduct')
    if (searchProduct) {
      const product = JSON.parse(searchProduct)
      if (product.shouldOpenViewer) {
        setSelectedProduct(product)
      }
      localStorage.removeItem('searchSelectedProduct')
    }
  }, [])

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
      
      {/* Mobile Category Filter Button */}
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
        {/* Categories Sidebar - Mobile Drawer */}
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
              {/* Categories */}
              <div>
                <h2 className="text-lg font-bold mb-4 border-b pb-2 text-right">الفئات</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products?category=${category.id}${currentSubCategory ? `&subcategory=${currentSubCategory}` : ''}`}
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

              {/* Sub Categories - Show only when category is selected */}
              {currentCategory && (
                <div>
                  <h2 className="text-lg font-bold mb-4 border-b pb-2 text-right">التصنيف</h2>
                  <div className="space-y-2">
                    {subCategories.map((sub) => (
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

        {/* Overlay for mobile filter */}
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

      {/* Product Viewer */}
      {selectedProduct && (
        <ImageViewer
          images={[
            selectedProduct.image,
            selectedProduct.image.replace('.webp', '-2.webp'),
            selectedProduct.image.replace('.webp', '-3.webp')
          ]}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          productName={selectedProduct.name}
          price={selectedProduct.price}
          description={`عطر ${selectedProduct.name} هو مزيج فريد من النفحات العطرية الشرقية والغربية...`}
        />
      )}
    </div>
  )
}

export default ProductsPage
