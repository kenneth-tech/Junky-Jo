# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the homepage around phone-first conversion, pre-booking support, clearer services, real work proof, and corrected copy.

**Architecture:** Keep the homepage as one Next.js App Router page at `app/page.js`, using local arrays for repeated content and existing routes for CTAs. Add one Node smoke test that reads the homepage source and verifies the new customer-facing content exists.

**Tech Stack:** Next.js 16 App Router, React, Tailwind CSS, lucide-react icons, Node test runner.

## Global Constraints

- Primary CTA text must be `Call 877-JUNKY-JO`.
- Secondary CTA text must be `Pre-Book a Job`.
- Pre-booking copy must say the request still needs phone confirmation.
- Use local images from `public/images`.
- Preserve security headers, contact API, booking API, and existing database logic.

---

### Task 1: Homepage Smoke Test

**Files:**
- Create: `tests/homepageContent.test.cjs`

**Interfaces:**
- Consumes: `app/page.js` as source text.
- Produces: A Node test that fails until required homepage copy is present.

- [ ] **Step 1: Write the failing test**

```js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('homepage promotes phone-first pre-booking flow', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /Call 877-JUNKY-JO/);
  assert.match(source, /Pre-Book a Job/);
  assert.match(source, /pre-booking request/i);
  assert.match(source, /phone confirmation/i);
  assert.match(source, /Photos and Videos/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/homepageContent.test.cjs`
Expected: FAIL because the current homepage does not include the new pre-booking CTA and confirmation copy.

- [ ] **Step 3: Implement the homepage redesign**

Update `app/page.js` with structured content arrays, a refreshed hero, compact service cards, work proof media, service area links, reviews, and final CTA.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/homepageContent.test.cjs`
Expected: PASS.

### Task 2: Project Verification

**Files:**
- Modify: `app/page.js`
- Test: `tests/homepageContent.test.cjs`

**Interfaces:**
- Consumes: the redesigned homepage and existing Next.js build.
- Produces: verified homepage changes.

- [ ] **Step 1: Run all tests**

Run: `npm test`
Expected: all Node tests pass.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Next.js build exits successfully.

- [ ] **Step 3: Inspect the diff**

Run: `git diff -- app/page.js tests/homepageContent.test.cjs docs/superpowers/specs/2026-08-05-homepage-redesign-design.md docs/superpowers/plans/2026-08-05-homepage-redesign.md`
Expected: diff only contains homepage redesign, smoke test, and docs for this task.
