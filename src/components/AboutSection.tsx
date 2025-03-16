'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-mud-secondary text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[200px] md:h-[500px] rounded-lg overflow-hidden"
        >
          <Image
            src="/about-image.webp"
            alt="About MUD"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-arabic mb-6">رؤيتنا</h2>
          <p className="mb-6 text-lg">
            نطمح لأن نكون الرواد في عالم العناية الشخصية، مقدِّ مين منتجات فريدة تجمع بين الأناقة والفعالية والأصالة تلبي تطلعات عملائنا وتفوق توقعاتهم.
          </p>
          <Link href="/about">
            <button className="bg-mud-primary text-white px-8 py-3 rounded-md">
              اعرف أكثر
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
