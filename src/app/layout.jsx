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
    keywords: [
    'garment manufacturer London',
    'CMT studio London',
    'clothing production UK',
    'fashion sampling services',
    'tailoring and alterations London',
    'garment manufacturing services',
    'London garment production',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'S.A.M. Creations Ltd',
    title: 'Garment Manufacturing London',
    description:
      'London tailoring and manufacturing studio providing CMT, sampling, alterations and full-scale garment production for designers and brands.',
    url: 'https://samcreations.uk',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'S.A.M. Creations garment manufacturing studio London',
      },
    ],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.A.M. Creations Ltd',
    description:
      'London tailoring and garment manufacturing studio specialising in CMT, sampling, alterations and full-scale production for designers and brands.',
    images: ['/og.jpg'],
  },
}



export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
