# Website Security Hardening Design

## Goal

Harden the public 877Junky Jo website against common abuse and data exposure risks without changing the customer-facing contact workflow.

## Scope

- Protect the public `/api/contact` endpoint from malformed payloads, oversized requests, email HTML injection, noisy database errors, and basic spam bursts.
- Add browser security headers in Next.js config.
- Update vulnerable npm dependencies when compatible with the existing app.
- Update the local Supabase schema guidance so contact submissions go through the server API instead of an anonymous insert policy.

## Contact API Design

The contact route will keep accepting JSON from the existing contact form. A new small helper module will validate and normalize `name`, `phone`, `location`, and `description`; reject non-object payloads; enforce length limits; reject invalid phone characters; and treat a hidden honeypot field as a silent successful submission.

The route will reject non-JSON requests, oversized requests, and invalid JSON before touching Supabase. It will use a per-process in-memory rate limiter keyed by client IP as a lightweight defense for this single-server public form. Supabase and Resend errors will be logged server-side but reported to browsers with generic messages.

Email HTML will be assembled only from escaped form values so visitor input cannot inject HTML into notification emails.

## Browser Header Design

`next.config.js` will define global security headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disabling sensitive browser APIs the site does not use
- A conservative CSP compatible with this app's inline styles, local images, Supabase network calls, and external social/contact links

## Supabase Design

Supabase's current RLS guidance says RLS should be enabled on exposed `public` tables and policies should intentionally grant role access. The local schema already enables RLS on `contacts`; the anonymous insert policy will be removed from the schema because the production contact form submits through the server route using server-only credentials.

## Verification

- Add Node unit tests for contact validation, HTML escaping, honeypot handling, and rate limiting.
- Run the new tests red before implementation and green after implementation.
- Run `npm run build`.
- Run `npm audit --audit-level=high` after dependency updates.
