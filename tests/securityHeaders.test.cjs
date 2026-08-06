const assert = require('node:assert/strict')
const test = require('node:test')

function loadConfigForEnvironment(nodeEnv) {
  const originalNodeEnv = process.env.NODE_ENV
  process.env.NODE_ENV = nodeEnv
  delete require.cache[require.resolve('../next.config.js')]
  const config = require('../next.config.js')
  process.env.NODE_ENV = originalNodeEnv
  delete require.cache[require.resolve('../next.config.js')]
  return config
}

async function getCspForEnvironment(nodeEnv) {
  const config = loadConfigForEnvironment(nodeEnv)
  const headerConfig = await config.headers()
  const headers = headerConfig[0].headers
  return headers.find((header) => header.key === 'Content-Security-Policy').value
}

test('development CSP allows unsafe-eval for the Next.js React dev overlay', async () => {
  const csp = await getCspForEnvironment('development')

  assert.match(csp, /script-src 'self' 'unsafe-inline' 'unsafe-eval'/)
})

test('production CSP does not allow unsafe-eval', async () => {
  const csp = await getCspForEnvironment('production')

  assert.match(csp, /script-src 'self' 'unsafe-inline'/)
  assert.doesNotMatch(csp, /'unsafe-eval'/)
})
