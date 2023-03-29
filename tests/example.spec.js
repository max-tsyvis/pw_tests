// @ts-check
const { test, expect, chromium } = require('@playwright/test');

test('Login', async ({ page }) => {

  // const browser = await chromium.launch();
  // const context = await browser.newContext({ storageState: './authState.json' });
  // const page = await context.newPage();
  await page.goto('/platform/organization');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.screenshot({ path: 'screenshot.png' });

});
