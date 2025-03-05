import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 'perfumes',
    name: 'العطور',
    image: '/categories/perfumes.webp'
  },
  {
    id: 'oils',
    name: 'الزيوت',
    image: '/categories/oils.webp'
  },
  {
    id: 'incense',
    name: 'معطرات اعواد',
    image: '/categories/incense.webp'
  },
  {
    id: 'room-spray',
    name: 'معطرات الغرفة',
    image: '/categories/room-spray.webp'
  },
  {
    id: 'car-perfumes',
    name: 'معطرات السيارات',
    image: '/categories/car-perfumes.webp'
  },
  {
    id: 'skin-care',
    name: 'العناية بالبشرة',
    image: '/categories/skin-care.webp'
  },
  {
    id: 'body-mist',
    name: 'معطر الجسم',
    image: '/categories/body-mist.webp'
  },
  {
    id: 'diffuser',
    name: 'المعطرات الكهربائية',
    image: '/categories/diffuser.webp'
  }
]

const ProductCategories = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">تسوق حسب الفئة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              href={`/products?category=${category.id}`}
              key={category.id}
              className="group relative overflow-hidden rounded-lg aspect-square block"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-lg md:text-xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
