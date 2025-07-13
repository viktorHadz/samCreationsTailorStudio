import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <div {...props}>
      <Office name="South East London Studio" invert={invert}>
        174-176 Hither Green Lane
        <br />
        Hither Green Studios,
        <br />
        London,
        <br />
        SE13 6QB
        <br />
        United Kingdom
        <br />
        <br />
        <a
          href="mailto:info@samcreationsky.co.uk"
          className={clsx(
            'transition-colors hover:underline',
            invert
              ? 'text-red-400 hover:text-red-300'
              : 'text-red-700 hover:text-red-600',
          )}
        >
          info@samcreationsky.co.uk
        </a>
        <br />
        <a
          href="tel:+447935774269"
          className={clsx(
            'transition-colors hover:underline',
            invert
              ? 'text-red-400 hover:text-red-300'
              : 'text-red-700 hover:text-red-600',
          )}
        >
          07935 774269
        </a>
      </Office>
    </div>
  )
}
