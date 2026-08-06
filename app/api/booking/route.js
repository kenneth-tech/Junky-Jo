import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import bookingSecurity from '@/lib/bookingSecurity.cjs'
import contactSecurity from '@/lib/contactSecurity.cjs'

const {
  buildBookingEmailHtml,
  validateBookingPayload,
} = bookingSecurity

const {
  CONTACT_FORM_MAX_BYTES,
  checkContactRateLimit,
  getClientIdentifier,
  readJsonWithinLimit,
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

    const rateLimit = checkContactRateLimit(`booking:${getClientIdentifier(request.headers)}`)

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

    const validation = validateBookingPayload(bodyResult.data)

    if (!validation.ok) {
      return Response.json(
        { success: false, error: validation.error },
        { status: validation.status }
      )
    }

    if (validation.honeypot) {
      return Response.json({ success: true })
    }

    const booking = validation.booking

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing Supabase booking environment variables')
      return Response.json(
        { success: false, error: 'Failed to submit pre-booking request' },
        { status: 500 }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const { error } = await supabase
      .from('booking_requests')
      .insert([
        {
          name: booking.name,
          phone: booking.phone,
          location: booking.location,
          preferred_date: booking.preferredDate,
          preferred_time: booking.preferredTime,
          job_type: booking.jobType,
          description: booking.description,
          status: 'pending_confirmation',
          created_at: new Date().toISOString(),
        },
      ])

    if (error) {
      console.error('Supabase booking error:', error)
      return Response.json(
        { success: false, error: 'Failed to submit pre-booking request' },
        { status: 500 }
      )
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const emailResponse = await resend.emails.send({
          from: '877Junky Jo <onboarding@resend.dev>',
          to: 'jojo@877junkyjo.com',
          subject: `Pre-Booking Request from ${booking.name}`,
          html: buildBookingEmailHtml(booking),
        })

        if (emailResponse.error) {
          console.error('Booking email sending error:', emailResponse.error)
        }
      } catch (emailErr) {
        console.error('Booking email error:', emailErr)
      }
    } else {
      console.error('Missing RESEND_API_KEY; booking saved without email notification')
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Booking API error:', err)
    return Response.json(
      { success: false, error: 'Failed to submit pre-booking request' },
      { status: 500 }
    )
  }
}
