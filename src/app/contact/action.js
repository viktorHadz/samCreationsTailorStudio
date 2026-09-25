'use server'

import { Resend } from 'resend'
import { isIP } from 'node:net'
import { EmailTemplate } from '@/components/EmailTemplate'
import { rateLimit } from '@/lib/rateLimit'
import { headers } from 'next/headers'

function getClientIp(headerList) {
  const candidates = [
    headerList.get('cf-connecting-ip'),
    headerList.get('x-forwarded-for')?.split(',')[0],
    headerList.get('x-real-ip'),
  ]

  return (
    candidates.map((value) => value?.trim()).find((value) => isIP(value)) ||
    'unknown'
  )
}

export async function sendEmailAction(formData) {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const company = formData.get('company')?.toString().trim() || ''
  const phone = formData.get('phone')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim()
  const service = formData.get('service')?.toString() || ''

  if (formData.get('website')) {
    return { success: true }
  }

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  if (
    name.length > 100 ||
    email.length > 254 ||
    company.length > 100 ||
    phone.length > 30 ||
    message.length > 2000
  ) {
    return { success: false, error: 'One or more fields are too long.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  if (
    !['', 'sampling', 'alterations', 'manufacturing', 'other'].includes(service)
  ) {
    return { success: false, error: 'Please select a valid service.' }
  }

  const headerList = await headers()
  if (!rateLimit(getClientIp(headerList))) {
    return {
      success: false,
      error: 'Too many requests. Please wait before sending another message.',
    }
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    console.error('Contact form email configuration is missing.')
    return { success: false, error: 'Failed to send email. Please try again.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'S.A.M. Creations <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      subject: 'New Project Enquiry',
      react: EmailTemplate({
        senderName: name,
        email: email,
        company,
        phone,
        message: message,
        service,
      }),
    })

    if (error) {
      console.error('Email error:', error)
      return {
        success: false,
        error: 'Failed to send email. Please try again.',
      }
    }

    console.log('Email sent:', data)
    return { success: true }
  } catch (error) {
    console.error('Send error:', error)
    return { success: false, error: 'Failed to send email. Please try again.' }
  }
}
