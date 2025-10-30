export default function robots() {
    const baseUrl = 'https://samcreations.uk'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
