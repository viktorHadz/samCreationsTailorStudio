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
  { title: 'Contact us', href: '/contact' },
]

function Navigation() {
  return (
    <nav
      aria-label="Footer"
      className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm/6 sm:gap-x-8 md:gap-x-12"
    >
      {navigation.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="rounded-md px-2 py-1 text-gray-600 transition-colors duration-200 hover:text-red-700"
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-16 w-full sm:mt-24 lg:mt-32">
      <FadeIn>
        {/* Navigation Section */}
        <div className="relative px-4 sm:px-0">
          <div className="absolute -top-8 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-700 to-transparent sm:-top-12 sm:w-16"></div>
          <Navigation />
        </div>

        {/* Main Footer Content */}
        <div className="mt-12 border-t border-neutral-950/10 pt-8 sm:pt-12">
          {/* Mobile Layout: Stacked */}
          <div className="flex flex-col items-center gap-8 sm:hidden">
            <Link href="/" aria-label="Home" className="group">
              <Logo />
            </Link>

            <SocialMedia className="flex justify-center" />

            <p className="text-center text-xs text-neutral-700">
              {new Date().getFullYear()} S.A.M. Creations Ltd. Est - 2015
            </p>
          </div>

          {/* Tablet Layout: Two Rows */}
          <div className="hidden gap-8 sm:flex sm:flex-col lg:hidden">
            {/* First Row: Logo and Social Media */}
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Home" className="group">
                <Logo />
              </Link>
              <SocialMedia />
            </div>

            {/* Second Row: Copyright */}
            <div className="flex justify-center">
              <p className="text-sm text-neutral-700">
                {new Date().getFullYear()} S.A.M. Creations Ltd. Est - 2015
              </p>
            </div>
          </div>

          {/* Desktop Layout: Single Row */}
          <div className="hidden lg:flex lg:items-center lg:justify-between">
            <Link href="/" aria-label="Home" className="group">
              <Logo />
            </Link>

            <div className="flex items-center gap-8">
              <SocialMedia />
              <div className="h-6 w-px bg-neutral-950/10"></div>
              <p className="text-sm whitespace-nowrap text-neutral-700">
                {new Date().getFullYear()} S.A.M. Creations Ltd. Est - 2015
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
// function Navigation() {
//   return (
//     <nav>
//       <ul role="list" className="grid grid-cols-2 gap-8">
//         {navigation.map((section, sectionIndex) => (
//           <li key={sectionIndex} className="text-center">
//             <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
//               {section.title}
//             </div>
//             <ul role="list" className="mt-4 text-sm text-neutral-700">
//               {section.links.map((link, linkIndex) => (
//                 <li key={linkIndex} className="mt-4">
//                   <Link
//                     href={link.href}
//                     className="transition hover:text-neutral-950"
//                   >
//                     {link.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

// function NewsletterForm() {
//   return (
//     <form className="max-w-sm">
//       <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
//         Sign up for our newsletter
//       </h2>
//       <p className="mt-4 text-sm text-neutral-700">
//         Subscribe to get the latest design news, articles, resources and
//         inspiration.
//       </p>
//       <div className="relative mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           autoComplete="email"
//           aria-label="Email address"
//           className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
//         />
//         <div className="absolute inset-y-1 right-1 flex justify-end">
//           <button
//             type="submit"
//             aria-label="Submit"
//             className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
//           >
//             <ArrowIcon className="w-4" />
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }
