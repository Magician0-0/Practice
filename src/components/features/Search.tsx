'use client'

import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const recentSearches = ['Warrior', 'Mage', 'Archer', 'Paladin']

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search characters..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
        />
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {recentSearches.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Searches</h3>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}