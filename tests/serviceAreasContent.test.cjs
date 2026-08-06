const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const assert = require('node:assert/strict')

test('service areas hero centers intro copy on mobile and desktop', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')

  assert.match(source, /<div className="text-center">/)
  assert.match(source, /mb-4 flex items-center justify-center gap-3 font-semibold text-orange-300/)
  assert.match(source, /mb-8 mx-auto max-w-2xl text-lg leading-relaxed text-white\/80/)
  assert.doesNotMatch(source, /md:text-left/)
  assert.doesNotMatch(source, /md:justify-start/)
  assert.doesNotMatch(source, /md:mx-0/)
})

test('service areas hero keeps action buttons on one row on mobile', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')
  const heroActions = source.slice(
    source.indexOf('<div className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-row sm:justify-center">'),
    source.indexOf('</section>')
  )

  assert.match(heroActions, /mx-auto grid max-w-xl grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-row sm:justify-center/)
  assert.match(heroActions, /px-3 py-3 text-sm font-bold text-white/)
  assert.match(heroActions, /whitespace-nowrap/)
  assert.doesNotMatch(heroActions, /flex flex-col gap-3 sm:flex-row/)
})

test('service areas hero does not render the coverage map card', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')

  assert.doesNotMatch(source, /Coverage Map/)
  assert.doesNotMatch(source, /Local routes/)
  assert.doesNotMatch(source, /coverageStats/)
  assert.doesNotMatch(source, /min-h-\[420px\].*bg-gray-900/)
})

test('service areas primary intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')
  const primarySection = source.slice(
    source.indexOf('{/* PRIMARY AREAS */}'),
    source.indexOf('<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">')
  )

  assert.match(primarySection, /<div className="mb-10 mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">/)
  assert.match(primarySection, /mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start/)
  assert.match(primarySection, /<h2 className="mb-4 text-3xl font-bold sm:text-4xl">Primary Service Areas<\/h2>/)
  assert.match(primarySection, /<p className="mx-auto text-lg leading-relaxed text-gray-600 sm:mx-0">/)
  assert.doesNotMatch(primarySection, /<div className="mb-10 max-w-3xl">\s*<div className="mb-3 flex items-center gap-3 font-semibold text-orange-600">/)
})

test('service areas extended intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')
  const extendedSection = source.slice(
    source.indexOf('{/* EXTENDED AREAS */}'),
    source.indexOf('<div className="grid gap-5 lg:grid-cols-3">')
  )

  assert.match(extendedSection, /<div className="mb-10 mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">/)
  assert.match(extendedSection, /mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start/)
  assert.match(extendedSection, /<h2 className="mb-4 text-3xl font-bold sm:text-4xl">Extended Service Areas<\/h2>/)
  assert.match(extendedSection, /<p className="mx-auto text-lg leading-relaxed text-gray-600 sm:mx-0">/)
  assert.doesNotMatch(extendedSection, /<div className="mb-10 max-w-3xl">\s*<div className="mb-3 flex items-center gap-3 font-semibold text-orange-600">/)
})

test('service areas confirmation intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')
  const confirmationSection = source.slice(
    source.indexOf('{/* HOW IT WORKS */}'),
    source.indexOf('<div className="grid gap-5 md:grid-cols-3">')
  )

  assert.match(confirmationSection, /<div className="mb-10 mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">/)
  assert.match(confirmationSection, /mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start/)
  assert.match(confirmationSection, /<h2 className="mb-4 text-3xl font-bold sm:text-4xl">How We Confirm Your Area<\/h2>/)
  assert.doesNotMatch(confirmationSection, /<div className="mb-10 max-w-3xl">\s*<div className="mb-3 flex items-center gap-3 font-semibold text-orange-600">/)
})

test('service areas final CTA is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')
  const ctaSection = source.slice(
    source.indexOf('<section className="bg-orange-600 px-4 py-16 text-white sm:py-20">'),
    source.indexOf('<Footer />')
  )

  assert.match(ctaSection, /<div className="text-center sm:text-left">/)
  assert.match(ctaSection, /mb-3 flex items-center justify-center gap-3 font-semibold text-orange-100 sm:justify-start/)
  assert.match(ctaSection, /<h2 className="mb-4 whitespace-nowrap text-xl font-bold leading-tight min-\[380px\]:text-2xl sm:whitespace-normal sm:text-4xl">Send us your ZIP or neighborhood\.<\/h2>/)
  assert.match(ctaSection, /max-w-2xl text-lg leading-relaxed text-white\/90 sm:max-w-2xl/)
  assert.match(ctaSection, /flex flex-col items-center gap-3 sm:flex-row sm:items-stretch lg:flex-col/)
  assert.doesNotMatch(ctaSection, /<h2 className="mb-4 text-3xl font-bold sm:text-4xl">Send us your ZIP or neighborhood\.<\/h2>/)
  assert.doesNotMatch(ctaSection, /<div>\s*<div className="mb-3 flex items-center gap-3 font-semibold text-orange-100">/)
})

test('primary service area cards include cursor-follow animation styling', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'service-areas', 'page.js'), 'utf8')

  assert.match(source, /handlePrimaryAreaMouseMove/)
  assert.match(source, /--cursor-x/)
  assert.match(source, /--cursor-y/)
  assert.match(source, /radial-gradient\(circle at var\(--cursor-x, 50%\) var\(--cursor-y, 50%\)/)
  assert.match(source, /group-hover:opacity-100/)
  assert.match(source, /group-hover:scale-110/)
})
