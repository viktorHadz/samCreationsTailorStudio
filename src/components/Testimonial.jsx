import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({ children, client, className, websiteLink }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />

      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            {/* Quote Icon */}
            <div className="mb-8 flex justify-center">
              <svg
                className="h-8 w-8 text-red-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            <blockquote className="relative text-center">
              <p className="text-xl leading-relaxed font-medium text-neutral-700 sm:text-2xl">
                {children}
              </p>
            </blockquote>

            {/* Attribution */}
            <figcaption className="mt-8 flex flex-col items-center">
              {websiteLink ? (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-75"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    className="h-8 w-auto"
                    unoptimized
                  />
                </a>
              ) : (
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="h-8 w-auto"
                  unoptimized
                />
              )}
              <p className="mt-2 text-sm font-medium text-neutral-900">
                {client.name}
              </p>
              <div className="mt-1 h-px w-12 bg-red-700"></div>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
