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
            className="relative h-[720px] rounded-lg overflow-hidden"
          >
            <Link href="/fragrances/unisex-fragrances">
              <Image
                src="/products/unisex-collection.webp"
                alt="عطور للجنسين"
                fill
                className="object-cover rounded-lg"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 p-8"
          >
            <h2 className="text-4xl font-bold">عطور للجنسين</h2>
            <p className="text-lg text-gray-600">
              مزيج متناغم من العنبر مع الهيل الفاخر ونفحات من البرغموت الحمضي المنعش.
            </p>
            <div>
              <Link 
                href="/fragrances/unisex-fragrances"
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
