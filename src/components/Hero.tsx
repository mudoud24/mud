import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black/50">
        <Image
          src="/hero-bg.webp"
          alt="Luxury Oud"
          fill
          priority
          className="object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative z-20 container mx-auto h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-4 drop-shadow-lg">
            اكتشف فن العطور
          </h1>
          <p className="text-xl mb-8 drop-shadow">
            مجموعة حصرية من أرقى عطور المسك والعود
          </p>
          <button className="bg-mud-primary hover:bg-mud-primary/90 text-white px-8 py-3 rounded-md transition-colors">
            اكتشف المجموعة
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
