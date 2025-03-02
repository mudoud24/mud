import ProductCard from './ProductCard'

const featuredProducts = [
  {
    id: '1',
    name: 'العود الملكي',
    price: 79,
    image: '/products/royal-oud.webp',
    originalPrice: 159
  },
  {
    id: '2',
    name: 'مسك منتصف الليل',
    price: 66,
    image: '/products/midnight-musk.webp',
    originalPrice: 133
  },
  {
    id: '3',
    name: 'الورد العربي',
    price: 199,
    image: '/products/arabian-rose.webp',
    originalPrice: 399
  }
]

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-mud-light">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-12">المجموعات المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
