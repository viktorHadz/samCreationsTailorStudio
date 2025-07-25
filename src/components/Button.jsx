import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert = false, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition decoration-2 hover:underline hover:decoration-[#A32F31] justify-center items-center',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-white text-neutral-800  ring-3 ring-[#A32F31]',
    // ? 'bg-white text-neutral-950 hover:bg-neutral-200'
    // : 'bg-neutral-950 text-white hover:bg-neutral-800',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
