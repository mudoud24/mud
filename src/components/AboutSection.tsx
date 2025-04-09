'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#363333] text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[200px] md:h-[500px] rounded-lg overflow-hidden"
        >
          <Image
            src="/about-image.PNG"
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
          <h2 className="text-6xl font-arabic mb-8">رؤيتنا</h2>
          <div className="space-y-8 text-xl leading-loose brand-vision">
            <p>نطمح للريادة في عالم العناية الشخصية والعطور، بمنتجات فريدة بروح عربية أصيلة.</p>
            <p>نمزج بين الأناقة والفعالية لنصنع تجربة استثنائية لكل عميل.</p>
            <p>نسعى لتجاوز توقعات عملائنا بمنتجات تعبّر عن الذوق، وتعكس الأصالة.</p>
          </div>
          <Link href="/about" className="inline-block mt-8">
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
