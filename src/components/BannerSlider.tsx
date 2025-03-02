'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'

const banners = [
  {
    id: 1,
    image: '/banners/ramadan.webp',
    alt: 'Ramadan'
  },
  {
    id: 2,
    image: '/banners/banner2.webp',
    alt: 'Banner 2'
  }
]

const BannerSlider = () => {
  return (
    <div className="homeBannerSection w-full">
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          loop={true}
          className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-full">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 768px) 100vw,
                         100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BannerSlider
