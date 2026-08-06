# Service Areas Coverage Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the plain Service Areas page with a polished coverage-map style page.

**Architecture:** Keep the implementation inside `app/service-areas/page.js` as a client component with local arrays for primary areas, regional groups, coverage stats, and process highlights. Use Tailwind utility classes and lucide icons only.

**Tech Stack:** Next.js App Router, React, Tailwind CSS, lucide-react.

## Global Constraints

- Do not add a map API dependency.
- Keep the page responsive on mobile and desktop.
- Fix the WhatsApp link attributes.
- Preserve existing Header and Footer components.

---

### Task 1: Replace Service Areas Page

**Files:**
- Modify: `app/service-areas/page.js`

**Interfaces:**
- Produces the default `ServiceAreas` React component.

- [ ] Replace static area lists with region data arrays.
- [ ] Add a map-like visual coverage panel.
- [ ] Add primary area cards and grouped extended-area chips.
- [ ] Add a final CTA with WhatsApp and contact-page actions.
- [ ] Run `npm run build`.
- [ ] Run `npm test`.
