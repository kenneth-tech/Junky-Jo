const assert = require('node:assert/strict')
const test = require('node:test')

const {
  buildBookingEmailHtml,
  validateBookingPayload,
} = require('../lib/bookingSecurity.cjs')

test('validateBookingPayload accepts and trims a complete pre-booking request', () => {
  const result = validateBookingPayload({
    name: '  Jo Customer  ',
    phone: ' (555) 123-4567 ',
    location: ' Flatbush 11226 ',
    preferredDate: '2026-08-20',
    preferredTime: 'morning',
    jobType: 'garage-cleanout',
    description: '  Clean out garage and remove old boxes.  ',
  })

  assert.equal(result.ok, true)
  assert.deepEqual(result.booking, {
    name: 'Jo Customer',
    phone: '(555) 123-4567',
    location: 'Flatbush 11226',
    preferredDate: '2026-08-20',
    preferredTime: 'morning',
    jobType: 'garage-cleanout',
    description: 'Clean out garage and remove old boxes.',
  })
})

test('validateBookingPayload rejects missing required fields', () => {
  const result = validateBookingPayload({
    name: 'Jo Customer',
    phone: '',
    location: 'Flatbush',
    preferredDate: '2026-08-20',
    preferredTime: 'morning',
    jobType: 'junk-removal',
    description: 'Remove couch.',
  })

  assert.equal(result.ok, false)
  assert.equal(result.status, 400)
  assert.equal(result.error, 'Please enter your phone number.')
})

test('validateBookingPayload rejects unsafe phone and invalid date format', () => {
  const unsafePhone = validateBookingPayload({
    name: 'Jo Customer',
    phone: '<script>',
    location: 'Flatbush',
    preferredDate: '2026-08-20',
    preferredTime: 'morning',
    jobType: 'junk-removal',
    description: 'Remove couch.',
  })
  const badDate = validateBookingPayload({
    name: 'Jo Customer',
    phone: '(555) 123-4567',
    location: 'Flatbush',
    preferredDate: '08/20/2026',
    preferredTime: 'morning',
    jobType: 'junk-removal',
    description: 'Remove couch.',
  })

  assert.equal(unsafePhone.ok, false)
  assert.equal(unsafePhone.error, 'Please enter a valid phone number.')
  assert.equal(badDate.ok, false)
  assert.equal(badDate.error, 'Please choose a valid preferred date.')
})

test('validateBookingPayload treats honeypot submissions as silent success', () => {
  const result = validateBookingPayload({
    name: 'Spam Bot',
    phone: '(555) 123-4567',
    location: 'Flatbush',
    preferredDate: '2026-08-20',
    preferredTime: 'morning',
    jobType: 'junk-removal',
    description: 'Remove couch.',
    company: 'bot value',
  })

  assert.equal(result.ok, true)
  assert.equal(result.honeypot, true)
  assert.equal(result.booking, undefined)
})

test('buildBookingEmailHtml escapes visitor-controlled HTML', () => {
  const html = buildBookingEmailHtml(
    {
      name: '<img src=x onerror=alert(1)>',
      phone: '+1 "555" & 123',
      location: 'Flatbush <NY>',
      preferredDate: '2026-08-20',
      preferredTime: 'afternoon',
      jobType: 'estate-cleanout',
      description: 'Line 1\n<script>alert("x")</script>',
    },
    new Date('2026-08-05T12:00:00.000Z')
  )

  assert.match(html, /Pre-Booking Request/)
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/)
  assert.match(html, /\+1 &quot;555&quot; &amp; 123/)
  assert.match(html, /Flatbush &lt;NY&gt;/)
  assert.match(html, /Line 1<br>&lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/)
  assert.doesNotMatch(html, /<script>alert/)
})
