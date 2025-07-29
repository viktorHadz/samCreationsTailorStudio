import { useEffect, useState, useMemo, useCallback } from 'react'
import clsx from 'clsx'

// Constants
const MOBILE_BREAKPOINT = 1024
const PULSE_DURATION = 5000
const ANIMATION_DELAYS = {
  lines: '100ms',
  text1: '200ms',
  text2: '400ms',
  text3: '600ms',
  text4: '400ms',
  text5: '200ms',
}

export function Logo({ className, invert = false, filled = false, ...props }) {
  // Memoize colors to prevent recreation on every render
  const colors = useMemo(
    () => ({
      primary: invert ? '#FFFFFF' : '#A32F31',
      alwaysRed: invert ? '#A32F31' : '#A32F31',
      text: invert ? '#FFFFFF' : '#1F2937',
    }),
    [invert],
  )

  const [isMobile, setIsMobile] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const [showPulse, setShowPulse] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    checkMobile()

    // Debounce resize events
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkMobile, 150)
    }

    window.addEventListener('resize', handleResize)

    // Handle pulse animation on mobile
    let pulseTimeoutId
    try {
      if (
        window.innerWidth < MOBILE_BREAKPOINT &&
        !sessionStorage.getItem('logoPrompted')
      ) {
        setShowPulse(true)
        sessionStorage.setItem('logoPrompted', 'true')
        pulseTimeoutId = setTimeout(() => setShowPulse(false), PULSE_DURATION)
      }
    } catch (error) {
      console.debug('SessionStorage unavailable:', error)
    }

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
      if (pulseTimeoutId) clearTimeout(pulseTimeoutId)
    }
  }, [])

  const handleClick = useCallback(() => {
    if (isMobile) {
      setIsAnimated((prev) => !prev)
    }
  }, [isMobile])

  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <svg
        viewBox="0 0 788 549"
        fill="none"
        className={clsx(
          'h-52 w-52 cursor-pointer transition-transform focus:outline-none',
          isMobile ? 'cursor-pointer' : 'group cursor-default',
          showPulse && 'animate-pulse',
        )}
        onClick={handleClick}
        role={isMobile ? 'button' : 'img'}
        aria-label="S.A.M. Creations Logo"
        tabIndex={isMobile ? 0 : -1}
        onKeyDown={
          isMobile
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleClick()
                }
              }
            : undefined
        }
      >
        {/* Top diamond */}
        <path
          d="M389.492 4.39988C392.213 2.5082 396.624 2.5082 399.345 4.39989L787.994 274.625L398.861 50.6718C396.284 49.1885 392.554 49.1885 389.976 50.6718L0.843511 274.625L389.492 4.39988Z"
          fill={colors.primary}
          stroke={colors.primary}
          strokeWidth="0"
          className={clsx(
            'transition-transform duration-500 ease-in-out',
            !isMobile && 'group-hover:-translate-y-12',
            isMobile && isAnimated && '-translate-y-12',
          )}
        />

        {/* Bottom diamond */}
        <path
          d="M399.345 544.85C396.624 546.742 392.213 546.742 389.493 544.85L0.84375 274.625L389.977 498.578C392.554 500.062 396.284 500.062 398.861 498.578L787.994 274.625L399.345 544.85Z"
          fill={colors.primary}
          stroke={colors.primary}
          strokeWidth="0"
          className={clsx(
            'transition-transform duration-500 ease-in-out',
            !isMobile && 'group-hover:translate-y-12',
            isMobile && isAnimated && 'translate-y-12',
          )}
        />

        {/* Specialised Tailoring Services */}
        <text
          x="394"
          y="110"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-zain text-[78px] font-medium"
        >
          <tspan
            x="386"
            fill={colors.text}
            className={clsx(
              '-translate-y-2 tracking-tight opacity-0 transition-all duration-500 ease-out',
              !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
              isMobile && isAnimated && 'translate-y-0 opacity-100',
            )}
            style={{
              transitionDelay: ANIMATION_DELAYS.text1,
              transformOrigin: 'center',
            }}
          >
            specialised
          </tspan>
          <tspan
            x="394"
            dy="60"
            fill={colors.text}
            className={clsx(
              '-translate-y-2 opacity-0 transition-all duration-500 ease-out',
              !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
              isMobile && isAnimated && 'translate-y-0 opacity-100',
            )}
            style={{
              transitionDelay: ANIMATION_DELAYS.text2,
              transformOrigin: 'center',
            }}
          >
            tailoring
          </tspan>
          <tspan
            dx="50"
            fill={colors.text}
            className={clsx(
              '-translate-y-2 opacity-0 transition-all duration-500 ease-out',
              !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
              isMobile && isAnimated && 'translate-y-0 opacity-100',
            )}
            style={{
              transitionDelay: ANIMATION_DELAYS.text3,
              transformOrigin: 'center',
            }}
          >
            services
          </tspan>
        </text>

        {/* Top line */}
        <path
          d="M80 213 L150 210 L678 210 L688 213 L630 216 L110 216 Z"
          fill={colors.alwaysRed}
          className={clsx(
            'scale-x-0 transition-transform duration-[400ms] ease-out',
            !isMobile && 'group-hover:scale-x-100',
            isMobile && isAnimated && 'scale-x-100',
          )}
          style={{
            transformOrigin: 'center',
            transitionDelay: ANIMATION_DELAYS.lines,
          }}
        />

        {/* Company name */}
        <text
          x="394"
          y="320"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={colors.text}
          className="font-zain text-[100px] font-bold tracking-tight uppercase"
        >
          <tspan x="394" dy={filled ? '-60' : '-44'}>
            s.a.m. creations
          </tspan>
        </text>

        {/* Bottom line */}
        <path
          d="M88 323 L150 320 L678 320 L688 323 L630 326 L110 326 Z"
          fill={colors.alwaysRed}
          className={clsx(
            'scale-x-0 transition-transform duration-[400ms] ease-out',
            !isMobile && 'group-hover:scale-x-100',
            isMobile && isAnimated && 'scale-x-100',
          )}
          style={{
            transformOrigin: 'center',
            transitionDelay: ANIMATION_DELAYS.lines,
          }}
        />

        {/* Sampling Alterations Manufacturing */}
        <text
          x="394"
          y="365"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-zain text-[78px] font-medium"
        >
          <tspan
            x="392"
            fill={colors.text}
            className={clsx(
              'translate-y-2 opacity-0 transition-all duration-500 ease-out',
              !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
              isMobile && isAnimated && 'translate-y-0 opacity-100',
            )}
            style={{
              transitionDelay: ANIMATION_DELAYS.text4,
              transformOrigin: 'center',
            }}
          >
            sampling alterations
          </tspan>
          <tspan
            x="388"
            dy="65"
            fill={colors.text}
            className={clsx(
              'translate-y-2 tracking-tighter opacity-0 transition-all duration-500 ease-out',
              !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
              isMobile && isAnimated && 'translate-y-0 opacity-100',
            )}
            style={{
              transitionDelay: ANIMATION_DELAYS.text5,
              transformOrigin: 'center',
            }}
          >
            manufacturing
          </tspan>
        </text>
      </svg>
    </div>
  )
}
// import { useEffect, useState } from 'react'
// import clsx from 'clsx'

