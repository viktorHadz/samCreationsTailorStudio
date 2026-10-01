import Image from 'next/image'

function imageHref(index, queryString) {
  const params = new URLSearchParams(queryString)
  params.set('image', index + 1)

  return `/gallery?${params.toString()}`
}

export function Gallery({ images, queryString = '' }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((image, index) => {
        const source = image.image?.src || image.src

        return (
          <div key={image.id || index} className="mb-5 break-inside-avoid">
            <a
              href={imageHref(index, queryString)}
              data-gallery-index={index}
              className="group relative block cursor-pointer overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 focus-visible:outline-hidden"
            >
              <Image
                src={source}
                alt={image.alt}
                width={source.width}
                height={source.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                placeholder={source.blurDataURL ? 'blur' : undefined}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </a>
          </div>
        )
      })}
    </div>
  )
}
