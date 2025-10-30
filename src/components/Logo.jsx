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

