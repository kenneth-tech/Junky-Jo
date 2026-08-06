import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import contactSecurity from '@/lib/contactSecurity.cjs'

const {
  CONTACT_FORM_MAX_BYTES,
  buildContactEmailHtml,
  checkContactRateLimit,
  getClientIdentifier,
  readJsonWithinLimit,
  validateContactPayload,
} = contactSecurity

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    const contentLength = Number(request.headers.get('content-length') || 0)

    if (!contentType.toLowerCase().includes('application/json')) {
      return Response.json(
        { success: false, error: 'Invalid request.' },
        { status: 415 }
      )
    }

    if (contentLength > CONTACT_FORM_MAX_BYTES) {
      return Response.json(
        { success: false, error: 'Request is too large.' },
        { status: 413 }
      )
    }

    const rateLimit = checkContactRateLimit(getClientIdentifier(request.headers))

    if (!rateLimit.allowed) {
      return Response.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const bodyResult = await readJsonWithinLimit(request, CONTACT_FORM_MAX_BYTES)

    if (!bodyResult.ok) {
      return Response.json(
        { success: false, error: bodyResult.error },
        { status: bodyResult.status }
      )
    }

    const formData = bodyResult.data
    const validation = validateContactPayload(formData)

    if (!validation.ok) {
      return Response.json(
        { success: false, error: validation.error },
        { status: validation.status }
      )
    }

    if (validation.honeypot) {
      return Response.json({ success: true })
    }

    const contact = validation.contact

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing Supabase contact form environment variables')
      return Response.json(
        { success: false, error: 'Failed to submit form' },
        { status: 500 }
      )
    }

    // Use service role key to bypass RLS for form submissions
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: contact.name,
          phone: contact.phone,
          location: contact.location,
          description: contact.description,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return Response.json(
        { success: false, error: 'Failed to submit form' },
        { status: 500 }
      )
    }

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const emailResponse = await resend.emails.send({
          from: '877Junky Jo <onboarding@resend.dev>',
          to: 'jojo@877junkyjo.com',
          subject: `New Lead Submission from ${contact.name}`,
          html: buildContactEmailHtml(contact),
        })

        if (emailResponse.error) {
          console.error('Email sending error:', emailResponse.error)
          // Don't fail the form submission if email fails
        }
      } catch (emailErr) {
        console.error('Email error:', emailErr)
        // Don't fail the form submission if email fails
      }
    } else {
      console.error('Missing RESEND_API_KEY; contact saved without email notification')
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return Response.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
