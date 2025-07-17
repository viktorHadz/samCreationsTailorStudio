import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { SocialMedia } from '@/components/SocialMedia'
const navigation = [
  { title: 'About', href: '/about' },
  { title: 'Process', href: '/process' },
  { title: 'Achievements', href: '/work' },
  { title: 'Contact us', href: '/contact' },
]

function Navigation() {
  return (
    <nav
      aria-label="Footer"
      className="flex flex-wrap justify-center gap-x-12 text-sm/6"
    >
      {navigation.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="text-gray-600 hover:text-red-700"
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8">
          <div className="relative">
            <div className="absolute -top-12 left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-700 to-transparent"></div>
            <Navigation />
          </div>
        </div>
        <div className="mt-12 mb-12 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home" className="group">
            <Logo
              className="h-8 transition-all duration-300 group-hover:scale-105"
              fillOnHover
            />
          </Link>

          <SocialMedia></SocialMedia>
          <p className="text-sm text-neutral-700">
            S.A.M. Creations Ltd {new Date().getFullYear()}
          </p>
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
