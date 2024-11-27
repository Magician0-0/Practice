'use client'

import { Search, MessageSquare, LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-purple">
              GameDash
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-purple px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-primary-purple px-3 py-2 rounded-md">
              <Search className="inline-block w-5 h-5 mr-1" />
              Search
            </Link>
            <Link href="/messages" className="text-gray-700 hover:text-primary-purple px-3 py-2 rounded-md">
              <MessageSquare className="inline-block w-5 h-5 mr-1" />
              Messages
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-primary-purple px-3 py-2">
              <LogIn className="w-5 h-5 mr-1" />
              <span>Log in</span>
            </button>
            <button className="flex items-center bg-primary-purple text-white px-4 py-2 rounded-md hover:bg-secondary-purple">
              <UserPlus className="w-5 h-5 mr-1" />
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}