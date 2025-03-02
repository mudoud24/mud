'use client'

import { useState, useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'
import { FaWhatsapp, FaTimes, FaTrash, FaShoppingCart } from 'react-icons/fa'
import { formatCurrency } from '../utils/currency'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  const cartRef = useRef<HTMLDivElement>(null)

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

  const sendToWhatsApp = () => {
    const phoneNumber = '971XXXXXXXXX' // Replace with your WhatsApp number
    const message = `طلب جديد:\n\n${items.map(item => 
      `${item.name} - ${item.quantity} قطعة - ${formatCurrency(item.price * item.quantity)}`
    ).join('\n')}\n\nالمجموع: ${formatCurrency(total)}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    clearCart()
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative flex items-center gap-2"
      >
        <FaShoppingCart size={20} />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-mud-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {items.length}
          </span>
        )}
        <span>سلة التسوق</span>
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
                      <p className="text-mud-primary">{formatCurrency(item.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="border rounded p-1"
                        >
                          {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                        <button onClick={() => removeItem(item.id)}>
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6 border-t pt-4">
                  <div className="text-xl font-bold mb-4">
                    المجموع: {formatCurrency(total)}
                  </div>
                  <button
                    onClick={sendToWhatsApp}
                    className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={24} />
                    إرسال الطلب عبر واتساب
                  </button>
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
