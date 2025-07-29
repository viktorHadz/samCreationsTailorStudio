import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { SocialMedia } from '@/components/SocialMedia'

const navigation = [
  { title: 'About', href: '/about' },
  { title: 'Process', href: '/process' },
  { title: 'Achievements', href: '/work' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        {/* Main Footer Content */}
        <div className="flex flex-col items-center">
          {/* Logo - Large and Centered */}
          <Link href="/" aria-label="Home" className="group">
            <Logo />
          </Link>

          {/* Navigation - Horizontal List */}
          <nav className="mt-12">
            <ul className="flex flex-wrap items-center justify-center gap-x-1 text-sm font-medium">
              {navigation.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className="px-3 py-1 text-neutral-600 transition hover:text-red-700"
                  >
                    {item.title}
                  </Link>
                  {index < navigation.length - 1 && (
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media */}
          <SocialMedia className="mt-8" />

          {/* Divider */}
          <div className="mt-12 h-px w-full bg-neutral-950/10" />

          {/* Copyright */}
          <div className="mt-8 mb-12 text-center">
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} S.A.M. Creations Ltd.
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Award-winning garment manufacturing since 2015
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
