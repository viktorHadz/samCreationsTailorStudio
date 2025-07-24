'use server'

import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'

export async function sendEmailAction(formData) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'S.A.M. Creations <onboarding@resend.dev>',
      to: ['s.a.m.creations.yk@gmail.com'],
      subject: 'New Project Enquiry',
      react: EmailTemplate({
        senderName: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        service: formData.get('service'),
      }),
    })

    if (error) {
      console.error('Email error:', error)
      return { success: false }
    }

    console.log('Email sent:', data)
    return { success: true }
  } catch (error) {
    console.error('Send error:', error)
    return { success: false }
  }
}
