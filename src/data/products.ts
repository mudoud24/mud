export const categories = [
  { id: 'perfumes', name: 'العطور', image: '/products/categories/perfumes.webp', subCategories: ['60ml', '100ml'], gender: ['men', 'women', 'unisex'] },
  { id: 'oils', name: 'الزيوت العطرية', image: '/products/Oils/category.webp', subCategories: ['men', 'women', 'unisex'], gender: ['men', 'women', 'unisex'] },
  { id: 'room-spray', name: 'معطرات الغرفة', image: '/products/Room Spray/category.webp' },
  { id: 'reed-diffuser', name: 'معطرات الأعواد', image: '/products/Reed Diffuser/category.webp' },
  { id: 'car-perfumes', name: 'معطرات السيارات', image: '/products/Car Perfume/category.webp' },
  { id: 'water-perfumes', name: 'العطور المائية', image: '/products/Water perfumes/category.webp' },
  { id: 'electric-diffuser', name: 'الفواحات الكهربائية', image: '/products/Electric Diffuser/category.webp' },
  { id: 'skin-care', name: 'العناية بالبشرة', image: '/products/Skin Care/category.webp' },
]

export const genderLabels = {
  men: 'رجالي',
  women: 'نسائي',
  unisex: 'للجنسين'
} as const

export const getGenderLabel = (gender?: 'men' | 'women' | 'unisex') => {
  if (!gender) return ''
  return genderLabels[gender]
}

export type Product = {
  id: string
  name: string
  price: number
  category: string
  subcategory?: string
  gender?: 'men' | 'women' | 'unisex'
  description: string
  image: string
  images: string[]
  originalPrice?: number
  discount?: number
}

export const getProductsBySubcategory = (category: string, subcategory: string) => {
  const categoryProducts = Object.values(products).flat() as Product[]
  return categoryProducts.filter(product =>
    product.category === category &&
    product.subcategory === subcategory
  )
}

export type ProductCategory = {
  id: string
  name: string
  image: string
  subCategories?: string[]
  gender?: string[]
}


