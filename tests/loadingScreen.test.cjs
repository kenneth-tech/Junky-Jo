const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

test('loading screen does not depend on sessionStorage during initial render', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'components', 'LoadingScreen.js'), 'utf8')

  assert.match(source, /const \[isLoading, setIsLoading\] = useState\(true\)/)
  assert.doesNotMatch(source, /useState\(\(\) =>/)
  assert.doesNotMatch(source, /return !sessionStorage\.getItem\('pageLoaded'\)/)
})

test('loading screen hides if the document has already loaded', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'components', 'LoadingScreen.js'), 'utf8')

  assert.match(source, /document\.readyState === 'complete'/)
  assert.match(source, /setTimeout\(handleLoadComplete, 0\)/)
  assert.match(source, /try \{/)
  assert.match(source, /catch \{/)
})
