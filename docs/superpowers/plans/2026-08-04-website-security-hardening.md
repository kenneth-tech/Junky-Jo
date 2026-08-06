# Website Security Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Harden the public contact flow, app headers, dependencies, and Supabase schema posture for the 877Junky Jo website.

**Architecture:** Add a focused CommonJS contact-security helper that can be tested directly with Node's built-in test runner, then use it from the Next.js API route. Keep Next security headers in `next.config.js` and keep Supabase schema guidance in `lib/supabase/init-schema.sql`.

**Tech Stack:** Next.js App Router, Node.js `node:test`, Supabase JavaScript client, Resend, Tailwind CSS.

## Global Constraints

- Preserve the current public contact form workflow and visible success/error behavior.
- Do not expose Supabase service-role keys to browser code.
- Use generic browser-facing errors for server/database/email failures.
- Keep the About page collage changes already present in the working tree.

---

### Task 1: Contact Security Helper

**Files:**
- Create: `lib/contactSecurity.cjs`
- Create: `tests/contactSecurity.test.cjs`

**Interfaces:**
- Produces: `validateContactPayload(payload)`, `buildContactEmailHtml(contact, submittedAt)`, `checkContactRateLimit(identifier, options)`, `getClientIdentifier(headers)`, `CONTACT_FORM_MAX_BYTES`

- [ ] Write failing tests for validation, escaping, honeypot, and rate limiting.
- [ ] Run `node --test tests/contactSecurity.test.cjs` and confirm failures are due to missing helper.
- [ ] Implement `lib/contactSecurity.cjs`.
- [ ] Run `node --test tests/contactSecurity.test.cjs` and confirm all tests pass.

### Task 2: Harden Contact API and Form

**Files:**
- Modify: `app/api/contact/route.js`
- Modify: `app/contact/page.js`

**Interfaces:**
- Consumes helper exports from `lib/contactSecurity.cjs`.
- Produces a hardened public POST endpoint with the same `{ success: boolean }` response shape.

- [ ] Use helper functions in `/api/contact`.
- [ ] Add JSON/content-length checks before parsing.
- [ ] Add the hidden honeypot field to the contact form state and markup.
- [ ] Fix the malformed WhatsApp `rel` attribute.
- [ ] Run `node --test tests/contactSecurity.test.cjs`.

### Task 3: Headers and Supabase Schema Hardening

**Files:**
- Modify: `next.config.js`
- Modify: `lib/supabase/init-schema.sql`

**Interfaces:**
- Next config exports `async headers()`.
- Supabase schema keeps RLS enabled and removes anonymous `contacts` insert policy.

- [ ] Add security headers to `next.config.js`.
- [ ] Remove the anonymous contact insert policy from the schema.
- [ ] Run `npm run build`.

### Task 4: Dependency Audit

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Keep existing npm scripts.

- [ ] Run `npm audit fix`.
- [ ] Run `npm run build`.
- [ ] Run `npm audit --audit-level=high`.

### Task 5: Final Verification

**Files:**
- No planned source changes.

- [ ] Run `node --test tests/contactSecurity.test.cjs`.
- [ ] Run `npm run build`.
- [ ] Run `npm audit --audit-level=high`.
- [ ] Check `/about` and `/contact` on the local dev server if it is running.
