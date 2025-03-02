'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaSearch, FaUser } from 'react-icons/fa'
import Cart from './Cart'
import SearchOverlay from './SearchOverlay'

// Product data for search
const allProducts = [
  // Men's Perfumes
  {
    id: 'mp1',
    name: 'الفريد 100 مل',
    price: 119,
    image: '/products/alfareed.webp',
    category: 'عطور رجالية'
  },
  {
    id: 'mp2',
    name: 'أميري 75 مل',
    price: 86,
    image: '/products/amiri.webp',
    category: 'عطور رجالية'
  },
  {
    id: 'mp3',
    name: 'سلطاني 100 مل',
    price: 157.50,
    image: '/products/sultani.webp',
    category: 'عطور رجالية'
  },
  {
    id: 'mp4',
    name: 'عود ملكي 100 مل',
    price: 368,
    image: '/products/royal-oud.webp',
    category: 'عطور رجالية'
  },
  {
    id: 'mp5',
    name: 'مسك اسود 100 مل',
    price: 299,
    image: '/products/black-musk.webp',
    category: 'عطور رجالية'
  },
  // Women's Perfumes
  {
    id: 'wp1',
    name: 'مسك الورد 100 مل',
    price: 129,
    image: '/products/rose-musk.webp',
    category: 'عطور نسائية'
  },
  {
    id: 'wp2',
    name: 'عطر الياسمين 75 مل',
    price: 199,
    image: '/products/jasmine.webp',
    category: 'عطور نسائية'
  },
  // Unisex Perfumes
  {
    id: 'up1',
    name: 'عنبر خاص 100 مل',
    price: 279,
    image: '/products/special-amber.webp',
    category: 'عطور للجنسين'
  },
  {
    id: 'up2',
    name: 'مسك البنفسج 100 مل',
    price: 249,
    image: '/products/violet-musk.webp',
    category: 'عطور للجنسين'
  },
  // Oud Oils
  {
    id: 'o1',
    name: 'دهن عود ملكي',
    price: 599,
    image: '/products/royal-oud-oil.webp',
    category: 'دهن عود'
  },
  {
    id: 'o2',
    name: 'دهن عود هندي',
    price: 499,
    image: '/products/indian-oud-oil.webp',
    category: 'دهن عود'
  }
]

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <nav className="bg-[#1a1a1a] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl">
            مسك وعود
          </Link>

          <div className="hidden md:flex space-x-reverse space-x-6">
            <Link href="/">الرئيسية</Link>
            <Link href="/products">المنتجات</Link>
            <Link href="/about">من نحن</Link>
            <Link href="/contact">اتصل بنا</Link>
          </div>

          <div className="flex items-center space-x-reverse space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-mud-primary transition-colors"
            >
              <FaSearch size={20} />
            </button>
            <Cart />
            {/* <FaUser className="cursor-pointer" /> */}
          </div>
        </div>
      </nav>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={allProducts}
      />
    </>
  )
}

export default Navbar
