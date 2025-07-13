import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { Offices } from '@/components/Offices'
import imageRedDress from '@/images/redDressScissors.webp'
export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 overflow-hidden rounded-4xl bg-neutral-950 sm:mx-0">
        <div className="grid lg:min-h-[45rem] lg:grid-cols-2">
          {/* Text Content */}
          <div className="relative z-10 px-6 py-20 sm:px-12 sm:py-32 lg:flex lg:items-center lg:pr-8 lg:pl-16">
            <div className="w-full">
              <div className="mx-auto max-w-xl lg:mx-0">
                <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Ready to bring your collection to life?
                </h2>
                <p className="mt-6 text-base text-neutral-300">
                  From first sample to finished production, our highly skilled
                  seamstresses create exceptional garments that meet the highest
                  standards.
                </p>
                <div className="mt-8">
                  <Button
                    href="/contact"
                    invert
                    className="transition-colors hover:bg-red-700 hover:text-white"
                  >
                    Let's Discuss
                  </Button>
                </div>
              </div>

              {/* Studio Info + Mobile Image Row */}
              <div className="mt-10 border-t border-white/10 pt-10">
                <div className="relative grid min-h-[20rem] grid-cols-2 lg:block">
                  {/* Studio Info */}
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      Our studio
                    </h3>
                    <Offices invert className="mt-6" />
                  </div>
                  {/* Mobile Image - Bottom right corner */}
                  <div className="relative lg:hidden">
                    <div className="absolute -right-40 -bottom-25 h-106 w-65 3xs:-right-30 3xs:w-75 2xs:-right-25 2xs:w-85 xs:-right-20 xs:w-95 sm:-bottom-40 sm:h-126 sm:w-95">
                      <FadeIn>
                        <StylizedImage
                          src={imageRedDress}
                          alt="Precision craftsmanship"
                          className="h-full w-full"
                          shape={2}
                        />
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image - Full height, no padding */}
          <div className="relative hidden lg:block">
            <FadeIn className="absolute inset-y-0 right-0 left-0 w-[130%]">
              <StylizedImage
                src={imageRedDress}
                alt="Precision craftsmanship and attention to detail"
                className="h-full w-full object-cover"
                shape={2}
              />
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
