import Image from 'next/image'

export function Gallery({ images }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
      {images.map((image, index) => (
        <div key={image.id || index} className="mb-4 break-inside-avoid">
          <Image
            src={image.image?.src || image.src}
            alt={image.alt}
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}