export const products = {
  perfumes: [
    // 100ml perfumes
    {
      id: 'p1-100',
      name: 'عبير',
      price: 59.99,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'men',
      description: 'عطر فخم يتميز بنفحات داكنة ومركزة من العود والتبغ والأخشاب العميقة',
      image: '/products/Perfumes/100ml/Abeer/3.webp',
      images: [
        '/products/Perfumes/100ml/Abeer/1.webp',
        '/products/Perfumes/100ml/Abeer/2.webp',
        '/products/Perfumes/100ml/Abeer/3.webp'
      ]
    },
    {
      id: 'p1-60',
      name: 'عبير',
      price: 34.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'men',
      description: 'عطر فخم يتميز بنفحات داكنة ومركزة من العود والتبغ والأخشاب العميقة',
      image: '/products/Perfumes/60ml/Abeer/1.webp',
      images: [
        '/products/Perfumes/60ml/Abeer/1.webp',
        '/products/Perfumes/60ml/Abeer/2.webp',
        '/products/Perfumes/60ml/Abeer/3.webp'
      ]
    },
    {
      id: 'p2-100',
      name: 'نور',
      price: 39.99,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'men',
      description: 'عطر فاخر يجمع بين عبق العود الأصيل، نفحات العنبر الدافئة، ولمسات الزعفران الفاخرة',
      image: '/products/Perfumes/100ml/Noor/1.webp',
      images: [
        '/products/Perfumes/100ml/Noor/1.webp',
        '/products/Perfumes/100ml/Noor/2.webp',
        '/products/Perfumes/100ml/Noor/3.webp'
      ]
    }, {
      id: 'p2-60',
      name: 'نور',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'men',
      description: 'عطر فاخر يجمع بين عبق العود الأصيل، نفحات العنبر الدافئة، ولمسات الزعفران الفاخرة',
      image: '/products/Perfumes/60ml/Noor/1.webp',
      images: [
        '/products/Perfumes/60ml/Noor/1.webp',
        '/products/Perfumes/60ml/Noor/2.webp',
        '/products/Perfumes/60ml/Noor/3.webp'
      ]
    },
    {
      id: 'p3-100',
      name: 'وهج',
      price: 29.99,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'unisex',
      description: 'عود أصيل، عنبر فاخر، زعفران نابض، دفء شرقي، فخامة خالدة',
      image: '/products/Perfumes/100ml/Wahaj/1.webp',
      images: [
        '/products/Perfumes/100ml/Wahaj/1.webp',
        '/products/Perfumes/100ml/Wahaj/2.webp',
        '/products/Perfumes/100ml/Wahaj/3.webp'
      ]
    }, {
      id: 'p3-60',
      name: 'وهج',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'unisex',
      description: 'عود أصيل، عنبر فاخر، زعفران نابض، دفء شرقي، فخامة خالدة',
      image: '/products/Perfumes/60ml/Wahaj/1.webp',
      images: [
        '/products/Perfumes/60ml/Wahaj/1.webp',
        '/products/Perfumes/60ml/Wahaj/2.webp',
        '/products/Perfumes/60ml/Wahaj/3.webp'
      ]
    },
    {
      id: 'p4-100',
      name: 'نقاء',
      price: 49.99,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'women',
      description: 'عطر ساحر يمزج بين نفحات الزعفران الفاخر، العنبر الدافئ، والأخشاب العميقة',
      image: '/products/Perfumes/100ml/Naqaa/1.webp',
      images: [
        '/products/Perfumes/100ml/Naqaa/1.webp',
        '/products/Perfumes/100ml/Naqaa/2.webp',
        '/products/Perfumes/100ml/Naqaa/3.webp'
      ]
    }, {
      id: 'p4-60',
      name: 'نقاء',
      price: 24.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'women',
      description: 'عطر ساحر يمزج بين نفحات الزعفران الفاخر، العنبر الدافئ، والأخشاب العميقة',
      image: '/products/Perfumes/60ml/Naqaa/1.webp',
      images: [
        '/products/Perfumes/60ml/Naqaa/1.webp',
        '/products/Perfumes/60ml/Naqaa/2.webp',
        '/products/Perfumes/60ml/Naqaa/3.webp'
      ]
    },
    {
      id: 'p5-100',
      name: 'جوهر',
      price: 39.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'men',
      description: 'عطر فخم يجمع بين دفء العود المخملي ونفحات العنبر الناعمة، مع لمسات من المسك والكشمير',
      image: '/products/Perfumes/100ml/Jawhar/1.webp',
      images: [
        '/products/Perfumes/100ml/Jawhar/1.webp',
        '/products/Perfumes/100ml/Jawhar/2.webp',
        '/products/Perfumes/100ml/Jawhar/3.webp'
      ]
    }, {
      id: 'p5-60',
      name: 'جوهر',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'men',
      description: 'عطر فخم يجمع بين دفء العود المخملي ونفحات العنبر الناعمة، مع لمسات من المسك والكشمير',
      image: '/products/Perfumes/60ml/Jawhar/1.webp',
      images: [
        '/products/Perfumes/60ml/Jawhar/1.webp',
        '/products/Perfumes/60ml/Jawhar/2.webp',
        '/products/Perfumes/60ml/Jawhar/3.webp'
      ]
    },
    {
      id: 'p6-100',
      name: 'أصيل',
      price: 34.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'women',
      description: 'عطر فاخر ينبض بالفخامة، يمزج بين نفحات الزعفران الدافئ، العنبر الذهبي، ولمسات من الورد الشرقي والمسك',
      image: '/products/Perfumes/100ml/Aseel/1.webp',
      images: [
        '/products/Perfumes/100ml/Aseel/1.webp',
        '/products/Perfumes/100ml/Aseel/2.webp',
        '/products/Perfumes/100ml/Aseel/3.webp'
      ]
    }, {
      id: 'p6-60',
      name: 'أصيل',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'women',
      description: 'عطر فاخر ينبض بالفخامة، يمزج بين نفحات الزعفران الدافئ، العنبر الذهبي، ولمسات من الورد الشرقي والمسك',
      image: '/products/Perfumes/60ml/Aseel/1.webp',
      images: [
        '/products/Perfumes/60ml/Aseel/1.webp',
        '/products/Perfumes/60ml/Aseel/2.webp',
        '/products/Perfumes/60ml/Aseel/3.webp'
      ]
    },
    {
      id: 'p7-100',
      name: 'أمجاد',
      price: 29.99,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'unisex',
      description: 'عطر ساحر يجسد انتعاش الطبيعة وأسرار الجزر الاستوائية، بمزيج متناغم من الحمضيات المنعشة، الأزهار الرقيقة، والأخشاب الدافئة',
      image: '/products/Perfumes/100ml/Amjad/1.webp',
      images: [
        '/products/Perfumes/100ml/Amjad/1.webp',
        '/products/Perfumes/100ml/Amjad/2.webp',
        '/products/Perfumes/100ml/Amjad/3.webp'
      ]
    }, {
      id: 'p7-60',
      name: 'أمجاد',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'unisex',
      description: 'عطر ساحر يجسد انتعاش الطبيعة وأسرار الجزر الاستوائية، بمزيج متناغم من الحمضيات المنعشة، الأزهار الرقيقة، والأخشاب الدافئة',
      image: '/products/Perfumes/60ml/Amjad/1.webp',
      images: [
        '/products/Perfumes/60ml/Amjad/1.webp',
        '/products/Perfumes/60ml/Amjad/2.webp',
        '/products/Perfumes/60ml/Amjad/3.webp'
      ]
    },
    {
      id: 'p8-100',
      name: 'مجد',
      price: 39.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'men',
      description: 'عطر شرقي فاخر يرتكز على نفحات العود الكمبودي النقي، ممزوج بلمسات من العنبر الدافئ، المسك الفاخر، والزهور الشرقية',
      image: '/products/Perfumes/100ml/Majd/1.webp',
      images: [
        '/products/Perfumes/100ml/Majd/1.webp',
        '/products/Perfumes/100ml/Majd/2.webp',
        '/products/Perfumes/100ml/Majd/3.webp'
      ]
    }, {
      id: 'p8-60',
      name: 'مجد',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'men',
      description: 'عطر شرقي فاخر يرتكز على نفحات العود الكمبودي النقي، ممزوج بلمسات من العنبر الدافئ، المسك الفاخر، والزهور الشرقية',
      image: '/products/Perfumes/60ml/Majd/1.webp',
      images: [
        '/products/Perfumes/60ml/Majd/1.webp',
        '/products/Perfumes/60ml/Majd/2.webp',
        '/products/Perfumes/60ml/Majd/3.webp'
      ]
    },
    {
      id: 'p9-100',
      name: 'رُقي',
      price: 29.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'men',
      description: 'عطر فاخر يجمع بين العود النقي، العنبر الدافئ، والمسك الفاخر، بتركيبة غنية تعكس الفخامة الشرقية',
      image: '/products/Perfumes/100ml/Roqy/1.webp',
      images: [
        '/products/Perfumes/100ml/Roqy/1.webp',
        '/products/Perfumes/100ml/Roqy/2.webp',
        '/products/Perfumes/100ml/Roqy/3.webp'
      ]
    }, {
      id: 'p9-60',
      name: 'رُقي',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'men',
      description: 'عطر فاخر يجمع بين العود النقي، العنبر الدافئ، والمسك الفاخر، بتركيبة غنية تعكس الفخامة الشرقية',
      image: '/products/Perfumes/60ml/Roqy/1.webp',
      images: [
        '/products/Perfumes/60ml/Roqy/1.webp',
        '/products/Perfumes/60ml/Roqy/2.webp',
        '/products/Perfumes/60ml/Roqy/3.webp'
      ]
    },
    {
      id: 'p10-100',
      name: 'شغف',
      price: 34.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'men',
      description: 'عطر راقٍ يجمع بين نعومة العود الفاخر، لمسات المسك الحريري، ونفحات العنبر الدافئة',
      image: '/products/Perfumes/100ml/Shaghaf/1.webp',
      images: [
        '/products/Perfumes/100ml/Shaghaf/1.webp',
        '/products/Perfumes/100ml/Shaghaf/2.webp',
        '/products/Perfumes/100ml/Shaghaf/3.webp'
      ]
    },
    {
      id: 'p10-60',
      name: 'شغف',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'men',
      description: 'عطر راقٍ يجمع بين نعومة العود الفاخر، لمسات المسك الحريري، ونفحات العنبر الدافئة',
      image: '/products/Perfumes/60ml/Shaghaf/1.webp',
      images: [
        '/products/Perfumes/60ml/Shaghaf/1.webp',
        '/products/Perfumes/60ml/Shaghaf/2.webp',
        '/products/Perfumes/60ml/Shaghaf/3.webp'
      ]
    },
    {
      id: 'p11-100',
      name: 'هيبة',
      price: 29.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'unisex',
      description: 'عطر ملكي يفوح بالفخامة، يمزج بين العود الفاخر، العنبر الدافئ، والورد الشرقي بلمسات راقية من المسك والزعفران',
      image: '/products/Perfumes/100ml/Haybah/1.webp',
      images: [
        '/products/Perfumes/100ml/Haybah/1.webp',
        '/products/Perfumes/100ml/Haybah/2.webp',
        '/products/Perfumes/100ml/Haybah/3.webp'
      ]
    }, {
      id: 'p11-60',
      name: 'هيبة',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'unisex',
      description: 'عطر ملكي يفوح بالفخامة، يمزج بين العود الفاخر، العنبر الدافئ، والورد الشرقي بلمسات راقية من المسك والزعفران',
      image: '/products/Perfumes/60ml/Haybah/1.webp',
      images: [
        '/products/Perfumes/60ml/Haybah/1.webp',
        '/products/Perfumes/60ml/Haybah/2.webp',
        '/products/Perfumes/60ml/Haybah/3.webp'
      ]
    },
    {
      id: 'p12-100',
      name: 'ريماس',
      price: 29.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'unisex',
      description: 'عطر مشرق يجمع بين العود الدافئ، العنبر الذهبي، والزهور الشرقية، مع لمسات من المسك الفاخر',
      image: '/products/Perfumes/100ml/Rimas/1.webp',
      images: [
        '/products/Perfumes/100ml/Rimas/1.webp',
        '/products/Perfumes/100ml/Rimas/2.webp',
        '/products/Perfumes/100ml/Rimas/3.webp'
      ]
    }, {
      id: 'p12-60',
      name: 'ريماس',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'unisex',
      description: 'عطر مشرق يجمع بين العود الدافئ، العنبر الذهبي، والزهور الشرقية، مع لمسات من المسك الفاخر',
      image: '/products/Perfumes/60ml/Rimas/1.webp',
      images: [
        '/products/Perfumes/60ml/Rimas/1.webp',
        '/products/Perfumes/60ml/Rimas/2.webp',
        '/products/Perfumes/60ml/Rimas/3.webp'
      ]
    },
    {
      id: 'p13-100',
      name: 'شموخ',
      price: 34.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'unisex',
      description: 'عطر شرقي فاخر يجمع بين عبق البخور العثماني الأصيل ولمسات من العود والتوابل الدافئة',
      image: '/products/Perfumes/100ml/Shomoukh/1.webp',
      images: [
        '/products/Perfumes/100ml/Shomoukh/1.webp',
        '/products/Perfumes/100ml/Shomoukh/2.webp',
        '/products/Perfumes/100ml/Shomoukh/3.webp'
      ]
    }, {
      id: 'p13-60',
      name: 'شموخ',
      price: 18.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'unisex',
      description: 'عطر شرقي فاخر يجمع بين عبق البخور العثماني الأصيل ولمسات من العود والتوابل الدافئة',
      image: '/products/Perfumes/60ml/Shomoukh/1.webp',
      images: [
        '/products/Perfumes/60ml/Shomoukh/1.webp',
        '/products/Perfumes/60ml/Shomoukh/2.webp',
        '/products/Perfumes/60ml/Shomoukh/3.webp'
      ]
    },
    {
      id: 'p14-100',
      name: 'روح',
      price: 34.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'unisex',
      description: 'زيت عطري مركز بمزيج غني من النفحات الشرقية الدافئة، يجمع بين عبق العود والفانيليا مع لمسات زهرية ناعمة',
      image: '/products/Perfumes/100ml/Rouh/1.webp',
      images: [
        '/products/Perfumes/100ml/Rouh/1.webp',
        '/products/Perfumes/100ml/Rouh/2.webp',
        '/products/Perfumes/100ml/Rouh/3.webp'
      ]
    }, {
      id: 'p14-60',
      name: 'روح',
      price: 19.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'unisex',
      description: 'زيت عطري مركز بمزيج غني من النفحات الشرقية الدافئة، يجمع بين عبق العود والفانيليا مع لمسات زهرية ناعمة',
      image: '/products/Perfumes/60ml/Rouh/1.webp',
      images: [
        '/products/Perfumes/60ml/Rouh/1.webp',
        '/products/Perfumes/60ml/Rouh/2.webp',
        '/products/Perfumes/60ml/Rouh/3.webp'
      ]
    },
    {
      id: 'p15-100',
      name: 'لؤلؤة',
      price: 44.90,
      category: 'perfumes',
      subcategory: '100ml',
      gender: 'unisex',
      description: 'تناغم فريد بين العبق والأناقة، ينسج من نوتات العود والعنبر سحرًا يدوم',
      image: '/products/Perfumes/100ml/Luluah/1.webp',
      images: [
        '/products/Perfumes/100ml/Luluah/1.webp',
        '/products/Perfumes/100ml/Luluah/2.webp',
        '/products/Perfumes/100ml/Luluah/3.webp'
      ]
    }, {
      id: 'p15-60',
      name: 'لؤلؤة',
      price: 24.99,
      category: 'perfumes',
      subcategory: '60ml',
      gender: 'unisex',
      description: 'تناغم فريد بين العبق والأناقة، ينسج من نوتات العود والعنبر سحرًا يدوم',
      image: '/products/Perfumes/60ml/Luluah/1.webp',
      images: [
        '/products/Perfumes/60ml/Luluah/1.webp',
        '/products/Perfumes/60ml/Luluah/2.webp',
        '/products/Perfumes/60ml/Luluah/3.webp'
      ]
    },
  ],
  waterPerfumes: [

    {
      id: 'wp1',
      name: 'فانيلا',
      price: 7.99,
      category: 'water-perfumes',
      description: 'عطر مائي منعش بنفحات الفانيليا الناعمة',
      image: '/products/Water perfumes/Vanilla/1.webp',
      images: [
        '/products/Water perfumes/Vanilla/1.webp',
        '/products/Water perfumes/Vanilla/2.webp',
        '/products/Water perfumes/Vanilla/3.webp'
      ]
    },
    {
      id: 'wp2',
      name: 'عود',
      price: 7.99,
      category: 'water-perfumes',
      description: 'عطر مائي بنفحات العود الأصيلة',
      image: '/products/Water perfumes/Oud/1.webp',
      images: [
        '/products/Water perfumes/Oud/1.webp',
        '/products/Water perfumes/Oud/2.webp',
        '/products/Water perfumes/Oud/3.webp'
      ]
    },
    {
      id: 'wp3',
      name: 'عنبر',
      price: 7.99,
      category: 'water-perfumes',
      description: 'عطر مائي بنفحات العنبر الدافئة',
      image: '/products/Water perfumes/Amber/1.webp',
      images: [
        '/products/Water perfumes/Amber/1.webp',
        '/products/Water perfumes/Amber/2.webp',
        '/products/Water perfumes/Amber/3.webp'
      ]
    },
    {
      id: 'wp4',
      name: 'مسك',
      price: 7.99,
      category: 'water-perfumes',
      description: 'عطر مائي برائحة المسك النقية',
      image: '/products/Water perfumes/Musk/1.webp',
      images: [
        '/products/Water perfumes/Musk/1.webp',
        '/products/Water perfumes/Musk/2.webp',
        '/products/Water perfumes/Musk/3.webp'
      ]
    }
  ],
  oils: [
    {
      id: 'o1',
      name: 'عبير',
      price: 14.99,
      category: 'oils',
      gender: 'men',
      description: 'عطر داكن ومكثف يجمع بين التبغ، العود، والقهوة، بلمسة شرقية غامضة تدوم طويلًا.',
      image: '/products/Oils/Abeer/2.webp',
      images: [
        '/products/Oils/Abeer/1.webp',
        '/products/Oils/Abeer/2.webp',
        '/products/Oils/Abeer/3.webp'
      ]
    },
    {
      id: 'o1',
      name: 'مسك أحمر',
      price: 11.90,
      category: 'oils',
      gender: 'women',
      description: 'نفحات مسكية دافئة ممزوجة بالفانيليا والعنبر، تمنح ثباتًا رائعًا',
      image: '/products/Oils/Misk Ahmar/1.webp',
      images: [
        '/products/Oils/Misk Ahmar/1.webp',
        '/products/Oils/Misk Ahmar/2.webp',
        '/products/Oils/Misk Ahmar/3.webp'
      ]
    },
    {
      id: 'o2',
      name: 'مسك أسود',
      price: 11.90,
      category: 'oils',
      gender: 'women',
      description: 'عطر شرقي مكثف من المسك الداكن، غني بالأخشاب والتوابل الجذابة',
      image: '/products/Oils/Misk Aswad/1.webp',
      images: [
        '/products/Oils/Misk Aswad/1.webp',
        '/products/Oils/Misk Aswad/2.webp',
        '/products/Oils/Misk Aswad/3.webp'
      ]
    },
    {
      id: 'o3',
      name: 'مسك عسلي',
      price: 14.99,
      category: 'oils',
      gender: 'women',
      description: 'لمسة حلوة من المسك الممزوج بالعسل، تضفي نعومة ودفئًا مغريًا',
      image: '/products/Oils/Misk Asali/1.webp',
      images: [
        '/products/Oils/Misk Asali/1.webp',
        '/products/Oils/Misk Asali/2.webp',
        '/products/Oils/Misk Asali/3.webp'
      ]
    },
    {
      id: 'o4',
      name: 'مسك كرزي',
      price: 19.99,
      category: 'oils',
      gender: 'women',
      description: 'مزيج ساحر من المسك والكرز الأحمر، برائحة فاكهية مغرية',
      image: '/products/Oils/Misk Karzi/1.webp',
      images: [
        '/products/Oils/Misk Karzi/1.webp',
        '/products/Oils/Misk Karzi/2.webp',
        '/products/Oils/Misk Karzi/3.webp'
      ]
    },
    {
      id: 'o20',
      name: 'مسك روز',
      price: 14.99,
      category: 'oils',
      gender: 'women',
      description: 'نفحات نقية من المسك الوردي، تمنح إحساسًا ناعمًا وطهارة عطرية',
      image: '/products/Oils/Misk Rose/1.webp',
      images: [
        '/products/Oils/Misk Rose/1.webp',
        '/products/Oils/Misk Rose/2.webp',
        '/products/Oils/Misk Rose/3.webp'
      ]
    },
    {
      id: 'o21',
      name: 'مسك عنبري',
      price: 14.99,
      category: 'oils',
      gender: 'women',
      description: 'مسك شرقي غني ممزوج بالعنبر الدافئ، لمسة فاخرة تدوم طويلًا',
      image: '/products/Oils/Misk Anbari/1.webp',
      images: [
        '/products/Oils/Misk Anbari/1.webp',
        '/products/Oils/Misk Anbari/2.webp',
        '/products/Oils/Misk Anbari/3.webp'
      ]
    },
    {
      id: 'o5',
      name: 'ربيع',
      price: 8.99,
      category: 'oils',
      gender: 'unisex',
      description: 'عطر ذكوري قوي من العنبر والتونكا والفلفل، يمنح طاقة وثقة',
      image: '/products/Oils/Rabee/1.webp',
      images: [
        '/products/Oils/Rabee/1.webp',
        '/products/Oils/Rabee/2.webp',
        '/products/Oils/Rabee/3.webp'
      ]
    },
    {
      id: 'o6',
      name: 'روح',
      price: 8.99,
      category: 'oils',
      gender: 'unisex',
      description: 'زيت عطري شرقي مكثف، يجمع بين العود والزهور والمسك في مزيج آسر',
      image: '/products/Oils/Rouh/1.webp',
      images: [
        '/products/Oils/Rouh/1.webp',
        '/products/Oils/Rouh/2.webp',
        '/products/Oils/Rouh/3.webp'
      ]
    },
    {
      id: 'o7',
      name: 'شذا',
      price: 14.99,
      category: 'oils',
      gender: 'unisex',
      description: 'عطر فانيليا دافئ ممزوج بالعنبر والسكر البني، لمسة حلوة وجذابة',
      image: '/products/Oils/Shatha/1.webp',
      images: [
        '/products/Oils/Shatha/1.webp',
        '/products/Oils/Shatha/2.webp',
        '/products/Oils/Shatha/3.webp'
      ]
    },
    {
      id: 'o8',
      name: 'درر',
      price: 11.99,
      category: 'oils',
      gender: 'unisex',
      description: 'نفحات زهرية ناعمة من زهور التوليب، برائحة أنثوية حالمة',
      image: '/products/Oils/Durar/1.webp',
      images: [
        '/products/Oils/Durar/1.webp',
        '/products/Oils/Durar/2.webp',
        '/products/Oils/Durar/3.webp'
      ]
    },
    {
      id: 'o9',
      name: 'مسك سيلك',
      price: 11.90,
      category: 'oils',
      gender: 'unisex',
      description: 'مسك ناعم ومخملي بلمسات بودرية، يمنح إحساسًا راقيًا وأنيقًا',
      image: '/products/Oils/Misk Silk/1.webp',
      images: [
        '/products/Oils/Misk Silk/1.webp',
        '/products/Oils/Misk Silk/2.webp',
        '/products/Oils/Misk Silk/3.webp'
      ]
    },
    {
      id: 'o22',
      name: 'إشراقة',
      price: 8.99,
      category: 'oils',
      gender: 'unisex',
      description: 'فانيليا فاخرة ممزوجة بالأخشاب والبلسم، لمسة راقية وحسية',
      image: '/products/Oils/Ishraqah/1.webp',
      images: [
        '/products/Oils/Ishraqah/1.webp',
        '/products/Oils/Ishraqah/2.webp',
        '/products/Oils/Ishraqah/3.webp'
      ]
    },
    {
      id: 'o23',
      name: 'بريق',
      price: 8.99,
      category: 'oils',
      gender: 'unisex',
      description: 'عطر شرقي فاخر يجمع بين العسل، التبغ، والفانيليا، بلمسة دافئة ومغرية',
      image: '/products/Oils/Bareeq/1.webp',
      images: [
        '/products/Oils/Bareeq/1.webp',
        '/products/Oils/Bareeq/2.webp',
        '/products/Oils/Bareeq/3.webp'
      ]
    },
    {
      id: 'o24',
      name: 'لؤلؤة',
      price: 9.99,
      category: 'oils',
      gender: 'unisex',
      description: 'مزيج متوازن من العود والعنبر برائحة شرقية أنيقة وثابتة',
      image: '/products/Oils/Luluah/1.webp',
      images: [
        '/products/Oils/Luluah/1.webp',
        '/products/Oils/Luluah/2.webp',
        '/products/Oils/Luluah/3.webp'
      ]
    },
    {
      id: 'o25',
      name: 'مسك رماني',
      price: 14.99
      ,
      category: 'oils',
      gender: 'women',
      description: 'عطر فاكهي يجمع بين المسك والرمان، لمسة حلوة ومنعشة',
      image: '/products/Oils/Misk Roman/1.webp',
      images: [
        '/products/Oils/Misk Roman/1.webp',
        '/products/Oils/Misk Roman/2.webp',
        '/products/Oils/Misk Roman/3.webp'
      ]
    },
    {
      id: 'o26',
      name: 'المسك الأبيض',
      price: 9.99,
      category: 'oils',
      gender: 'unisex',
      description: 'نفحات نظيفة ونقية من المسك الأبيض، تعكس الأنوثة والانتعاش',
      image: '/products/Oils/Al-Misk Al-Abyad/1.webp',
      images: [
        '/products/Oils/Al-Misk Al-Abyad/1.webp',
        '/products/Oils/Al-Misk Al-Abyad/2.webp',
        '/products/Oils/Al-Misk Al-Abyad/3.webp'
      ]
    },
    {
      id: 'o27',
      name: 'ماسة',
      price: 8.99,
      category: 'oils',
      gender: 'unisex',
      description: 'عطر زهري مفعم بالمسك والورد، يمنح أنوثة ورقيًا لا يُقاوم',
      image: '/products/Oils/Masa/1.webp',
      images: [
        '/products/Oils/Masa/1.webp',
        '/products/Oils/Masa/2.webp',
        '/products/Oils/Masa/3.webp'
      ]
    },
    {
      id: 'o28',
      name: 'سلطان',
      price: 34.99,
      category: 'oils',
      gender: 'men',
      description: 'عطر ملكي من العود الكمبودي النقي، ذو حضور فخم وثبات عالٍ',
      image: '/products/Oils/Sultan/1.webp',
      images: [
        '/products/Oils/Sultan/1.webp',
        '/products/Oils/Sultan/2.webp',
        '/products/Oils/Sultan/3.webp'
      ]
    },
    {
      id: 'o29',
      name: 'مجد',
      price: 14.99,
      category: 'oils',
      gender: 'men',
      description: 'نفحات عود كمبودي نقي ودخاني، بلمسة خشبية عميقة تعكس الفخامة الأصيلة',
      image: '/products/Oils/Majd/1.webp',
      images: [
        '/products/Oils/Majd/1.webp',
        '/products/Oils/Majd/2.webp',
        '/products/Oils/Majd/3.webp'
      ]
    },
    {
      id: 'o30',
      name: 'وهج',
      price: 8.99,
      category: 'oils',
      gender: 'unisex',
      description: 'عطر شرقي فاخر يجمع بين عبق العود ونفحات المسك الأبيض، مع لمسات من العنبر الدافئ',
      image: '/products/Oils/Wahaj/1.webp',
      images: [
        '/products/Oils/Wahaj/1.webp',
        '/products/Oils/Wahaj/2.webp',
        '/products/Oils/Wahaj/3.webp'
      ]
    }
  ],
  skinCare: [
    {
      id: 'sc1',
      name: 'شامبو مسك وعود',
      price: 3.99,
      category: 'skin-care',
      description: 'شامبو فاخر معطر بالمسك والعود، غني بخلاصة الصبار والفيتامينات، يمنح شعرك نظافة وترطيبًا مع رائحة شرقية تدوم طويلاً',
      image: '/products/Skin Care/Hair Shampoo/1.webp',
      images: [
        '/products/Skin Care/Hair Shampoo/1.webp',
        '/products/Skin Care/Hair Shampoo/2.webp',
        '/products/Skin Care/Hair Shampoo/3.webp'
      ]
    },
    {
      id: 'sc2',
      name: 'شاور جيل',
      price: 3.99,
      category: 'skin-care',
      description: 'جل استحمام منعش بخلاصة الزيوت العطرية الطبيعية، يمنح بشرتك نظافة وترطيبًا مع رائحة المسك والعود المميزة',
      image: '/products/Skin Care/Shower Gel/1.webp',
      images: [
        '/products/Skin Care/Shower Gel/1.webp',
        '/products/Skin Care/Shower Gel/2.webp',
        '/products/Skin Care/Shower Gel/3.webp'
      ]
    },
    {
      id: 'sc3',
      name: 'مزيل عرق',
      price: 0.99,
      category: 'skin-care',
      description: 'مزيل عرق فعال بتركيبة مميزة تدوم طويلاً، برائحة المسك والعود الفاخرة، يمنحك الثقة والانتعاش طوال اليوم',
      image: '/products/Skin Care/Deodorant/1.webp',
      images: [
        '/products/Skin Care/Deodorant/1.webp',
        '/products/Skin Care/Deodorant/2.webp',
        '/products/Skin Care/Deodorant/3.webp'
      ]
    },
    {
      id: 'sc4',
      name: 'أنسام',
      price: 3.99,
      category: 'skin-care',
      description: 'معطر للجسم برائحة زهرية منعشة، يمنح بشرتك إحساساً بالنظافة والانتعاش مع عبير يدوم طويلاً',
      image: '/products/Skin Care/Ansam/1.webp',
      images: [
        '/products/Skin Care/Ansam/1.webp',
        '/products/Skin Care/Ansam/2.webp',
        '/products/Skin Care/Ansam/3.webp'
      ]
    },
    {
      id: 'sc5',
      name: 'ريحان',
      price: 3.99,
      category: 'skin-care',
      description: 'معطر للجسم بخلاصة الريحان المنعشة، يترك على بشرتك رائحة عطرية خفيفة ومنعشة تدوم طويلاً',
      image: '/products/Skin Care/Rayhan/1.webp',
      images: [
        '/products/Skin Care/Rayhan/1.webp',
        '/products/Skin Care/Rayhan/2.webp',
        '/products/Skin Care/Rayhan/3.webp'
      ]
    },
    {
      id: 'sc6',
      name: 'صابونة مسك وعود',
      price: 0.99,
      category: 'skin-care',
      description: 'صابون فاخر بخلاصة المسك والعود، غني بالزيوت الطبيعية المرطبة للبشرة، يمنح نظافة عميقة مع رائحة شرقية أصيلة',
      image: '/products/Skin Care/Oud Soap/1.webp',
      images: [
        '/products/Skin Care/Oud Soap/1.webp',
        '/products/Skin Care/Oud Soap/2.webp',
        '/products/Skin Care/Oud Soap/3.webp'
      ]
    },
    {
      id: 'sc7',
      name: 'لوشن مرطب الجسم',
      price: 4.99,
      category: 'skin-care',
      description: 'لوشن مرطب للجسم بخلاصة المسك والعود، يمنح البشرة نعومة ورائحة عطرية تدوم طويلاً',
      image: '/products/Skin Care/Body Lotion/1.webp',
      images: [
        '/products/Skin Care/Body Lotion/1.webp',
        '/products/Skin Care/Body Lotion/2.webp',
        '/products/Skin Care/Body Lotion/3.webp'
      ]
    },
    {
      id: 'sc8',
      name: 'غسول الوجه',
      price: 5.99,
      category: 'skin-care',
      description: 'غسول لطيف للوجه يحتوي على مستخلصات طبيعية للتنظيف العميق وترطيب البشرة',
      image: '/products/Skin Care/Facial Wash/1.webp',
      images: [
        '/products/Skin Care/Facial Wash/1.webp',
        '/products/Skin Care/Facial Wash/2.webp',
        '/products/Skin Care/Facial Wash/3.webp'
      ]
    },
    {
      id: 'sc9',
      name: 'سيروم الشعر',
      price: 6.99,
      category: 'skin-care',
      description: 'سيروم مغذي للشعر بخلاصة الأرغان والكيراتين، يمنح الشعر لمعاناً وقوة ويحميه من التقصف',
      image: '/products/Skin Care/Hair Serum/1.webp',
      images: [
        '/products/Skin Care/Hair Serum/1.webp',
        '/products/Skin Care/Hair Serum/2.webp',
        '/products/Skin Care/Hair Serum/2.webp'
      ]
    }
  ],
  roomSpray: [
    {
      id: 'rs1',
      name: 'هرات',
      price: 3.90,
      category: 'room-spray',
      description: 'معطر غرفة منعش بنفحات الورد والياسمين',
      image: '/products/Room Spray/Hurat/1.webp',
      images: [
        '/products/Room Spray/Hurat/1.webp',
        '/products/Room Spray/Hurat/2.webp',
        '/products/Room Spray/Hurat/3.webp'
      ]
    },
    {
      id: 'rs2',
      name: 'ماجيك',
      price: 3.90,
      category: 'room-spray',
      description: 'معطر غرفة سحري بنفحات الفانيليا والمسك',
      image: '/products/Room Spray/Magic/1.webp',
      images: [
        '/products/Room Spray/Magic/1.webp',
        '/products/Room Spray/Magic/2.webp',
        '/products/Room Spray/Magic/3.webp'
      ]
    },
    {
      id: 'rs3',
      name: 'زابل',
      price: 3.90,
      category: 'room-spray',
      description: 'معطر غرفة فاخر بنفحات العود والعنبر',
      image: '/products/Room Spray/Zabul/1.webp',
      images: [
        '/products/Room Spray/Zabul/1.webp',
        '/products/Room Spray/Zabul/2.webp',
        '/products/Room Spray/Zabul/3.webp'
      ]
    },
    {
      id: 'rs4',
      name: 'خلود',
      price: 3.99,
      category: 'room-spray',
      description: 'معطر غرفة فاخر بنفحات العود والعنبر',
      image: '/products/Room Spray/Kholoud/1.webp',
      images: [
        '/products/Room Spray/Kholoud/1.webp',
        '/products/Room Spray/Kholoud/2.webp',
        '/products/Room Spray/Kholoud/3.webp'
      ]
    }
  ],
  carPerfumes: [
    {
      id: 'cp1',
      name: 'عبق',
      price: 0.99,
      category: 'car-perfumes',
      description: 'معطر سيارة فاخر بنفحات شرقية',
      image: '/products/Car Perfume/Abq/1.webp',
      images: [
        '/products/Car Perfume/Abq/1.webp',
        '/products/Car Perfume/Abq/2.webp',
        '/products/Car Perfume/Abq/3.webp'
      ]
    },
    {
      id: 'cp2',
      name: 'فواح',
      price: 0.99,
      category: 'car-perfumes',
      description: 'معطر سيارة فاخر بنفحات شرقية',
      image: '/products/Car Perfume/Fawah/1.webp',
      images: [
        '/products/Car Perfume/Fawah/1.webp',
        '/products/Car Perfume/Fawah/2.webp',
        '/products/Car Perfume/Fawah/3.webp'
      ]
    },
    {
      id: 'cp3',
      name: 'ريان',
      price: 0.99,
      category: 'car-perfumes',
      description: 'معطر سيارة فاخر بنفحات شرقية',
      image: '/products/Car Perfume/Rayyan/1.webp',
      images: [
        '/products/Car Perfume/Rayyan/1.webp',
        '/products/Car Perfume/Rayyan/2.webp',
        '/products/Car Perfume/Rayyan/3.webp'
      ]
    },

  ],
  reedDiffuser: [
    {
      id: 'rd1',
      name: 'سما',
      price: 4.49,
      category: 'reed-diffuser',
      description: 'معطر أعواد فاخر بنفحات العود والمسك',
      image: '/products/Reed Diffuser/Sama/1.webp',
      images: [
        '/products/Reed Diffuser/Sama/1.webp',
        '/products/Reed Diffuser/Sama/2.webp',
        '/products/Reed Diffuser/Sama/3.webp'
      ]
    },
    {
      id: 'rd2',
      name: 'لمسة',
      price: 4.49,
      category: 'reed-diffuser',
      description: 'معطر أعواد راقي بنفحات العنبر والمسك',
      image: '/products/Reed Diffuser/Lamsa/1.webp',
      images: [
        '/products/Reed Diffuser/Lamsa/1.webp',
        '/products/Reed Diffuser/Lamsa/2.webp',
        '/products/Reed Diffuser/Lamsa/3.webp'
      ]
    },
    {
      id: 'rd3',
      name: 'ندى',
      price: 4.49,
      category: 'reed-diffuser',
      description: 'معطر أعواد منعش بنفحات الفواكه والزهور',
      image: '/products/Reed Diffuser/Nada/1.webp',
      images: [
        '/products/Reed Diffuser/Nada/1.webp',
        '/products/Reed Diffuser/Nada/2.webp',
        '/products/Reed Diffuser/Nada/3.webp'
      ]
    }
  ], electricDiffuser: [
    {
      id: 'rd1',
      name: 'معطر كهربائي ',
      price: 24.90,
      category: 'electric-diffuser',
      description: 'معطر كهربائي بنفحات العود والمسك',
      image: '/products/Electric Diffuser/Volcano/1.webp',
      images: [
        '/products/Electric Diffuser/Volcano/1.webp',
        '/products/Electric Diffuser/Volcano/2.webp',
        '/products/Electric Diffuser/Volcano/3.webp'
      ]
    }
  ]
}
// Helper function to get all products as a flat array
export const getAllProducts = () => {
  return Object.values(products).flat()
}

export const getProductsByCategory = (category: string) => {
  return products[category as keyof typeof products] || []
}



