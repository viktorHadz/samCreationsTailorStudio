
import { loadCaseStudies, loadGalleryImages } from '@/lib/mdx'

export default async function sitemap() {
    const baseUrl = 'https://samcreations.uk'

    // Pull data from MDX sources dynamically
    const [work, gallery] = await Promise.all([
        loadCaseStudies(),
        loadGalleryImages(),
    ])

    const staticPages = [
        '',
        '/about',
        '/process',
        '/gallery',
        '/work',
        '/contact',
    ]

    // static and dynamic URLs
    const urls = [
        ...staticPages.map((path) => ({
            url: `${baseUrl}${path}`,
            lastModified: new Date(),
        })),
        ...work.map(({ href }) => ({
            url: `${baseUrl}${href}`,
            lastModified: new Date(),
        })),
        ...gallery.map(({ href }) => ({
            url: `${baseUrl}${href}`,
            lastModified: new Date(),
        })),
    ]

    return urls
}
