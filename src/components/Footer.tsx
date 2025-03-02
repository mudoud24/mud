import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-mud-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl mb-4">مسك وعود</h3>
            <p className="text-gray-400">عطور فاخرة ومنتجات العناية الشخصية</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link href="/products">المنتجات</Link></li>
              <li><Link href="/about">من نحن</Link></li>
              <li><Link href="/contact">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>البريد: info@mud.com</li>
              <li>الهاتف: ٠٠٩١٤٠٠٠٠٠٠٠</li>
              <li>العنوان: بلاد الله </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">تابعنا</h4>
            <div className="flex space-x-4">
              <FaInstagram className="text-2xl cursor-pointer" />
              <FaFacebookF className="text-2xl cursor-pointer" />
              <FaTwitter className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