// export function Logo({ className, invert = false, filled = false, ...props }) {
//   const colors = {
//     primary: invert ? '#FFFFFF' : '#A32F31',
//     text: invert ? '#FFFFFF' : '#1F2937',
//   }

//   const [isMobile, setIsMobile] = useState(false)
//   const [isAnimated, setIsAnimated] = useState(false)
//   const [showPulse, setShowPulse] = useState(false)

//   useEffect(() => {
//     // Better mobile detection using viewport width
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024) // Tailwind's md breakpoint
//     }

//     checkMobile()
//     window.addEventListener('resize', checkMobile)

//     // Show pulse hint for first-time mobile users
//     if (window.innerWidth < 1024 && !sessionStorage.getItem('logoPrompted')) {
//       setShowPulse(true)
//       sessionStorage.setItem('logoPrompted', 'true')
//       setTimeout(() => setShowPulse(false), 5000)
//     }

//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const handleClick = () => {
//     if (isMobile) {
//       setIsAnimated((prev) => !prev)
//     }
//   }

//   return (
//     <div className={clsx('flex-col', className)} {...props}>
//       <svg
//         viewBox="0 0 788 549"
//         fill="none"
//         className={clsx(
//           'flex size-52 transition-transform',
//           isMobile ? 'cursor-pointer' : 'group cursor-default',
//           showPulse && 'animate-pulse',
//         )}
//         onClick={handleClick}
//       >
//         {/* Top diamond */}
//         <path
//           d="M389.492 4.39988C392.213 2.5082 396.624 2.5082 399.345 4.39989L787.994 274.625L398.861 50.6718C396.284 49.1885 392.554 49.1885 389.976 50.6718L0.843511 274.625L389.492 4.39988Z"
//           fill={colors.primary}
//           stroke={colors.primary}
//           strokeWidth="0"
//           className={clsx(
//             'transition-transform duration-500 ease-in-out',
//             !isMobile && 'group-hover:-translate-y-15',
//             isMobile && isAnimated && '-translate-y-15',
//           )}
//         />

