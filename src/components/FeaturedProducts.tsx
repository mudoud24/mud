import ProductCard from './ProductCard'

const featuredProducts = [
  {
    id: '1',
    name: 'نور 100 مل',
    price: 39.99,
    category: 'perfumes',
    subcategory: '100ml',
    description: 'عطر فاخر يجمع بين عبق العود الأصيل، نفحات العنبر الدافئة، ولمسات الزعفران الفاخرة',
    image: '/products/Perfumes/100ml/Noor/1.webp',
    images: [
      '/products/Perfumes/100ml/Noor/1.webp',
      '/products/Perfumes/100ml/Noor/2.webp',
      '/products/Perfumes/100ml/Noor/3.webp'
    ],
    originalPrice: 50
  },
  {
    id: '2',
    name: 'وهج 60 مل',
    price: 19.99,
    category: 'perfumes',
    subcategory: '60ml',
    description: 'عود أصيل، عنبر فاخر، زعفران نابض، دفء شرقي، فخامة خالدة',
    image: '/products/Perfumes/60ml/Wahaj/1.webp',
    images: [
      '/products/Perfumes/60ml/Wahaj/1.webp',
      '/products/Perfumes/60ml/Wahaj/2.webp',
      '/products/Perfumes/60ml/Wahaj/3.webp'
    ],
    originalPrice: 25
  },
  {
    id: '3',
    name: 'أصيل 60 مل',
    price: 19.99,
    category: 'perfumes',
    subcategory: '60ml',
    description: 'عطر فاخر ينبض بالفخامة، يمزج بين نفحات الزعفران الدافئ، العنبر الذهبي، ولمسات من الورد الشرقي والمسك',
    image: '/products/Perfumes/60ml/Aseel/1.webp',
    images: [
      '/products/Perfumes/60ml/Aseel/1.webp',
      '/products/Perfumes/60ml/Aseel/2.webp',
      '/products/Perfumes/60ml/Aseel/3.webp'
    ],
    originalPrice: 30
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