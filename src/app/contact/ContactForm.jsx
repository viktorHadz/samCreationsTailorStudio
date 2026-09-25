'use client'

import Link from 'next/link'
import { useId, useRef } from 'react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { useToast } from '@/components/Toast'

import { sendEmailAction } from './action'

function TextInput({ label, required = false, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        {...props}
        placeholder=" "
        required={required}
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-red-700"
      >
        {label}
      </label>
    </div>
  )
}

function MessageInput() {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        name="message"
        maxLength="2000"
        rows="5"
        placeholder=" "
        required
        className="peer block w-full resize-y border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-8 left-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-red-700"
      >
        Tell us about your project
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-8 checked:border-red-700 focus-visible:ring-1 focus-visible:ring-red-700 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="mt-10 cursor-pointer disabled:cursor-wait disabled:opacity-60"
    >
      {pending ? 'Sending…' : 'Submit enquiry'}
    </Button>
  )
}

export function ContactForm() {
  const formRef = useRef(null)
  const { showSuccess, showError } = useToast()

  async function handleSubmit(formData) {
    const result = await sendEmailAction(formData)

    if (result?.success) {
      formRef.current?.reset()
      showSuccess('Enquiry sent!', "Thanks! We'll be in touch soon.")
    } else {
      showError(
        'Error in form submission!',
        result?.error || 'Something went wrong. Please try again later',
      )
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form ref={formRef} action={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Project enquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            maxLength="100"
            autoComplete="name"
            required
          />
          <TextInput
            label="Email"
            type="email"
            maxLength="254"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Brand/Company"
            name="company"
            maxLength="100"
            autoComplete="organization"
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            maxLength="30"
          />
          <MessageInput />
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Service needed
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Sampling" name="service" value="sampling" />
                <RadioInput
                  label="Alterations"
                  name="service"
                  value="alterations"
                />
                <RadioInput
                  label="Manufacturing"
                  name="service"
                  value="manufacturing"
                />
                <RadioInput label="Other" name="service" value="other" />
              </div>
            </fieldset>
          </div>
        </div>
        <SubmitButton />
        <p className="mt-4 max-w-lg text-sm text-neutral-600">
          We use your details to respond to your enquiry. See our{' '}
          <Link href="/privacy" className="font-semibold underline">
            privacy notice
          </Link>
          .
        </p>
      </form>
    </FadeIn>
  )
}
