import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://samcreations.uk'),
  title: {
    default: 'S.A.M. Creations - Garment Manufacturing London',
    template: '%s | S.A.M. Creations Ltd',
  },
  description:
    'Award-winning London tailoring and garment manufacturing studio specialising in CMT, sampling, alterations and full-scale production for designers and brands.',
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://samcreations.uk/#business',
  name: 'S.A.M. Creations Ltd',
  url: 'https://samcreations.uk',
  logo: 'https://samcreations.uk/apple-icon.png',
  image: 'https://samcreations.uk/og.jpg',
  description:
    'Award-winning London tailoring and garment manufacturing studio specialising in sampling, alterations, manufacturing and soft goods.',
  foundingDate: '2015',
  telephone: '+44 7935 774269',
  email: 'info@samcreationsky.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '174-176 Hither Green Lane',
    addressLocality: 'London',
    postalCode: 'SE13 6QB',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Greater London' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  sameAs: ['https://www.facebook.com/s.a.m.creationsyk/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Garment and textile services',
    itemListElement: [
      'Sampling',
      'Alterations',
      'Garment Manufacturing',
      'Soft Goods and Interior Textiles',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
