'use server'

import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import { rateLimit } from '@/lib/rateLimit'
import { headers } from 'next/headers'

export async function sendEmailAction(formData) {
  const headerList = headers()
  const ip =
    headerList.get('x-forwarded-for') ||
    headerList.get('x-real-ip') ||
    '127.0.0.1'
  const maxRequests = 1
  if (!rateLimit(ip, maxRequests)) {
    return {
      success: false,
      error: 'Too many requests. Please wait before sending another message.',
    }
  }

  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  if (name.length > 100 || message.length > 2000) {
    return { success: false, error: 'Message or name is too long.' }
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'S.A.M. Creations <onboarding@resend.dev>',
      to: ['s.a.m.creations.yk@gmail.com'],
      subject: 'New Project Enquiry',
      react: EmailTemplate({
        senderName: name,
        email: email,
        company: formData.get('company')?.toString().trim() || '',
        phone: formData.get('phone')?.toString().trim() || '',
        message: message,
        service: formData.get('service')?.toString() || '',
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
