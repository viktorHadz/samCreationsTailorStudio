import clsx from 'clsx'

export function Logo({ className, invert = false, filled = false, ...props }) {
  const colors = {
    primary: invert ? '#FFFFFF' : '#A32F31',
    fill: invert ? '#000000' : '#FFFFFF',
    text: invert ? '#FFFFFF' : '#1F2937',
  }

  return (
    <div
      className={clsx('group flex cursor-pointer flex-col', className)}
      {...props}
    >
      <svg viewBox="0 0 788 549" fill="none" className="size-32">
        <defs>
          {/* Fills for diamond shape*/}
          <clipPath id="top-left">
            <rect
              x="0"
              y="0"
              width="0"
              height="274.625"
              className="group-hover:animate-expand-left"
            />
          </clipPath>
          <clipPath id="top-right">
            <rect
              x="0"
              y="0"
              width="0"
              height="274.625"
              className="group-hover:animate-expand-right"
            />
          </clipPath>
          <clipPath id="bottom-left">
            <rect
              x="0"
              y="274.625"
              width="0"
              height="274.625"
              className="group-hover:animate-expand-left"
            />
          </clipPath>
          <clipPath id="bottom-right">
            <rect
              x="0"
              y="274.625"
              width="0"
              height="274.625"
              className="group-hover:animate-expand-right"
            />
          </clipPath>
        </defs>

        <rect
          x="394"
          y="268"
          width="0"
          height="12"
          fill="#A32F31"
          className="group-hover:animate-expand-center"
        />
        {/* Bottom diamond outline */}
        <path
          d="M399.345 544.85C396.624 546.742 392.213 546.742 389.493 544.85L0.84375 274.625L389.977 498.578C392.554 500.062 396.284 500.062 398.861 498.578L787.994 274.625L399.345 544.85Z"
          fill={colors.primary}
          stroke={colors.primary}
          strokeWidth="2"
        />

        {/* Bottom left diamond fill  */}
        <path
          d="M399.345 544.85C396.624 546.742 392.213 546.742 389.493 544.85L0.84375 274.625L389.977 498.578C392.554 500.062 396.284 500.062 398.861 498.578L787.994 274.625L399.345 544.85Z"
          fill={colors.fill}
          clipPath="url(#bottom-left)"
        />
        {/* Bottom right diamond fill  */}
        <path
          d="M399.345 544.85C396.624 546.742 392.213 546.742 389.493 544.85L0.84375 274.625L389.977 498.578C392.554 500.062 396.284 500.062 398.861 498.578L787.994 274.625L399.345 544.85Z"
          fill={colors.fill}
          clipPath="url(#bottom-right)"
        />

        {/* Top diamond outline */}
        <path
          d="M389.492 4.39988C392.213 2.5082 396.624 2.5082 399.345 4.39989L787.994 274.625L398.861 50.6718C396.284 49.1885 392.554 49.1885 389.976 50.6718L0.843511 274.625L389.492 4.39988Z"
          fill={colors.primary}
          stroke={colors.primary}
          strokeWidth="2"
        />

        {/* Top left diamond fill */}
        <path
          d="M389.492 4.39988C392.213 2.5082 396.624 2.5082 399.345 4.39989L787.994 274.625L398.861 50.6718C396.284 49.1885 392.554 49.1885 389.976 50.6718L0.843511 274.625L389.492 4.39988Z"
          fill={colors.fill}
          clipPath="url(#top-left)"
        />
        {/* Top right diamond fill */}
        <path
          d="M389.492 4.39988C392.213 2.5082 396.624 2.5082 399.345 4.39989L787.994 274.625L398.861 50.6718C396.284 49.1885 392.554 49.1885 389.976 50.6718L0.843511 274.625L389.492 4.39988Z"
          fill={colors.fill}
          clipPath="url(#top-right)"
        />

        {/* Company name */}
        <text
          x="394"
          y="280"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={colors.text}
          className="font-zain text-[120px] font-bold uppercase"
        >
          <tspan x="394" dy={filled ? '-60' : '-44'}>
            s.a.m.
          </tspan>
          <tspan
            x="394"
            dy={filled ? '125' : '100'}
            style={{ letterSpacing: '-0.04em' }}
          >
            creations
          </tspan>
        </text>
      </svg>
    </div>
  )
}
