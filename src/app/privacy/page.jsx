import Link from 'next/link'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Privacy Notice',
  description:
    'How S.A.M. Creations Ltd collects, uses and protects personal information submitted through this website.',
  path: '/privacy',
})

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Privacy" title="Privacy notice">
        <p>
          This notice explains how S.A.M. Creations Ltd uses personal
          information provided through this website and in related business
          correspondence.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24">
        <div className="max-w-3xl space-y-10 text-base text-neutral-600">
          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Who we are
            </h2>
            <p className="mt-4">
              S.A.M. Creations Ltd is the controller of the personal information
              described here. You can contact us at 174-176 Hither Green Lane,
              London, SE13 6QB, by phone on 07935 774269, or by email at{' '}
              <a className="underline" href="mailto:info@samcreationsky.co.uk">
                info@samcreationsky.co.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Information we collect and why
            </h2>
            <p className="mt-4">
              When you contact us, we may collect your name, email address,
              company, phone number, requested service, project information and
              subsequent correspondence. We use it to answer enquiries, prepare
              quotations, discuss potential work and maintain relevant business
              records.
            </p>
            <p className="mt-4">
              We process information when it is necessary to take steps at your
              request before entering into a contract. For general enquiries and
              relevant business correspondence, we rely on our legitimate
              interest in communicating with prospective and existing clients.
              We do not use enquiry details for unrelated marketing without an
              appropriate lawful basis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Sharing and retention
            </h2>
            <p className="mt-4">
              We share information only when necessary with service providers
              that support our website, hosting and email delivery, including
              Resend for enquiry emails, or when required by law. We do not sell
              personal information.
            </p>
            <p className="mt-4">
              Enquiry information is retained only for as long as reasonably
              necessary to handle enquiries, maintain relevant business
              correspondence and meet legal obligations. The appropriate period
              depends on the nature of the enquiry and whether it develops into
              a client relationship.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Your rights
            </h2>
            <p className="mt-4">
              Depending on the circumstances, you may have rights to access,
              correct, erase or restrict your information, object to its use, or
              receive a portable copy. Contact us using the details above to
              make a request. You can also complain to the{' '}
              <a
                className="underline"
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Information Commissioner’s Office
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Website storage and updates
            </h2>
            <p className="mt-4">
              This site does not currently use analytics or advertising cookies.
              It may use essential browser storage for interface behaviour.
              External websites linked from this site have their own privacy
              practices.
            </p>
            <p className="mt-4">
              We may update this notice when our processing changes. This
              version was last updated on 25 September 2026.
            </p>
          </section>

          <p>
            <Link href="/contact" className="font-semibold underline">
              Contact us about your information
            </Link>
          </p>
        </div>
      </Container>
    </>
  )
}
