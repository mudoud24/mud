'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaSearch, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { SA, GB, TR, PK } from 'country-flag-icons/react/3x2'
import Cart from './Cart'
import SearchOverlay from './SearchOverlay'
import Image from 'next/image'

// Product data for search
const allProducts = [
  {
    id: 'p1',
    name: 'عبير العود',
    price: 299,
    image: '/products/Perfume/Abeer.webp',
    category: 'perfumes'
  },
  {
    id: 'p2',
    name: 'أمجاد',
    price: 349,
    image: '/products/Perfume/Amjad.webp',
    category: 'perfumes'
  },
  {
    id: 'p3',
    name: 'أصيل',
    price: 399,
    image: '/products/Perfume/Aseel.webp',
    category: 'perfumes'
  },
  {
    id: 'p4',
    name: 'جوهر',
    price: 299,
    image: '/products/Perfume/Gohar.webp',
    category: 'perfumes'
  },
  {
    id: 'p5',
    name: 'لؤلؤة',
    price: 279,
    image: '/products/Perfume/Loloa.webp',
    category: 'perfumes'
  },
  {
    id: 'p6',
    name: 'نقاء',
    price: 249,
    image: '/products/Perfume/Naqaa.webp',
    category: 'perfumes'
  },
  {
    id: 'p7',
    name: 'نور',
    price: 329,
    image: '/products/Perfume/Noor.webp',
    category: 'perfumes'
  },
  {
    id: 'p8',
    name: 'روح',
    price: 289,
    image: '/products/Perfume/Rooh.webp',
    category: 'perfumes'
  },
  {
    id: 'p9',
    name: 'شموخ',
    price: 379,
    image: '/products/Perfume/SHomookh.webp',
    category: 'perfumes'
  },
  {
    id: 'p10',
    name: 'وهج',
    price: 359,
    image: '/products/Perfume/Wahag.webp',
    category: 'perfumes'
  },
  // Car Perfumes
  {
    id: 'cp1',
    name: 'ريان',
    price: 79,
    image: '/products/Car Perfume/Rayyan.webp',
    category: 'معطرات السيارات'
  },
  {
    id: 'cp2',
    name: 'فواح',
    price: 69,
    image: '/products/Car Perfume/Fawwah.webp',
    category: 'معطرات السيارات'
  },
  // Reed Diffuser Products
  {
    id: 'rd1',
    name: 'لمسة',
    price: 189,
    image: '/products/Reed Diffuser/Lamsa.webp',
    category: 'معطرات أعواد'
  },
  {
    id: 'rd2',
    name: 'ندى',
    price: 199,
    image: '/products/Reed Diffuser/Nada.webp',
    category: 'معطرات أعواد'
  },
  {
    id: 'rd3',
    name: 'سما',
    price: 179,
    image: '/products/Reed Diffuser/Sama.webp',
    category: 'معطرات أعواد'
  },
  // Room Spray Products
  {
    id: 'rs1',
    name: 'خلود',
    price: 159,
    image: '/products/Room Spray/Kholood.webp',
    category: 'معطرات الغرفة'
  }
]

const languages = [
  { code: 'ar', name: 'العربية', flag: SA },
  { code: 'en', name: 'English', flag: GB },
  { code: 'tr', name: 'Türkçe', flag: TR },
  { code: 'ps', name: 'پښتو', flag: PK },
]

const languageNames = {
  ar: 'العربية',
  en: 'English',
  tr: 'Türkçe',
  ps: 'پښتو',
}

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [language, setLanguage] = useState('ar')
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const currentLang = languages.find(lang => lang.code === language)
  const isRTL = language === 'ar' || language === 'ps'

  return (
    <>
      <nav className="bg-[#ca9a2d] text-white py-1 relative z-50">
        <div className="container mx-auto px-2 flex flex-row-reverse md:flex-row-reverse justify-between items-center">
          {/* Logo - Right side on both mobile and desktop */}
          <Link href="/" className="relative w-[120px] h-[70px] order-1 md:order-3">
            <Image 
              src="/logo.png" 
              alt="مسك وعود"
              fill
              sizes="120px"
              className="object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex gap-8 justify-center flex-1 order-2">
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

          {/* Controls Group - Left side on both mobile and desktop */}
          <div className="flex items-center gap-4 order-3 md:order-1">
            <div className="relative hidden md:block">
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

            {/* Reordered Icons */}
            <div className="flex items-center gap-4">
              {/* Menu Button - 1 */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-white"
              >
                <FaBars size={24} />
              </button>
              {/* Cart Icon - 2 */}
              <Cart />
              {/* Search Icon - 3 */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-mud-primary transition-colors"
              >
                <FaSearch size={20} />
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
          <div className={`fixed inset-y-0 right-0 w-64 bg-white transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-mud-primary text-xl font-bold">القائمة</h2>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Menu Links */}
                <div className="space-y-2">
                  {[
                    { href: '/', text: 'الرئيسية' },
                    { href: '/products', text: 'المنتجات' },
                    { href: '/about', text: 'من نحن' },
                    { href: '/contact', text: 'اتصل بنا' },
                  ].map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-gray-800 py-2 text-right"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>

                {/* Language Selector in Mobile Menu */}
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">اختر اللغة</h3>
                  <div className="flex flex-col gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setIsMobileMenuOpen(false)
                        }}
                        className="flex items-center gap-3 py-2 px-2 text-right hover:bg-gray-100 rounded transition-colors"
                      >
                        <lang.flag className="w-6 h-6" />
                        <span className="font-medium text-gray-800">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
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
