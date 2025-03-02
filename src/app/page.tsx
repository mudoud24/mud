import { Suspense } from 'react'
import Loading from './loading'
import BannerSlider from '../components/BannerSlider'
import FeaturedProducts from '../components/FeaturedProducts'
import GentsPerfumes from '../components/GentsPerfumes'
import BestSellers from '../components/BestSellers'
import AboutSection from '../components/AboutSection'
import UnisexSection from '../components/UnisexSection'

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BannerSlider />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <GentsPerfumes />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <UnisexSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <BestSellers />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FeaturedProducts />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>
    </div>
  )
}
