import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Craftsmanship that spans generations"
        invert
      >
        <p>
          As a family business, we bring together traditional craftsmanship with
          modern innovation, building lasting relationships with every client we
          serve.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Excellence" invert>
            Over 20 years of hard-earned experience ensures we maintain the
            highest standards in every garment we create from the most delicate
            fabrics to the most durable and technically demanding materials.
          </GridListItem>
          <GridListItem title="Sustainability" invert>
            We're committed to positive change in the fashion industry through
            our eco-conscious practices, upcycling initiatives, and waste
            reduction efforts.
          </GridListItem>
          <GridListItem title="Partnership" invert>
            We put our heart and soul into building the best possible
            relationship with each client, treating every design with complete
            confidentiality and care.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-red-700">
          Our skilled team
        </h2>
      </FadeIn>
      <div className="mt-12 space-y-16">
        <FadeInStagger>
          <Border as={FadeIn} />
          <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-2 xl:gap-8">
            <FadeIn>
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  Leadership
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-red-700">
                      Katya Hadzhiyska
                    </p>
                    <p className="text-sm text-neutral-600">
                      Founder, Managing Director & CEO
                    </p>
                    <p className="mt-2 text-sm text-neutral-600">
                      With over 20 years of tailoring experience, Katya founded
                      S.A.M. Creations in 2015 with a vision for exceptional
                      quality and sustainable practices.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold text-neutral-950">
                    Operations
                  </h3>

                  <div>
                    <p className="font-semibold text-red-700">
                      Kaloyan Hadzhiyski
                    </p>
                    <p className="text-sm text-neutral-600">
                      Operations & Design
                    </p>
                    <p className="mt-2 text-sm text-neutral-600">
                      Continuing the family tradition, Kaloyan brings fresh
                      perspectives to our operations while maintaining our
                      commitment to craftsmanship excellence.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  Our team of experts
                </h3>
                <div className="space-y-4 text-sm text-neutral-600">
                  <div>
                    <p className="font-semibold text-red-700">Seamstresses</p>
                    <p>
                      Our team of highly experienced seamstresses brings decades
                      of expertise in garment construction. Skilled in working
                      with complex patterns and intricate details—from delicate
                      fabrics to structured tailoring—they are at the heart of
                      our work, ensuring every stitch meets our exacting
                      standards.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-700">
                      Pattern Cutters
                    </p>
                    <p>
                      Our expert pattern cutters are the bridge between design
                      and construction. With an eye for proportion and
                      precision, they interpret designer visions into accurate,
                      workable patterns that guide every stage of garment
                      creation. Their meticulous approach ensures proper fit,
                      balanced silhouettes, and flawless foundations. They are
                      the backbone of S.A.M. Creations.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-700">
                      Production & Packaging Team
                    </p>
                    <p>
                      Our Production & Packaging Team is involved throughout the
                      manufacturing process, performing ongoing quality checks
                      and identifying issues with a deep understanding of each
                      production stage. When required, they package finished
                      garments to client specifications. Their attention to
                      detail ensures every delivery reflects the quality and
                      craftsmanship of S.A.M. Creations.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'Founded in 2015, S.A.M. Creations is a family business specializing in luxury fashion manufacturing with over 20 years of tailoring expertise.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="A family tradition of exceptional craftsmanship"
      >
        <p>
          Founded in{' '}
          <span className="font-semibold text-red-700">
            2015 by Katya Hadzhiyska
          </span>{' '}
          , S.A.M. Creations has quickly become renowned for delivering
          exceptional quality in luxury fashion manufacturing, combining
          traditional craftsmanship with innovative sustainable practices.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Located in South East London, we are a{' '}
            <span className="font-semibold text-red-700">
              close-knit family business built on passion
            </span>{' '}
            for the fashion industry and a commitment to producing top quality
            garments. Our team of passionate seamstresses possesses a wealth of
            industry experience and the expertise to bring the most intricate
            high-fashion designs to life.
          </p>
          <p>
            We don't believe in letting other people carry out work on our
            behalf — after all, it's our skills and expertise that you're
            placing your trust in. All work is completed in-house for the best
            results, ensuring we get things exactly right, first time, every
            time.
          </p>
          <p>
            Our efficiency helps us ensure that our prices are extremely
            competitive, while our commitment to sustainability through our Kat
            & Rose brand and eco-conscious practices positions us at the
            forefront of responsible fashion manufacturing.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="2015" label="Founded with passion" />
          <StatListItem value="25+" label="Years of expertise" />
          <StatListItem value="100%" label="In-house production" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <ContactSection />
    </>
  )
}
