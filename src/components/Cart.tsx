'use client'

import { useState, useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'
import { FaWhatsapp, FaTimes, FaTrash, FaShoppingCart } from 'react-icons/fa'
import { formatCurrency } from '../utils/currency'

const shops = [
  { 
    id: 'tr',
    name: 'متجر تركيا',
    whatsapp: '90XXXXXXXXX',
    flag: '🇹🇷'
  },
  {
    id: 'ae',
    name: 'متجر الإمارات',
    whatsapp: '971XXXXXXXXX',
    flag: '🇦🇪'
  }
]

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  const cartRef = useRef<HTMLDivElement>(null)
  const [isShopSelectOpen, setIsShopSelectOpen] = useState(false)

  // Calculate total quantity of items
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  const sendToWhatsApp = (shopWhatsapp: string) => {
    const itemsList = items.map(item => 
      `• ${item.name}\n  الكمية: ${item.quantity}\n  السعر: ${formatCurrency(item.price)}\n  المجموع: ${formatCurrency(item.price * item.quantity)}`
    ).join('\n\n');

    const message = `*طلب جديد*\n\n` +
      `*تفاصيل الطلب:*\n` +
      `==================\n\n` +
      `${itemsList}\n\n` +
      `==================\n` +
      `*إجمالي الطلب:* ${formatCurrency(total)}\n\n` +
      `الرجاء تأكيد الطلب وإرسال عنوان التوصيل`;

    const whatsappUrl = `https://wa.me/${shopWhatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    clearCart()
    setIsOpen(false)
    setIsShopSelectOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hover:text-mud-primary transition-colors relative"
      >
        <FaShoppingCart size={20} />
        {totalQuantity > 0 && (
          <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
            {totalQuantity}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div
            ref={cartRef}
            className="fixed inset-y-0 left-0 max-w-md w-full bg-white p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">سلة التسوق</h2>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">السلة فارغة</p>
                <button
                  onClick={handleClose}
                  className="bg-mud-primary text-white px-6 py-2 rounded-md hover:bg-mud-primary/90 transition-colors"
                >
                  متابعة التسوق
                </button>
              </div>
            ) : (
              <>
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-4 mb-4 p-4 border rounded">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-mud-primary font-bold">{formatCurrency(item.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded px-2 py-1 focus:ring-2 focus:ring-mud-primary focus:border-mud-primary"
                        >
                          {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-50 rounded"
                        >
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
                      <p className="text-mud-primary font-semibold mt-1">
                        المجموع: {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-6 border-t pt-4">
                  <div className="text-2xl font-bold mb-4 bg-mud-primary text-white p-4 rounded-lg text-center">
                    إجمالي الطلب: {formatCurrency(total)}
                  </div>
                  
                  {!isShopSelectOpen ? (
                    <button
                      onClick={() => setIsShopSelectOpen(true)}
                      className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp size={24} />
                      متابعة الطلب
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-center mb-4">اختر المتجر</h3>
                      {shops.map(shop => (
                        <button
                          key={shop.id}
                          onClick={() => sendToWhatsApp(shop.whatsapp)}
                          className="w-full bg-white border-2 border-green-500 text-green-500 hover:bg-green-50 py-3 rounded-lg flex items-center justify-center gap-2"
                        >
                          <span>{shop.flag}</span>
                          {shop.name}
                          <FaWhatsapp size={24} />
                        </button>
                      ))}
                      <button
                        onClick={() => setIsShopSelectOpen(false)}
                        className="w-full text-gray-500 py-2"
                      >
                        رجوع
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
