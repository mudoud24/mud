'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
import { SA, GB, TR, PK } from 'country-flag-icons/react/3x2'
import Cart from './Cart'
import SearchOverlay from './SearchOverlay'
import Image from 'next/image'

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

const languages = [
  { code: 'ar', name: 'العربية', flag: SA },
  { code: 'en', name: 'English', flag: GB },
  { code: 'tr', name: 'Türkçe', flag: TR },
  { code: 'ps', name: 'پښتو', flag: PK },
]

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [language, setLanguage] = useState('ar')
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  const currentLang = languages.find(lang => lang.code === language)
  const isRTL = language === 'ar' || language === 'ps'

  return (
    <>
      <nav className="bg-[#ca9a2d] text-white py-4 relative z-50">
        <div className={`container mx-auto px-2 flex justify-between items-center ${isRTL ? 'dir-rtl' : 'dir-ltr'}`}>
          {/* <Link href="/" className="min-w-[120px] relative">
            <Image 
              src="/logo.png" 
              alt="مسك وعود"
              width={60}
              height={50}
              className="object-contain"
              priority
            />
          </Link> */}

          <div className={`hidden md:flex gap-8 justify-center flex-1 ${isRTL ? 'space-x-reverse' : 'space-x'}`}>
            <Link href="/" className="text-xl lg:text-2xl font-bold hover:text-mud-primary transition-colors whitespace-nowrap">
              {isRTL ? 'الرئيسية' : 'Home'}
            </Link>
            <Link href="/products" className="text-xl lg:text-2xl font-bold hover:text-mud-primary transition-colors whitespace-nowrap">
              {isRTL ? 'المنتجات' : 'Products'}
            </Link>
            <Link href="/about" className="text-xl lg:text-2xl font-bold hover:text-mud-primary transition-colors whitespace-nowrap">
              {isRTL ? 'من نحن' : 'About'}
            </Link>
            <Link href="/contact" className="text-xl lg:text-2xl font-bold hover:text-mud-primary transition-colors whitespace-nowrap">
              {isRTL ? 'اتصل بنا' : 'Contact'}
            </Link>
          </div>

          <div className="flex items-center justify-end min-w-[180px] pl-4">
            {/* Language Selector - Always First */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 hover:text-mud-primary transition-colors whitespace-nowrap"
              >
                <currentLang.flag className="w-5 h-5" />
                <span className="font-bold hidden sm:inline">{currentLang.name}</span>
                <FaChevronDown className={`transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-32 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsLangDropdownOpen(false)
                      }}
                      className="flex items-center space-x-2 space-x-reverse px-4 py-2 w-full hover:bg-gray-100"
                    >
                      <lang.flag className="w-5 h-5" />
                      <span className="font-bold">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search and Cart - Always Last */}
            <div className="flex items-center gap-4 ml-4 mr-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-mud-primary transition-colors"
              >
                <FaSearch size={20} />
              </button>
              <Cart />
            </div>
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
