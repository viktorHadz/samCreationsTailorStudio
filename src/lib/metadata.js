const siteUrl = 'https://samcreations.uk'

export function createMetadata({
  title,
  description,
  path = '/',
  absoluteTitle = false,
}) {
  const url = new URL(path, siteUrl).toString()

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'S.A.M. Creations Ltd',
      title,
      description,
      url,
      locale: 'en_GB',
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: 'S.A.M. Creations garment manufacturing studio in London',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.jpg'],
    },
  }
}
