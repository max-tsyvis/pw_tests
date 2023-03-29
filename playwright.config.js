// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 45 * 1000,
  expect: {
    timeout: 50000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html']],
  globalSetup: './authentification',
  use: {
    baseURL: 'https://qa.wmc.14west.io',
    storageState: './authState.json',
    headless: false,
    actionTimeout: 0,
    screenshot: 'on',
    trace: 'on-first-retry',
    testIdAttribute: 'id',
  }

});