//         {/* Bottom diamond */}
//         <path
//           d="M399.345 544.85C396.624 546.742 392.213 546.742 389.493 544.85L0.84375 274.625L389.977 498.578C392.554 500.062 396.284 500.062 398.861 498.578L787.994 274.625L399.345 544.85Z"
//           fill={colors.primary}
//           stroke={colors.primary}
//           strokeWidth="0"
//           className={clsx(
//             'transition-transform duration-500 ease-in-out',
//             !isMobile && 'group-hover:translate-y-15',
//             isMobile && isAnimated && 'translate-y-15',
//           )}
//         />

//         {/* Specialised Tailoring Services */}
//         <text
//           x="394"
//           y="110"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           className="font-zain text-[78px] font-medium"
//         >
//           <tspan
//             x="386"
//             fill={colors.text}
//             className={clsx(
//               '-translate-y-2 tracking-tight opacity-0 transition-all duration-500 ease-out',
//               !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
//               isMobile && isAnimated && 'translate-y-0 opacity-100',
//             )}
//             style={{
//               transitionDelay: '200ms',
//               transformOrigin: 'center',
//             }}
//           >
//             specialised
//           </tspan>
//           <tspan
//             x="394"
//             dy="60"
//             fill={colors.text}
//             className={clsx(
//               '-translate-y-2 opacity-0 transition-all duration-500 ease-out',
//               !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
//               isMobile && isAnimated && 'translate-y-0 opacity-100',
//             )}
//             style={{
//               transitionDelay: '400ms',
//               transformOrigin: 'center',
//             }}
//           >
//             tailoring
//           </tspan>
//           <tspan
//             dx="50"
//             fill={colors.text}
//             className={clsx(
//               '-translate-y-2 opacity-0 transition-all duration-500 ease-out',
//               !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
//               isMobile && isAnimated && 'translate-y-0 opacity-100',
//             )}
//             style={{
//               transitionDelay: '600ms',
//               transformOrigin: 'center',
//             }}
//           >
//             services
//           </tspan>
//         </text>

//         {/* Top line */}
//         <path
//           d="M80 213 L150 210 L678 210 L688 213 L630 216 L110 216 Z"
//           fill="#A32F31"
//           className={clsx(
//             'scale-x-0 transition-transform duration-400 ease-out',
//             !isMobile && 'group-hover:scale-x-100',
//             isMobile && isAnimated && 'scale-x-100',
//           )}
//           style={{
//             transformOrigin: 'center',
//             transitionDelay: '100ms',
//           }}
//         />

//         {/* Company name */}
//         <text
//           x="394"
//           y="320"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           fill={colors.text}
//           className="font-zain text-[100px] font-bold tracking-tight uppercase"
//         >
//           <tspan x="394" dy={filled ? '-60' : '-44'}>
//             s.a.m. creations
//           </tspan>
//         </text>

//         {/* Bottom line */}
//         <path
//           d="M88 323 L150 320 L678 320 L688 323 L630 326 L110 326 Z"
//           fill="#A32F31"
//           className={clsx(
//             'scale-x-0 transition-transform duration-400 ease-out',
//             !isMobile && 'group-hover:scale-x-100',
//             isMobile && isAnimated && 'scale-x-100',
//           )}
//           style={{
//             transformOrigin: 'center',
//             transitionDelay: '100ms',
//           }}
//         />

