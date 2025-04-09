import ProductCard from './ProductCard'

const featuredProducts = [
  {
    id: '1',
    name: 'مسك وعود المجموعة العطرية',
    price: 49.99,
    category: 'perfumes',
    description: 'برفيوم 100 مل + 2 زيت عطري 6 مل ',
    image: '/products/PerOil.webp',
    images: [
      '/products/PerOil.webp',
    ],
    originalPrice: 100
  },
  {
    id: '2',
    name: 'مسك وعود المجموعة الفاخرة',
    price: 99.99,
    category: 'perfumes',
    description: 'مسك وعود المجموعة الفاخرة',
    image: '/products/Diffspray.webp',
    images: [
      '/products/Diffspray.webp',

    ],
    originalPrice: 200
  },
  {
    id: '3',
    name: 'مسك وعود مجموعة العناية بالبشرة',
    price: 29.99,
    category: 'skin-care',
    description: "مسك وعود مجموعة العناية بالبشرة",
    image: '/products/SKare.webp',
    images: [
      '/products/SKare.webp'
    ],
    originalPrice: 60
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