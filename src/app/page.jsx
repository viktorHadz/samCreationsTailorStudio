import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoHannahCawleyDark from '@/images/clients/hannah-cawley/cawleyDarkLogo.svg'
import cawleyLight from '@/images/clients/hannah-cawley/cawleyLightLogo.svg'
import rQuinnLight from '@/images/clients/richard-quinn/lightRQuinnLogo.svg'
import isabelMansLight from '@/images/clients/isabel-mans/lightIsabelMans.svg'
import fabricFreedomLight from '@/images/clients/fabric-freedom/lightFabricFreedom.svg'
import serenaButelight from '@/images/clients/serena-bute/lightSerenaBute.svg'
import tataNakaLight from '@/images/clients/tata-naka/lightTataNaka.svg'
import imagePatterns from '@/images/hozPatterns.webp'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Cawley', cawleyLight],
  ['Quinn', rQuinnLight],
  ['FabricsForFreedom', fabricFreedomLight],
  ['IsabelMans', isabelMansLight],
  ['Tata Naka', tataNakaLight],
  ['Serena Bute', serenaButelight],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="my-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex items-center justify-center">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
        <FadeIn className="flex items-center gap-x-8">
          <div className="h-px flex-auto bg-neutral-800" />
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            ...and many more
          </h2>
        </FadeIn>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Bringing exceptional designers' visions to life"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From <span className="font-semibold text-red-700">concept</span> to{' '}
          <span className="font-semibold text-red-700">creation</span>, we
          collaborate with luxury fashion designers to transform their artistic
          vision into impeccably crafted garments. Each project showcases our
          commitment to{' '}
          <span className="font-semibold text-red-700">
            precision, quality, and creative partnership
          </span>
          .
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <Link href={caseStudy.href} className="w-full">
                <article className="group relative flex w-full cursor-pointer flex-col rounded-3xl p-4 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 hover:ring-red-700/10 sm:p-6">
                  <h3 className="absolute -top-5 right-0">
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="size-20 transition-all duration-500 group-hover:brightness-100 lg:brightness-70 lg:grayscale lg:group-hover:grayscale-0"
                      unoptimized
                    />
                  </h3>
                  <div className="mt-3 flex items-center gap-x-2 text-sm text-neutral-950">
                    <time
                      dateTime={caseStudy.date.split('-')[0]}
                      className="font-semibold text-red-700"
                    >
                      {caseStudy.date.split('-')[0]}
                    </time>
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    <span>Milestone</span>
                  </div>
                  <p className="mt-3 font-display text-xl font-semibold text-neutral-950">
                    {caseStudy.title}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {caseStudy.description}
                  </p>
                </article>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you create exceptional garments with passion and unmatched expertise"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From our dedicated premises in South East London, we work with a broad
          range of fabrics from the most delicate materials right through to
          leather and suede. Our highly skilled team ensures everything is
          completed to the highest standards.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imagePatterns}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Sampling">
              We create precise samples that bring your designs to life. Our
              team of highly skilled seamstresses work with any fabric your
              design requires - from the most delicate materials through to
              leather and suede.
            </ListItem>
            <ListItem title="Alterations">
              Expert alterations for hundreds of community members we've proudly
              served over the years. From special occasion wear to everyday
              garments, we bring professional attention to detail to help people
              feel confident and look their best.
            </ListItem>
            <ListItem title="Manufacturing">
              All work completed in-house for the best results. We don't believe
              in letting other people carry out work on our behalf - it's our
              responsibility to get things exactly right, first time, every
              time.
            </ListItem>
            <ListItem title="Designer Partnership">
              We put our heart and soul into building the best possible
              relationship with each client. All designs are treated with
              complete confidentiality, protecting your intellectual property at
              all times.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are an award-winning, London-based tailoring studio focused on production and manufacturing, while also providing alterations for the community.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-64">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            <span className="relative">
              Award-winning garment manufacturing
            </span>{' '}
            in London.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are{' '}
            <span className="font-semibold text-red-700">
              S.A.M. Creations Ltd
            </span>{' '}
            — specializing in Sampling, Alterations and Manufacturing for luxury
            fashion. From our South East London studio, we bring designers'
            visions to life with uncompromising quality and craftsmanship since
            2015.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Hannah Cawley', logo: logoHannahCawleyDark }}
        websiteLink="https://cawleystudio.com/"
      >
        S.A.M. Creations has been our trusted manufacturing partner for over 8
        years. Their exceptional quality, attention to detail, and deep
        understanding of luxury fashion manufacturing makes them invaluable to
        our collections. The longevity of our partnership speaks to their
        reliability and commitment to excellence.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
