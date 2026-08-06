const assert = require('node:assert/strict')
const test = require('node:test')

const {
  buildContactEmailHtml,
  checkContactRateLimit,
  readJsonWithinLimit,
  validateContactPayload,
} = require('../lib/contactSecurity.cjs')

test('validateContactPayload accepts and trims a complete contact request', () => {
  const result = validateContactPayload({
    name: '  Jo Customer  ',
    phone: ' (555) 123-4567 ',
    location: ' Flatbush ',
    description: '  Remove old couch and boxes.  ',
  })

  assert.equal(result.ok, true)
  assert.deepEqual(result.contact, {
    name: 'Jo Customer',
    phone: '(555) 123-4567',
    location: 'Flatbush',
    description: 'Remove old couch and boxes.',
  })
})

test('validateContactPayload rejects missing and overlong required fields', () => {
  const missingName = validateContactPayload({
    name: '',
    phone: '(555) 123-4567',
    location: '11226',
    description: 'Remove a couch.',
  })
  const longDescription = validateContactPayload({
    name: 'Jo Customer',
    phone: '(555) 123-4567',
    location: '11226',
    description: 'x'.repeat(1001),
  })

  assert.equal(missingName.ok, false)
  assert.equal(missingName.status, 400)
  assert.equal(missingName.error, 'Please enter your name.')
  assert.equal(longDescription.ok, false)
  assert.equal(longDescription.status, 400)
  assert.equal(longDescription.error, 'Please keep the job description under 1000 characters.')
})

test('validateContactPayload rejects phone values with unsafe characters', () => {
  const result = validateContactPayload({
    name: 'Jo Customer',
    phone: '<script>alert(1)</script>',
    location: '11226',
    description: 'Remove a couch.',
  })

  assert.equal(result.ok, false)
  assert.equal(result.error, 'Please enter a valid phone number.')
})

test('validateContactPayload strips control characters from accepted fields', () => {
  const result = validateContactPayload({
    name: 'Jo\nCustomer',
    phone: '(555) 123-4567',
    location: 'Flatbush\rNY',
    description: 'Remove couch\tand boxes.',
  })

  assert.equal(result.ok, true)
  assert.equal(result.contact.name, 'Jo Customer')
  assert.equal(result.contact.location, 'Flatbush NY')
  assert.equal(result.contact.description, 'Remove couch and boxes.')
})

test('validateContactPayload treats honeypot submissions as silent success', () => {
  const result = validateContactPayload({
    name: 'Spam Bot',
    phone: '(555) 123-4567',
    location: '11226',
    description: 'Remove a couch.',
    company: 'Filled by bot',
  })

  assert.equal(result.ok, true)
  assert.equal(result.honeypot, true)
  assert.equal(result.contact, undefined)
})

test('buildContactEmailHtml escapes visitor-controlled HTML', () => {
  const html = buildContactEmailHtml(
    {
      name: '<img src=x onerror=alert(1)>',
      phone: '+1 "555" & 123',
      location: 'Flatbush <NY>',
      description: 'Line 1\n<script>alert("x")</script>',
    },
    new Date('2026-08-04T12:00:00.000Z')
  )

  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/)
  assert.match(html, /\+1 &quot;555&quot; &amp; 123/)
  assert.match(html, /Flatbush &lt;NY&gt;/)
  assert.match(html, /Line 1<br>&lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/)
  assert.doesNotMatch(html, /<script>alert/)
})

test('checkContactRateLimit blocks requests after the configured limit', () => {
  const store = new Map()
  const options = {
    limit: 2,
    windowMs: 60_000,
    now: 1_000,
    store,
  }

  assert.equal(checkContactRateLimit('203.0.113.10', options).allowed, true)
  assert.equal(checkContactRateLimit('203.0.113.10', { ...options, now: 2_000 }).allowed, true)
  const blocked = checkContactRateLimit('203.0.113.10', { ...options, now: 3_000 })

  assert.equal(blocked.allowed, false)
  assert.equal(blocked.status, 429)
})

test('checkContactRateLimit prunes expired entries and caps stored identifiers', () => {
  const store = new Map([
    ['expired', { count: 1, resetAt: 500 }],
    ['active-a', { count: 1, resetAt: 10_000 }],
    ['active-b', { count: 1, resetAt: 10_000 }],
  ])

  const result = checkContactRateLimit('active-c', {
    limit: 5,
    maxKeys: 2,
    now: 1_000,
    store,
    windowMs: 60_000,
  })

  assert.equal(result.allowed, true)
  assert.equal(store.has('expired'), false)
  assert.equal(store.size, 2)
  assert.equal(store.has('active-c'), true)
})

test('readJsonWithinLimit rejects bodies larger than the byte limit without requiring content-length', async () => {
  const request = new Request('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify({ description: 'x'.repeat(20) }),
    headers: { 'content-type': 'application/json' },
  })

  const result = await readJsonWithinLimit(request, 10)

  assert.equal(result.ok, false)
  assert.equal(result.status, 413)
})

test('readJsonWithinLimit parses valid JSON within the byte limit', async () => {
  const request = new Request('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify({ name: 'Jo' }),
    headers: { 'content-type': 'application/json' },
  })

  const result = await readJsonWithinLimit(request, 100)

  assert.equal(result.ok, true)
  assert.deepEqual(result.data, { name: 'Jo' })
})
