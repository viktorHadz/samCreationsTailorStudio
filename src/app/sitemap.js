import { loadCaseStudies } from '@/lib/mdx'

export default async function sitemap() {
  const baseUrl = 'https://samcreations.uk'

  const work = await loadCaseStudies()

  const staticPages = [
    '',
    '/about',
    '/process',
    '/gallery',
    '/work',
    '/contact',
    '/privacy',
  ]

  // static and dynamic URLs
  const urls = [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
    })),
    ...work.map(({ href }) => ({
      url: `${baseUrl}${href}`,
    })),
  ]

  return urls
}
