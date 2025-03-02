import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Noto_Naskh_Arabic } from 'next/font/google'
import { CartProvider } from '../context/CartContext'

const arabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic'
})

export const metadata = {
  title: 'مسك وعود',
  description: 'عطور فاخرة، عود، ومنتجات العناية الشخصية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={arabic.variable}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
