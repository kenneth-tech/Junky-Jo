const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const assert = require('node:assert/strict')

test('desktop header nav uses roomier spacing between links', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'components', 'Header.js'), 'utf8')

  assert.match(source, /<nav className="hidden gap-7 text-sm text-white md:flex">/)
  assert.doesNotMatch(source, /<nav className="hidden gap-5 text-sm text-white md:flex">/)
})

test('mobile header menu opens as a full-height sidebar drawer', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'components', 'Header.js'), 'utf8')

  assert.match(source, /fixed inset-0 z-\[60\] bg-black\/70/)
  assert.match(source, /fixed right-0 top-0 z-\[70\] flex h-dvh w-\[min\(86vw,380px\)\]/)
  assert.match(source, /aria-label="Close mobile menu"/)
  assert.match(source, /aria-label="Mobile navigation"/)
  assert.match(source, /document\.body\.style\.overflow = 'hidden'/)
  assert.doesNotMatch(source, /animate-slideDownFadeIn/)
})

test('mobile sidebar has opening animations for drawer and backdrop', () => {
  const headerSource = fs.readFileSync(path.join(process.cwd(), 'app', 'components', 'Header.js'), 'utf8')
  const cssSource = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8')

  assert.match(headerSource, /animate-mobile-menu-backdrop/)
  assert.match(headerSource, /animate-mobile-sidebar-open/)
  assert.match(cssSource, /@keyframes mobileSidebarOpen/)
  assert.match(cssSource, /@keyframes mobileMenuBackdrop/)
  assert.match(cssSource, /\.animate-mobile-sidebar-open/)
  assert.match(cssSource, /\.animate-mobile-menu-backdrop/)
})
