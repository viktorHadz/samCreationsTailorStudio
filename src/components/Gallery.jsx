'use client'

import Image from 'next/image'

export function Gallery({ images }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
      {images.map((image, index) => (
        <div key={image.id || index} className="mb-4 break-inside-avoid">
          <Image
            src={image.image?.src || image.src}
            alt={image.title}
            width={400}
            height={600}
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}
