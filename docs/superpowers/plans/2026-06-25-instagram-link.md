# Instagram Link Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all four Instagram icons open `https://www.instagram.com/877junkyjo/`.

**Architecture:** Update only the existing Instagram anchor URLs in the shared header and footer components. Add a focused Node test that reads both components, verifies exactly four links use the approved URL, and rejects the obsolete profile URL.

**Tech Stack:** Next.js, React, Node.js built-in test runner

---

## File Structure

- Create `test/instagram-links.test.mjs`: source-level regression test for all Instagram icon links.
- Modify `app/components/Header.js`: update desktop and mobile Instagram anchors.
- Modify `app/components/Footer.js`: update desktop and mobile Instagram anchors.
- Modify `package.json`: expose the Node test runner through `npm test`.

### Task 1: Add the Instagram Link Regression Test

**Files:**
- Create: `test/instagram-links.test.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add the test script**

Add this entry to `package.json` under `scripts`:

```json
"test": "node --test"
```

- [ ] **Step 2: Write the failing test**

Create `test/instagram-links.test.mjs`:

```javascript
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const files = [
  'app/components/Header.js',
  'app/components/Footer.js',
]

test('all Instagram icons link to the 877junkyjo profile', async () => {
  const source = (
    await Promise.all(files.map((file) => readFile(file, 'utf8')))
  ).join('\n')

  const approvedUrl = 'https://www.instagram.com/877junkyjo/'
  const obsoleteUrl = 'https://www.instagram.com/junkyjoremoval/'
  const approvedMatches = source.match(
    /https:\/\/www\.instagram\.com\/877junkyjo\//g
  ) ?? []

  assert.equal(approvedMatches.length, 4)
  assert.equal(source.includes(obsoleteUrl), false)
})
```

- [ ] **Step 3: Run the test and verify it fails**

Run:

```powershell
npm test
```

Expected: FAIL because the approved URL appears zero times and the old URL is still present.

- [ ] **Step 4: Commit the failing test**

```powershell
git add -- package.json test/instagram-links.test.mjs
git commit -m "test: cover Instagram profile links"
```

### Task 2: Update All Instagram Icon Links

**Files:**
- Modify: `app/components/Header.js`
- Modify: `app/components/Footer.js`
- Test: `test/instagram-links.test.mjs`

- [ ] **Step 1: Replace the two header URLs**

In `app/components/Header.js`, replace both instances of:

```text
https://www.instagram.com/junkyjoremoval/
```

with:

```text
https://www.instagram.com/877junkyjo/
```

- [ ] **Step 2: Replace the two footer URLs**

In `app/components/Footer.js`, replace both instances of:

```text
https://www.instagram.com/junkyjoremoval/
```

with:

```text
https://www.instagram.com/877junkyjo/
```

- [ ] **Step 3: Run the focused test**

Run:

```powershell
npm test
```

Expected: PASS with one passing test.

- [ ] **Step 4: Run the production build**

Run:

```powershell
npm run build
```

Expected: Next.js completes the production build successfully.

- [ ] **Step 5: Confirm only intended application files changed**

Run:

```powershell
git diff -- app/components/Header.js app/components/Footer.js
git status --short
```

Expected: Only the four Instagram URLs change in the application components; the pre-existing `app/service-areas/page.js` modification remains untouched.

- [ ] **Step 6: Commit the implementation**

```powershell
git add -- app/components/Header.js app/components/Footer.js
git commit -m "Update Instagram profile links"
```
