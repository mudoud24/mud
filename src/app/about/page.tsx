import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">من نحن</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن شركة رائدة في مجال العطور الفاخرة والعناية الشخصية
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-mud-primary">رؤيتنا</h2>
            <p className="text-gray-600">
              نطمح لأن نكون الرواد في عالم العناية الشخصية، مقدِّمين منتجات فريدة تجمع بين الأناقة والفعالية والأصالة
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-mud-primary">رسالتنا</h2>
            <p className="text-gray-600">
              تقديم منتجات عالية الجودة تلبي تطلعات عملائنا وتفوق توقعاتهم
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-mud-secondary text-white p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">قيمنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'الجودة', desc: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا' },
              { title: 'الأصالة', desc: 'نحافظ على الأصالة العربية في عطورنا' },
              { title: 'الابتكار', desc: 'نسعى دائماً لتقديم كل ما هو جديد ومميز' }
            ].map(value => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
