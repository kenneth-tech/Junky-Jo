const { escapeHtml } = require('./contactSecurity.cjs')

const BOOKING_FIELD_LIMITS = {
  name: 80,
  phone: 30,
  location: 120,
  preferredDate: 10,
  preferredTime: 40,
  jobType: 80,
  description: 1200,
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function cleanString(value) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim() : ''
}

function formatMultilineHtml(value) {
  return escapeHtml(value).replace(/\r?\n/g, '<br>')
}

function validateBookingPayload(payload) {
  if (!isPlainObject(payload)) {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }

  if (cleanString(payload.company) || cleanString(payload.website)) {
    return { ok: true, honeypot: true }
  }

  const booking = {
    name: cleanString(payload.name),
    phone: cleanString(payload.phone),
    location: cleanString(payload.location),
    preferredDate: cleanString(payload.preferredDate),
    preferredTime: cleanString(payload.preferredTime),
    jobType: cleanString(payload.jobType),
    description: cleanString(payload.description),
  }

  if (!booking.name) {
    return { ok: false, status: 400, error: 'Please enter your name.' }
  }

  if (!booking.phone) {
    return { ok: false, status: 400, error: 'Please enter your phone number.' }
  }

  if (!booking.location) {
    return { ok: false, status: 400, error: 'Please enter your service area or ZIP.' }
  }

  if (!booking.preferredDate || !/^\d{4}-\d{2}-\d{2}$/.test(booking.preferredDate)) {
    return { ok: false, status: 400, error: 'Please choose a valid preferred date.' }
  }

  if (!booking.preferredTime) {
    return { ok: false, status: 400, error: 'Please choose a preferred time window.' }
  }

  if (!booking.jobType) {
    return { ok: false, status: 400, error: 'Please choose a job type.' }
  }

  if (!booking.description) {
    return { ok: false, status: 400, error: 'Please enter a short job description.' }
  }

  if (booking.name.length > BOOKING_FIELD_LIMITS.name) {
    return { ok: false, status: 400, error: 'Please keep your name under 80 characters.' }
  }

  if (booking.phone.length > BOOKING_FIELD_LIMITS.phone || !/^[0-9+\-().\s]{7,30}$/.test(booking.phone)) {
    return { ok: false, status: 400, error: 'Please enter a valid phone number.' }
  }

  if (booking.location.length > BOOKING_FIELD_LIMITS.location) {
    return { ok: false, status: 400, error: 'Please keep your service area under 120 characters.' }
  }

  if (booking.preferredTime.length > BOOKING_FIELD_LIMITS.preferredTime) {
    return { ok: false, status: 400, error: 'Please choose a shorter preferred time window.' }
  }

  if (booking.jobType.length > BOOKING_FIELD_LIMITS.jobType) {
    return { ok: false, status: 400, error: 'Please choose a shorter job type.' }
  }

  if (booking.description.length > BOOKING_FIELD_LIMITS.description) {
    return { ok: false, status: 400, error: 'Please keep the job description under 1200 characters.' }
  }

  return { ok: true, booking }
}

function buildBookingEmailHtml(booking, submittedAt = new Date()) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="color: #ff6b35;">Pre-Booking Request</h2>
      <p style="color: #555;">This request is not confirmed until the customer calls 877-JUNKY-JO and availability is confirmed.</p>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(booking.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(booking.phone)}</p>
        <p><strong>Service Area / ZIP:</strong> ${escapeHtml(booking.location)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(booking.preferredDate)}</p>
        <p><strong>Preferred Time Window:</strong> ${escapeHtml(booking.preferredTime)}</p>
        <p><strong>Job Type:</strong> ${escapeHtml(booking.jobType)}</p>
        <p><strong>Job Description:</strong></p>
        <p style="background-color: white; padding: 10px; border-radius: 4px;">${formatMultilineHtml(booking.description)}</p>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">Submitted on: ${escapeHtml(submittedAt.toLocaleString())}</p>
      </div>
    </div>
  `
}

module.exports = {
  buildBookingEmailHtml,
  validateBookingPayload,
}
