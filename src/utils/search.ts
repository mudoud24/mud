export const filterProducts = (products: any[], searchQuery: string) => {
  if (!searchQuery) return products

  const query = searchQuery.toLowerCase().trim()
  return products.filter(product => 
    product.name?.toLowerCase().includes(query) || 
    product.id?.toLowerCase().includes(query)
  )
}
