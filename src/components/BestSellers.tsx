import ProductCard from './ProductCard'

const bestSellers = [
  {
    id: 'bs1',
    name: 'دهن العود الملكي',
    price: 599,
    image: '/products/royal-oud-oil.webp'
  },
  {
    id: 'bs2',
    name: 'عطر المسك الأسود',
    price: 399,
    image: '/products/black-musk.webp'
  },
  {
    id: 'bs3',
    name: 'عود كلمنتان',
    price: 799,
    image: '/products/kalimantan-oud.webp'
  },
  {
    id: 'bs4',
    name: 'مخلط السلطان',
    price: 499,
    image: '/products/sultan-blend.webp'
  }
]

const BestSellers = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">الأكثر مبيعاً</h2>
          <p className="text-gray-600">أفضل منتجاتنا التي نالت إعجاب عملائنا</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers
