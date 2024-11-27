'use client'

import Image from 'next/image'
import { Shield, Sword, Heart } from 'lucide-react'

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 sm:h-64">
          <Image
            src="https://picsum.photos/1920/1080?random=5"
            alt="Profile Banner"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative px-6 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:-mt-16">
            <div className="relative w-32 h-32 sm:mb-0 -mt-16 border-4 border-white rounded-full overflow-hidden">
              <Image
                src="https://picsum.photos/400/400?random=6"
                alt="Character Avatar"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-6 sm:mt-0 sm:ml-6 flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Character Name</h1>
              <p className="text-gray-500">Level 50 Warrior</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Shield className="w-8 h-8 text-primary-purple" />
              <div>
                <p className="text-sm text-gray-500">Defense</p>
                <p className="font-medium">2,500</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Sword className="w-8 h-8 text-primary-purple" />
              <div>
                <p className="text-sm text-gray-500">Attack</p>
                <p className="font-medium">3,750</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Heart className="w-8 h-8 text-primary-purple" />
              <div>
                <p className="text-sm text-gray-500">Health</p>
                <p className="font-medium">10,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}