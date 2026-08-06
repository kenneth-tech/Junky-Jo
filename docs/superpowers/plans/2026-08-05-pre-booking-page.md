# Pre-Booking Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a secure `/book` pre-booking page and API for appointment-call requests.

**Architecture:** Add focused booking validation/email helpers tested with Node's test runner. Add a new Next.js page and API route that reuse the existing contact security primitives for safe request parsing and rate limiting. Extend the local Supabase schema with a server-only `booking_requests` table.

**Tech Stack:** Next.js App Router, React, Node `node:test`, Supabase JavaScript client, Resend, Tailwind CSS, lucide-react.

## Global Constraints

- A pre-booking request is not a confirmed appointment.
- Browser-facing errors must stay generic for server/database failures.
- Supabase service-role keys must remain server-only.
- No external calendar dependency is required.

---

### Task 1: Booking Security Helpers

**Files:**
- Create: `lib/bookingSecurity.cjs`
- Create: `tests/bookingSecurity.test.cjs`

**Interfaces:**
- Produces: `validateBookingPayload(payload)` and `buildBookingEmailHtml(booking, submittedAt)`.

- [ ] Write failing tests for valid payload normalization, required fields, date format, honeypot handling, and HTML escaping.
- [ ] Run `node --test tests/bookingSecurity.test.cjs` and confirm helper-missing failure.
- [ ] Implement the helper.
- [ ] Run `node --test tests/bookingSecurity.test.cjs` and confirm tests pass.

### Task 2: Booking API and Schema

**Files:**
- Create: `app/api/booking/route.js`
- Modify: `lib/supabase/init-schema.sql`

**Interfaces:**
- Consumes helpers from `lib/contactSecurity.cjs` and `lib/bookingSecurity.cjs`.
- Produces secure POST `/api/booking`.

- [ ] Add the `booking_requests` table with RLS enabled and no anonymous insert policy.
- [ ] Implement the API route using server-only Supabase and optional Resend notification.
- [ ] Return `{ success: true }` without echoing PII.

### Task 3: Booking Page and Navigation

**Files:**
- Create: `app/book/page.js`
- Modify: `app/components/Header.js`

**Interfaces:**
- Produces the `/book` page and a `Book` nav link.

- [ ] Build the pre-booking page with notice, form, call CTA, and success/error states.
- [ ] Add the `Book` link to desktop and mobile nav.
- [ ] Run `npm run build`.
- [ ] Run `npm test`.
