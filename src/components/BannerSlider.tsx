'use client'

const BannerVideo = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden container mx-auto">
      {/* Desktop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/desktop-banner.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/mobile-banner.mp4" type="video/mp4" />
      </video>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">مسك وعود</h1>
          <p className="text-xl md:text-2xl">عطور فاخرة بلمسة عربية أصيلة</p>
        </div>
      </div>
    </div>
  )
}

export default BannerVideo
