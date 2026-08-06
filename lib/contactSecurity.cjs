const CONTACT_FORM_MAX_BYTES = 8 * 1024

const CONTACT_FIELD_LIMITS = {
  name: 80,
  phone: 30,
  location: 120,
  description: 1000,
}

const DEFAULT_RATE_LIMIT = {
  limit: 5,
  maxKeys: 500,
  windowMs: 10 * 60 * 1000,
}

const rateLimitStore = globalThis.__contactRateLimitStore || new Map()
globalThis.__contactRateLimitStore = rateLimitStore

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function cleanString(value) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim() : ''
}

function validateContactPayload(payload) {
  if (!isPlainObject(payload)) {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }

  if (cleanString(payload.company) || cleanString(payload.website)) {
    return { ok: true, honeypot: true }
  }

  const contact = {
    name: cleanString(payload.name),
    phone: cleanString(payload.phone),
    location: cleanString(payload.location),
    description: cleanString(payload.description),
  }

  if (!contact.name) {
    return { ok: false, status: 400, error: 'Please enter your name.' }
  }

  if (!contact.phone) {
    return { ok: false, status: 400, error: 'Please enter your phone number.' }
  }

  if (!contact.location) {
    return { ok: false, status: 400, error: 'Please enter your location.' }
  }

  if (!contact.description) {
    return { ok: false, status: 400, error: 'Please enter a short job description.' }
  }

  if (contact.name.length > CONTACT_FIELD_LIMITS.name) {
    return { ok: false, status: 400, error: 'Please keep your name under 80 characters.' }
  }

  if (contact.phone.length > CONTACT_FIELD_LIMITS.phone || !/^[0-9+\-().\s]{7,30}$/.test(contact.phone)) {
    return { ok: false, status: 400, error: 'Please enter a valid phone number.' }
  }

  if (contact.location.length > CONTACT_FIELD_LIMITS.location) {
    return { ok: false, status: 400, error: 'Please keep your location under 120 characters.' }
  }

  if (contact.description.length > CONTACT_FIELD_LIMITS.description) {
    return { ok: false, status: 400, error: 'Please keep the job description under 1000 characters.' }
  }

  return { ok: true, contact }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatMultilineHtml(value) {
  return escapeHtml(value).replace(/\r?\n/g, '<br>')
}

function buildContactEmailHtml(contact, submittedAt = new Date()) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #ff6b35;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(contact.phone)}</p>
        <p><strong>Location:</strong> ${escapeHtml(contact.location)}</p>
        <p><strong>Description:</strong></p>
        <p style="background-color: white; padding: 10px; border-radius: 4px;">${formatMultilineHtml(contact.description)}</p>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">Submitted on: ${escapeHtml(submittedAt.toLocaleString())}</p>
      </div>
    </div>
  `
}

function checkContactRateLimit(identifier, options = {}) {
  const limit = options.limit ?? DEFAULT_RATE_LIMIT.limit
  const maxKeys = options.maxKeys ?? DEFAULT_RATE_LIMIT.maxKeys
  const windowMs = options.windowMs ?? DEFAULT_RATE_LIMIT.windowMs
  const now = options.now ?? Date.now()
  const store = options.store ?? rateLimitStore
  const key = identifier || 'unknown'

  for (const [storedKey, value] of store.entries()) {
    if (value.resetAt <= now) {
      store.delete(storedKey)
    }
  }

  const existing = store.get(key)

  if (!existing || existing.resetAt <= now) {
    if (!store.has(key) && store.size >= maxKeys) {
      const oldestKey = store.keys().next().value
      if (oldestKey) {
        store.delete(oldestKey)
      }
    }

    store.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true }
  }

  if (existing.count >= limit) {
    return { allowed: false, status: 429, resetAt: existing.resetAt }
  }

  existing.count += 1
  store.set(key, existing)
  return { allowed: true }
}

function getClientIdentifier(headers) {
  const headerNames = [
    'cf-connecting-ip',
    'x-vercel-forwarded-for',
    'x-real-ip',
    'x-forwarded-for',
  ]

  for (const headerName of headerNames) {
    const headerValue = headers.get(headerName)

    if (headerValue) {
      return headerValue.split(',')[0].trim().slice(0, 128)
    }
  }

  const userAgent = headers.get('user-agent')

  return userAgent ? `ua:${userAgent.slice(0, 128)}` : 'unknown'
}

async function readJsonWithinLimit(request, maxBytes = CONTACT_FORM_MAX_BYTES) {
  const contentLengthHeader = request.headers.get('content-length')
  const contentLength = contentLengthHeader ? Number(contentLengthHeader) : 0

  if (contentLengthHeader && (!Number.isFinite(contentLength) || contentLength > maxBytes)) {
    return { ok: false, status: 413, error: 'Request is too large.' }
  }

  if (!request.body) {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }

  const reader = request.body.getReader()
  const chunks = []
  let receivedBytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      receivedBytes += value.byteLength

      if (receivedBytes > maxBytes) {
        await reader.cancel()
        return { ok: false, status: 413, error: 'Request is too large.' }
      }

      chunks.push(value)
    }
  } catch {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }

  const body = new Uint8Array(receivedBytes)
  let offset = 0

  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }

  try {
    return { ok: true, data: JSON.parse(new TextDecoder().decode(body)) }
  } catch {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }
}

module.exports = {
  CONTACT_FORM_MAX_BYTES,
  buildContactEmailHtml,
  checkContactRateLimit,
  escapeHtml,
  getClientIdentifier,
  readJsonWithinLimit,
  validateContactPayload,
}
