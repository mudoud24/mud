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
    alt: 'Ramadan',
    mobileImage: '/banners/ramadan-mobile.webp'
  },
  {
    id: 2,
    image: '/banners/banner2.webp',
    alt: 'Banner 2',
    mobileImage: '/banners/banner2-mobile.webp'
  }
]

const BannerSlider = () => {
  return (
    <div className="homeBannerSection">
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          loop={true}
          className="relative h-[650px] md:h-[450px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-full">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={banner.mobileImage}
                  />
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BannerSlider
