'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Banner() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Featured Character"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Featured Character</h1>
            <p className="text-lg mb-6">
              Discover the latest adventures and stories of your favorite gaming characters.
            </p>
            <button className="bg-primary-purple hover:bg-secondary-purple text-white px-6 py-2 rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 space-x-2">
        <button className="p-2 bg-white/20 rounded-full hover:bg-white/40">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="p-2 bg-white/20 rounded-full hover:bg-white/40">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}