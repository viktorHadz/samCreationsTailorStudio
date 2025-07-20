import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageSampling from '@/images/sampling.webp'
import imageProduction from '@/images/production.webp'
import imageQuality from '@/images/qualityControl.webp'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[40rem] flex-none lg:w-[55rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 52rem, 38rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-red-700 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Sampling() {
  return (
    <Section
      title="Sampling & Quotation"
      image={{ src: imageSampling, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We can begin your project in two ways: creating a precise{' '}
          <strong className="font-semibold text-neutral-950">sample</strong>{' '}
          from your design specifications, or working from a sample you provide.
          Our skilled seamstresses work meticulously to craft or replicate
          garments that capture every detail of your vision.
        </p>
        <p>
          When producing the sample, we quote on an{' '}
          <strong className="font-semibold text-neutral-950">
            hourly basis
          </strong>{' '}
          initially, then provide a comprehensive production{' '}
          <strong className="font-semibold text-neutral-950">quote</strong> once
          we understand the complexity and time investment required.
        </p>
        <p>
          Sampling is not just our starting point—it’s how we ensure your
          collection is produced with precision, transparency, and confidence
          from the very beginning.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What we provide
      </h3>
      <TagList className="mt-4">
        <TagListItem>Prototype development</TagListItem>
        <TagListItem>Fabric compatibility testing</TagListItem>
        <TagListItem>Technical specifications review</TagListItem>
        <TagListItem>Detailed cost estimation</TagListItem>
        <TagListItem>Timeline planning</TagListItem>
        <TagListItem>Design consultation</TagListItem>
      </TagList>
    </Section>
  )
}

function MaterialsAndProduction() {
  return (
    <Section
      title="Materials & Production Setup"
      image={{ src: imageProduction, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Upon project approval, we receive your{' '}
          <strong className="font-semibold text-neutral-950">patterns</strong>,
          fabrics, and all necessary materials. Our team conducts a thorough
          inventory to ensure everything is ready for production.
        </p>
        <p>
          We treat your materials with care, understanding that each fabric
          represents your creative vision. Our workspace is organized to
          maintain the integrity of your materials throughout the{' '}
          <strong className="font-semibold text-neutral-950">
            manufacturing process
          </strong>
          .
        </p>
        <p>
          Before production begins, we conduct a final review of all
          specifications, ensuring our team understands your requirements and
          quality expectations. This preparation helps ensure consistent results
          across your{' '}
          <strong className="font-semibold text-neutral-950">production</strong>
          .
        </p>
      </div>

      <Blockquote
        author={{ name: 'Richard Malone', role: 'Fashion Designer' }}
        className="mt-12"
      >
        The care S.A.M. takes with our materials and patterns gives us
        confidence. They understand that whether we're working with luxury
        fabrics or sustainable materials, each piece deserves the same level of
        attention.
      </Blockquote>
    </Section>
  )
}

function QualityAndDelivery() {
  return (
    <Section
      title="Quality Control & Delivery"
      image={{ src: imageQuality, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every single garment undergoes rigorous{' '}
          <strong className="font-semibold text-neutral-950">
            quality control
          </strong>{' '}
          as it's completed. Our experienced seamstresses inspect each piece for
          construction integrity, finish quality, and adherence to your
          specifications.
        </p>
        <p>
          We understand that your brand reputation depends on the{' '}
          <strong className="font-semibold text-neutral-950">
            consistency
          </strong>{' '}
          and excellence of every piece that leaves our studio. This is why we
          never rush the quality control process, ensuring each garment meets
          our exacting standards before approval.
        </p>
        <p>
          When required, we provide{' '}
          <strong className="font-semibold text-neutral-950">
            labeling and packaging
          </strong>{' '}
          services, presenting your finished garments appropriately for their
          intended use. Every order is carefully prepared for transport to your
          specified destination.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Final stage services
      </h3>
      <List className="mt-8">
        <ListItem title="Individual Inspection">
          Each garment is thoroughly examined for construction quality,
          measurements, and finishing details before approval.
        </ListItem>
        <ListItem title="Professional Labeling">
          Custom labeling services to ensure your brand identity is perfectly
          represented in every piece.
        </ListItem>
        <ListItem title="Secure Packaging">
          Careful packaging and preparation for transport, maintaining garment
          integrity throughout delivery.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Craftsmanship built on trust and excellence"
      >
        <p>
          Since 2015, we've built our reputation on unwavering commitment to
          quality, confidentiality, and client partnership. These core values
          guide every aspect of our work, from the first sample to final
          delivery.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precision">
            Every stitch, every measurement, every detail is executed with
            meticulous attention. We understand that your designs demand nothing
            less than perfection.
          </GridListItem>
          <GridListItem title="Efficiency">
            We pride ourselves on meeting tight deadlines without compromising
            quality. Fashion moves fast, and we move with it while maintaining
            our exacting standards.
          </GridListItem>
          <GridListItem title="Confidentiality">
            Your designs and intellectual property are protected with the same
            care we give to the finished garments. Complete discretion is
            fundamental to our service.
          </GridListItem>
          <GridListItem title="Partnership">
            We don't just manufacture your designs—we collaborate with you to
            bring your creative vision to life, offering insights gained from
            years of luxury fashion experience.
          </GridListItem>
          <GridListItem title="Quality">
            All work is completed in-house by our skilled team. We never
            outsource because your reputation depends on the consistency and
            excellence of every piece.
          </GridListItem>
          <GridListItem title="Innovation">
            While respecting traditional craftsmanship techniques, we embrace
            modern methods and materials to deliver the best possible results
            for contemporary fashion.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'From sampling to delivery, discover how S.A.M. Creations transforms luxury fashion designs into impeccably crafted garments.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="From concept to creation">
        <p>
          Our streamlined process ensures that every garment we create meets the
          exacting standards of luxury fashion. From initial sampling through
          final delivery, we maintain complete quality control and
          confidentiality at every step.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Sampling />
        <MaterialsAndProduction />
        <QualityAndDelivery />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
