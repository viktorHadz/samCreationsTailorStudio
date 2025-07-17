import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { Gallery } from '@/components/Gallery'
import { loadGalleryImages } from '@/lib/mdx'

export const metadata = {
  title: 'Gallery',
  description:
    'Explore our portfolio of exceptional garments, showcasing our commitment to precision, quality, and creative partnership with luxury fashion designers.',
}

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
          href: article.href,
        }))
      }
      // Otherwise fall back to single image
      return [
        {
          id: articleIndex,
          src: article.image?.src,
          title: article.title,
          href: article.href,
        },
      ]
    })
    .filter((img) => img.src)

  return (
    <>
      <PageIntro eyebrow="Gallery" title="Showcasing our finest craftsmanship">
        <p>
          Explore our portfolio of exceptional garments, each piece representing
          our commitment to precision, quality, and creative partnership with
          luxury fashion designers.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <Gallery images={images} />
      </Container>

      <ContactSection />
    </>
  )
}
