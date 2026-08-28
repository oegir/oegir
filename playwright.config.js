const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './test',
  testMatch: '**/*.spec.js',
  use: {
    baseURL: 'http://127.0.0.1:8001',
    headless: true
  },
  webServer: {
    command: 'node test/server.js',
    url: 'http://127.0.0.1:8001/index.html',
    reuseExistingServer: true
  }
})
