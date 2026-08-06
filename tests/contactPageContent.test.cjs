const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const assert = require('node:assert/strict')

test('contact estimate header is centered on desktop and mobile', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'contact', 'page.js'), 'utf8')
  const headerSection = source.slice(
    source.indexOf('{/* PAGE HEADER */}'),
    source.indexOf('{/* CONTACT FORM */}')
  )

  assert.match(headerSection, /<div className="mx-auto max-w-6xl text-center">/)
  assert.match(headerSection, /<p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl">/)
  assert.doesNotMatch(headerSection, /<div className="max-w-6xl mx-auto">/)
})