//         {/* Sampling Alterations Manufacturing */}
//         <text
//           x="394"
//           y="365"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           className="font-zain text-[78px] font-medium"
//         >
//           <tspan
//             x="392"
//             fill={colors.text}
//             className={clsx(
//               'translate-y-2 opacity-0 transition-all duration-500 ease-out',
//               !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
//               isMobile && isAnimated && 'translate-y-0 opacity-100',
//             )}
//             style={{
//               transitionDelay: '400ms',
//               transformOrigin: 'center',
//             }}
//           >
//             sampling alterations
//           </tspan>
//           <tspan
//             x="388"
//             dy="65"
//             fill={colors.text}
//             className={clsx(
//               'translate-y-2 tracking-tighter opacity-0 transition-all duration-500 ease-out',
//               !isMobile && 'group-hover:translate-y-0 group-hover:opacity-100',
//               isMobile && isAnimated && 'translate-y-0 opacity-100',
//             )}
//             style={{
//               transitionDelay: '200ms',
//               transformOrigin: 'center',
//             }}
//           >
//             manufacturing
//           </tspan>
//         </text>
//       </svg>
//     </div>
//   )
// }
// import clsx from 'clsx'

// export function Logo({ className, invert = false, filled = false, ...props }) {
//   const colors = {
//     primary: invert ? '#FFFFFF' : '#A32F31',
//     text: invert ? '#FFFFFF' : '#1F2937',
//   }

//   return (
//     <div className={clsx('flex-col', className)} {...props}>
//       <svg
//         viewBox="0 0 788 549"
//         fill="none"
//         className="group flex size-52 cursor-pointer"
//       >
//         {/* Bottom diamond */}
//         <path
//           d="M399.345 544.85C396.624 546.742 392.213 546.742 389.493 544.85L0.84375 274.625L389.977 498.578C392.554 500.062 396.284 500.062 398.861 498.578L787.994 274.625L399.345 544.85Z"
//           fill={colors.primary}
//           stroke={colors.primary}
//           strokeWidth="0"
//         />

//         {/* Top diamond */}
//         <path
//           d="M389.492 4.39988C392.213 2.5082 396.624 2.5082 399.345 4.39989L787.994 274.625L398.861 50.6718C396.284 49.1885 392.554 49.1885 389.976 50.6718L0.843511 274.625L389.492 4.39988Z"
//           fill={colors.primary}
//           stroke={colors.primary}
//           strokeWidth="0"
//         />

//         {/* Specialised Tailoring Services - appear on hover */}
//         <text
//           x="394"
//           y="145"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           className="font-zain font-medium opacity-0 transition-all duration-200 group-hover:opacity-100"
//           style={{
//             transitionDelay: '400ms',
//             animationDelay: '400ms',
//           }}
//         >
//           <tspan
//             x="388"
//             fill={colors.text}
//             className="text-[68px] opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100"
//             style={{
//               transitionDelay: '400ms',
//               animationDelay: '600ms',
//               '--tw-pulse-color': '#B91C1C',
//             }}
//           >
//             specialised
//           </tspan>
//           <tspan
//             x="394"
//             dy="55"
//             fill={colors.text}
//             className="text-[72px] opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100"
//             style={{
//               transitionDelay: '600ms',
//               animationDelay: '800ms',
//               '--tw-pulse-color': '#B91C1C',
//             }}
//           >
//             tailoring services
//           </tspan>
//         </text>

//         {/* Top line - visible on hover */}
//         <rect
//           x="100"
//           y="300"
//           width="600"
//           height="6"
//           fill="#A32F31"
//           className="scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
//           style={{ transformOrigin: 'center' }}
//         />

//         {/* Company name */}
//         <text
//           x="394"
//           y="320"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           fill={colors.text}
//           className="font-zain text-[90px] font-bold uppercase"
//         >
//           <tspan x="394" dy={filled ? '-60' : '-44'}>
//             s.a.m. creations
//           </tspan>
//         </text>

//         {/* Bottom line - visible on hover*/}
//         <rect
//           x="100"
//           y="230"
//           width="600"
//           height="6"
//           fill="#A32F31"
//           className="scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
//           style={{ transformOrigin: 'center' }}
//         />

