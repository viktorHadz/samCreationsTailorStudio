'use client'

import { useId, useRef } from 'react'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { sendEmailAction } from './action'
import { useToast } from '@/components/Toast'

function TextInput({ label, requiredAttr = false, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        required={requiredAttr === true ? true : false}
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

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-red-700 focus-visible:ring-1 focus-visible:ring-red-700 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const formRef = useRef(null)
  const { showSuccess, showError } = useToast()

  const handleSubmit = async (formData) => {
    const result = await sendEmailAction(formData)

    if (result?.success) {
      // Reset the form after successful submission
      formRef.current?.reset()
      showSuccess('Enquiry sent!', "Thanks! We'll be in touch soon.")
    } else {
      showError(
        'Error in form submission!',
        result.error || 'Something went wrong. Please try again later',
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
            requiredAttr={true}
          />
          <TextInput
            label="Email"
            type="email"
            maxLength="100"
            name="email"
            autoComplete="email"
            requiredAttr={true}
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
            maxLength="100"
          />
          <TextInput
            label="Tell us about your project"
            name="message"
            maxLength="2000"
            requiredAttr={true}
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
                <RadioInput label="Other" name="service" value="Other" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10 cursor-pointer">
          Submit enquiry
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        London studio
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Located in South East London, our dedicated premises are equipped to
        handle everything your design requires, delivering the highest standards
        of craftsmanship.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow our work
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Ready for your next big project?">
        <p>
          From first sample to completed production, we're here to bring your
          designs to life with uncompromising quality and craftsmanship. Let's
          discuss your next project.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
