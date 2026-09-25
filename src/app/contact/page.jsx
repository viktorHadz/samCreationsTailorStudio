import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { createMetadata } from '@/lib/metadata'

import { ContactForm } from './ContactForm'

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Contact S.A.M. Creations in South East London about garment sampling, alterations, manufacturing and bespoke textile projects.',
  path: '/contact',
})

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        London studio
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Located in South East London, our dedicated premises are equipped to
        handle everything your design requires, delivering the highest standards
        of craftsmanship.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow our work
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Ready for your next big project?">
        <p>
          From first sample to completed production, we're here to bring your
          designs to life with uncompromising quality and craftsmanship. Let's
          discuss your next project.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
