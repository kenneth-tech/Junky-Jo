const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const assert = require('node:assert/strict')

test('booking hero title stays on one line in mobile layout', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'book', 'page.js'), 'utf8')
  const heroSection = source.slice(
    source.indexOf('{/* HERO */}'),
    source.indexOf('{/* FORM */}')
  )

  assert.match(heroSection, /Schedule a Pre-Booking Call/)
  assert.match(heroSection, /whitespace-nowrap/)
  assert.match(heroSection, /text-xl/)
  assert.match(heroSection, /min-\[380px\]:text-2xl/)
  assert.match(heroSection, /sm:text-5xl/)
})

test('booking form intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'book', 'page.js'), 'utf8')
  const formIntro = source.slice(
    source.indexOf('{/* FORM */}'),
    source.indexOf('{submitted &&')
  )

  assert.match(formIntro, /<div className="mb-8 text-center sm:text-left">/)
  assert.match(formIntro, /mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start/)
  assert.match(formIntro, /<h2 className="mb-4 text-3xl font-bold sm:text-4xl">Pre-Booking Form<\/h2>/)
  assert.match(formIntro, /<p className="mx-auto text-lg leading-relaxed text-gray-600 sm:mx-0">/)
  assert.doesNotMatch(formIntro, /<div className="mb-8">\s*<div className="mb-3 flex items-center gap-3 font-semibold text-orange-600">/)
})

test('booking page uses a custom styled job type selector', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'book', 'page.js'), 'utf8')

  assert.doesNotMatch(source, /<select\s+name="jobType"/)
  assert.match(source, /aria-haspopup="listbox"/)
  assert.match(source, /role="listbox"/)
  assert.match(source, /name="jobType"/)
  assert.match(source, /Select a job type/)
})

test('booking page job type selector has a mobile-friendly menu layout', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'book', 'page.js'), 'utf8')

  assert.match(source, /relative z-20 mt-2 max-h-64 w-full overflow-y-auto/)
  assert.match(source, /sm:absolute sm:max-h-72/)
  assert.match(source, /py-3\.5 text-base sm:py-3/)
})

test('booking page uses a custom responsive calendar for preferred date', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'book', 'page.js'), 'utf8')

  assert.doesNotMatch(source, /type="date"\s+name="preferredDate"/)
  assert.match(source, /aria-haspopup="dialog"/)
  assert.match(source, /role="dialog"/)
  assert.match(source, /name="preferredDate"/)
  assert.match(source, /grid grid-cols-7 gap-1/)
  assert.match(source, /relative z-20 mt-2 w-full rounded-xl/)
  assert.match(source, /sm:absolute/)
})

test('booking page uses a custom styled preferred time selector', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'book', 'page.js'), 'utf8')

  assert.doesNotMatch(source, /<select\s+name="preferredTime"/)
  assert.match(source, /id="preferred-time-button"/)
  assert.match(source, /aria-labelledby="preferred-time-label preferred-time-button"/)
  assert.match(source, /name="preferredTime"/)
  assert.match(source, /Select a time/)
  assert.match(source, /relative z-20 mt-2 max-h-64 w-full overflow-y-auto/)
  assert.match(source, /Morning/)
  assert.match(source, /First available/)
})
