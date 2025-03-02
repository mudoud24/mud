'use client'

import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    onSearch(searchQuery)
  }, [searchQuery, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="ابحث عن المنتجات..."
        className="w-full pl-10 pr-4 py-2 rounded-md border border-[#C19A5B]/20 focus:outline-none focus:border-[#C19A5B]"
      />
      <button
        type="submit"
        className="absolute left-3 text-[#C19A5B] hover:text-[#E5D5B5]"
      >
        <FaSearch size={18} />
      </button>
    </form>
  )
}

export default SearchBar
