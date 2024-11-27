'use client'

import Image from 'next/image'

const artworks = [
  { id: 1, src: 'https://picsum.photos/400/400?random=1', title: 'Character Artwork 1' },
  { id: 2, src: 'https://picsum.photos/400/400?random=2', title: 'Character Artwork 2' },
  { id: 3, src: 'https://picsum.photos/400/400?random=3', title: 'Character Artwork 3' },
  { id: 4, src: 'https://picsum.photos/400/400?random=4', title: 'Character Artwork 4' },
]

export default function Gallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Artwork</h2>
          <button className="text-primary-purple hover:text-secondary-purple">
            View More
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="relative aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={artwork.src}
                alt={artwork.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-medium">{artwork.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}