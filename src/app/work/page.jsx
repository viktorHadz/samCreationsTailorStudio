import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import cawleyDark from '@/images/clients/hannah-cawley/cawleyDarkLogo.svg'
import rQuinnDark from '@/images/clients/richard-quinn/darkRQuinnLogo.svg'
import isabelMansDark from '@/images/clients/isabel-mans/darkIsabelMans.svg'
import fabricFreedomDark from '@/images/clients/fabric-freedom/darkFabricFreedom.svg'
import serenaButeDark from '@/images/clients/serena-bute/darkSerenaBute.svg'
import tataNakaDark from '@/images/clients/tata-naka/darkLettersTataNaka.svg'
import richardMaloneDark from '@/images/clients/richard-malone/darkRichardMalone.svg'
import clioPeppiattDark from '@/images/clients/clio-peppiatt/clioPeppiattDark.svg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Awards & Achievements
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="size-40 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read more about this milestone: ${caseStudy.client}`}
                    >
                      Explore milestone
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Hannah Cawley', cawleyDark],
  ['Richard Quinn', rQuinnDark],
  ['Fabrics for Freedom', fabricFreedomDark],
  ['Isabel Mans', isabelMansDark],
  ['Tata Naka', tataNakaDark],
  ['Serena Bute', serenaButeDark],
  ['Richard Malone', richardMaloneDark],
  ['Clio Peppiatt', clioPeppiattDark],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Trusted by leading designers
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Our Work',
  description: 'Discover our achievements and more.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Excellence recognized across the fashion industry"
      >
        <p>
          Our commitment to exceptional craftsmanship and sustainable practices
          has earned us prestigious awards and the trust of leading fashion
          designers. From eco-conscious manufacturing to launching our own
          sustainable brand, we continue to set new standards in the industry.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Clients />

      <ContactSection />
    </>
  )
}