//         {/* Sampling Alterations Manufacturing - appear on hover */}
//         <text
//           x="394"
//           y="340"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           className="font-zain font-medium opacity-0 transition-all duration-200 group-hover:opacity-100"
//           style={{
//             transitionDelay: '400ms',
//             animationDelay: '400ms',
//           }}
//         >
//           <tspan
//             x="392"
//             fill={colors.text}
//             className="text-[70px] opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100"
//             style={{
//               transitionDelay: '400ms',
//               animationDelay: '600ms',
//               '--tw-pulse-color': '#B91C1C',
//             }}
//           >
//             sampling alterations
//           </tspan>
//           <tspan
//             x="388"
//             dy="55"
//             fill={colors.text}
//             className="text-[68px] tracking-tighter opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100"
//             style={{
//               transitionDelay: '600ms',
//               animationDelay: '800ms',
//               '--tw-pulse-color': '#B91C1C',
//             }}
//           >
//             manufacturing
//           </tspan>
//         </text>
//       </svg>
//     </div>
//   )
// }
// import clsx from 'clsx'

// export function Logo({ className, invert = false, filled = false, ...props }) {
//   const colors = {
//     primary: invert ? '#FFFFFF' : '#A32F31',
//     text: invert ? '#FFFFFF' : '#1F2937',
//   }

//   return (
//     <div className={clsx('flex-col', className)} {...props}>
//       <svg
//         viewBox="0 0 788 549"
//         fill="none"
//         className="group flex size-52 cursor-pointer"
//       >
//         {/* Center line */}
//         <rect
//           x="234"
//           y="268"
//           width="320"
//           height="12"
//           fill="#A32F31"
//           className="scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
//           style={{ transformOrigin: 'center' }}
//         />

//         {/* Bottom diamond */}
//         <path
//           d="M399.345 544.85C396.624 546.742 392.213 546.742 389.493 544.85L0.84375 274.625L389.977 498.578C392.554 500.062 396.284 500.062 398.861 498.578L787.994 274.625L399.345 544.85Z"
//           fill={colors.primary}
//           stroke={colors.primary}
//           strokeWidth="2"
//         />

//         {/* Top diamond */}
//         <path
//           d="M389.492 4.39988C392.213 2.5082 396.624 2.5082 399.345 4.39989L787.994 274.625L398.861 50.6718C396.284 49.1885 392.554 49.1885 389.976 50.6718L0.843511 274.625L389.492 4.39988Z"
//           fill={colors.primary}
//           stroke={colors.primary}
//           strokeWidth="2"
//         />

//         {/* Company name */}
//         <text
//           x="394"
//           y="280"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           fill={colors.text}
//           className="font-zain text-[120px] font-bold uppercase"
//         >
//           <tspan x="394" dy={filled ? '-60' : '-44'}>
//             s.a.m.
//           </tspan>
//           <tspan
//             x="394"
//             dy={filled ? '125' : '100'}
//             style={{ letterSpacing: '-0.04em' }}
//           >
//             creations
//           </tspan>
//         </text>

//         {/* Descriptive text that appears on hover */}
//         <text
//           x="394"
//           y="400"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           className="font-zain text-[32px] font-medium opacity-0 transition-all duration-200 group-hover:opacity-100"
//           style={{
//             transitionDelay: '400ms',
//             animationDelay: '400ms',
//           }}
//         >
//           <tspan
//             x="394"
//             fill={colors.text}
//             className="opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100"
//             style={{
//               transitionDelay: '400ms',
//               animationDelay: '600ms',
//               '--tw-pulse-color': '#B91C1C',
//             }}
//           >
//             sampling
//           </tspan>
//           <tspan
//             x="394"
//             dy="40"
//             fill={colors.text}
//             className="opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100"
//             style={{
//               transitionDelay: '600ms',
//               animationDelay: '800ms',
//               '--tw-pulse-color': '#B91C1C',
//             }}
//           >
//             alterations
//           </tspan>
//           <tspan
//             x="394"
//             dy="40"
//             fill={colors.text}
//             className="opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100"
//             style={{
//               transitionDelay: '800ms',
//               animationDelay: '1000ms',
//               '--tw-pulse-color': '#B91C1C',
//             }}
//           >
//             manufacturing
//           </tspan>
//         </text>
//       </svg>
//     </div>
//   )
// }
