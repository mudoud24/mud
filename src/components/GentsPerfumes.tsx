'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import ProductCard from './ProductCard'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const mensProducts = [
  {
    id: 'mp1',
    name: 'الفريد 100 مل',
    price: 119,
    originalPrice: 238,
    image: '/products/alfareed.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp2',
    name: 'أميري 75 مل',
    price: 86,
    originalPrice: 172,
    image: '/products/amiri.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp3',
    name: 'سلطاني 100 مل',
    price: 157.50,
    originalPrice: 315,
    image: '/products/sultani.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp4',
    name: 'عود ملكي 100 مل',
    price: 368,
    originalPrice: 736,
    image: '/products/royal-oud.webp',
    category: 'mens',
    discount: 50
  },
  {
    id: 'mp5',
    name: 'مسك اسود 100 مل',
    price: 299,
    originalPrice: 598,
    image: '/products/black-musk.webp',
    category: 'mens',
    discount: 50
  }
]

const GentsPerfumes = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">اختيارات الرجال</h2>
          <Link 
            href={{
              pathname: '/products',
              query: { category: 'mens' },
            }}
            className="text-mud-primary hover:text-mud-primary/80 text-lg"
          >
            جميع عطور الرجال
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            dir="rtl"
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="gents-swiper !pb-16"
          >
            {mensProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default GentsPerfumes
