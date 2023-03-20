// @ts-check
const { test, expect } = require('@playwright/test');

test('Authenticate', async ({ page }) => {
  await page.goto('/platform/organization');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.screenshot({ path: 'screenshot.png' });
});
