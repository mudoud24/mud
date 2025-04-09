'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const UnisexSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Link href="/products?category=perfumes">
              <Image
                src="/products/Perfumes/100ml/Abeer/1.webp"
                alt="عطور للجنسين"
                fill
                className="object-cover rounded-lg"
              />
            </Link>
            {/* Overlay content - Only visible on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:hidden">
              <h3 className="text-white text-2xl font-bold mb-2">
                عطور للجنسين
              </h3>
              <p className="text-white/90 mb-4">
                مجموعة مميزة من العطور المناسبة للجميع
              </p>
              <Link 
                href="/products?category=perfumes"
                className="inline-block bg-white text-black px-6 py-2 rounded-md hover:bg-white/90 transition-colors"
              >
                تسوق الآن
              </Link>
            </div>
          </motion.div>

          {/* Desktop content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 p-8 hidden md:block"
          >
            <h2 className="text-4xl font-bold">عطور للجنسين</h2>
            <p className="text-lg text-gray-600">
              مزيج متناغم من العنبر مع الهيل الفاخر ونفحات من البرغموت الحمضي المنعش.
            </p>
            <div>
              <Link 
                href="/products?category=perfumes"
                className="inline-block bg-mud-secondary text-white px-8 py-3 rounded-lg hover:bg-mud-secondary/90 transition-colors"
              >
                المزيد...
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default UnisexSection
