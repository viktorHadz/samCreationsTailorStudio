import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { GalleryLightbox } from '@/components/GalleryLightbox'
import { loadGalleryImages } from '@/lib/mdx'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Gallery',
  description:
    'Explore garments and projects from S.A.M. Creations’ London studio, showcasing expert tailoring, CMT, sampling and precision garment manufacturing.',
  path: '/gallery',
})

export default async function GalleryPage() {
  let galleryArticles = await loadGalleryImages()

  const images = galleryArticles
    .flatMap((article, articleIndex) => {
      // If the article has multiple images, use those
      if (article.images && Array.isArray(article.images)) {
        return article.images.map((img, imgIndex) => ({
          id: `${articleIndex}-${imgIndex}`,
          src: img.src,
          title: article.title,
          alt: img.alt,
          href: article.href,
        }))
      }
      // Otherwise fall back to single image
      return [
        {
          id: articleIndex,
          src: article.image?.src,
          title: article.title,
          alt: article.image?.alt || article.title,
          href: article.href,
        },
      ]
    })
    .filter((img) => img.src)

  return (
    <>
      <PageIntro eyebrow="Gallery" title="Craftsmanship, up close">
        <p>
          Explore garments, textile details and bespoke pieces from our South
          East London studio, each reflecting the precision and care we bring to
          sampling, alterations and production.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <GalleryLightbox images={images} />
      </Container>

      <ContactSection />
    </>
  )
}
