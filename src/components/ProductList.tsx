'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import { filterProducts } from '../utils/search'

interface Product {
  id: string
  name: string
  price: number
  image: string
  originalPrice?: number
  discount?: number
}

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (query: string) => {
    const filtered = filterProducts(products, query)
    setFilteredProducts(filtered)
  }

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
