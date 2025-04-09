import ProductCard from './ProductCard'

const bestSellers = [
  {
    id: 'bs1',
    name: 'عبير',
    price: 59.99,
    category: 'perfumes',
    subcategory: '100ml',
    description: 'عطر فخم يتميز بنفحات داكنة ومركزة من العود والتبغ والأخشاب العميقة',
    image: '/products/Perfumes/100ml/Abeer/1.webp',
    images: [
      '/products/Perfumes/100ml/Abeer/1.webp',
      '/products/Perfumes/100ml/Abeer/2.webp',
      '/products/Perfumes/100ml/Abeer/3.webp'
    ]
  },
  {
    id: 'bs2',
    name: 'لؤلؤة',
    price: 9.99,
    category: 'oils',
    description: 'زيت عطري مميز بنفحات المسك والعود',
    image: '/products/Oils/Luluah/1.webp',
    images: [
      '/products/Oils/Luluah/1.webp',
      '/products/Oils/Luluah/2.webp',
      '/products/Oils/Luluah/3.webp'
    ]
  },
  {
    id: 'bs3',
    name: 'شامبو مسك وعود',
    price: 3.99,
    category: 'skin-care',
    description: 'شامبو مطور بخلاصة المسك والعود للعناية بالشعر',
    image: '/products/Skin Care/Hair Shampoo/1.webp',
    images: [
      '/products/Skin Care/Hair Shampoo/1.webp',
      '/products/Skin Care/Hair Shampoo/2.webp',
      '/products/Skin Care/Hair Shampoo/3.webp'
    ]
  },
  {
    id: 'bs4',
    name: 'سما',
    price: 4.49,
    category: 'reed-diffuser',
    description: 'معطر أعواد فاخر بنفحات العود والمسك',
    image: '/products/Reed Diffuser/Sama/1.webp',
    images: [
      '/products/Reed Diffuser/Sama/1.webp',
      '/products/Reed Diffuser/Sama/2.webp',
      '/products/Reed Diffuser/Sama/3.webp'
    ]
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